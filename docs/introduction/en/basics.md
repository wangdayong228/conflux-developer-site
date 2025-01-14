---
id: conflux_basics
title: Basics
custom_edit_url: https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/introduction/en/basics.md
keywords:
  - conflux
  - basics
---
In an overview, the Conflux world-state consists of a list of accounts and the associated account states, and the global state is updated via transactions. The Conflux blockchain stores all processed transactions in blocks, together with necessary information in block headers which enables a total ordering of all blocks. Below are some concepts you should know about.

## CFX
To incentivize the maintenance of the Conflux network and charge users for consumption of resources, Conflux has a native currency called the Conflux coin, simply denoted by CFX for short. The smallest subdenomination is denoted by Drip, in which all values processed in Conflux are integers. One Conflux is defined as 10^18 Drip. Frequently used subdenominations of Conflux are listed below:

| Multiplier (in Drip) | Name   |
| ------------- |:-------------:|
| 10^0          | Drip          |
| 10^9          | GDrip         |
| 10^12         | uCFX          |
| 10^18         | Conflux(CFX)  |

## chainId & networkId
`chainId` is a number indicating where a transaction is intended to be executed. It is used to prevent transaction replay attacks.
The chainId of Conflux is a constant, currently:

* mainnet: `1029`
* testnet: `1`

`networkId` is used to distinguish between blockchains at the network layer. Currently Conflux mainnet/testnet's `networkId` is same as `chainId`.
You can get both of these from the `cfx_getStatus` RPC method.

## Address
Each account in Conflux is associated with a pair of public key and the private key (pubkey,prikey), which can be identified by an `address`. Addresses are a 160-bit identifier, which is the concatenation of a 4-bit `type indicator` and a 156-bit `digest` of the associated public key.

Currently there are three types of `type indicator`:
* [0001] for normal accounts (a.k.a. non-contract accounts)
* [1000] for (Solidity) contracts
* [0000] for internal contracts (a.k.a. “precompiled contracts”)

Hex-encoded, the type indicator becomes::

* `1` normal address
* `8` contract address
* `0` internal contract address

Addresses can be expressed as hex-encoded strings like this: 0x1292d4955bb47f5153b88ca12c7a9e4048f09839. However, addresses in this format are easy to mix up with addresses on Ethereum and some other blockchains, which might lead to asset loss.
To address this issue, Conflux introduced a new base32-encoded address format in [CIP37](https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-37.md). For instance, the address above can be converted to the following base32 address: cfx:aakkfzezns4h8ymx1cgmcnd4x3aev6e2hexz250ym5. The new format contains a network prefix which makes it easy to distinguish Conflux addresses from other networks.

It is important to understand that both addresses correspond to the same 160-bit identifier and thus to the same account. Each hex-address can be converted to a corresponding base32-address (and vice versa).
CIP37 address is supported by `Conflux-rust` from version `v1.1.1`.

Note: mainnet and testnet addresses use different address prefixes:
* mainnet: `cfx`
* testnet: `cfxtest`

## Account
The Conflux global state is described in an account model, with the basic storage component called an account. Every actor, which is either a person or an entity that is able to interact with the Conflux world, has its necessary information stored in an account as a key/value pair (address, state) of address and corresponding states.

The account state consists of five components (`basic`, `code`, `storage`, `deposit`, `vote`). The basic state is very important, it consists of the following fields:

* `nonce`: A scalar counter recording the number of previous activities initiated by this account. For example, the number of transactions send from account's address, or the number of contract-creations if the account represents a smart contract.
* `balance`: A scalar value equal to the number of Drip owned by this account. 
* `codeHash`: The hash of the EVM code that gets executed when address receives a message call. Unlike other fields, it
is immutable once established. The actual code (a series of EVM instructions) is also stored in the global state. 
* `stakingBalance`: A scalar value equal to the number of Drip staked. 
* `storageCollateral`: A scalar value equal to the number of Drip used as collateral for storage, which will be returned to the account's balance if the corresponding storage is released. 
* `accumulatedInterestReturn`: A scalar value equal to the number of Drip in accumulated interest return. 
* `admin`: The address of the administrator
* `sponsorInfo`: The sponsor information contains five components: `sponsor for gas`, `sponsor for collateral`, `sponsor gas
limit`, `sponsor balance for gas` and `sponsor balance for collateral`. 


