---
id: node_config_example
title: Fullnode Config File
custom_edit_url: https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/apis/en/papers.md
keywords:
  - config
---

Below is a mainnet node configuration file, it contains all the supported options along with some explanations in the comments. You can also find the latest version at [conflux-rust Github repository's run folder](https://github.com/Conflux-Chain/conflux-rust/tree/master/run). The file name is `tethys.toml` or `testnet.toml`.

```yaml
# bootnodes is a list of nodes that a conflux node trusts, and will be used to sync the blockchain when a node starts. 
# The value is a string divided by comma without space, and every entry is a node
# A node is identified by cfxnode://NODEID@PUBLICIP:PORT
# By default, no bootnodes are provided. What's provided here is a list of nodes that Conflux Team maintains across the world.

bootnodes="cfxnode://dc79bc70833e797ba41eff5bda67c0484abca4918ef38289b5f96acd3daa890eadc85d46fc71f250a8ac51b0c4ab70b3812b1ed3c8f10a9e996b6663be34f1f1@47.88.79.174:32323,cfxnode://25265e1aa470d9d8667947820c4830a64e9f9678d6cb23ecde91e0447527f4926257b9637923a305ce91e15c929ed28164e6c32b76213764eb4a9624120ae1d7@39.97.180.246:32323,cfxnode://2b72adc3f52a80945db10fa35c3f6d02c73f65ff98b4a9eae4f7b244e8a51f01690e7dcef7a30bfb67fb07fcb2949e67c27487169623d40f6a9e55a8d04ca34f@39.107.143.220:32323,cfxnode://5da942ac58e392e9f68784876a1800ffe5756f8498aa1a7a9a869fe9370c2e838a114dfce33fff9674633700a0094aed8b46722fb6b03619842602a2473223de@39.97.170.199:32323,cfxnode://28d3cdf07b7deb41bb52dee0a952fc599f46f6b89cc513ecfd1020d5a66e73e7cfe68543e64962aefbcae7123a6c390a43144f5900f0bc181c3c89ffdf9ff81b@39.97.225.254:32323,cfxnode://9991bd3f5d0e614a3fcc8640fdfcbefbc0e95de7fa68baff4cb95f8614fa162b080a497bca5037196920bf68ed2554605f29b38ba2390b4bc8de91dac91eab34@35.177.114.1:32323,cfxnode://f94343e4c806b2968c5e4bf4cbc49736d04af03fab4b797bc11aea2af2cb23d706d1d9c5dfae430a2df1d7fe6a6a988aff43c50898dc087161e51fa69d603997@13.69.186.42:32323,cfxnode://ce6c447f1e6f8e43e07f9ee8d5b49180663ad934f7fffa0db654e69522a234628f966fc8ea0285c4357285885f188804ae09b5303a6c8e627149c2a41d5156a3@52.68.192.218:32323,cfxnode://012d0f7e59f62220e2a90e458cf0d65e5690d09dad59ce05f03f5878a7142bef9f412decdbefa7716e8331e94d68f05c2ce943db4ffa5440e496f2130d3feb50@23.96.108.96:32323,cfxnode://4eb526348481292722188664543d3dc80a5f2a35b578b2d72d54293ccc400fa87efb69e728dc56ef924be708ec8b33fa3648eca2a81e9e95f44cd0b3252fea77@34.201.56.239:32323,cfxnode://72d0736cc9fffc21306f097b8ce5099f62d72ec05bd94ceff5bd6ec6783801f2f7ad17a16f57499243925ed9633654081d3b4cb95bab7474144e92ffe39c9cc4@34.216.73.138:32323,cfxnode://7e2e4918d3aff819afdb8782c13544ea63193d82d9529dfbab3efb101754b322fc161c771a784e1b0420da8f78dbb127fbac24d1d626b634b462542ad8953bd7@52.231.28.50:32323,cfxnode://448839f2900f4a22ce611bd66a4fc93f8fa02a4b185679ba89078c0bf9c6c9328d3df77c4c8451fca12f2a8daab53b8f38762c14d6f24ba6897a9ddd79988474@18.228.10.237:32323,cfxnode://54e1d46b03527d79986e3c884e6ef6cec09cfc548f7ad20d8f0c996396cbe04bead6f689822eae2ab78b08e2be360371679d94f41fc75645ae166c557c3cd7e4@15.185.81.4:32323,cfxnode://5ec498fd7c8ff5389024f6a6e80ed75539c89dda8e655cae48c8ae883590acb940d856a601e7f788d5a2cf417eb5dee0fa9ae6c0a2ac8e6d8253cb7ac986a651@18.163.111.230:32323,cfxnode://8949669b26e015acd6c3e1ba5f87e2a7242a8611eec224428d5553005e45b4c6b2e352721be6334a445340441c8d6f8dfeab20472fbb0ce9733c293f0c1c781c@13.67.73.51:32323,cfxnode://3a25050e4d896b22a265170a8795ae5b22c48822a81c0c4a43fd3856f979b03c20abadaec90ffd083abac278cfc38087ef6902b1825b7f7c2fcc639f9e931bfb@13.209.20.158:32323,cfxnode://af63f3129791ab9afb1f74aeb0c9cf5931f8fb18f905f783c4bc7dff0421bfc83acc56ff41e3904bf0ad0477fb13d06cacbb8f337dcab10b9ae7efe787c02809@13.112.176.199:32323,cfxnode://c2b7613cdece4dd73f5107ab77c5c30663ac67366177bd4d4349b882e64cd6f62dd379d31e534b168421a76d3e84b9213894e58687b8c659718ce97d7a2148e7@50.18.129.125:32323,cfxnode://4c0a46dee4e1d2db9e0e1ce935f41edccfe0602efa7823713d93aea55bb5174ca957fcd27e1aa1b4d8d020565183ebc53674a73eb800ecc741d7aa853ab845eb@18.197.60.158:32323,cfxnode://3ec541c53224053294900568366e2c89851ff83f23aa45c8cafd3eb250cf1202afdf0bb62966e013176861c9165b6871e3cc522011074b20be863a43951af91c@35.178.198.71:32323,cfxnode://f31e7d2fdcffa1b25a6a6c9c1357a6804f8f426caf81ccda16291200055c46affdbfbfebebcca996ea7861631c9a0b11d70f07afeed71efa0a4f12aa8acfb55e@54.255.160.38:32323,cfxnode://49ff58db6b4c5f92c2145e69ea0625134cbe35885f0e5979191ba9c67e4c9374234ed7fbeb65f82d4d197568110a4f100f078bfbac896f391b362bec77be19ea@212.64.63.38:32323,cfxnode://97497107e94ac463f6bad526d74e0058d46154e97cbf758edaf3d360e2f3347ae5946ca337eb0d201df8f625e7ae5bfc32e8394d2ce37bd2dc35fa5a4bcecd01@8.131.69.64:32323,cfxnode://c22ad0736f5cc2cc3b11ce5f43345213c2e44994dfaa5e3b0cebe8bd9c78cc52e1a22949ff5953aea80476f648e42b502172e04629c172f4400a0af4caf97efb@8.131.68.192:32323,cfxnode://04cee414977f68a0c2f0215199dde4ec1c27350e447ea855ce000054336f4ccb1c43f0c5ebe8172ad51c7d7b88ac98c037a85ae949e79734449ac38a23fd1d60@212.64.62.252:32323,cfxnode://f1750b818c5828fc5f22667f4b45d4a39b17a1cf40f71ae8f74b6195485a93bf16892a3785bda36132ebae64b83b91b216eaccb7a02185a01f37c7ad89c513ad@101.132.133.254:32323,cfxnode://72a21ec3d2d7c5545b4a46656eaca6ab4ec3ac85628f665bd205e7c52273d345d1583efface277b967fca963a81fbf8b7a81ae97f0a46234cd5fb34853c95fd2@47.101.39.91:32323,cfxnode://b7aeba1f1b2b3e5dfdc7ac93df4281a440ccbdc89894444e094f15242ffa1578d90f9fd447b899be89a57542616e26a82180bd2bfb3b81f82a4dffdfe180f44e@8.210.110.149:32323,cfxnode://07faaf8be8bff4243b496363fb02bd0a21be97e291febcd9aabb29996de90d0a10065f3383beff09f05cb0bdfaa9655d90550c8abcbf97be0658ce6efd8f9b64@47.254.67.249:32323"

# Set the node type to Full node, Archive node, or Light node.
# Possible values are "full", "archive", or "light".
# The command line parameter `--full`, `--archive`, or `--light` will overwrite this parameter.
#
# node_type = "full"

# Some preset develepment configurations.
# It should not be set in production environment.
#
# For both `test` and `dev` modes, we will
#     * Set initial difficulty to 4
#
# `test` mode is for Conflux testing and debugging, we will
#     * Add latency to peer connections
#     * Skip handshake encryption check
#     * Skip header timestamp verification
#     * Handle NewBlockHash even in catch-up mode
#     * Allow data propagation test
#     * Allow setting genesis accounts and generate tx from secrets
#
# `dev` mode is for users to run a single node that automatically
#     generates blocks with fixed intervals
#     * Open port 12535 for ws rpc if `jsonrpc_ws_port` is not provided.
#     * Open port 12536 for tcp rpc if `jsonrpc_tcp_port` is not provided.
#     * Open port 12537 for http rpc if `jsonrpc_http_port` is not provided.
#     * generate blocks without PoW (either after receiving a transaction or
#       in fixed period, see ``dev_block_interval_ms'')
#     * Skip catch-up mode even there is no peer
#
# mode = ""

# If you want to setup a single node running Conflux for development. You should
# COMMENT the bootnodes setting and you should use the following parameters:
#
# mode = "dev"

# ``dev_block_interval_ms'' controls the mining rate in the dev mode.
#
# If it's not set, blocks will only be generated after receiving a transaction.
# Otherwise, blocks are automatically generated every ``dev_block_interval_ms'' ms.
#
# dev_block_interval_ms = 250

# ----------------- Mining Configuration -----------------

# `mining_author` is the address to receive mining rewards.
# If set, `mining_type` will be "stratum" by default.
# The value is a 40-digit hex string or a valid CIP-37 base32 address.
# By default, the value is not set.
#
# mining_author="cfx:aarc9abycue0hhzgyrr53m6cxedgccrmmyybjgh4xg"

# `mining_type` controls whether the mining process goes through the
# stratum protocol, uses CPU-mining, or disable mining.
# Possible values are "stratum", "cpu", and "disable".
# The default value is "stratum" if `mining_author` is set.
# If the value is set and not "disable", `mining_author` must be set.
#
# mining_type = "stratum"

# Listen address for stratum
#
# stratum_listen_address = "127.0.0.1"

# Port for stratum.
#
# stratum_port = 32525

# Window size for PoW manager
#
# pow_problem_window_size = 1

# Secret key for stratum.
# The value is 64-digit hex string.
# If not set, the RPC subscription will not check the authorization.
#
# stratum_secret = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"

# -------------- Log-related Configuration -------------

# `log_conf` the path of the log4rs configuration file. The configuration in the file will overwrite the value set by `log_level`.
# By default, the value is not set.
#
log_conf="log.yaml"

# `log_file` is the path of the log file"
# If not set, the log will only be printed to stdout, and not persisted to files.
# By default, the value is not set.
#
# log_file="conflux.log"

# `log_level` is the printed log level.
# The value should be one of "error", "warn", "info", "debug", "trace", "off"
#
# log_level="info"

# -------------- Network Configuration -------------

# `public_address` is the address of this node used for other nodes to connect to.
# If not set, the process will try to find out the public IP with best effort, and use `tcp_port` as public port.
# However, it's HIGHLY RECOMMENDED to set the value manually, especially for machines with IP translated by NAT.
#
# public_address="1.1.1.1"

# `tcp_port` is the TCP port that the process listens for P2P messages. The default is 32323.
#
# tcp_port=32323

# `public_tcp_port` is the public TCP port that other nodes should connect to. It might be different from 
# the tcp_port in case the machine is behind a NAT. The default is as same as `tcp_port`.
#
# public_tcp_port=32323

# `udp_port` is the UDP port used for node discovery.
# If not set, it will be the same as `port`.
#
# udp_port=32323

# `jsonrpc_http_keep_alive` is used to control whether to set KeepAlive for rpc HTTP connections.
#
# jsonrpc_http_keep_alive=false

# `jsonrpc_cors` is used to control the rpc domain validation policies.
# The value should be "none", "all", or a list string split by commas without space.
# If not set, domain validation is disabled.
# By default, the values are not set. 
#
# jsonrpc_cors="all"

# The following parameters are the ports for the node to provide rpc service. If not set,
# the node will not start rpc services. By default, the `jsonrpc_local_http_port` is set,
# so as to support the Conflux CLI subcommands. What's provided here is the recommended
# value if you want to start rpc services for other front-end applications.
# Note that to serve transaction-related RPCs, `persist_tx_index` should also be set to `true` or
# the node will only be able to handle very recent transactions.
#
# jsonrpc_ws_port=12535
# jsonrpc_tcp_port=12536
# jsonrpc_http_port=12537
# jsonrpc_local_tcp_port=12538
jsonrpc_local_http_port=12539

# Specify the APIs available through the public JSON-RPC interfaces (HTTP, TCP, WebSocket)
# using a comma-delimited list of API names.
# Possible names are: all, safe, cfx, debug, pubsub, test, trace.
# `safe` only includes `cfx` and `pubsub`.
#
# public_rpc_apis = "safe"

# --------------- Performance-related Network Parameters ----------------------

# Timeout for block-related requests (GetBlock, GetCmpctBlock, GetBlockTxn)
#
# blocks_request_timeout_ms = 20_000

# Time interval to check timeout requests periodically.
#
# check_request_period_ms=5000

# Chunk size for snapshot retrieval
#
# chunk_size_byte = 4194304

# Control whether to demote peers to unstrusted
#
# demote_peer_for_timeout = false

# Maximum network queue size. When reached, the queue will refuse any new data.
# The unit is MB.
#
# egress_queue_capacity = 256

# Minimum queue size for throttling in manner of ratio.
# The unit is MB.
#
# egress_min_throttle = 10

# Maximum queue size for throttling in manner of ratio.
# The unit is MB.
#
# egress_max_throttle = 10

# Time interval to to garbage-collect not block-graph-ready blocks periodically.
#
# expire_block_gc_period_s = 900

# Timeout for header-related requests (GetBlockHeaders)
#
# headers_request_timeout_ms=10_000

# Time interval to broadcast Status as heartbeat periodically
#
# heartbeat_period_interval_ms = 30_000

# Time to maintain transaction digests inflight status.
#
# inflight_pending_tx_index_maintain_timeout_ms = 30_000

# Maximum number of timeout allowed in `timeout_observing_period_s`.
# If the max is reached, the peer will be disconnected.
# `demote_peer_for_timeout` controls if the peer will be demoted in this case.
#
# max_allowed_timeout_in_observing_period = 10

# Maximum number of peers to download state chunks from.
#
# max_download_state_peers = 8

# Maximum number of handshaking sessions at the same time.
#
# max_handshakes = 64

# Maximum number of incoming connections.
#
# max_incoming_peers = 64

# Maximum number of outgoing connections.
#
# max_outgoing_peers = 16

# Maximum number of outgoing connections to archive nodes. 0 represents
# not required to connect to archive nodes. E.g. light node or full node
# need not to connect to archive nodes.
#
# max_outgoing_peers_archive = 0

# Maximum number of inflight requests for each peer.
# If the max is reached, requests will be buffered until inflight requests are responded or timeout.
#
# max_inflight_request_count = 64

# Maximum number of peers to broadcast transaction digests.
#
# max_peers_tx_propagation = 128

# Maximum cached received block size waiting to be processed.
#
# max_unprocessed_block_size_mb = 128

# Minimum number of peers to broadcast transaction digests.
#
# min_peers_tx_propagation = 8

# The time to maintain received transactions to avoid duplicated requests.
#
# received_tx_index_maintain_timeout_ms = 300_000

# Whether to request blocks with public key during catch-up to avoid recovering
# the public keys for transactions.
#
# request_block_with_public = false

# Time interval to broadcast transaction digests periodically.
#
# send_tx_period_ms = 1300

# Timeout for requesting snapshot candidate.
#
# snapshot_candidate_request_timeout_ms = 10_000

# Timeout for requesting snapshot chunks.
#
# snapshot_chunk_request_timeout_ms = 30_000

# Timeout for requesting snapshot manifests.
#
# snapshot_manifest_request_timeout_ms = 30_000

# `throttling_conf` is configuration file in TOML format to throttle RPCs, P2P messages.
# Throttling is enabled only when the parameter specified.
#
# throttling_conf="throttling.toml"

# The time period to observe if a peers has too many timeouts.
#
# timeout_observing_period_s = 600

# Timeout for transaction requests.
#
# transaction_request_timeout_ms = 30_000

# Time to maintain information of sent-out transactions for answering requests.
#
# tx_maintained_for_peer_timeout_ms = 600_000

# --------------- Peer Management Parameters -------------

# Timeout duration for refreshing discovery protocol when there are NOT enough outgoing connections.
#
# discovery_fast_refresh_timeout_ms = 10_000

# Timeout duration for initiating peer connection management.
#
# discovery_housekeeping_timeout_ms = 1_000

# Period between consecutive rounds of the same current discovery process.
#
# discovery_round_timeout_ms = 500

# `enable_discovery` is used to control whether the node will ask its neighbors for new peers
# and whether it will respond to other nodes' discovery requests.
#
# enable_discovery=true

# `netconf_dir` is the directory to store network related persistent data, including `net_key`,
# a list of trusted nodes and a list of untrusted nodes.
#
# By default, it is stored under the directory configured with `conflux_data_dir` with the directory name `net_config`.
# If set, the directory path will not be related to `conflux_data_dir` anymore.
#
# netconf_dir="./blockchain_data/net_config"

# `net_key` is the 256-bit private key to generate a unique node id for this node.
# The value is a 64-digit hex string.
# If not set, the node will try to read from the file "key" under the directory `netconf_dir`.
# If the file is not found, the node will generate a random key.
# By default, the value is not set.
# If a node is restarted, it's suggested to keep the key unchanged.
#
# net_key="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"

# Timeout duration for persisting node table.
#
# node_table_timeout_s = 300

# Connection lifetime threshold for promotion.
#
# node_table_promotion_timeout_s = 259200


# `session_ip_limits` limits the number of TCP connections per IP address or subnet for security consideration.
# Its format is "n1,n2,n3,n4", where n1 is the quota of TCP connections for a single IP address, and n2/n3/n4
# are the quotas for subnet a/b/c. The default value is "1,8,4,2", which means:
#   1) Only 1 TCP connection allowed for a single IP address.
#   2) 8 TCP connections allowd for subnet a, e.g. 192.xxx.xxx.xxx/8
#   3) 4 TCP connections allowd for subnet b, e.g. 192.168.xxx.xxx/16
#   4) 2 TCP connections allowd for subnet c, e.g. 192.169.0.xxx/24
# Note, 0 represents unlimited.
#
# session_ip_limits="1,8,4,2"

# `subnet_quota` limits the number of nodes for a subnet B (e.g. 192.168.xxx.xxx/16) stored in database.
# Nodes in database are used to establish outgoing TCP connections for P2P communications.
# Note, 0 represents unlimited.
#
# subnet_quota=32

# ---------------- Transaction Cache Parameters -----------------

# Whether to persist transaction indices.
# This only needs to be enabled if you want to reliably answer transaction-related RPCs.
#
# persist_tx_index = false

# Time to keep transactions in in-memory transaction cache.
#
# tx_cache_index_maintain_timeout_ms = 300_000

# Maximum number of transactions allowed in the transaction pool.
#
# tx_pool_size = 500_000

# Minimum allowed transaction gas price in the transaction pool.
#
# tx_pool_min_tx_gas_price = 1

# ------------------ Storage Parameters ----------------------

# The number of additional snapshot before the current stable checkpoint that we will maintain.
# If it's 0, all snapshot before stable genesis will be deleted and the states are unavailable.
#
# additional_maintained_snapshot_count = 0

# The additional number of epochs to keep different kinds of data before the current era genesis checkpoint.
# For full/light nodes, the default value is 0, meaning all data before the era checkpoint will be removed.
# For archive nodes, the default behavior is keeping all these data, while setting these parameters manually
# will overwrite the default behavior of corresponding data types and garbage collect them accordingly.
#
# additional_maintained_block_body_epoch_count = 0
# additional_maintained_execution_result_epoch_count = 0
# additional_maintained_reward_epoch_count = 0
# additional_maintained_trace_epoch_count = 0
# additional_maintained_transaction_index_epoch_count = 0

# Time interval to evict old data from in-memory data cache.
#
# block_cache_gc_period_ms = 5_000

# Database type to store block-related data.
# Supported: rocksdb, sqlite.
#
# block_db_type = "rocksdb"

# The root directory of all data (block data, state data, and node database).
#
# conflux_data_dir = "./blockchain_data"

# The directory to store block-related data.
#
# By default, it is stored under the directory configured with `conflux_data_dir` with the directory name `blockchain_db`.
# If set, the directory path will not be related to `conflux_data_dir` anymore.
#
# block_db_dir = "./blockchain_data/blockchain_db"

# Maximum size of cached ledger data (block, receipts, e.t.c.)
# The unit is MB.
#
# ledger_cache_size = 1024

# Rocksdb cache size.
# Only applies if `block_db_type = "rocksdb"`.
#
# rocksdb_cache_size = 128

# Rocksdb compaction file path.
# Only applies if `block_db_type = "rocksdb"`.
# If not set, compaction configuration will be set automatically by rocksdb.
#
# rocksdb_compaction_profile = "./compact_file.conf"

# State storage parameters.
# Refer to the documentation for details.
#
# storage_delta_mpts_cache_recent_lfu_factor=4.0
# storage_delta_mpts_cache_size=20000000
# storage_delta_mpts_cache_start_size=1000000
# storage_delta_mpts_node_map_vec_size=80000000
# storage_delta_mpts_slab_idle_size=200000

# Configure if we strictly check the tx index before garbage collection.
# Setting it to `false` will improve the performance. But if the value is `false`, it's possible that although the
# epoch where a tx is executed should not be garbage collected, the tx index of this tx is removed because it's packed
# in an already garbage collected epoch.
#
# strict_tx_index_gc = true

# The epoch number where we want to download the state and start re-executing transactions.
# For full nodes, if the value is not set, the parameter will not take effects.
# For archive node, the default value is 0.
#
# sync_state_starting_epoch = 0

# The number of epochs needed between our best_epoch and our neighbours' best_epoch that we want to
# start downloading states during catching up.
#
# sync_state_epoch_gap = 20

# ------------------ Light Node Parameters ----------------------

# Header sync parameters.
# ln_header_request_batch_size = 30
# ln_header_request_timeout_sec = 2
# ln_max_headers_in_flight = 1000

# Epoch sync parameters.
# ln_epoch_request_batch_size = 100
# ln_epoch_request_timeout_sec = 2
# ln_max_parallel_epochs_to_request = 10
# ln_num_epochs_to_request = 200
# ln_num_waiting_headers_threshold = 1000

# -------------------- Trace Parameters -------------------

# Whether to trace EVM execution and records the result in database.
#
# executive_trace = false


# -------------------- Others -------------------

# Time (in milliseconds) after which accounts are re-read from disk.
#
# account_provider_refresh_time_ms = 1000

# Whether to allow execution without deferring if the execution thread is idle.
#
# enable_optimistic_execution = true

# Maximum number of blocks whose timestamp is in the near future is maintained in memory.
#
# future_block_buffer_capacity = 32768

# Maximum number of log entries returned from cfx_getLogs.
# If not set, cfx_getLogs will not limit the number of logs returned.
#
# get_logs_filter_max_limit = 10

# Epoch batch size used in log filtering.
# Larger batch sizes may improve performance but might also prevent consensus from making progress under high RPC load.
#
# get_logs_epoch_batch_size = 32

# The maximal allowed number of epochs between `from_epoch` and `to_epoch` in the filter to call `cfx_getLogs`.
# If not set, there is no limit on the gap.
# By default it is not set.
#
# get_logs_filter_max_epoch_range = 10000

# Maximum number of transactions allowed for peers to send to a catch-up node.
#
# max_trans_count_received_in_catch_up = 60_000

# The chain_id of conflux network
# 1 for testnet
# 1029 for Tethys
#
chain_id = 1029

```