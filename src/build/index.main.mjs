// Automatically generated with Reach 0.1.7 (38e9cf03)
/* eslint-disable */
export const _version = '0.1.7';
export const _versionHash = '0.1.7 (38e9cf03)';
export const _backendVersion = 5;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      5: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2]
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
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc3, ctc4]);
  const ctc6 = stdlib.T_Bool;
  
  
  const v163 = stdlib.protect(ctc0, interact.name, 'for NormalUser\'s interact field name');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v167], secs: v169, time: v168, didSend: v25, from: v166 } = txn1;
  ;
  const v171 = 'DaaraCoin                       ';
  const v172 = 'DRA     ';
  const v173 = '                                                                                                ';
  const v174 = '                                ';
  const v175 = undefined;
  const v176 = await txn1.getOutput('tokenNew', 'v175', ctc1, v175);
  stdlib.protect(ctc2, await interact.acceptToken(v176), {
    at: './index.rsh:1:39:application',
    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:57:34:application call to "liftedInteract" (defined at: ./index.rsh:57:34:application)'],
    msg: 'acceptToken',
    who: 'NormalUser'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v187, time: v186, didSend: v49, from: v185 } = txn2;
  ;
  const v189 = stdlib.addressEq(v166, v185);
  stdlib.assert(v189, {
    at: './index.rsh:58:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'NormalUser'
    });
  let v190 = stdlib.checkedBigNumberify('./index.rsh:60:35:decimal', stdlib.UInt_max, 0);
  let v191 = stdlib.checkedBigNumberify('./index.rsh:60:38:decimal', stdlib.UInt_max, 0);
  let v192 = v186;
  let v199 = stdlib.checkedBigNumberify('./index.rsh:48:18:decimal', stdlib.UInt_max, 1000000000000000);
  let v200 = stdlib.checkedBigNumberify('./index.rsh:48:18:decimal', stdlib.UInt_max, 1000000000000000);
  let v201 = false;
  
  while (await (async () => {
    const v208 = stdlib.le(v190, stdlib.checkedBigNumberify('./index.rsh:48:18:decimal', stdlib.UInt_max, 1000000000000000));
    
    return v208;})()) {
    const v210 = stdlib.add(v192, stdlib.checkedBigNumberify('./index.rsh:82:29:decimal', stdlib.UInt_max, 5000));
    const v212 = ctc.selfAddress();
    let v215;
    const v216 = stdlib.eq(v199, stdlib.checkedBigNumberify('./index.rsh:17:22:decimal', stdlib.UInt_max, 0));
    if (v216) {
      v215 = stdlib.checkedBigNumberify('./index.rsh:17:32:decimal', stdlib.UInt_max, 50000);
      }
    else {
      const v217 = stdlib.div(stdlib.checkedBigNumberify('./index.rsh:18:15:decimal', stdlib.UInt_max, 50000000000000000), v199);
      v215 = v217;
      }
    stdlib.protect(ctc2, await interact.showBalance(v176), {
      at: './index.rsh:70:38:application',
      fs: ['at ./index.rsh:66:20:application call to [unknown function] (defined at: ./index.rsh:66:24:function exp)'],
      msg: 'showBalance',
      who: 'NormalUser'
      });
    stdlib.protect(ctc2, await interact.displayTokenDetails(v199, v215), {
      at: './index.rsh:71:46:application',
      fs: ['at ./index.rsh:66:20:application call to [unknown function] (defined at: ./index.rsh:66:24:function exp)'],
      msg: 'displayTokenDetails',
      who: 'NormalUser'
      });
    const v220 = stdlib.protect(ctc5, await interact.buyToken(v199, v215), {
      at: './index.rsh:72:56:application',
      fs: ['at ./index.rsh:66:20:application call to [unknown function] (defined at: ./index.rsh:66:24:function exp)'],
      msg: 'buyToken',
      who: 'NormalUser'
      });
    const v221 = v220[stdlib.checkedBigNumberify('./index.rsh:72:13:array', stdlib.UInt_max, 0)];
    const v222 = v220[stdlib.checkedBigNumberify('./index.rsh:72:13:array', stdlib.UInt_max, 1)];
    const v223 = stdlib.mul(v221, v215);
    const v225 = stdlib.le(v221, v199);
    stdlib.assert(v225, {
      at: './index.rsh:74:13:application',
      fs: ['at ./index.rsh:66:20:application call to [unknown function] (defined at: ./index.rsh:66:24:function exp)'],
      msg: null,
      who: 'NormalUser'
      });
    stdlib.protect(ctc2, await interact.giveFeedBack1(), {
      at: './index.rsh:76:29:application',
      fs: ['at ./index.rsh:66:20:application call to [unknown function] (defined at: ./index.rsh:66:24:function exp)'],
      msg: 'giveFeedBack1',
      who: 'NormalUser'
      });
    
    stdlib.protect(ctc2, await interact.giveFeedBack2(), {
      at: './index.rsh:1:39:application',
      fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:78:38:application call to "liftedInteract" (defined at: ./index.rsh:78:38:application)'],
      msg: 'giveFeedBack2',
      who: 'NormalUser'
      });
    
    const v227 = stdlib.addressEq(v222, v212);
    
    const txn3 = await (ctc.sendrecv({
      args: [v166, v176, v190, v191, v199, v200, v201, v210, v221, v215, v212, v222, v163, v223],
      evt_cnt: 6,
      funcNum: 3,
      lct: v192,
      onlyIf: v227,
      out_tys: [ctc3, ctc3, ctc4, ctc4, ctc0, ctc3],
      pay: [v223, []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v229, v230, v231, v232, v233, v234], secs: v236, time: v235, didSend: v92, from: v228 } = txn3;
        
        sim_r.txns.push({
          amt: v234,
          kind: 'to',
          tok: undefined
          });
        const v239 = stdlib.addressEq(v228, v231);
        stdlib.assert(v239, {
          at: './index.rsh:91:12:application',
          fs: [],
          msg: null,
          who: 'NormalUser'
          });
        const v241 = stdlib.le(v229, v199);
        stdlib.assert(v241, {
          at: './index.rsh:93:12:application',
          fs: [],
          msg: null,
          who: 'NormalUser'
          });
        const v245 = stdlib.sub(v199, v229);
        sim_r.txns.push({
          amt: v229,
          kind: 'from',
          to: v228,
          tok: v176
          });
        
        const v247 = stdlib.add(v190, v229);
        const v248 = stdlib.add(v191, v234);
        const cv190 = v247;
        const cv191 = v248;
        const cv192 = v235;
        const cv199 = v245;
        const cv200 = v200;
        const cv201 = v201;
        
        await (async () => {
          const v190 = cv190;
          const v191 = cv191;
          const v192 = cv192;
          const v199 = cv199;
          const v200 = cv200;
          const v201 = cv201;
          
          if (await (async () => {
            const v208 = stdlib.le(v190, stdlib.checkedBigNumberify('./index.rsh:48:18:decimal', stdlib.UInt_max, 1000000000000000));
            
            return v208;})()) {
            const v210 = stdlib.add(v192, stdlib.checkedBigNumberify('./index.rsh:82:29:decimal', stdlib.UInt_max, 5000));
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v191,
              kind: 'from',
              to: v166,
              tok: undefined
              });
            stdlib.simTokenBurn(sim_r, v176, v200);
            if (v201) {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }
            else {
              stdlib.simTokenDestroy(sim_r, v176);
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }}})();
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: ['time', v210],
      tys: [ctc4, ctc1, ctc3, ctc3, ctc3, ctc3, ctc6, ctc3, ctc3, ctc3, ctc4, ctc4, ctc0, ctc3],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v166, v176, v190, v191, v199, v200, v201, v210],
        evt_cnt: 0,
        funcNum: 4,
        lct: v192,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v251, time: v250, didSend: v115, from: v249 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          
          const cv190 = v190;
          const cv191 = v191;
          const cv192 = v250;
          const cv199 = v199;
          const cv200 = v200;
          const cv201 = v201;
          
          await (async () => {
            const v190 = cv190;
            const v191 = cv191;
            const v192 = cv192;
            const v199 = cv199;
            const v200 = cv200;
            const v201 = cv201;
            
            if (await (async () => {
              const v208 = stdlib.le(v190, stdlib.checkedBigNumberify('./index.rsh:48:18:decimal', stdlib.UInt_max, 1000000000000000));
              
              return v208;})()) {
              const v210 = stdlib.add(v192, stdlib.checkedBigNumberify('./index.rsh:82:29:decimal', stdlib.UInt_max, 5000));
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                amt: v191,
                kind: 'from',
                to: v166,
                tok: undefined
                });
              stdlib.simTokenBurn(sim_r, v176, v200);
              if (v201) {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }
              else {
                stdlib.simTokenDestroy(sim_r, v176);
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }}})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc4, ctc1, ctc3, ctc3, ctc3, ctc3, ctc6, ctc3],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v251, time: v250, didSend: v115, from: v249 } = txn4;
      ;
      stdlib.protect(ctc2, await interact.giveFeedBack3(), {
        at: './index.rsh:1:39:application',
        fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:84:42:application call to "liftedInteract" (defined at: ./index.rsh:84:42:application)'],
        msg: 'giveFeedBack3',
        who: 'NormalUser'
        });
      
      const cv190 = v190;
      const cv191 = v191;
      const cv192 = v250;
      const cv199 = v199;
      const cv200 = v200;
      const cv201 = v201;
      
      v190 = cv190;
      v191 = cv191;
      v192 = cv192;
      v199 = cv199;
      v200 = cv200;
      v201 = cv201;
      
      continue;
      }
    else {
      const {data: [v229, v230, v231, v232, v233, v234], secs: v236, time: v235, didSend: v92, from: v228 } = txn3;
      ;
      const v239 = stdlib.addressEq(v228, v231);
      stdlib.assert(v239, {
        at: './index.rsh:91:12:application',
        fs: [],
        msg: null,
        who: 'NormalUser'
        });
      const v241 = stdlib.le(v229, v199);
      stdlib.assert(v241, {
        at: './index.rsh:93:12:application',
        fs: [],
        msg: null,
        who: 'NormalUser'
        });
      const v245 = stdlib.sub(v199, v229);
      ;
      stdlib.protect(ctc2, await interact.giveFeedBack4(), {
        at: './index.rsh:1:39:application',
        fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:95:38:application call to "liftedInteract" (defined at: ./index.rsh:95:38:application)'],
        msg: 'giveFeedBack4',
        who: 'NormalUser'
        });
      
      const v247 = stdlib.add(v190, v229);
      const v248 = stdlib.add(v191, v234);
      const cv190 = v247;
      const cv191 = v248;
      const cv192 = v235;
      const cv199 = v245;
      const cv200 = v200;
      const cv201 = v201;
      
      v190 = cv190;
      v191 = cv191;
      v192 = cv192;
      v199 = cv199;
      v200 = cv200;
      v201 = cv201;
      
      continue;}
    
    }
  ;
  undefined;
  if (v201) {
    return;
    }
  else {
    undefined;
    return;
    }
  
  
  
  };
