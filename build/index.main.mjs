// Automatically generated with Reach 0.1.6 (09c295c6)
/* eslint-disable */
export const _version = '0.1.6';
export const _versionHash = '0.1.6 (09c295c6)';
export const _backendVersion = 5;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      3: [ctc0, ctc1],
      4: [ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function NormalUser(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for NormalUser expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for NormalUser expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v78, v79], secs: v81, time: v80, didSend: v30, from: v77 } = txn1;
  ;
  let v84 = v80;
  
  while ((() => {
    
    return true;})()) {
    stdlib.protect(ctc2, await interact.payAbeg(v79), {
      at: './index.rsh:54:34:application',
      fs: ['at ./index.rsh:52:20:application call to [unknown function] (defined at: ./index.rsh:52:24:function exp)'],
      msg: 'payAbeg',
      who: 'NormalUser'
      });
    
    const txn2 = await (ctc.sendrecv({
      args: [v77, v79],
      evt_cnt: 0,
      funcNum: 2,
      lct: v84,
      onlyIf: true,
      out_tys: [],
      pay: [v79, []],
      sim_p: (async (txn2) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [], secs: v94, time: v93, didSend: v44, from: v92 } = txn2;
        
        sim_r.txns.push({
          amt: v79,
          kind: 'to',
          tok: undefined
          });
        sim_r.txns.push({
          amt: v79,
          kind: 'from',
          to: v77,
          tok: undefined
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined,
      tys: [ctc3, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v94, time: v93, didSend: v44, from: v92 } = txn2;
    ;
    ;
    stdlib.protect(ctc2, await interact.showBalance(), {
      at: './index.rsh:62:38:application',
      fs: ['at ./index.rsh:61:9:application call to [unknown function] (defined at: ./index.rsh:61:38:function exp)'],
      msg: 'showBalance',
      who: 'NormalUser'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v77, v79],
      evt_cnt: 0,
      funcNum: 3,
      lct: v93,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [], secs: v107, time: v106, didSend: v59, from: v105 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const cv84 = v106;
        
        (() => {
          const v84 = cv84;
          
          if ((() => {
            
            return true;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined,
      tys: [ctc3, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v107, time: v106, didSend: v59, from: v105 } = txn3;
    ;
    const cv84 = v106;
    
    v84 = cv84;
    
    continue;
    
    
    
    }
  return;
  
  
  };
export async function OmegaUser(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for OmegaUser expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for OmegaUser expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v69 = stdlib.protect(ctc0, interact.abeg, 'for OmegaUser\'s interact field abeg');
  const v70 = stdlib.protect(ctc1, interact.name, 'for OmegaUser\'s interact field name');
  
  const txn1 = await (ctc.sendrecv({
    args: [v70, v69],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:35:13:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc1, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v78, v79], secs: v81, time: v80, didSend: v30, from: v77 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v84 = v80;
      
      if ((() => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v78, v79], secs: v81, time: v80, didSend: v30, from: v77 } = txn1;
  ;
  let v84 = v80;
  
  while ((() => {
    
    return true;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 2,
      out_tys: [],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v94, time: v93, didSend: v44, from: v92 } = txn2;
    ;
    ;
    stdlib.protect(ctc2, await interact.showBalance(), {
      at: './index.rsh:62:38:application',
      fs: ['at ./index.rsh:61:9:application call to [unknown function] (defined at: ./index.rsh:61:38:function exp)'],
      msg: 'showBalance',
      who: 'OmegaUser'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v77, v79],
      evt_cnt: 0,
      funcNum: 3,
      lct: v93,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [], secs: v107, time: v106, didSend: v59, from: v105 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const cv84 = v106;
        
        (() => {
          const v84 = cv84;
          
          if ((() => {
            
            return true;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined,
      tys: [ctc3, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v107, time: v106, didSend: v59, from: v105 } = txn3;
    ;
    const cv84 = v106;
    
    v84 = cv84;
    
    continue;
    
    
    
    }
  return;
  
  
  };
const _ALGO = {
  appApproval: `#pragma version 5
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
int 0
extract_uint64
store 1
dup
int 8
extract_uint64
store 2
extract 16 32
store 3
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
preamble:
// Handler 0
dup
int 0
==
bz l0_afterHandler0
pop
// check step
int 0
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
byte base64()
pop
txna ApplicationArgs 2
dup
len
int 104
==
assert
dup
extract 0 32
store 255
dup
extract 32 64
store 254
dup
int 96
extract_uint64
store 253
pop
txn Sender
global CreatorAddress
==
assert
load 255
store 3
// "CheckPay"
// "./index.rsh:35:13:dot"
// "[]"
int 100000
dup
bz l1_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l1_checkTxnK:
pop
// "CheckPay"
// "./index.rsh:35:13:dot"
// "[]"
txn Sender
load 253
itob
concat
global Round
itob
b loopBody1
l0_afterHandler0:
l2_afterHandler1:
// Handler 2
dup
int 2
==
bz l3_afterHandler2
pop
// check step
int 3
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:56:16:dot"
// "[]"
load 254
dup
bz l4_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l4_checkTxnK:
pop
load 254
dup
bz l5_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l5_checkTxnK:
pop
load 255
load 254
itob
concat
int 1
bzero
dig 1
extract 0 40
app_global_put
pop
int 4
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l3_afterHandler2:
// Handler 3
dup
int 3
==
bz l6_afterHandler3
pop
// check step
int 4
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:65:33:dot"
// "[]"
load 255
load 254
itob
concat
global Round
itob
b loopBody1
l6_afterHandler3:
int 0
assert
loopBody1:
dup
btoi
store 255
pop
dup
extract 0 32
store 254
dup
int 32
extract_uint64
store 253
pop
load 254
load 253
itob
concat
int 1
bzero
dig 1
extract 0 40
app_global_put
pop
int 3
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
updateState:
byte base64()
load 1
itob
load 2
itob
load 3
concat
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
int 0
store 1
int 0
store 2
global ZeroAddress
store 3
b updateState
`,
  appClear: `#pragma version 5
int 0
`,
  escrow: `#pragma version 5
global GroupSize
int 1
-
dup
gtxns TypeEnum
int appl
==
assert
gtxns ApplicationID
int {{ApplicationID}}
==
assert
done:
int 1
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 40,
  unsupported: [],
  version: 5
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint8[64]",
                "name": "v78",
                "type": "uint8[64]"
              },
              {
                "internalType": "uint256",
                "name": "v79",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint8[64]",
                "name": "v78",
                "type": "uint8[64]"
              },
              {
                "internalType": "uint256",
                "name": "v79",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000b1e38038062000b1e83398101604081905262000026916200027c565b600080556040517f5173823c73ba9c0ffa787835b3f61ad81d63717556ef74681e00ea423fe2794b906200005c90839062000333565b60405180910390a16200007234156007620000d6565b620000a660408051608081018252600081830181815260608301829052825282516020818101909452908152909182015290565b80513390526020808301518101518251820152810151439052620000ca8162000100565b505043600355620003c3565b81620000fc5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604080518082018252600080825260208083018281528551516001600160a01b03168085528651830151825260039093554360015584518083019390935251828501528351808303850181526060909201909352805191926200016a92600292909101906200016f565b505050565b8280546200017d9062000386565b90600052602060002090601f016020900481019282620001a15760008555620001ec565b82601f10620001bc57805160ff1916838001178555620001ec565b82800160010185558215620001ec579182015b82811115620001ec578251825591602001919060010190620001cf565b50620001fa929150620001fe565b5090565b5b80821115620001fa5760008155600101620001ff565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b038111828210171562000250576200025062000215565b60405290565b60405161080081016001600160401b038111828210171562000250576200025062000215565b60008183036108408112156200029157600080fd5b6200029b6200022b565b83518152602061082080601f1985011215620002b657600080fd5b620002c06200022b565b935086603f870112620002d257600080fd5b620002dc62000256565b908601908088831115620002ef57600080fd5b8388015b838110156200031d57805160ff811681146200030f5760008081fd5b8352918401918401620002f3565b5085525051818401528101919091529392505050565b815181526020808301518051610840840192919060008386015b60408210156200037157825160ff168152918401916001919091019084016200034d565b50505081810151610820850152505092915050565b600181811c908216806200039b57607f821691505b60208210811415620003bd57634e487b7160e01b600052602260045260246000fd5b50919050565b61074b80620003d36000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780638323075714610078578063ab53f2c61461008d578063f147248d146100b0578063fd948b86146100c357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b34801561008457600080fd5b50600154610065565b34801561009957600080fd5b506100a26100d6565b60405161006f9291906105cf565b6100526100be36600461062c565b610173565b6100526100d136600461062c565b6102e8565b6000606060005460028080546100eb90610644565b80601f016020809104026020016040519081016040528092919081815260200182805461011790610644565b80156101645780601f1061013957610100808354040283529160200191610164565b820191906000526020600020905b81548152906001019060200180831161014757829003601f168201915b50505050509050915091509091565b610183600460005414600c6104a9565b61019d8135158061019657506001548235145b600d6104a9565b6000808055600280546101af90610644565b80601f01602080910402602001604051908101604052809291908181526020018280546101db90610644565b80156102285780601f106101fd57610100808354040283529160200191610228565b820191906000526020600020905b81548152906001019060200180831161020b57829003601f168201915b50505050508060200190518101906102409190610679565b90507fe92d4e1229145c13e718fdc692a322df4a6700c6bebac0841f0e9f44c56a15298260405161027191906106eb565b60405180910390a16102853415600b6104a9565b6102b860408051608081018252600081830181815260608301829052825282516020818101909452908152909182015290565b815181516001600160a01b03909116905260208083015182518201528101514390526102e3816104d2565b505050565b6102f860036000541460096104a9565b6103128135158061030b57506001548235145b600a6104a9565b60008080556002805461032490610644565b80601f016020809104026020016040519081016040528092919081815260200182805461035090610644565b801561039d5780601f106103725761010080835404028352916020019161039d565b820191906000526020600020905b81548152906001019060200180831161038057829003601f168201915b50505050508060200190518101906103b59190610679565b90507fe0777bbb0edbebd8a5c254bf54fd955256e9bf9fb0fe4138cd88ac193a101d15826040516103e691906106eb565b60405180910390a16103ff8160200151341460086104a9565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561043c573d6000803e3d6000fd5b506040805180820182526000808252602080830182815285516001600160a01b031680855286830151825260049093554360015584518083019390935251828501528351808303850181526060909201909352805191926104a39260029290910190610536565b50505050565b816104ce5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604080518082018252600080825260208083018281528551516001600160a01b03168085528651830151825260039093554360015584518083019390935251828501528351808303850181526060909201909352805191926102e392600292909101905b82805461054290610644565b90600052602060002090601f01602090048101928261056457600085556105aa565b82601f1061057d57805160ff19168380011785556105aa565b828001600101855582156105aa579182015b828111156105aa57825182559160200191906001019061058f565b506105b69291506105ba565b5090565b5b808211156105b657600081556001016105bb565b82815260006020604081840152835180604085015260005b81811015610603578581018301518582016060015282016105e7565b81811115610615576000606083870101525b50601f01601f191692909201606001949350505050565b60006040828403121561063e57600080fd5b50919050565b600181811c9082168061065857607f821691505b6020821081141561063e57634e487b7160e01b600052602260045260246000fd5b60006040828403121561068b57600080fd5b6040516040810181811067ffffffffffffffff821117156106bc57634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b03811681146106d657600080fd5b81526020928301519281019290925250919050565b8135815260408101602083013580151580821461070757600080fd5b80602085015250509291505056fea2646970667358221220cabae32b72d3be9b1d107ce54e6a68af954ba1d00e29b3e75a0a10c5ce73a6d764736f6c63430008090033`,
  BytecodeLen: 2846,
  Which: `oD`,
  version: 5,
  views: {
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "NormalUser": NormalUser,
  "OmegaUser": OmegaUser
  };
export const _APIs = {
  };