## Transactions
A Conflux transaction is a single instruction composed by an external actor with a Conflux account, and this instruction is cryptographically signed using the sender account's private key. The authentication key, i.e. the sending account’s associated public key, is also included in the transaction for verification.

### Transaction Types
There are two types of transactions depending on the “destinations”:
1. to an account address: these are normal transactions that may transfer value and/or result in message calls, known as
action transactions;
2. to “nowhere”: these transactions are used to create new contracts, known as contract creation transactions.

### Transaction fields:
Both types of transactions share the following common fields:
* `from`: An address indicating the transaction sender.
* `to`: An address indicating the transaction receiver.
* `nonce`: A scalar value equal to the number of previously sent transactions.
* `gasPrice`: A scalar value indicating the number of Drip to be paid per unit of gas that is consumed as a result of the
execution of transaction.
* `gas`: A scalar value indicating the total amount of gas paid for the cost of the execution of transaction. This is paid up-front,
before any actual computation is done, and may not be increased or refunded later. The refundable amount of gas is the minimum of the legitimately remaining gas and a quarter of the `gas`. It is
the transaction sender’s responsibility to avoid any extravagance caused by an unnecessarily high gasLimit.
* `value`: A scalar value equal to the amount of Drip that the transactions sender wants to transfer to the recipient, i.e. the
account specified in transaction or the newly created contract. 
* `storageLimit`: A scalar value indicating the maximum increment of storage used in the execution of the transaction, measured in
bytes.
* `epochHeight`: A scalar value specifying the range of epochs where transaction can be executed. Such that transaction can only be executed between the epochs of [Te − 100000, Te + 100000].
* `chainId`: A scalar value indicating the ID of the chain where the transaction is intended to be executed.
* `data`: A byte array specifying the input data of the message call to an existing contract (or the contract code if it is a contract creation transaction). 
* `v`, `r`, `s`: Corresponding fields of the recoverable ECDSA signature of transaction.


### Lifecycle of a transaction
A transaction is composed by external account, and sent to a node by calling its `cfx_sendRawTransaction` RPC method. After sending, the transaction will go through several different states:

1. `Accepted by the RPC`: After the provider received the cfx_sendRawTransaction RPC call, it would attempt to do basic verification and `insert it into the transaction pool`. If there is an obvious error of the transaction, e.g., RLP decoding error, signature verification error, it will be rejected immediately. Otherwise, it will be inserted into the transaction pool and wait to be mined, and the RPC will return a transaction hash of the transaction.
2. `Wait to be mined`: A Conflux miner will choose valid transactions from its pool, whose nonce matches the `expected one` and the balance is enough to pay the `value + gas * gasPrice + storage_limit * (10^18/1024)` that will be included in the new block. If a transaction does not meet these two requirements, then it will get stuck in the transaction tool.
3. `Mined`: After mining, a tx will not be executed immediately, Conflux has a deferred execution mechanism. Nodes that receive the new block are only guaranteed to execute it 5 epochs later.
4. `Executed (success or failure)`: Not all executed transactions have succeeded, some have failed. You can check this out by the transaction's `status` or transaction receipt's `outcomeStatus`. `0` means success, `1` means failure.
5. `Confirmed`: If a transaction has been executed successfully, it may still be reverted, possibly due to a pivot chain reorganization. A transaction's status is only finalized once it has been confirmed. You can determine whether a transaction is confirmed by comparing its epoch number to the latest confirmed epoch number.