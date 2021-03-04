(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return c}));var a=n(2),o=n(9),r=(n(0),n(214)),s={},i={id:"conflux-rust/core/benchmark/storage/parity-snappy/rust-snappy/snappy-sys/snappy/README",title:"README",description:"Snappy, a fast compressor/decompressor.",source:"@site/docs/conflux-rust/core/benchmark/storage/parity-snappy/rust-snappy/snappy-sys/snappy/README.md",permalink:"/docs/conflux-rust/core/benchmark/storage/parity-snappy/rust-snappy/snappy-sys/snappy/README",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/conflux-rust/core/benchmark/storage/parity-snappy/rust-snappy/snappy-sys/snappy/README.md",lastUpdatedAt:1614844992},p=[],l={rightToc:p};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Snappy, a fast compressor/decompressor."),Object(r.b)("h1",{id:"introduction"},"Introduction"),Object(r.b)("p",null,'Snappy is a compression/decompression library. It does not aim for maximum\ncompression, or compatibility with any other compression library; instead,\nit aims for very high speeds and reasonable compression. For instance,\ncompared to the fastest mode of zlib, Snappy is an order of magnitude faster\nfor most inputs, but the resulting compressed files are anywhere from 20% to\n100% bigger. (For more information, see "Performance", below.)'),Object(r.b)("p",null,"Snappy has the following properties:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'Fast: Compression speeds at 250 MB/sec and beyond, with no assembler code.\nSee "Performance" below.'),Object(r.b)("li",{parentName:"ul"},"Stable: Over the last few years, Snappy has compressed and decompressed\npetabytes of data in Google's production environment. The Snappy bitstream\nformat is stable and will not change between versions."),Object(r.b)("li",{parentName:"ul"},"Robust: The Snappy decompressor is designed not to crash in the face of\ncorrupted or malicious input."),Object(r.b)("li",{parentName:"ul"},"Free and open source software: Snappy is licensed under a BSD-type license.\nFor more information, see the included COPYING file.")),Object(r.b)("p",null,'Snappy has previously been called "Zippy" in some Google presentations\nand the like.'),Object(r.b)("h1",{id:"performance"},"Performance"),Object(r.b)("p",null,"Snappy is intended to be fast. On a single core of a Core i7 processor\nin 64-bit mode, it compresses at about 250 MB/sec or more and decompresses at\nabout 500 MB/sec or more. (These numbers are for the slowest inputs in our\nbenchmark suite; others are much faster.) In our tests, Snappy usually\nis faster than algorithms in the same class (e.g. LZO, LZF, QuickLZ,\netc.) while achieving comparable compression ratios."),Object(r.b)("p",null,"Typical compression ratios (based on the benchmark suite) are about 1.5-1.7x\nfor plain text, about 2-4x for HTML, and of course 1.0x for JPEGs, PNGs and\nother already-compressed data. Similar numbers for zlib in its fastest mode\nare 2.6-2.8x, 3-7x and 1.0x, respectively. More sophisticated algorithms are\ncapable of achieving yet higher compression rates, although usually at the\nexpense of speed. Of course, compression ratio will vary significantly with\nthe input."),Object(r.b)("p",null,"Although Snappy should be fairly portable, it is primarily optimized\nfor 64-bit x86-compatible processors, and may run slower in other environments.\nIn particular:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Snappy uses 64-bit operations in several places to process more data at\nonce than would otherwise be possible."),Object(r.b)("li",{parentName:"ul"},"Snappy assumes unaligned 32- and 64-bit loads and stores are cheap.\nOn some platforms, these must be emulated with single-byte loads\nand stores, which is much slower."),Object(r.b)("li",{parentName:"ul"},"Snappy assumes little-endian throughout, and needs to byte-swap data in\nseveral places if running on a big-endian platform.")),Object(r.b)("p",null,'Experience has shown that even heavily tuned code can be improved.\nPerformance optimizations, whether for 64-bit x86 or other platforms,\nare of course most welcome; see "Contact", below.'),Object(r.b)("h1",{id:"building"},"Building"),Object(r.b)("p",null,"CMake is supported and autotools will soon be deprecated.\nYou need CMake 3.4 or above to build:"),Object(r.b)("p",null,"  mkdir build\ncd build && cmake ../ && make"),Object(r.b)("h1",{id:"usage"},"Usage"),Object(r.b)("p",null,"Note that Snappy, both the implementation and the main interface,\nis written in C++. However, several third-party bindings to other languages\nare available; see the home page at ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://google.github.io/snappy/"}),"http://google.github.io/snappy/"),"\nfor more information. Also, if you want to use Snappy from C code, you can\nuse the included C bindings in snappy-c.h."),Object(r.b)("p",null,'To use Snappy from your own C++ program, include the file "snappy.h" from\nyour calling file, and link against the compiled library.'),Object(r.b)("p",null,"There are many ways to call Snappy, but the simplest possible is"),Object(r.b)("p",null,"  snappy::Compress(input.data(), input.size(), &output);"),Object(r.b)("p",null,"and similarly"),Object(r.b)("p",null,"  snappy::Uncompress(input.data(), input.size(), &output);"),Object(r.b)("p",null,'where "input" and "output" are both instances of std::string.'),Object(r.b)("p",null,"There are other interfaces that are more flexible in various ways, including\nsupport for custom (non-array) input sources. See the header file for more\ninformation."),Object(r.b)("h1",{id:"tests-and-benchmarks"},"Tests and benchmarks"),Object(r.b)("p",null,"When you compile Snappy, snappy_unittest is compiled in addition to the\nlibrary itself. You do not need it to use the compressor from your own library,\nbut it contains several useful components for Snappy development."),Object(r.b)("p",null,"First of all, it contains unit tests, verifying correctness on your machine in\nvarious scenarios. If you want to change or optimize Snappy, please run the\ntests to verify you have not broken anything. Note that if you have the\nGoogle Test library installed, unit test behavior (especially failures) will be\nsignificantly more user-friendly. You can find Google Test at"),Object(r.b)("p",null,"  ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://github.com/google/googletest"}),"http://github.com/google/googletest")),Object(r.b)("p",null,"You probably also want the gflags library for handling of command-line flags;\nyou can find it at"),Object(r.b)("p",null,"  ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://gflags.github.io/gflags/"}),"http://gflags.github.io/gflags/")),Object(r.b)("p",null,"In addition to the unit tests, snappy contains microbenchmarks used to\ntune compression and decompression performance. These are automatically run\nbefore the unit tests, but you can disable them using the flag\n--run_microbenchmarks=false if you have gflags installed (otherwise you will\nneed to edit the source)."),Object(r.b)("p",null,"Finally, snappy can benchmark Snappy against a few other compression libraries\n(zlib, LZO, LZF, and QuickLZ), if they were detected at configure time.\nTo benchmark using a given file, give the compression algorithm you want to test\nSnappy against (e.g. --zlib) and then a list of one or more file names on the\ncommand line. The testdata/ directory contains the files used by the\nmicrobenchmark, which should provide a reasonably balanced starting point for\nbenchmarking. (Note that baddata","[1-3]",".snappy are not intended as benchmarks; they\nare used to verify correctness in the presence of corrupted data in the unit\ntest.)"),Object(r.b)("h1",{id:"contact"},"Contact"),Object(r.b)("p",null,"Snappy is distributed through GitHub. For the latest version, a bug tracker,\nand other information, see"),Object(r.b)("p",null,"  ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://google.github.io/snappy/"}),"http://google.github.io/snappy/")),Object(r.b)("p",null,"or the repository at"),Object(r.b)("p",null,"  ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/google/snappy"}),"https://github.com/google/snappy")))}c.isMDXComponent=!0},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),c=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,d=u["".concat(s,".").concat(m)]||u[m]||b[m]||r;return n?o.a.createElement(d,i(i({ref:t},l),{},{components:n})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);