export async function OmegaUser(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for OmegaUser expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for OmegaUser expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Address;
  
  
  const v162 = stdlib.protect(ctc0, interact.name, 'for OmegaUser\'s interact field name');
  
  const txn1 = await (ctc.sendrecv({
    args: [v162],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:45:13:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v167], secs: v169, time: v168, didSend: v25, from: v166 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v171 = 'DaaraCoin                       ';
      const v172 = 'DRA     ';
      const v173 = '                                                                                                ';
      const v174 = '                                ';
      const v175 = stdlib.simTokenNew(sim_r, v171, v172, v173, v174, stdlib.checkedBigNumberify('./index.rsh:48:18:decimal', stdlib.UInt_max, 1000000000000000), undefined);
      const v176 = await txn1.getOutput('tokenNew', 'v175', ctc1, v175);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v167], secs: v169, time: v168, didSend: v25, from: v166 } = txn1;
  ;
  const v171 = 'DaaraCoin                       ';
  const v172 = 'DRA     ';
  const v173 = '                                                                                                ';
  const v174 = '                                ';
  const v175 = undefined;
  const v176 = await txn1.getOutput('tokenNew', 'v175', ctc1, v175);
  stdlib.protect(ctc2, await interact.acceptToken(v176), {
    at: './index.rsh:54:25:application',
    fs: ['at ./index.rsh:53:17:application call to [unknown function] (defined at: ./index.rsh:53:21:function exp)'],
    msg: 'acceptToken',
    who: 'OmegaUser'
    });
  let v181;
  const v182 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:48:18:decimal', stdlib.UInt_max, 1000000000000000), stdlib.checkedBigNumberify('./index.rsh:17:22:decimal', stdlib.UInt_max, 0));
  if (v182) {
    v181 = stdlib.checkedBigNumberify('./index.rsh:17:32:decimal', stdlib.UInt_max, 50000);
    }
  else {
    const v183 = stdlib.div(stdlib.checkedBigNumberify('./index.rsh:18:15:decimal', stdlib.UInt_max, 50000000000000000), stdlib.checkedBigNumberify('./index.rsh:48:18:decimal', stdlib.UInt_max, 1000000000000000));
    v181 = v183;
    }
  stdlib.protect(ctc2, await interact.displayTokenDetails(stdlib.checkedBigNumberify('./index.rsh:48:18:decimal', stdlib.UInt_max, 1000000000000000), v181), {
    at: './index.rsh:55:44:application',
    fs: ['at ./index.rsh:53:17:application call to [unknown function] (defined at: ./index.rsh:53:21:function exp)'],
    msg: 'displayTokenDetails',
    who: 'OmegaUser'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v166, v176],
    evt_cnt: 0,
    funcNum: 1,
    lct: v168,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v187, time: v186, didSend: v49, from: v185 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v189 = stdlib.addressEq(v166, v185);
      stdlib.assert(v189, {
        at: './index.rsh:58:13:dot',
        fs: [],
        msg: 'sender correct',
        who: 'OmegaUser'
        });
      const v190 = stdlib.checkedBigNumberify('./index.rsh:60:35:decimal', stdlib.UInt_max, 0);
      const v191 = stdlib.checkedBigNumberify('./index.rsh:60:38:decimal', stdlib.UInt_max, 0);
      const v192 = v186;
      const v199 = stdlib.checkedBigNumberify('./index.rsh:48:18:decimal', stdlib.UInt_max, 1000000000000000);
      const v200 = stdlib.checkedBigNumberify('./index.rsh:48:18:decimal', stdlib.UInt_max, 1000000000000000);
      const v201 = false;
      
      if (await (async () => {
        const v208 = stdlib.le(v190, stdlib.checkedBigNumberify('./index.rsh:48:18:decimal', stdlib.UInt_max, 1000000000000000));
        
        return v208;})()) {
        const v210 = stdlib.add(v192, stdlib.checkedBigNumberify('./index.rsh:82:29:decimal', stdlib.UInt_max, 5000));
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          amt: v191,
          kind: 'from',
          to: v166,
          tok: undefined
          });
        stdlib.simTokenBurn(sim_r, v176, v200);
        if (v201) {
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          }
        else {
          stdlib.simTokenDestroy(sim_r, v176);
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc4, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v187, time: v186, didSend: v49, from: v185 } = txn2;
  ;
  const v189 = stdlib.addressEq(v166, v185);
  stdlib.assert(v189, {
    at: './index.rsh:58:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'OmegaUser'
    });
  let v190 = stdlib.checkedBigNumberify('./index.rsh:60:35:decimal', stdlib.UInt_max, 0);
  let v191 = stdlib.checkedBigNumberify('./index.rsh:60:38:decimal', stdlib.UInt_max, 0);
  let v192 = v186;
  let v199 = stdlib.checkedBigNumberify('./index.rsh:48:18:decimal', stdlib.UInt_max, 1000000000000000);
  let v200 = stdlib.checkedBigNumberify('./index.rsh:48:18:decimal', stdlib.UInt_max, 1000000000000000);
  let v201 = false;
  
  while (await (async () => {
    const v208 = stdlib.le(v190, stdlib.checkedBigNumberify('./index.rsh:48:18:decimal', stdlib.UInt_max, 1000000000000000));
    
    return v208;})()) {
    const v210 = stdlib.add(v192, stdlib.checkedBigNumberify('./index.rsh:82:29:decimal', stdlib.UInt_max, 5000));
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 6,
      funcNum: 3,
      out_tys: [ctc3, ctc3, ctc4, ctc4, ctc0, ctc3],
      timeoutAt: ['time', v210],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 4,
        out_tys: [],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v251, time: v250, didSend: v115, from: v249 } = txn4;
      ;
      const cv190 = v190;
      const cv191 = v191;
      const cv192 = v250;
      const cv199 = v199;
      const cv200 = v200;
      const cv201 = v201;
      
      v190 = cv190;
      v191 = cv191;
      v192 = cv192;
      v199 = cv199;
      v200 = cv200;
      v201 = cv201;
      
      continue;
      }
    else {
      const {data: [v229, v230, v231, v232, v233, v234], secs: v236, time: v235, didSend: v92, from: v228 } = txn3;
      ;
      const v239 = stdlib.addressEq(v228, v231);
      stdlib.assert(v239, {
        at: './index.rsh:91:12:application',
        fs: [],
        msg: null,
        who: 'OmegaUser'
        });
      const v241 = stdlib.le(v229, v199);
      stdlib.assert(v241, {
        at: './index.rsh:93:12:application',
        fs: [],
        msg: null,
        who: 'OmegaUser'
        });
      const v245 = stdlib.sub(v199, v229);
      ;
      const v247 = stdlib.add(v190, v229);
      const v248 = stdlib.add(v191, v234);
      const cv190 = v247;
      const cv191 = v248;
      const cv192 = v235;
      const cv199 = v245;
      const cv200 = v200;
      const cv201 = v201;
      
      v190 = cv190;
      v191 = cv191;
      v192 = cv192;
      v199 = cv199;
      v200 = cv200;
      v201 = cv201;
      
      continue;}
    
    }
  ;
  undefined;
  if (v201) {
    return;
    }
  else {
    undefined;
    return;
    }
  
  
  
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
int 8
extract_uint64
store 2
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
int 64
==
assert
dup
store 255
pop
// "CheckPay"
// "./index.rsh:45:13:dot"
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
global CurrentApplicationAddress
dig 1
gtxns Receiver
==
assert
l1_checkTxnK:
pop
// "CheckPay"
// "./index.rsh:45:13:dot"
// "[]"
int 100000
dup
bz l2_checkTxnK
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
global CurrentApplicationAddress
dig 1
gtxns Receiver
==
assert
l2_checkTxnK:
pop
itxn_begin
int acfg
itxn_field TypeEnum
int 1000000000000000
itxn_field ConfigAssetTotal
int 6
itxn_field ConfigAssetDecimals
byte base64(RFJBAAAAAAA=)
itxn_field ConfigAssetUnitName
byte base64(RGFhcmFDb2luAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=)
itxn_field ConfigAssetName
int 96
bzero
itxn_field ConfigAssetURL
global ZeroAddress
itxn_field ConfigAssetMetadataHash
global CurrentApplicationAddress
itxn_field ConfigAssetManager
itxn_submit
itxn CreatedAssetID
store 254
byte base64(AAAAAAAAAK8=)
load 254
itob
concat
log // 16
load 254
store 253
txn Sender
load 253
itob
concat
int 1
bzero
dig 1
extract 0 40
app_global_put
pop
int 1
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l0_afterHandler0:
// Handler 1
dup
int 1
==
bz l3_afterHandler1
pop
// check step
int 1
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
// "./index.rsh:58:13:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:58:13:dot"
// "[]"
load 255
txn Sender
==
assert
load 255
load 254
itob
concat
int 16
bzero
global Round
itob
concat
byte base64(AAONfqTGgAA=)
concat
byte base64(AAONfqTGgAA=)
concat
int 0
itob // bool
substring 7 8
concat
b loopBody2
l3_afterHandler1:
l4_afterHandler2:
// Handler 3
dup
int 3
==
bz l5_afterHandler3
pop
// check step
int 5
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
dup
int 40
extract_uint64
store 253
dup
int 48
extract_uint64
store 252
dup
int 56
extract_uint64
store 251
dup
int 64
extract_uint64
store 250
dup
extract 72 1
btoi
store 249
dup
int 73
extract_uint64
store 248
pop
txna ApplicationArgs 2
dup
len
int 152
==
assert
dup
int 0
extract_uint64
store 247
dup
int 8
extract_uint64
store 246
dup
extract 16 32
store 245
dup
extract 48 32
store 244
dup
extract 80 64
store 243
dup
int 144
extract_uint64
store 242
pop
global Round
load 248
<
assert
// "CheckPay"
// "./index.rsh:79:16:dot"
// "[]"
load 242
dup
bz l6_checkTxnK
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
global CurrentApplicationAddress
dig 1
gtxns Receiver
==
assert
l6_checkTxnK:
pop
// Nothing
// "./index.rsh:91:12:application"
// "[]"
txn Sender
load 245
==
assert
// Nothing
// "./index.rsh:93:12:application"
// "[]"
load 247
load 251
<=
assert
load 247
dup
bz l7_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
txn Sender
itxn_field AssetReceiver
load 254
itxn_field XferAsset
itxn_submit
int 0
l7_makeTxnK:
pop
load 255
load 254
itob
concat
load 253
load 247
+
itob
load 252
load 242
+
itob
concat
global Round
itob
concat
load 251
load 247
-
itob
concat
load 250
itob
concat
load 249
itob // bool
substring 7 8
concat
b loopBody2
l5_afterHandler3:
// Handler 4
dup
int 4
==
bz l8_afterHandler4
pop
// check step
int 5
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
dup
int 40
extract_uint64
store 253
dup
int 48
extract_uint64
store 252
dup
int 56
extract_uint64
store 251
dup
int 64
extract_uint64
store 250
dup
extract 72 1
btoi
store 249
dup
int 73
extract_uint64
store 248
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 248
>=
assert
// "CheckPay"
// "./index.rsh:83:20:dot"
// "[]"
load 255
load 254
itob
concat
load 253
itob
load 252
itob
concat
global Round
itob
concat
load 251
itob
concat
load 250
itob
concat
load 249
itob // bool
substring 7 8
concat
b loopBody2
l8_afterHandler4:
int 0
assert
loopBody2:
dup
int 0
extract_uint64
store 255
dup
int 8
extract_uint64
store 254
dup
int 16
extract_uint64
store 253
dup
int 24
extract_uint64
store 252
dup
int 32
extract_uint64
store 251
dup
extract 40 1
btoi
store 250
pop
dup
extract 0 32
store 249
dup
int 32
extract_uint64
store 248
pop
load 255
int 1000000000000000
<=
bz l9_ifF
load 253
int 5000
+
store 247
load 249
load 248
itob
concat
load 255
itob
concat
load 254
itob
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob // bool
substring 7 8
concat
load 247
itob
concat
int 1
bzero
dig 1
extract 0 81
app_global_put
pop
int 5
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l9_ifF:
load 254
dup
bz l10_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 249
itxn_field Receiver
itxn_submit
int 0
l10_makeTxnK:
pop
load 250
bz l11_ifF
int 0
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
global CreatorAddress
itxn_field CloseRemainderTo
global CurrentApplicationAddress
itxn_field Receiver
itxn_submit
int 0
l12_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l11_ifF:
itxn_begin
int acfg
itxn_field TypeEnum
load 248
itxn_field ConfigAsset
itxn_submit
int 0
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
global CreatorAddress
itxn_field CloseRemainderTo
global CurrentApplicationAddress
itxn_field Receiver
itxn_submit
int 0
l13_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
updateState:
byte base64()
load 1
itob
load 2
itob
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
b updateState
`,
  appClear: `#pragma version 5
