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
  
  
  const v166 = stdlib.protect(ctc0, interact.name, 'for NormalUser\'s interact field name');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v170], secs: v172, time: v171, didSend: v25, from: v169 } = txn1;
  ;
  const v174 = undefined;
  const v175 = await txn1.getOutput('tokenNew', 'v174', ctc1, v174);
  stdlib.protect(ctc2, await interact.acceptToken(v175), {
    at: './index.rsh:1:39:application',
    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:60:34:application call to "liftedInteract" (defined at: ./index.rsh:60:34:application)'],
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
  const {data: [], secs: v188, time: v187, didSend: v48, from: v186 } = txn2;
  ;
  const v190 = stdlib.addressEq(v169, v186);
  stdlib.assert(v190, {
    at: './index.rsh:61:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'NormalUser'
    });
  let v191 = stdlib.checkedBigNumberify('./index.rsh:63:35:decimal', stdlib.UInt_max, 0);
  let v192 = stdlib.checkedBigNumberify('./index.rsh:63:38:decimal', stdlib.UInt_max, 0);
  let v193 = v187;
  let v201 = stdlib.checkedBigNumberify('./index.rsh:51:18:decimal', stdlib.UInt_max, 50000000);
  let v202 = stdlib.checkedBigNumberify('./index.rsh:51:18:decimal', stdlib.UInt_max, 50000000);
  let v203 = false;
  
  while ((() => {
    const v210 = stdlib.le(v191, stdlib.checkedBigNumberify('./index.rsh:51:18:decimal', stdlib.UInt_max, 50000000));
    
    return v210;})()) {
    const v212 = stdlib.add(v193, stdlib.checkedBigNumberify('./index.rsh:85:29:decimal', stdlib.UInt_max, 5000));
    const v214 = ctc.selfAddress('NormalUser', true, stdlib.checkedBigNumberify('./index.rsh:69:20:application', stdlib.UInt_max, 60));
    const v217 = stdlib.div(v201, stdlib.checkedBigNumberify('./index.rsh:17:34:decimal', stdlib.UInt_max, 1000000));
    const v218 = stdlib.mul(v217, v217);
    const v219 = stdlib.mul(v218, v217);
    const v220 = stdlib.div(stdlib.checkedBigNumberify('./index.rsh:19:16:decimal', stdlib.UInt_max, 10000000), v219);
    const v221 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:19:10:decimal', stdlib.UInt_max, 70), v220);
    stdlib.protect(ctc2, await interact.showBalance(v175), {
      at: './index.rsh:73:38:application',
      fs: ['at ./index.rsh:69:20:application call to [unknown function] (defined at: ./index.rsh:69:24:function exp)'],
      msg: 'showBalance',
      who: 'NormalUser'
      });
    stdlib.protect(ctc2, await interact.displayTokenDetails(v201, v221), {
      at: './index.rsh:74:46:application',
      fs: ['at ./index.rsh:69:20:application call to [unknown function] (defined at: ./index.rsh:69:24:function exp)'],
      msg: 'displayTokenDetails',
      who: 'NormalUser'
      });
    const v224 = stdlib.protect(ctc5, await interact.buyToken(v201, v221), {
      at: './index.rsh:75:56:application',
      fs: ['at ./index.rsh:69:20:application call to [unknown function] (defined at: ./index.rsh:69:24:function exp)'],
      msg: 'buyToken',
      who: 'NormalUser'
      });
    const v225 = v224[stdlib.checkedBigNumberify('./index.rsh:75:13:array', stdlib.UInt_max, 0)];
    const v226 = v224[stdlib.checkedBigNumberify('./index.rsh:75:13:array', stdlib.UInt_max, 1)];
    const v227 = stdlib.mul(v225, v221);
    const v229 = stdlib.le(v225, v201);
    stdlib.assert(v229, {
      at: './index.rsh:77:13:application',
      fs: ['at ./index.rsh:69:20:application call to [unknown function] (defined at: ./index.rsh:69:24:function exp)'],
      msg: null,
      who: 'NormalUser'
      });
    stdlib.protect(ctc2, await interact.giveFeedBack1(), {
      at: './index.rsh:79:29:application',
      fs: ['at ./index.rsh:69:20:application call to [unknown function] (defined at: ./index.rsh:69:24:function exp)'],
      msg: 'giveFeedBack1',
      who: 'NormalUser'
      });
    
    stdlib.protect(ctc2, await interact.giveFeedBack2(), {
      at: './index.rsh:1:39:application',
      fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:81:38:application call to "liftedInteract" (defined at: ./index.rsh:81:38:application)'],
      msg: 'giveFeedBack2',
      who: 'NormalUser'
      });
    
    const v231 = stdlib.addressEq(v226, v214);
    
    const txn3 = await (ctc.sendrecv({
      args: [v169, v175, v191, v192, v201, v202, v203, v212, v225, v221, v214, v226, v166, v227],
      evt_cnt: 6,
      funcNum: 3,
      lct: v193,
      onlyIf: v231,
      out_tys: [ctc3, ctc3, ctc4, ctc4, ctc0, ctc3],
      pay: [v227, []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v233, v234, v235, v236, v237, v238], secs: v240, time: v239, didSend: v94, from: v232 } = txn3;
        
        sim_r.txns.push({
          amt: v238,
          kind: 'to',
          tok: undefined
          });
        const v243 = stdlib.addressEq(v232, v235);
        stdlib.assert(v243, {
          at: './index.rsh:94:12:application',
          fs: [],
          msg: null,
          who: 'NormalUser'
          });
        const v245 = stdlib.le(v233, v201);
        stdlib.assert(v245, {
          at: './index.rsh:96:12:application',
          fs: [],
          msg: null,
          who: 'NormalUser'
          });
        const v249 = stdlib.sub(v201, v233);
        sim_r.txns.push({
          amt: v233,
          kind: 'from',
          to: v232,
          tok: v175
          });
        
        const v251 = stdlib.add(v191, v233);
        const v252 = stdlib.add(v192, v238);
        const cv191 = v251;
        const cv192 = v252;
        const cv193 = v239;
        const cv201 = v249;
        const cv202 = v202;
        const cv203 = v203;
        
        (() => {
          const v191 = cv191;
          const v192 = cv192;
          const v193 = cv193;
          const v201 = cv201;
          const v202 = cv202;
          const v203 = cv203;
          
          if ((() => {
            const v210 = stdlib.le(v191, stdlib.checkedBigNumberify('./index.rsh:51:18:decimal', stdlib.UInt_max, 50000000));
            
            return v210;})()) {
            const v212 = stdlib.add(v193, stdlib.checkedBigNumberify('./index.rsh:85:29:decimal', stdlib.UInt_max, 5000));
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v192,
              kind: 'from',
              to: v169,
              tok: undefined
              });
            stdlib.simTokenBurn(sim_r, v175, v202);
            if (v203) {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }
            else {
              stdlib.simTokenDestroy(sim_r, v175);
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }}})();
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: ['time', v212],
      tys: [ctc4, ctc1, ctc3, ctc3, ctc3, ctc3, ctc6, ctc3, ctc3, ctc3, ctc4, ctc4, ctc0, ctc3],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v169, v175, v191, v192, v201, v202, v203, v212],
        evt_cnt: 0,
        funcNum: 4,
        lct: v193,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v255, time: v254, didSend: v117, from: v253 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          
          const cv191 = v191;
          const cv192 = v192;
          const cv193 = v254;
          const cv201 = v201;
          const cv202 = v202;
          const cv203 = v203;
          
          (() => {
            const v191 = cv191;
            const v192 = cv192;
            const v193 = cv193;
            const v201 = cv201;
            const v202 = cv202;
            const v203 = cv203;
            
            if ((() => {
              const v210 = stdlib.le(v191, stdlib.checkedBigNumberify('./index.rsh:51:18:decimal', stdlib.UInt_max, 50000000));
              
              return v210;})()) {
              const v212 = stdlib.add(v193, stdlib.checkedBigNumberify('./index.rsh:85:29:decimal', stdlib.UInt_max, 5000));
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                amt: v192,
                kind: 'from',
                to: v169,
                tok: undefined
                });
              stdlib.simTokenBurn(sim_r, v175, v202);
              if (v203) {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }
              else {
                stdlib.simTokenDestroy(sim_r, v175);
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
      const {data: [], secs: v255, time: v254, didSend: v117, from: v253 } = txn4;
      ;
      stdlib.protect(ctc2, await interact.giveFeedBack3(), {
        at: './index.rsh:1:39:application',
        fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:87:42:application call to "liftedInteract" (defined at: ./index.rsh:87:42:application)'],
        msg: 'giveFeedBack3',
        who: 'NormalUser'
        });
      
      const cv191 = v191;
      const cv192 = v192;
      const cv193 = v254;
      const cv201 = v201;
      const cv202 = v202;
      const cv203 = v203;
      
      v191 = cv191;
      v192 = cv192;
      v193 = cv193;
      v201 = cv201;
      v202 = cv202;
      v203 = cv203;
      
      continue;
      }
    else {
      const {data: [v233, v234, v235, v236, v237, v238], secs: v240, time: v239, didSend: v94, from: v232 } = txn3;
      ;
      const v243 = stdlib.addressEq(v232, v235);
      stdlib.assert(v243, {
        at: './index.rsh:94:12:application',
        fs: [],
        msg: null,
        who: 'NormalUser'
        });
      const v245 = stdlib.le(v233, v201);
      stdlib.assert(v245, {
        at: './index.rsh:96:12:application',
        fs: [],
        msg: null,
        who: 'NormalUser'
        });
      const v249 = stdlib.sub(v201, v233);
      ;
      stdlib.protect(ctc2, await interact.giveFeedBack4(), {
        at: './index.rsh:1:39:application',
        fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:98:38:application call to "liftedInteract" (defined at: ./index.rsh:98:38:application)'],
        msg: 'giveFeedBack4',
        who: 'NormalUser'
        });
      
      const v251 = stdlib.add(v191, v233);
      const v252 = stdlib.add(v192, v238);
      const cv191 = v251;
      const cv192 = v252;
      const cv193 = v239;
      const cv201 = v249;
      const cv202 = v202;
      const cv203 = v203;
      
      v191 = cv191;
      v192 = cv192;
      v193 = cv193;
      v201 = cv201;
      v202 = cv202;
      v203 = cv203;
      
      continue;}
    
    }
  ;
  undefined;
  if (v203) {
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
  
  
  const v165 = stdlib.protect(ctc0, interact.name, 'for OmegaUser\'s interact field name');
  
  const txn1 = await (ctc.sendrecv({
    args: [v165],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:48:13:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v170], secs: v172, time: v171, didSend: v25, from: v169 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v174 = stdlib.simTokenNew(sim_r, 'Daara Token                     ', 'DAR     ', '                                                                                                ', '                                ', stdlib.checkedBigNumberify('./index.rsh:51:18:decimal', stdlib.UInt_max, 50000000), undefined);
      const v175 = await txn1.getOutput('tokenNew', 'v174', ctc1, v174);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v170], secs: v172, time: v171, didSend: v25, from: v169 } = txn1;
  ;
  const v174 = undefined;
  const v175 = await txn1.getOutput('tokenNew', 'v174', ctc1, v174);
  stdlib.protect(ctc2, await interact.acceptToken(v175), {
    at: './index.rsh:57:25:application',
    fs: ['at ./index.rsh:56:17:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)'],
    msg: 'acceptToken',
    who: 'OmegaUser'
    });
  const v180 = stdlib.div(stdlib.checkedBigNumberify('./index.rsh:51:18:decimal', stdlib.UInt_max, 50000000), stdlib.checkedBigNumberify('./index.rsh:17:34:decimal', stdlib.UInt_max, 1000000));
  const v181 = stdlib.mul(v180, v180);
  const v182 = stdlib.mul(v181, v180);
  const v183 = stdlib.div(stdlib.checkedBigNumberify('./index.rsh:19:16:decimal', stdlib.UInt_max, 10000000), v182);
  const v184 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:19:10:decimal', stdlib.UInt_max, 70), v183);
  stdlib.protect(ctc2, await interact.displayTokenDetails(stdlib.checkedBigNumberify('./index.rsh:51:18:decimal', stdlib.UInt_max, 50000000), v184), {
    at: './index.rsh:58:44:application',
    fs: ['at ./index.rsh:56:17:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)'],
    msg: 'displayTokenDetails',
    who: 'OmegaUser'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v169, v175],
    evt_cnt: 0,
    funcNum: 1,
    lct: v171,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v188, time: v187, didSend: v48, from: v186 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v190 = stdlib.addressEq(v169, v186);
      stdlib.assert(v190, {
        at: './index.rsh:61:13:dot',
        fs: [],
        msg: 'sender correct',
        who: 'OmegaUser'
        });
      const v191 = stdlib.checkedBigNumberify('./index.rsh:63:35:decimal', stdlib.UInt_max, 0);
      const v192 = stdlib.checkedBigNumberify('./index.rsh:63:38:decimal', stdlib.UInt_max, 0);
      const v193 = v187;
      const v201 = stdlib.checkedBigNumberify('./index.rsh:51:18:decimal', stdlib.UInt_max, 50000000);
      const v202 = stdlib.checkedBigNumberify('./index.rsh:51:18:decimal', stdlib.UInt_max, 50000000);
      const v203 = false;
      
      if ((() => {
        const v210 = stdlib.le(v191, stdlib.checkedBigNumberify('./index.rsh:51:18:decimal', stdlib.UInt_max, 50000000));
        
        return v210;})()) {
        const v212 = stdlib.add(v193, stdlib.checkedBigNumberify('./index.rsh:85:29:decimal', stdlib.UInt_max, 5000));
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          amt: v192,
          kind: 'from',
          to: v169,
          tok: undefined
          });
        stdlib.simTokenBurn(sim_r, v175, v202);
        if (v203) {
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          }
        else {
          stdlib.simTokenDestroy(sim_r, v175);
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
  const {data: [], secs: v188, time: v187, didSend: v48, from: v186 } = txn2;
  ;
  const v190 = stdlib.addressEq(v169, v186);
  stdlib.assert(v190, {
    at: './index.rsh:61:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'OmegaUser'
    });
  let v191 = stdlib.checkedBigNumberify('./index.rsh:63:35:decimal', stdlib.UInt_max, 0);
  let v192 = stdlib.checkedBigNumberify('./index.rsh:63:38:decimal', stdlib.UInt_max, 0);
  let v193 = v187;
  let v201 = stdlib.checkedBigNumberify('./index.rsh:51:18:decimal', stdlib.UInt_max, 50000000);
  let v202 = stdlib.checkedBigNumberify('./index.rsh:51:18:decimal', stdlib.UInt_max, 50000000);
  let v203 = false;
  
  while ((() => {
    const v210 = stdlib.le(v191, stdlib.checkedBigNumberify('./index.rsh:51:18:decimal', stdlib.UInt_max, 50000000));
    
    return v210;})()) {
    const v212 = stdlib.add(v193, stdlib.checkedBigNumberify('./index.rsh:85:29:decimal', stdlib.UInt_max, 5000));
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 6,
      funcNum: 3,
      out_tys: [ctc3, ctc3, ctc4, ctc4, ctc0, ctc3],
      timeoutAt: ['time', v212],
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
      const {data: [], secs: v255, time: v254, didSend: v117, from: v253 } = txn4;
      ;
      const cv191 = v191;
      const cv192 = v192;
      const cv193 = v254;
      const cv201 = v201;
      const cv202 = v202;
      const cv203 = v203;
      
      v191 = cv191;
      v192 = cv192;
      v193 = cv193;
      v201 = cv201;
      v202 = cv202;
      v203 = cv203;
      
      continue;
      }
    else {
      const {data: [v233, v234, v235, v236, v237, v238], secs: v240, time: v239, didSend: v94, from: v232 } = txn3;
      ;
      const v243 = stdlib.addressEq(v232, v235);
      stdlib.assert(v243, {
        at: './index.rsh:94:12:application',
        fs: [],
        msg: null,
        who: 'OmegaUser'
        });
      const v245 = stdlib.le(v233, v201);
      stdlib.assert(v245, {
        at: './index.rsh:96:12:application',
        fs: [],
        msg: null,
        who: 'OmegaUser'
        });
      const v249 = stdlib.sub(v201, v233);
      ;
      const v251 = stdlib.add(v191, v233);
      const v252 = stdlib.add(v192, v238);
      const cv191 = v251;
      const cv192 = v252;
      const cv193 = v239;
      const cv201 = v249;
      const cv202 = v202;
      const cv203 = v203;
      
      v191 = cv191;
      v192 = cv192;
      v193 = cv193;
      v201 = cv201;
      v202 = cv202;
      v203 = cv203;
      
      continue;}
    
    }
  ;
  undefined;
  if (v203) {
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
int 96
==
assert
dup
extract 0 32
store 255
dup
extract 32 64
store 254
pop
txn Sender
global CreatorAddress
==
assert
load 255
store 3
// "CheckPay"
// "./index.rsh:48:13:dot"
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
// "./index.rsh:48:13:dot"
// "[]"
int 100000
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
l2_checkTxnK:
pop
load 0
dup
int 1
+
store 0
int acfg
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
int 0
dig 1
gtxns ConfigAsset
==
assert
int 50000000
dig 1
gtxns ConfigAssetTotal
==
assert
int 6
dig 1
gtxns ConfigAssetDecimals
==
assert
int 0
dig 1
gtxns ConfigAssetDefaultFrozen
==
assert
byte base64(REFSAAAAAAA=)
dig 1
gtxns ConfigAssetUnitName
==
assert
byte base64(RGFhcmEgVG9rZW4AAAAAAAAAAAAAAAAAAAAAAAAAAAA=)
dig 1
gtxns ConfigAssetName
==
assert
int 96
bzero
dig 1
gtxns ConfigAssetURL
==
assert
global ZeroAddress
dig 1
gtxns ConfigAssetMetadataHash
==
assert
load 3
dig 1
gtxns ConfigAssetManager
==
assert
global ZeroAddress
dig 1
gtxns ConfigAssetReserve
==
assert
global ZeroAddress
dig 1
gtxns ConfigAssetFreeze
==
assert
global ZeroAddress
dig 1
gtxns ConfigAssetClawback
==
assert
gaids
store 253
byte base64(AAAAAAAAAK4=)
load 253
itob
concat
log // 16
load 253
store 252
txn Sender
load 252
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
// "./index.rsh:61:13:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:61:13:dot"
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
byte base64(AAAAAAL68IA=)
concat
byte base64(AAAAAAL68IA=)
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
// "./index.rsh:82:16:dot"
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
load 3
dig 1
gtxns Receiver
==
assert
l6_checkTxnK:
pop
// Nothing
// "./index.rsh:94:12:application"
// "[]"
txn Sender
load 245
==
assert
// Nothing
// "./index.rsh:96:12:application"
// "[]"
load 247
load 251
<=
assert
load 247
dup
bz l7_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns AssetAmount
==
assert
load 254
dig 1
gtxns XferAsset
==
assert
int axfer
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
txn Sender
dig 1
gtxns AssetReceiver
==
assert
l7_checkTxnK:
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
// "./index.rsh:86:20:dot"
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
int 50000000
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
bz l10_checkTxnK
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
load 249
dig 1
gtxns Receiver
==
assert
l10_checkTxnK:
pop
load 250
bz l11_ifF
int 0
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
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l12_checkTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l11_ifF:
load 0
dup
int 1
+
store 0
int acfg
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
load 248
dig 1
gtxns ConfigAsset
==
assert
int 0
dig 1
gtxns ConfigAssetTotal
==
assert
int 0
dig 1
gtxns ConfigAssetDecimals
==
assert
int 0
dig 1
gtxns ConfigAssetDefaultFrozen
==
assert
byte base64()
dig 1
gtxns ConfigAssetUnitName
==
assert
byte base64()
dig 1
gtxns ConfigAssetName
==
assert
byte base64()
dig 1
gtxns ConfigAssetURL
==
assert
global ZeroAddress
dig 1
gtxns ConfigAssetMetadataHash
==
assert
global ZeroAddress
dig 1
gtxns ConfigAssetManager
==
assert
global ZeroAddress
dig 1
gtxns ConfigAssetReserve
==
assert
global ZeroAddress
dig 1
gtxns ConfigAssetFreeze
==
assert
global ZeroAddress
dig 1
gtxns ConfigAssetClawback
==
assert
pop
int 0
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
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l13_checkTxnK:
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
  stateSize: 81,
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
                "name": "v170",
                "type": "uint8[64]"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
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
                "name": "v170",
                "type": "uint8[64]"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
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
                "name": "v233",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v234",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v235",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v236",
                "type": "address"
              },
              {
                "internalType": "uint8[64]",
                "name": "v237",
                "type": "uint8[64]"
              },
              {
                "internalType": "uint256",
                "name": "v238",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
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
        "internalType": "struct T6",
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
        "name": "v174",
        "type": "address"
      }
    ],
    "name": "oe_v174",
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
                "name": "v233",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v234",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v235",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v236",
                "type": "address"
              },
              {
                "internalType": "uint8[64]",
                "name": "v237",
                "type": "uint8[64]"
              },
              {
                "internalType": "uint256",
                "name": "v238",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
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
        "internalType": "struct T6",
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
  Bytecode: `0x608060405260405162002d0838038062002d08833981016040819052620000269162000a35565b60008080556040805180820182528281526020810192909252517fb4d64ad71b5977972232e61845581f6e9efd6e0cc991c790c2ed822931edc49d906200006f90849062000ae8565b60405180910390a16200008534156007620006fb565b6040805161040081018252604481526061602080830182905292820181905260726060830152608082015260a0810191909152605460c0820152606f60e0820152606b6101008201526065610120820152606e6101408201526000610160820181905261018082018190526101a082018190526101c082018190526101e08201819052610200820181905261022082018190526102408201819052610260820181905261028082018190526102a082018190526102c082018190526102e08201819052610300820181905261032082018190526103408201819052610360820181905261038082018190526103a082018190526103c082018190526103e0820152620001919062000725565b604080516101008101825260448152604160208201526052918101919091526000606082018190526080820181905260a0820181905260c0820181905260e0820152620001de90620007c5565b60408051610c0081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e08101829052610800810182905261082081018290526108408101829052610860810182905261088081018290526108a081018290526108c081018290526108e08101829052610900810182905261092081018290526109408101829052610960810182905261098081018290526109a081018290526109c081018290526109e08101829052610a008101829052610a208101829052610a408101829052610a608101829052610a808101829052610aa08101829052610ac08101829052610ae08101829052610b008101829052610b208101829052610b408101829052610b608101829052610b808101829052610ba08101829052610bc08101829052610be0810191909152620004ea906200085e565b6040805161040081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e0810191909152620005f69062000725565b6302faf08060126040516200060b90620008f5565b6200061c9695949392919062000b7e565b604051809103906000f08015801562000639573d6000803e3d6000fd5b506001600160a01b031680825260208083018290526040519182527fe3fe374a94069fdb27f4d4e8c8884e190d676dab6a592f736207dfdeeaa7923c910160405180910390a16040805180820182526000602080830182815233808552868301516001600160a01b0390811683526001948590554390945585519283015251909116928101929092529060600160405160208183030381529060405260029080519060200190620006ec92919062000903565b5050436003555062000c6b9050565b81620007215760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160208082528183019092526060916000919060208201818036833701905050905060005b60208160ff161015620007be57838160ff166020811062000772576200077262000be9565b602002015160f81b828260ff168151811062000792576200079262000be9565b60200101906001600160f81b031916908160001a90535080620007b58162000bff565b9150506200074d565b5092915050565b6040805160088082528183019092526060916000919060208201818036833701905050905060005b60088160ff161015620007be57838160ff166008811062000812576200081262000be9565b602002015160f81b828260ff168151811062000832576200083262000be9565b60200101906001600160f81b031916908160001a90535080620008558162000bff565b915050620007ed565b604080516060808252608082019092526000908260208201818036833701905050905060005b60608160ff161015620007be57838160ff1660608110620008a957620008a962000be9565b602002015160f81b828260ff1681518110620008c957620008c962000be9565b60200101906001600160f81b031916908160001a90535080620008ec8162000bff565b91505062000884565b610f758062001d9383390190565b828054620009119062000c2e565b90600052602060002090601f01602090048101928262000935576000855562000980565b82601f106200095057805160ff191683800117855562000980565b8280016001018555821562000980579182015b828111156200098057825182559160200191906001019062000963565b506200098e92915062000992565b5090565b5b808211156200098e576000815560010162000993565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715620009e457620009e4620009a9565b60405290565b604051602081016001600160401b0381118282101715620009e457620009e4620009a9565b60405161080081016001600160401b0381118282101715620009e457620009e4620009a9565b60008183036108208082121562000a4b57600080fd5b62000a55620009bf565b845181526020610800601f198501121562000a6f57600080fd5b62000a79620009ea565b935086603f87011262000a8b57600080fd5b62000a9562000a0f565b92860192808885111562000aa857600080fd5b8288015b8581101562000ad657805160ff8116811462000ac85760008081fd5b835291830191830162000aac565b50855250810192909252509392505050565b81518152602080830151516108208301919060008285015b604082101562000b2457825160ff1681529183019160019190910190830162000b00565b5050505092915050565b6000815180845260005b8181101562000b565760208185018101518683018201520162000b38565b8181111562000b69576000602083870101525b50601f01601f19169290920160200192915050565b60c08152600062000b9360c083018962000b2e565b828103602084015262000ba7818962000b2e565b9050828103604084015262000bbd818862000b2e565b9050828103606084015262000bd3818762000b2e565b6080840195909552505060a00152949350505050565b634e487b7160e01b600052603260045260246000fd5b600060ff821660ff81141562000c2557634e487b7160e01b600052601160045260246000fd5b60010192915050565b600181811c9082168062000c4357607f821691505b6020821081141562000c6557634e487b7160e01b600052602260045260246000fd5b50919050565b6111188062000c7b6000396000f3fe6080604052600436106100565760003560e01c80630d19a5fb1461005f5780631e93b0f1146100725780633401eb6f146100965780637963168e146100a957806383230757146100bc578063ab53f2c6146100d157005b3661005d57005b005b61005d61006d366004610d57565b6100f4565b34801561007e57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d6100a4366004610d6f565b6102a2565b61005d6100b7366004610d57565b6104d4565b3480156100c857600080fd5b50600154610083565b3480156100dd57600080fd5b506100e6610667565b60405161008d929190610dae565b6101046005600054146013610704565b61011e8135158061011757506001548235145b6014610704565b60008080556002805461013090610de8565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610de8565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610e5b565b90506101d58160e001514310156015610704565b7f64c05390f66d4c96d69b55a2d6f7bb5135997731e2b63f4a719a786bc0579627826040516102049190610f13565b60405180910390a161021834156012610704565b610220610c26565b815181516001600160a01b039182169052602080840151835192169181019190915260408084015182840180519190915260608086015182519094019390935280514392019190915260808085015182519093019290925260a08085015182519093019290925260c0840151905190151591015261029d8161072e565b505050565b6102b2600560005414600f610704565b6102cc813515806102c557506001548235145b6010610704565b6000808055600280546102de90610de8565b80601f016020809104026020016040519081016040528092919081815260200182805461030a90610de8565b80156103575780601f1061032c57610100808354040283529160200191610357565b820191906000526020600020905b81548152906001019060200180831161033a57829003601f168201915b505050505080602001905181019061036f9190610e5b565b90506103828160e0015143106011610704565b7fc8e5f648f1063f46782355026d0ab8f7c5ffb0c2c39590e608122103941f75b0826040516103b19190610f38565b60405180910390a16103cb346108a084013514600c610704565b6103f96103de6080840160608501610fda565b6001600160a01b0316336001600160a01b031614600d610704565b60808101516104109060208401351115600e610704565b6104268160200151338460200160000135610957565b61042e610c26565b815181516001600160a01b03918216905260208084015183519216918101919091526040830151610462918501359061100d565b602082015152606082015161047d906108a08501359061100d565b6020808301805182019290925290514360409091015260808301516104a59185013590611025565b6020820180516060019190915260a08084015182516080015260c0840151915191151591015261029d8161072e565b6104e4600160005414600a610704565b6104fe813515806104f757506001548235145b600b610704565b60008080556002805461051090610de8565b80601f016020809104026020016040519081016040528092919081815260200182805461053c90610de8565b80156105895780601f1061055e57610100808354040283529160200191610589565b820191906000526020600020905b81548152906001019060200180831161056c57829003601f168201915b50505050508060200190518101906105a1919061103c565b90507f9f41c6cf17ede288cbb2cfbbafdd05b2b2025dea3b047cdb79dbc892d7a9286d826040516105d29190610f13565b60405180910390a16105e634156008610704565b80516105fe906001600160a01b031633146009610704565b610606610c26565b815181516001600160a01b03918216905260208084015183519216918101919091528082018051600090819052815190920182905280514360409091015280516302faf08060609091018190528151608001525160a0015261029d8161072e565b60006060600054600280805461067c90610de8565b80601f01602080910402602001604051908101604052809291908181526020018280546106a890610de8565b80156106f55780601f106106ca576101008083540402835291602001916106f5565b820191906000526020600020905b8154815290600101906020018083116106d857829003601f168201915b50505050509050915091509091565b8161072a5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6040805160208101909152600081526020820151516302faf080106108b257611388826020015160400151610763919061100d565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101919091528251516001600160a01b0390811682528351602090810151909116818301528084018051516040808501919091528151830151606080860191909152825101516080808601919091528251015160a080860191909152915190910151151560c0840152835160e0840152600560005543600155516108889183910160006101008201905060018060a01b038084511683528060208501511660208401525060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c0830151151560c083015260e083015160e083015292915050565b604051602081830303815290604052600290805190602001906108ac929190610c88565b50505050565b81515160208084015101516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156108f3573d6000803e3d6000fd5b5061090e82600001516020015183602001516080015161096b565b816020015160a0015115610932576000808055600181905561072a90600290610d0c565b8151602001516109419061097e565b6000808055600181905561072a90600290610d0c565b610962838383610993565b61029d57600080fd5b6109758282610a64565b61072a57600080fd5b61098781610b3f565b61099057600080fd5b50565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916109f2916110a9565b60006040518083038185875af1925050503d8060008114610a2f576040519150601f19603f3d011682016040523d82523d6000602084013e610a34565b606091505b5091509150610a4582826002610be4565b5080806020019051810190610a5a91906110c5565b9695505050505050565b6000806000846001600160a01b031660006342966c6860e01b86604051602401610a9091815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051610ace91906110a9565b60006040518083038185875af1925050503d8060008114610b0b576040519150601f19603f3d011682016040523d82523d6000602084013e610b10565b606091505b5091509150610b2182826003610be4565b5080806020019051810190610b3691906110c5565b95945050505050565b60408051600481526024810182526020810180516001600160e01b031663083197ef60e41b1790529051600091829182916001600160a01b038616918391610b86916110a9565b60006040518083038185875af1925050503d8060008114610bc3576040519150601f19603f3d011682016040523d82523d6000602084013e610bc8565b606091505b5091509150610bd982826004610be4565b506001949350505050565b60608315610bf3575081610c1f565b825115610c035782518084602001fd5b60405163100960cb60e01b815260048101839052602401610721565b9392505050565b60408051608081018252600091810182815260608201929092529081908152602001610c836040518060c0016040528060008152602001600081526020016000815260200160008152602001600081526020016000151581525090565b905290565b828054610c9490610de8565b90600052602060002090601f016020900481019282610cb65760008555610cfc565b82601f10610ccf57805160ff1916838001178555610cfc565b82800160010185558215610cfc579182015b82811115610cfc578251825591602001919060010190610ce1565b50610d08929150610d42565b5090565b508054610d1890610de8565b6000825580601f10610d28575050565b601f01602090049060005260206000209081019061099091905b5b80821115610d085760008155600101610d43565b600060408284031215610d6957600080fd5b50919050565b60006108c08284031215610d6957600080fd5b60005b83811015610d9d578181015183820152602001610d85565b838111156108ac5750506000910152565b8281526040602082015260008251806040840152610dd3816060850160208701610d82565b601f01601f1916919091016060019392505050565b600181811c90821680610dfc57607f821691505b60208210811415610d6957634e487b7160e01b600052602260045260246000fd5b6001600160a01b038116811461099057600080fd5b8051610e3d81610e1d565b919050565b801515811461099057600080fd5b8051610e3d81610e42565b6000610100808385031215610e6f57600080fd5b6040519081019067ffffffffffffffff82118183101715610ea057634e487b7160e01b600052604160045260246000fd5b8160405283519150610eb182610e1d565b818152610ec060208501610e32565b602082015260408401516040820152606084015160608201526080840151608082015260a084015160a0820152610ef960c08501610e50565b60c082015260e084015160e0820152809250505092915050565b81358152604081016020830135610f2981610e42565b80151560208401525092915050565b8135815260208083013581830152604080840135818401526108c0830191906060850135610f6581610e1d565b6001600160a01b039081166060860152608086013590610f8482610e1d565b16608085015260a08085019086016000805b84811015610fc257823560ff8116808214610faf578384fd5b8552509285019291850191600101610f96565b5050505050506108a080840135818401525092915050565b600060208284031215610fec57600080fd5b8135610c1f81610e1d565b634e487b7160e01b600052601160045260246000fd5b6000821982111561102057611020610ff7565b500190565b60008282101561103757611037610ff7565b500390565b60006040828403121561104e57600080fd5b6040516040810181811067ffffffffffffffff8211171561107f57634e487b7160e01b600052604160045260246000fd5b604052825161108d81610e1d565b8152602083015161109d81610e1d565b60208201529392505050565b600082516110bb818460208701610d82565b9190910192915050565b6000602082840312156110d757600080fd5b8151610c1f81610e4256fea264697066735822122031c9c58681ac28e9a71ca9b338c03e061819a74d6c84657b809382deda1d303164736f6c6343000809003360806040523480156200001157600080fd5b5060405162000f7538038062000f75833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610af580620004806000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806342966c681161008c57806383197ef01161006657806383197ef01461019b57806395d89b41146101a5578063a9059cbb146101ad578063dd62ed3e146101c057600080fd5b806342966c68146101575780635600f04f1461016a57806370a082311461017257600080fd5b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd14610127578063313ce5671461013a578063392f37e91461014f575b600080fd5b6100dc6101f9565b6040516100e991906108fa565b60405180910390f35b61010561010036600461096b565b61028b565b60405190151581526020016100e9565b6002545b6040519081526020016100e9565b610105610135366004610995565b6102a1565b60085460405160ff90911681526020016100e9565b6100dc610357565b6101056101653660046109d1565b610366565b6100dc6103dc565b6101196101803660046109ea565b6001600160a01b031660009081526020819052604090205490565b6101a36103eb565b005b6100dc610492565b6101056101bb36600461096b565b6104a1565b6101196101ce366004610a0c565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461020890610a3f565b80601f016020809104026020016040519081016040528092919081815260200182805461023490610a3f565b80156102815780601f1061025657610100808354040283529160200191610281565b820191906000526020600020905b81548152906001019060200180831161026457829003601f168201915b5050505050905090565b60006102983384846104ae565b50600192915050565b60006102ae8484846105d3565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103385760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b61034c85336103478685610a90565b6104ae565b506001949350505050565b60606007805461020890610a3f565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b604482015260640161032f565b6005546103d4906001600160a01b0316836107ab565b506001919050565b60606006805461020890610a3f565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b604482015260640161032f565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b604482015260640161032f565b6005546001600160a01b0316ff5b60606004805461020890610a3f565b60006102983384846105d3565b6001600160a01b0383166105105760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161032f565b6001600160a01b0382166105715760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161032f565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166106375760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161032f565b6001600160a01b0382166106995760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161032f565b6001600160a01b038316600090815260208190526040902054818110156107115760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161032f565b61071b8282610a90565b6001600160a01b038086166000908152602081905260408082209390935590851681529081208054849290610751908490610aa7565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161079d91815260200190565b60405180910390a350505050565b6001600160a01b03821661080b5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161032f565b6001600160a01b0382166000908152602081905260409020548181101561087f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161032f565b6108898282610a90565b6001600160a01b038416600090815260208190526040812091909155600280548492906108b7908490610a90565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016105c6565b600060208083528351808285015260005b818110156109275785810183015185820160400152820161090b565b81811115610939576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461096657600080fd5b919050565b6000806040838503121561097e57600080fd5b6109878361094f565b946020939093013593505050565b6000806000606084860312156109aa57600080fd5b6109b38461094f565b92506109c16020850161094f565b9150604084013590509250925092565b6000602082840312156109e357600080fd5b5035919050565b6000602082840312156109fc57600080fd5b610a058261094f565b9392505050565b60008060408385031215610a1f57600080fd5b610a288361094f565b9150610a366020840161094f565b90509250929050565b600181811c90821680610a5357607f821691505b60208210811415610a7457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082821015610aa257610aa2610a7a565b500390565b60008219821115610aba57610aba610a7a565b50019056fea2646970667358221220e81e4a198ae989c80679d7605c4bc289f600c25dbefccf34eb2d72b2ebd20bc964736f6c63430008090033`,
  BytecodeLen: 11528,
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