int 0
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 81,
  unsupported: [],
  version: 6
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
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T4",
                "name": "v167",
                "type": "tuple"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
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
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T4",
                "name": "v167",
                "type": "tuple"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
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
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v229",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v230",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v231",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v232",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T4",
                "name": "v233",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v234",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
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
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v175",
        "type": "address"
      }
    ],
    "name": "oe_v175",
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
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v229",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v230",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v231",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v232",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T4",
                "name": "v233",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v234",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
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
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620025dc380380620025dc8339810160408190526200002691620003da565b6000808055436003556040805160e08101825260c081018381528152815160208082018452848252808301919091528251606080820185528582528183018690528185018690528385019190915283518083018552858152818401526080830185905260a083019490945282518551815285820151518051828401529091015181840152915190927f819125e79b475e13c17f8bbe764be761fb45f83700d23d01d0548e85c578b478928290030190a1620000e434156007620002c5565b8051682230b0b930a1b7b4b760b91b90526020808201516244524160e81b90526040808301805160009081905281518401819052905182018190526060840151528251518151928301520160408051601f1981840301815290829052602083810151516001600160c01b031916908301529060280160408051808303601f1901815282825284820151805160208083015192850151908601919091529284015260608301919091529060800160408051601f198184030181528282526060860151516020840152910160405160208183030381529060405266038d7ea4c680006012604051620001d490620002ef565b620001e596959493929190620004bd565b604051809103906000f08015801562000202573d6000803e3d6000fd5b506001600160a01b03166080820181905260a082018190526040519081527fe1ef489e48f865342d790722bb89d558e2c5d1ae58f9443c22080f5c14bb3d6b9060200160405180910390a1604080518082018252600060208083018281523380855260a08701516001600160a01b0390811683526001948590554390945585519283015251909116928101929092529060600160405160208183030381529060405260029080519060200190620002bb929190620002fd565b5050505062000565565b81620002eb5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b610f75806200166783390190565b8280546200030b9062000528565b90600052602060002090601f0160209004810192826200032f57600085556200037a565b82601f106200034a57805160ff19168380011785556200037a565b828001600101855582156200037a579182015b828111156200037a5782518255916020019190600101906200035d565b50620003889291506200038c565b5090565b5b808211156200038857600081556001016200038d565b604080519081016001600160401b0381118282101715620003d457634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620003ee57600080fd5b620003f8620003a3565b835181526040601f19830112156200040f57600080fd5b6040519150602082016001600160401b03811183821017156200044257634e487b7160e01b600052604160045260246000fd5b6040526200044f620003a3565b60208581015182526040909501518186015282529283015250919050565b6000815180845260005b81811015620004955760208185018101518683018201520162000477565b81811115620004a8576000602083870101525b50601f01601f19169290920160200192915050565b60c081526000620004d260c08301896200046d565b8281036020840152620004e681896200046d565b90508281036040840152620004fc81886200046d565b905082810360608401526200051281876200046d565b6080840195909552505060a00152949350505050565b600181811c908216806200053d57607f821691505b602082108114156200055f57634e487b7160e01b600052602260045260246000fd5b50919050565b6110f280620005756000396000f3fe6080604052600436106100565760003560e01c80630d19a5fb1461005f5780631e93b0f1146100725780637963168e1461009657806383230757146100a95780639afc5bcc146100be578063ab53f2c6146100d157005b3661005d57005b005b61005d61006d366004610d5b565b6100f4565b34801561007e57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d6100a4366004610d5b565b6102a2565b3480156100b557600080fd5b50600154610083565b61005d6100cc366004610d73565b610438565b3480156100dd57600080fd5b506100e6610668565b60405161008d929190610db2565b6101046005600054146013610705565b61011e8135158061011757506001548235145b6014610705565b60008080556002805461013090610dec565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610dec565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610e5f565b90506101d58160e001514310156015610705565b7f64c05390f66d4c96d69b55a2d6f7bb5135997731e2b63f4a719a786bc0579627826040516102049190610f17565b60405180910390a161021834156012610705565b610220610c2a565b815181516001600160a01b039182169052602080840151835192169181019190915260408084015182840180519190915260608086015182519094019390935280514392019190915260808085015182519093019290925260a08085015182519093019290925260c0840151905190151591015261029d8161072f565b505050565b6102b2600160005414600a610705565b6102cc813515806102c557506001548235145b600b610705565b6000808055600280546102de90610dec565b80601f016020809104026020016040519081016040528092919081815260200182805461030a90610dec565b80156103575780601f1061032c57610100808354040283529160200191610357565b820191906000526020600020905b81548152906001019060200180831161033a57829003601f168201915b505050505080602001905181019061036f9190610f3c565b90507f9f41c6cf17ede288cbb2cfbbafdd05b2b2025dea3b047cdb79dbc892d7a9286d826040516103a09190610f17565b60405180910390a16103b434156008610705565b80516103cc906001600160a01b031633146009610705565b6103d4610c2a565b815181516001600160a01b039182169052602080840151835192169181019190915280820180516000908190528151909201829052805143604090910152805166038d7ea4c6800060609091018190528151608001525160a0015261029d8161072f565b610448600560005414600f610705565b6104628135158061045b57506001548235145b6010610705565b60008080556002805461047490610dec565b80601f01602080910402602001604051908101604052809291908181526020018280546104a090610dec565b80156104ed5780601f106104c2576101008083540402835291602001916104ed565b820191906000526020600020905b8154815290600101906020018083116104d057829003601f168201915b50505050508060200190518101906105059190610e5f565b90506105188160e0015143106011610705565b7fe3dd4d1e92f956195cdb05d6bf62cc37b6a849b951ebec81f91722b37d7ef9a8826040516105479190610fa9565b60405180910390a16105603460e084013514600c610705565b61058e6105736080840160608501611021565b6001600160a01b0316336001600160a01b031614600d610705565b60808101516105a59060208401351115600e610705565b6105bb816020015133846020016000013561095b565b6105c3610c2a565b815181516001600160a01b039182169052602080840151835192169181019190915260408301516105f79185013590611054565b60208201515260608201516106119060e085013590611054565b602080830180518201929092529051436040909101526080830151610639918501359061106c565b6020820180516060019190915260a08084015182516080015260c0840151915191151591015261029d8161072f565b60006060600054600280805461067d90610dec565b80601f01602080910402602001604051908101604052809291908181526020018280546106a990610dec565b80156106f65780601f106106cb576101008083540402835291602001916106f6565b820191906000526020600020905b8154815290600101906020018083116106d957829003601f168201915b50505050509050915091509091565b8161072b5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60408051602081019091526000815260208201515166038d7ea4c68000106108b6576113888260200151604001516107679190611054565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101919091528251516001600160a01b0390811682528351602090810151909116818301528084018051516040808501919091528151830151606080860191909152825101516080808601919091528251015160a080860191909152915190910151151560c0840152835160e08401526005600055436001555161088c9183910160006101008201905060018060a01b038084511683528060208501511660208401525060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c0830151151560c083015260e083015160e083015292915050565b604051602081830303815290604052600290805190602001906108b0929190610c8c565b50505050565b81515160208084015101516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156108f7573d6000803e3d6000fd5b5061091282600001516020015183602001516080015161096f565b816020015160a0015115610936576000808055600181905561072b90600290610d10565b81516020015161094590610982565b6000808055600181905561072b90600290610d10565b610966838383610997565b61029d57600080fd5b6109798282610a68565b61072b57600080fd5b61098b81610b43565b61099457600080fd5b50565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916109f691611083565b60006040518083038185875af1925050503d8060008114610a33576040519150601f19603f3d011682016040523d82523d6000602084013e610a38565b606091505b5091509150610a4982826002610be8565b5080806020019051810190610a5e919061109f565b9695505050505050565b6000806000846001600160a01b031660006342966c6860e01b86604051602401610a9491815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051610ad29190611083565b60006040518083038185875af1925050503d8060008114610b0f576040519150601f19603f3d011682016040523d82523d6000602084013e610b14565b606091505b5091509150610b2582826003610be8565b5080806020019051810190610b3a919061109f565b95945050505050565b60408051600481526024810182526020810180516001600160e01b031663083197ef60e41b1790529051600091829182916001600160a01b038616918391610b8a91611083565b60006040518083038185875af1925050503d8060008114610bc7576040519150601f19603f3d011682016040523d82523d6000602084013e610bcc565b606091505b5091509150610bdd82826004610be8565b506001949350505050565b60608315610bf7575081610c23565b825115610c075782518084602001fd5b60405163100960cb60e01b815260048101839052602401610722565b9392505050565b60408051608081018252600091810182815260608201929092529081908152602001610c876040518060c0016040528060008152602001600081526020016000815260200160008152602001600081526020016000151581525090565b905290565b828054610c9890610dec565b90600052602060002090601f016020900481019282610cba5760008555610d00565b82601f10610cd357805160ff1916838001178555610d00565b82800160010185558215610d00579182015b82811115610d00578251825591602001919060010190610ce5565b50610d0c929150610d46565b5090565b508054610d1c90610dec565b6000825580601f10610d2c575050565b601f01602090049060005260206000209081019061099491905b5b80821115610d0c5760008155600101610d47565b600060408284031215610d6d57600080fd5b50919050565b60006101008284031215610d6d57600080fd5b60005b83811015610da1578181015183820152602001610d89565b838111156108b05750506000910152565b8281526040602082015260008251806040840152610dd7816060850160208701610d86565b601f01601f1916919091016060019392505050565b600181811c90821680610e0057607f821691505b60208210811415610d6d57634e487b7160e01b600052602260045260246000fd5b6001600160a01b038116811461099457600080fd5b8051610e4181610e21565b919050565b801515811461099457600080fd5b8051610e4181610e46565b6000610100808385031215610e7357600080fd5b6040519081019067ffffffffffffffff82118183101715610ea457634e487b7160e01b600052604160045260246000fd5b8160405283519150610eb582610e21565b818152610ec460208501610e36565b602082015260408401516040820152606084015160608201526080840151608082015260a084015160a0820152610efd60c08501610e54565b60c082015260e084015160e0820152809250505092915050565b81358152604081016020830135610f2d81610e46565b80151560208401525092915050565b600060408284031215610f4e57600080fd5b6040516040810181811067ffffffffffffffff82111715610f7f57634e487b7160e01b600052604160045260246000fd5b6040528251610f8d81610e21565b81526020830151610f9d81610e21565b60208201529392505050565b81358152602080830135908201526040808301359082015261010081016060830135610fd481610e21565b6001600160a01b039081166060840152608084013590610ff382610e21565b8082166080850152505060a083013560a083015260c083013560c083015260e083013560e083015292915050565b60006020828403121561103357600080fd5b8135610c2381610e21565b634e487b7160e01b600052601160045260246000fd5b600082198211156110675761106761103e565b500190565b60008282101561107e5761107e61103e565b500390565b60008251611095818460208701610d86565b9190910192915050565b6000602082840312156110b157600080fd5b8151610c2381610e4656fea26469706673582212203b4f07686e9740d32201bb96d9a6613936faa84d25e53dcff9f0e340ba7694c264736f6c6343000809003360806040523480156200001157600080fd5b5060405162000f7538038062000f75833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610af580620004806000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806342966c681161008c57806383197ef01161006657806383197ef01461019b57806395d89b41146101a5578063a9059cbb146101ad578063dd62ed3e146101c057600080fd5b806342966c68146101575780635600f04f1461016a57806370a082311461017257600080fd5b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd14610127578063313ce5671461013a578063392f37e91461014f575b600080fd5b6100dc6101f9565b6040516100e991906108fa565b60405180910390f35b61010561010036600461096b565b61028b565b60405190151581526020016100e9565b6002545b6040519081526020016100e9565b610105610135366004610995565b6102a1565b60085460405160ff90911681526020016100e9565b6100dc610357565b6101056101653660046109d1565b610366565b6100dc6103dc565b6101196101803660046109ea565b6001600160a01b031660009081526020819052604090205490565b6101a36103eb565b005b6100dc610492565b6101056101bb36600461096b565b6104a1565b6101196101ce366004610a0c565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461020890610a3f565b80601f016020809104026020016040519081016040528092919081815260200182805461023490610a3f565b80156102815780601f1061025657610100808354040283529160200191610281565b820191906000526020600020905b81548152906001019060200180831161026457829003601f168201915b5050505050905090565b60006102983384846104ae565b50600192915050565b60006102ae8484846105d3565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103385760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b61034c85336103478685610a90565b6104ae565b506001949350505050565b60606007805461020890610a3f565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b604482015260640161032f565b6005546103d4906001600160a01b0316836107ab565b506001919050565b60606006805461020890610a3f565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b604482015260640161032f565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b604482015260640161032f565b6005546001600160a01b0316ff5b60606004805461020890610a3f565b60006102983384846105d3565b6001600160a01b0383166105105760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161032f565b6001600160a01b0382166105715760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161032f565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166106375760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161032f565b6001600160a01b0382166106995760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161032f565b6001600160a01b038316600090815260208190526040902054818110156107115760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161032f565b61071b8282610a90565b6001600160a01b038086166000908152602081905260408082209390935590851681529081208054849290610751908490610aa7565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161079d91815260200190565b60405180910390a350505050565b6001600160a01b03821661080b5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161032f565b6001600160a01b0382166000908152602081905260409020548181101561087f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161032f565b6108898282610a90565b6001600160a01b038416600090815260208190526040812091909155600280548492906108b7908490610a90565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016105c6565b600060208083528351808285015260005b818110156109275785810183015185820160400152820161090b565b81811115610939576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461096657600080fd5b919050565b6000806040838503121561097e57600080fd5b6109878361094f565b946020939093013593505050565b6000806000606084860312156109aa57600080fd5b6109b38461094f565b92506109c16020850161094f565b9150604084013590509250925092565b6000602082840312156109e357600080fd5b5035919050565b6000602082840312156109fc57600080fd5b610a058261094f565b9392505050565b60008060408385031215610a1f57600080fd5b610a288361094f565b9150610a366020840161094f565b90509250929050565b600181811c90821680610a5357607f821691505b60208210811415610a7457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082821015610aa257610aa2610a7a565b500390565b60008219821115610aba57610aba610a7a565b50019056fea2646970667358221220ec241a20bfe9409998ce9238d8277decec3d1ba61e2fdd18c27925a98e41a31f64736f6c63430008090033`,
  BytecodeLen: 9692,
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
