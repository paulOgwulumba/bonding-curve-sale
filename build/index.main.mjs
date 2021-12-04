// Automatically generated with Reach 0.1.6 (66f7fd96)
/* eslint-disable */
export const _version = '0.1.6';
export const _versionHash = '0.1.6 (66f7fd96)';
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
  
  
  const v614 = stdlib.protect(ctc0, interact.name, 'for NormalUser\'s interact field name');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v618], secs: v620, time: v619, didSend: v25, from: v617 } = txn1;
  ;
  const v622 = '01234567890123456789012345678901';
  const v623 = '01234567';
  const v624 = '                                                                                                ';
  const v625 = '                                ';
  const v626 = undefined;
  const v627 = await txn1.getOutput('tokenNew', 'v626', ctc1, v626);
  stdlib.protect(ctc2, await interact.acceptToken(v627), {
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
  const {data: [], secs: v762, time: v761, didSend: v199, from: v760 } = txn2;
  ;
  const v764 = stdlib.addressEq(v617, v760);
  stdlib.assert(v764, {
    at: './index.rsh:61:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'NormalUser'
    });
  let v765 = stdlib.checkedBigNumberify('./index.rsh:63:39:decimal', stdlib.UInt_max, 0);
  let v766 = stdlib.checkedBigNumberify('./index.rsh:63:42:decimal', stdlib.UInt_max, 0);
  let v767 = v761;
  let v774 = stdlib.checkedBigNumberify('./index.rsh:51:18:decimal', stdlib.UInt_max, 10000000000);
  let v775 = stdlib.checkedBigNumberify('./index.rsh:51:18:decimal', stdlib.UInt_max, 10000000000);
  let v776 = false;
  
  while ((() => {
    const v783 = stdlib.le(v765, stdlib.checkedBigNumberify('./index.rsh:51:18:decimal', stdlib.UInt_max, 10000000000));
    
    return v783;})()) {
    const v785 = stdlib.add(v767, stdlib.checkedBigNumberify('./index.rsh:82:29:decimal', stdlib.UInt_max, 5));
    const v787 = ctc.selfAddress();
    let v790;
    const v791 = stdlib.div(v774, stdlib.checkedBigNumberify('./index.rsh:22:32:decimal', stdlib.UInt_max, 17));
    const v792 = stdlib.eq(v774, stdlib.checkedBigNumberify('./index.rsh:23:21:decimal', stdlib.UInt_max, 0));
    if (v792) {
      v790 = stdlib.checkedBigNumberify('./index.rsh:23:31:decimal', stdlib.UInt_max, 50000);
      }
    else {
      const v793 = stdlib.div(v791, stdlib.checkedBigNumberify('reach standard library:215:34:decimal', stdlib.UInt_max, 2));
      const v794 = stdlib.add(v793, stdlib.checkedBigNumberify('reach standard library:215:38:decimal', stdlib.UInt_max, 1));
      const v797 = stdlib.lt(v794, stdlib.checkedBigNumberify('reach standard library:216:10:decimal', stdlib.UInt_max, 2));
      const v798 = stdlib.lt(v794, v791);
      const v799 = stdlib.div(v791, v794);
      const v800 = stdlib.add(v799, v794);
      const v801 = stdlib.div(v800, stdlib.checkedBigNumberify('reach standard library:219:29:decimal', stdlib.UInt_max, 2));
      const v802 = [v794, v801];
      const v803 = [v791, v794];
      const v804 = v798 ? v802 : v803;
      const v805 = [v794, v794];
      const v806 = v797 ? v805 : v804;
      const v807 = v806[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 0)];
      const v808 = v806[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 1)];
      const v809 = stdlib.lt(v808, stdlib.checkedBigNumberify('reach standard library:216:10:decimal', stdlib.UInt_max, 2));
      const v810 = stdlib.lt(v808, v807);
      const v811 = stdlib.div(v791, v808);
      const v812 = stdlib.add(v811, v808);
      const v813 = stdlib.div(v812, stdlib.checkedBigNumberify('reach standard library:219:29:decimal', stdlib.UInt_max, 2));
      const v814 = [v808, v813];
      const v815 = [v807, v808];
      const v816 = v810 ? v814 : v815;
      const v817 = [v808, v808];
      const v818 = v809 ? v817 : v816;
      const v819 = v818[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 0)];
      const v820 = v818[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 1)];
      const v821 = stdlib.lt(v820, stdlib.checkedBigNumberify('reach standard library:216:10:decimal', stdlib.UInt_max, 2));
      const v822 = stdlib.lt(v820, v819);
      const v823 = stdlib.div(v791, v820);
      const v824 = stdlib.add(v823, v820);
      const v825 = stdlib.div(v824, stdlib.checkedBigNumberify('reach standard library:219:29:decimal', stdlib.UInt_max, 2));
      const v826 = [v820, v825];
      const v827 = [v819, v820];
      const v828 = v822 ? v826 : v827;
      const v829 = [v820, v820];
      const v830 = v821 ? v829 : v828;
      const v831 = v830[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 0)];
      const v832 = v830[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 1)];
      const v833 = stdlib.lt(v832, stdlib.checkedBigNumberify('reach standard library:216:10:decimal', stdlib.UInt_max, 2));
      const v834 = stdlib.lt(v832, v831);
      const v835 = stdlib.div(v791, v832);
      const v836 = stdlib.add(v835, v832);
      const v837 = stdlib.div(v836, stdlib.checkedBigNumberify('reach standard library:219:29:decimal', stdlib.UInt_max, 2));
      const v838 = [v832, v837];
      const v839 = [v831, v832];
      const v840 = v834 ? v838 : v839;
      const v841 = [v832, v832];
      const v842 = v833 ? v841 : v840;
      const v843 = v842[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 0)];
      const v844 = v842[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 1)];
      const v845 = stdlib.lt(v844, stdlib.checkedBigNumberify('reach standard library:216:10:decimal', stdlib.UInt_max, 2));
      const v846 = stdlib.lt(v844, v843);
      const v847 = stdlib.div(v791, v844);
      const v848 = stdlib.add(v847, v844);
      const v849 = stdlib.div(v848, stdlib.checkedBigNumberify('reach standard library:219:29:decimal', stdlib.UInt_max, 2));
      const v850 = [v844, v849];
      const v851 = [v843, v844];
      const v852 = v846 ? v850 : v851;
      const v853 = [v844, v844];
      const v854 = v845 ? v853 : v852;
      const v855 = v854[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 0)];
      const v856 = v854[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 1)];
      const v857 = stdlib.lt(v856, stdlib.checkedBigNumberify('reach standard library:216:10:decimal', stdlib.UInt_max, 2));
      const v858 = stdlib.lt(v856, v855);
      const v859 = stdlib.div(v791, v856);
      const v860 = stdlib.add(v859, v856);
      const v861 = stdlib.div(v860, stdlib.checkedBigNumberify('reach standard library:219:29:decimal', stdlib.UInt_max, 2));
      const v862 = [v856, v861];
      const v863 = [v855, v856];
      const v864 = v858 ? v862 : v863;
      const v865 = [v856, v856];
      const v866 = v857 ? v865 : v864;
      const v867 = v866[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 0)];
      const v868 = v866[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 1)];
      const v869 = stdlib.lt(v868, stdlib.checkedBigNumberify('reach standard library:216:10:decimal', stdlib.UInt_max, 2));
      const v870 = stdlib.lt(v868, v867);
      const v871 = stdlib.div(v791, v868);
      const v872 = stdlib.add(v871, v868);
      const v873 = stdlib.div(v872, stdlib.checkedBigNumberify('reach standard library:219:29:decimal', stdlib.UInt_max, 2));
      const v874 = [v868, v873];
      const v875 = [v867, v868];
      const v876 = v870 ? v874 : v875;
      const v877 = [v868, v868];
      const v878 = v869 ? v877 : v876;
      const v879 = v878[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 0)];
      const v880 = v878[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 1)];
      const v881 = stdlib.lt(v880, stdlib.checkedBigNumberify('reach standard library:216:10:decimal', stdlib.UInt_max, 2));
      const v882 = stdlib.lt(v880, v879);
      const v883 = stdlib.div(v791, v880);
      const v884 = stdlib.add(v883, v880);
      const v885 = stdlib.div(v884, stdlib.checkedBigNumberify('reach standard library:219:29:decimal', stdlib.UInt_max, 2));
      const v886 = [v880, v885];
      const v887 = [v879, v880];
      const v888 = v882 ? v886 : v887;
      const v889 = [v880, v880];
      const v890 = v881 ? v889 : v888;
      const v891 = v890[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 0)];
      const v892 = v890[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 1)];
      const v893 = stdlib.lt(v892, stdlib.checkedBigNumberify('reach standard library:216:10:decimal', stdlib.UInt_max, 2));
      const v894 = stdlib.lt(v892, v891);
      const v895 = stdlib.div(v791, v892);
      const v896 = stdlib.add(v895, v892);
      const v897 = stdlib.div(v896, stdlib.checkedBigNumberify('reach standard library:219:29:decimal', stdlib.UInt_max, 2));
      const v898 = [v892, v897];
      const v899 = [v891, v892];
      const v900 = v894 ? v898 : v899;
      const v901 = [v892, v892];
      const v902 = v893 ? v901 : v900;
      const v903 = v902[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 0)];
      const v904 = v902[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 1)];
      const v905 = stdlib.lt(v904, stdlib.checkedBigNumberify('reach standard library:216:10:decimal', stdlib.UInt_max, 2));
      const v906 = stdlib.lt(v904, v903);
      const v907 = stdlib.div(v791, v904);
      const v908 = stdlib.add(v907, v904);
      const v909 = stdlib.div(v908, stdlib.checkedBigNumberify('reach standard library:219:29:decimal', stdlib.UInt_max, 2));
      const v910 = [v904, v909];
      const v911 = [v903, v904];
      const v912 = v906 ? v910 : v911;
      const v913 = [v904, v904];
      const v914 = v905 ? v913 : v912;
      const v915 = v914[stdlib.checkedBigNumberify('reach standard library:221:8:array ref', stdlib.UInt_max, 1)];
      const v916 = stdlib.div(stdlib.checkedBigNumberify('./index.rsh:24:16:decimal', stdlib.UInt_max, 5000000), v915);
      v790 = v916;
      }
    stdlib.protect(ctc2, await interact.showBalance(v627), {
      at: './index.rsh:73:38:application',
      fs: ['at ./index.rsh:69:20:application call to [unknown function] (defined at: ./index.rsh:69:24:function exp)'],
      msg: 'showBalance',
      who: 'NormalUser'
      });
    stdlib.protect(ctc2, await interact.displayTokenDetails(v774, v790), {
      at: './index.rsh:74:46:application',
      fs: ['at ./index.rsh:69:20:application call to [unknown function] (defined at: ./index.rsh:69:24:function exp)'],
      msg: 'displayTokenDetails',
      who: 'NormalUser'
      });
    const v919 = stdlib.protect(ctc5, await interact.buyToken(v774, v790), {
      at: './index.rsh:75:56:application',
      fs: ['at ./index.rsh:69:20:application call to [unknown function] (defined at: ./index.rsh:69:24:function exp)'],
      msg: 'buyToken',
      who: 'NormalUser'
      });
    const v920 = v919[stdlib.checkedBigNumberify('./index.rsh:75:13:array', stdlib.UInt_max, 0)];
    const v921 = v919[stdlib.checkedBigNumberify('./index.rsh:75:13:array', stdlib.UInt_max, 1)];
    const v922 = stdlib.mul(v920, v790);
    const v924 = stdlib.le(v920, v774);
    stdlib.assert(v924, {
      at: './index.rsh:77:13:application',
      fs: ['at ./index.rsh:69:20:application call to [unknown function] (defined at: ./index.rsh:69:24:function exp)'],
      msg: null,
      who: 'NormalUser'
      });
    
    const v925 = stdlib.addressEq(v921, v787);
    
    const txn3 = await (ctc.sendrecv({
      args: [v617, v627, v765, v766, v774, v775, v776, v785, v920, v790, v787, v921, v614, v922],
      evt_cnt: 6,
      funcNum: 3,
      lct: v767,
      onlyIf: v925,
      out_tys: [ctc3, ctc3, ctc4, ctc4, ctc0, ctc3],
      pay: [v922, []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v927, v928, v929, v930, v931, v932], secs: v934, time: v933, didSend: v388, from: v926 } = txn3;
        
        sim_r.txns.push({
          amt: v932,
          kind: 'to',
          tok: undefined
          });
        const v938 = stdlib.addressEq(v926, v929);
        stdlib.assert(v938, {
          at: './index.rsh:88:12:application',
          fs: [],
          msg: null,
          who: 'NormalUser'
          });
        const v940 = stdlib.le(v927, v774);
        stdlib.assert(v940, {
          at: './index.rsh:90:12:application',
          fs: [],
          msg: null,
          who: 'NormalUser'
          });
        const v944 = stdlib.sub(v774, v927);
        sim_r.txns.push({
          amt: v927,
          kind: 'from',
          to: v926,
          tok: v627
          });
        const v1075 = stdlib.add(v765, v927);
        const v1076 = stdlib.add(v766, v932);
        const cv765 = v1075;
        const cv766 = v1076;
        const cv767 = v933;
        const cv774 = v944;
        const cv775 = v775;
        const cv776 = v776;
        
        (() => {
          const v765 = cv765;
          const v766 = cv766;
          const v767 = cv767;
          const v774 = cv774;
          const v775 = cv775;
          const v776 = cv776;
          
          if ((() => {
            const v783 = stdlib.le(v765, stdlib.checkedBigNumberify('./index.rsh:51:18:decimal', stdlib.UInt_max, 10000000000));
            
            return v783;})()) {
            const v785 = stdlib.add(v767, stdlib.checkedBigNumberify('./index.rsh:82:29:decimal', stdlib.UInt_max, 5));
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v766,
              kind: 'from',
              to: v617,
              tok: undefined
              });
            stdlib.simTokenBurn(sim_r, v627, v775);
            if (v776) {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }
            else {
              stdlib.simTokenDestroy(sim_r, v627);
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }}})();
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: ['time', v785],
      tys: [ctc4, ctc1, ctc3, ctc3, ctc3, ctc3, ctc6, ctc3, ctc3, ctc3, ctc4, ctc4, ctc0, ctc3],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v617, v627, v765, v766, v774, v775, v776, v785],
        evt_cnt: 0,
        funcNum: 4,
        lct: v767,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v1079, time: v1078, didSend: v570, from: v1077 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv765 = v765;
          const cv766 = v766;
          const cv767 = v1078;
          const cv774 = v774;
          const cv775 = v775;
          const cv776 = v776;
          
          (() => {
            const v765 = cv765;
            const v766 = cv766;
            const v767 = cv767;
            const v774 = cv774;
            const v775 = cv775;
            const v776 = cv776;
            
            if ((() => {
              const v783 = stdlib.le(v765, stdlib.checkedBigNumberify('./index.rsh:51:18:decimal', stdlib.UInt_max, 10000000000));
              
              return v783;})()) {
              const v785 = stdlib.add(v767, stdlib.checkedBigNumberify('./index.rsh:82:29:decimal', stdlib.UInt_max, 5));
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                amt: v766,
                kind: 'from',
                to: v617,
                tok: undefined
                });
              stdlib.simTokenBurn(sim_r, v627, v775);
              if (v776) {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }
              else {
                stdlib.simTokenDestroy(sim_r, v627);
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
      const {data: [], secs: v1079, time: v1078, didSend: v570, from: v1077 } = txn4;
      ;
      const cv765 = v765;
      const cv766 = v766;
      const cv767 = v1078;
      const cv774 = v774;
      const cv775 = v775;
      const cv776 = v776;
      
      v765 = cv765;
      v766 = cv766;
      v767 = cv767;
      v774 = cv774;
      v775 = cv775;
      v776 = cv776;
      
      continue;
      }
    else {
      const {data: [v927, v928, v929, v930, v931, v932], secs: v934, time: v933, didSend: v388, from: v926 } = txn3;
      ;
      const v938 = stdlib.addressEq(v926, v929);
      stdlib.assert(v938, {
        at: './index.rsh:88:12:application',
        fs: [],
        msg: null,
        who: 'NormalUser'
        });
      const v940 = stdlib.le(v927, v774);
      stdlib.assert(v940, {
        at: './index.rsh:90:12:application',
        fs: [],
        msg: null,
        who: 'NormalUser'
        });
      const v944 = stdlib.sub(v774, v927);
      ;
      const v1075 = stdlib.add(v765, v927);
      const v1076 = stdlib.add(v766, v932);
      const cv765 = v1075;
      const cv766 = v1076;
      const cv767 = v933;
      const cv774 = v944;
      const cv775 = v775;
      const cv776 = v776;
      
      v765 = cv765;
      v766 = cv766;
      v767 = cv767;
      v774 = cv774;
      v775 = cv775;
      v776 = cv776;
      
      continue;}
    
    }
  ;
  undefined;
  if (v776) {
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
  
  
  const v613 = stdlib.protect(ctc0, interact.name, 'for OmegaUser\'s interact field name');
  
  const txn1 = await (ctc.sendrecv({
    args: [v613],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:48:13:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v618], secs: v620, time: v619, didSend: v25, from: v617 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v622 = '01234567890123456789012345678901';
      const v623 = '01234567';
      const v624 = '                                                                                                ';
      const v625 = '                                ';
      const v626 = stdlib.simTokenNew(sim_r, v622, v623, v624, v625, stdlib.checkedBigNumberify('./index.rsh:51:18:decimal', stdlib.UInt_max, 10000000000), undefined);
      const v627 = await txn1.getOutput('tokenNew', 'v626', ctc1, v626);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v618], secs: v620, time: v619, didSend: v25, from: v617 } = txn1;
  ;
  const v622 = '01234567890123456789012345678901';
  const v623 = '01234567';
  const v624 = '                                                                                                ';
  const v625 = '                                ';
  const v626 = undefined;
  const v627 = await txn1.getOutput('tokenNew', 'v626', ctc1, v626);
  stdlib.protect(ctc2, await interact.acceptToken(v627), {
    at: './index.rsh:57:25:application',
    fs: ['at ./index.rsh:56:17:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)'],
    msg: 'acceptToken',
    who: 'OmegaUser'
    });
  let v632;
  const v633 = stdlib.div(stdlib.checkedBigNumberify('./index.rsh:51:18:decimal', stdlib.UInt_max, 10000000000), stdlib.checkedBigNumberify('./index.rsh:22:32:decimal', stdlib.UInt_max, 17));
  const v634 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:51:18:decimal', stdlib.UInt_max, 10000000000), stdlib.checkedBigNumberify('./index.rsh:23:21:decimal', stdlib.UInt_max, 0));
  if (v634) {
    v632 = stdlib.checkedBigNumberify('./index.rsh:23:31:decimal', stdlib.UInt_max, 50000);
    }
  else {
    const v635 = stdlib.div(v633, stdlib.checkedBigNumberify('reach standard library:215:34:decimal', stdlib.UInt_max, 2));
    const v636 = stdlib.add(v635, stdlib.checkedBigNumberify('reach standard library:215:38:decimal', stdlib.UInt_max, 1));
    const v639 = stdlib.lt(v636, stdlib.checkedBigNumberify('reach standard library:216:10:decimal', stdlib.UInt_max, 2));
    const v640 = stdlib.lt(v636, v633);
    const v641 = stdlib.div(v633, v636);
    const v642 = stdlib.add(v641, v636);
    const v643 = stdlib.div(v642, stdlib.checkedBigNumberify('reach standard library:219:29:decimal', stdlib.UInt_max, 2));
    const v644 = [v636, v643];
    const v645 = [v633, v636];
    const v646 = v640 ? v644 : v645;
    const v647 = [v636, v636];
    const v648 = v639 ? v647 : v646;
    const v649 = v648[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 0)];
    const v650 = v648[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 1)];
    const v651 = stdlib.lt(v650, stdlib.checkedBigNumberify('reach standard library:216:10:decimal', stdlib.UInt_max, 2));
    const v652 = stdlib.lt(v650, v649);
    const v653 = stdlib.div(v633, v650);
    const v654 = stdlib.add(v653, v650);
    const v655 = stdlib.div(v654, stdlib.checkedBigNumberify('reach standard library:219:29:decimal', stdlib.UInt_max, 2));
    const v656 = [v650, v655];
    const v657 = [v649, v650];
    const v658 = v652 ? v656 : v657;
    const v659 = [v650, v650];
    const v660 = v651 ? v659 : v658;
    const v661 = v660[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 0)];
    const v662 = v660[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 1)];
    const v663 = stdlib.lt(v662, stdlib.checkedBigNumberify('reach standard library:216:10:decimal', stdlib.UInt_max, 2));
    const v664 = stdlib.lt(v662, v661);
    const v665 = stdlib.div(v633, v662);
    const v666 = stdlib.add(v665, v662);
    const v667 = stdlib.div(v666, stdlib.checkedBigNumberify('reach standard library:219:29:decimal', stdlib.UInt_max, 2));
    const v668 = [v662, v667];
    const v669 = [v661, v662];
    const v670 = v664 ? v668 : v669;
    const v671 = [v662, v662];
    const v672 = v663 ? v671 : v670;
    const v673 = v672[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 0)];
    const v674 = v672[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 1)];
    const v675 = stdlib.lt(v674, stdlib.checkedBigNumberify('reach standard library:216:10:decimal', stdlib.UInt_max, 2));
    const v676 = stdlib.lt(v674, v673);
    const v677 = stdlib.div(v633, v674);
    const v678 = stdlib.add(v677, v674);
    const v679 = stdlib.div(v678, stdlib.checkedBigNumberify('reach standard library:219:29:decimal', stdlib.UInt_max, 2));
    const v680 = [v674, v679];
    const v681 = [v673, v674];
    const v682 = v676 ? v680 : v681;
    const v683 = [v674, v674];
    const v684 = v675 ? v683 : v682;
    const v685 = v684[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 0)];
    const v686 = v684[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 1)];
    const v687 = stdlib.lt(v686, stdlib.checkedBigNumberify('reach standard library:216:10:decimal', stdlib.UInt_max, 2));
    const v688 = stdlib.lt(v686, v685);
    const v689 = stdlib.div(v633, v686);
    const v690 = stdlib.add(v689, v686);
    const v691 = stdlib.div(v690, stdlib.checkedBigNumberify('reach standard library:219:29:decimal', stdlib.UInt_max, 2));
    const v692 = [v686, v691];
    const v693 = [v685, v686];
    const v694 = v688 ? v692 : v693;
    const v695 = [v686, v686];
    const v696 = v687 ? v695 : v694;
    const v697 = v696[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 0)];
    const v698 = v696[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 1)];
    const v699 = stdlib.lt(v698, stdlib.checkedBigNumberify('reach standard library:216:10:decimal', stdlib.UInt_max, 2));
    const v700 = stdlib.lt(v698, v697);
    const v701 = stdlib.div(v633, v698);
    const v702 = stdlib.add(v701, v698);
    const v703 = stdlib.div(v702, stdlib.checkedBigNumberify('reach standard library:219:29:decimal', stdlib.UInt_max, 2));
    const v704 = [v698, v703];
    const v705 = [v697, v698];
    const v706 = v700 ? v704 : v705;
    const v707 = [v698, v698];
    const v708 = v699 ? v707 : v706;
    const v709 = v708[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 0)];
    const v710 = v708[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 1)];
    const v711 = stdlib.lt(v710, stdlib.checkedBigNumberify('reach standard library:216:10:decimal', stdlib.UInt_max, 2));
    const v712 = stdlib.lt(v710, v709);
    const v713 = stdlib.div(v633, v710);
    const v714 = stdlib.add(v713, v710);
    const v715 = stdlib.div(v714, stdlib.checkedBigNumberify('reach standard library:219:29:decimal', stdlib.UInt_max, 2));
    const v716 = [v710, v715];
    const v717 = [v709, v710];
    const v718 = v712 ? v716 : v717;
    const v719 = [v710, v710];
    const v720 = v711 ? v719 : v718;
    const v721 = v720[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 0)];
    const v722 = v720[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 1)];
    const v723 = stdlib.lt(v722, stdlib.checkedBigNumberify('reach standard library:216:10:decimal', stdlib.UInt_max, 2));
    const v724 = stdlib.lt(v722, v721);
    const v725 = stdlib.div(v633, v722);
    const v726 = stdlib.add(v725, v722);
    const v727 = stdlib.div(v726, stdlib.checkedBigNumberify('reach standard library:219:29:decimal', stdlib.UInt_max, 2));
    const v728 = [v722, v727];
    const v729 = [v721, v722];
    const v730 = v724 ? v728 : v729;
    const v731 = [v722, v722];
    const v732 = v723 ? v731 : v730;
    const v733 = v732[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 0)];
    const v734 = v732[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 1)];
    const v735 = stdlib.lt(v734, stdlib.checkedBigNumberify('reach standard library:216:10:decimal', stdlib.UInt_max, 2));
    const v736 = stdlib.lt(v734, v733);
    const v737 = stdlib.div(v633, v734);
    const v738 = stdlib.add(v737, v734);
    const v739 = stdlib.div(v738, stdlib.checkedBigNumberify('reach standard library:219:29:decimal', stdlib.UInt_max, 2));
    const v740 = [v734, v739];
    const v741 = [v733, v734];
    const v742 = v736 ? v740 : v741;
    const v743 = [v734, v734];
    const v744 = v735 ? v743 : v742;
    const v745 = v744[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 0)];
    const v746 = v744[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 1)];
    const v747 = stdlib.lt(v746, stdlib.checkedBigNumberify('reach standard library:216:10:decimal', stdlib.UInt_max, 2));
    const v748 = stdlib.lt(v746, v745);
    const v749 = stdlib.div(v633, v746);
    const v750 = stdlib.add(v749, v746);
    const v751 = stdlib.div(v750, stdlib.checkedBigNumberify('reach standard library:219:29:decimal', stdlib.UInt_max, 2));
    const v752 = [v746, v751];
    const v753 = [v745, v746];
    const v754 = v748 ? v752 : v753;
    const v755 = [v746, v746];
    const v756 = v747 ? v755 : v754;
    const v757 = v756[stdlib.checkedBigNumberify('reach standard library:221:8:array ref', stdlib.UInt_max, 1)];
    const v758 = stdlib.div(stdlib.checkedBigNumberify('./index.rsh:24:16:decimal', stdlib.UInt_max, 5000000), v757);
    v632 = v758;
    }
  stdlib.protect(ctc2, await interact.displayTokenDetails(stdlib.checkedBigNumberify('./index.rsh:51:18:decimal', stdlib.UInt_max, 10000000000), v632), {
    at: './index.rsh:58:44:application',
    fs: ['at ./index.rsh:56:17:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)'],
    msg: 'displayTokenDetails',
    who: 'OmegaUser'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v617, v627],
    evt_cnt: 0,
    funcNum: 1,
    lct: v619,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v762, time: v761, didSend: v199, from: v760 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v764 = stdlib.addressEq(v617, v760);
      stdlib.assert(v764, {
        at: './index.rsh:61:13:dot',
        fs: [],
        msg: 'sender correct',
        who: 'OmegaUser'
        });
      const v765 = stdlib.checkedBigNumberify('./index.rsh:63:39:decimal', stdlib.UInt_max, 0);
      const v766 = stdlib.checkedBigNumberify('./index.rsh:63:42:decimal', stdlib.UInt_max, 0);
      const v767 = v761;
      const v774 = stdlib.checkedBigNumberify('./index.rsh:51:18:decimal', stdlib.UInt_max, 10000000000);
      const v775 = stdlib.checkedBigNumberify('./index.rsh:51:18:decimal', stdlib.UInt_max, 10000000000);
      const v776 = false;
      
      if ((() => {
        const v783 = stdlib.le(v765, stdlib.checkedBigNumberify('./index.rsh:51:18:decimal', stdlib.UInt_max, 10000000000));
        
        return v783;})()) {
        const v785 = stdlib.add(v767, stdlib.checkedBigNumberify('./index.rsh:82:29:decimal', stdlib.UInt_max, 5));
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          amt: v766,
          kind: 'from',
          to: v617,
          tok: undefined
          });
        stdlib.simTokenBurn(sim_r, v627, v775);
        if (v776) {
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          }
        else {
          stdlib.simTokenDestroy(sim_r, v627);
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
  const {data: [], secs: v762, time: v761, didSend: v199, from: v760 } = txn2;
  ;
  const v764 = stdlib.addressEq(v617, v760);
  stdlib.assert(v764, {
    at: './index.rsh:61:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'OmegaUser'
    });
  let v765 = stdlib.checkedBigNumberify('./index.rsh:63:39:decimal', stdlib.UInt_max, 0);
  let v766 = stdlib.checkedBigNumberify('./index.rsh:63:42:decimal', stdlib.UInt_max, 0);
  let v767 = v761;
  let v774 = stdlib.checkedBigNumberify('./index.rsh:51:18:decimal', stdlib.UInt_max, 10000000000);
  let v775 = stdlib.checkedBigNumberify('./index.rsh:51:18:decimal', stdlib.UInt_max, 10000000000);
  let v776 = false;
  
  while ((() => {
    const v783 = stdlib.le(v765, stdlib.checkedBigNumberify('./index.rsh:51:18:decimal', stdlib.UInt_max, 10000000000));
    
    return v783;})()) {
    const v785 = stdlib.add(v767, stdlib.checkedBigNumberify('./index.rsh:82:29:decimal', stdlib.UInt_max, 5));
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 6,
      funcNum: 3,
      out_tys: [ctc3, ctc3, ctc4, ctc4, ctc0, ctc3],
      timeoutAt: ['time', v785],
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
      const {data: [], secs: v1079, time: v1078, didSend: v570, from: v1077 } = txn4;
      ;
      const cv765 = v765;
      const cv766 = v766;
      const cv767 = v1078;
      const cv774 = v774;
      const cv775 = v775;
      const cv776 = v776;
      
      v765 = cv765;
      v766 = cv766;
      v767 = cv767;
      v774 = cv774;
      v775 = cv775;
      v776 = cv776;
      
      continue;
      }
    else {
      const {data: [v927, v928, v929, v930, v931, v932], secs: v934, time: v933, didSend: v388, from: v926 } = txn3;
      ;
      stdlib.protect(ctc2, await interact.paidBy(v931, v927, v928, v929), {
        at: './index.rsh:1:39:application',
        fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:87:30:application call to "liftedInteract" (defined at: ./index.rsh:87:30:application)'],
        msg: 'paidBy',
        who: 'OmegaUser'
        });
      
      const v938 = stdlib.addressEq(v926, v929);
      stdlib.assert(v938, {
        at: './index.rsh:88:12:application',
        fs: [],
        msg: null,
        who: 'OmegaUser'
        });
      const v940 = stdlib.le(v927, v774);
      stdlib.assert(v940, {
        at: './index.rsh:90:12:application',
        fs: [],
        msg: null,
        who: 'OmegaUser'
        });
      const v944 = stdlib.sub(v774, v927);
      ;
      let v947;
      const v948 = stdlib.div(v944, stdlib.checkedBigNumberify('./index.rsh:22:32:decimal', stdlib.UInt_max, 17));
      const v949 = stdlib.eq(v944, stdlib.checkedBigNumberify('./index.rsh:23:21:decimal', stdlib.UInt_max, 0));
      if (v949) {
        v947 = stdlib.checkedBigNumberify('./index.rsh:23:31:decimal', stdlib.UInt_max, 50000);
        }
      else {
        const v950 = stdlib.div(v948, stdlib.checkedBigNumberify('reach standard library:215:34:decimal', stdlib.UInt_max, 2));
        const v951 = stdlib.add(v950, stdlib.checkedBigNumberify('reach standard library:215:38:decimal', stdlib.UInt_max, 1));
        const v954 = stdlib.lt(v951, stdlib.checkedBigNumberify('reach standard library:216:10:decimal', stdlib.UInt_max, 2));
        const v955 = stdlib.lt(v951, v948);
        const v956 = stdlib.div(v948, v951);
        const v957 = stdlib.add(v956, v951);
        const v958 = stdlib.div(v957, stdlib.checkedBigNumberify('reach standard library:219:29:decimal', stdlib.UInt_max, 2));
        const v959 = [v951, v958];
        const v960 = [v948, v951];
        const v961 = v955 ? v959 : v960;
        const v962 = [v951, v951];
        const v963 = v954 ? v962 : v961;
        const v964 = v963[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 0)];
        const v965 = v963[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 1)];
        const v966 = stdlib.lt(v965, stdlib.checkedBigNumberify('reach standard library:216:10:decimal', stdlib.UInt_max, 2));
        const v967 = stdlib.lt(v965, v964);
        const v968 = stdlib.div(v948, v965);
        const v969 = stdlib.add(v968, v965);
        const v970 = stdlib.div(v969, stdlib.checkedBigNumberify('reach standard library:219:29:decimal', stdlib.UInt_max, 2));
        const v971 = [v965, v970];
        const v972 = [v964, v965];
        const v973 = v967 ? v971 : v972;
        const v974 = [v965, v965];
        const v975 = v966 ? v974 : v973;
        const v976 = v975[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 0)];
        const v977 = v975[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 1)];
        const v978 = stdlib.lt(v977, stdlib.checkedBigNumberify('reach standard library:216:10:decimal', stdlib.UInt_max, 2));
        const v979 = stdlib.lt(v977, v976);
        const v980 = stdlib.div(v948, v977);
        const v981 = stdlib.add(v980, v977);
        const v982 = stdlib.div(v981, stdlib.checkedBigNumberify('reach standard library:219:29:decimal', stdlib.UInt_max, 2));
        const v983 = [v977, v982];
        const v984 = [v976, v977];
        const v985 = v979 ? v983 : v984;
        const v986 = [v977, v977];
        const v987 = v978 ? v986 : v985;
        const v988 = v987[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 0)];
        const v989 = v987[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 1)];
        const v990 = stdlib.lt(v989, stdlib.checkedBigNumberify('reach standard library:216:10:decimal', stdlib.UInt_max, 2));
        const v991 = stdlib.lt(v989, v988);
        const v992 = stdlib.div(v948, v989);
        const v993 = stdlib.add(v992, v989);
        const v994 = stdlib.div(v993, stdlib.checkedBigNumberify('reach standard library:219:29:decimal', stdlib.UInt_max, 2));
        const v995 = [v989, v994];
        const v996 = [v988, v989];
        const v997 = v991 ? v995 : v996;
        const v998 = [v989, v989];
        const v999 = v990 ? v998 : v997;
        const v1000 = v999[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 0)];
        const v1001 = v999[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 1)];
        const v1002 = stdlib.lt(v1001, stdlib.checkedBigNumberify('reach standard library:216:10:decimal', stdlib.UInt_max, 2));
        const v1003 = stdlib.lt(v1001, v1000);
        const v1004 = stdlib.div(v948, v1001);
        const v1005 = stdlib.add(v1004, v1001);
        const v1006 = stdlib.div(v1005, stdlib.checkedBigNumberify('reach standard library:219:29:decimal', stdlib.UInt_max, 2));
        const v1007 = [v1001, v1006];
        const v1008 = [v1000, v1001];
        const v1009 = v1003 ? v1007 : v1008;
        const v1010 = [v1001, v1001];
        const v1011 = v1002 ? v1010 : v1009;
        const v1012 = v1011[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 0)];
        const v1013 = v1011[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 1)];
        const v1014 = stdlib.lt(v1013, stdlib.checkedBigNumberify('reach standard library:216:10:decimal', stdlib.UInt_max, 2));
        const v1015 = stdlib.lt(v1013, v1012);
        const v1016 = stdlib.div(v948, v1013);
        const v1017 = stdlib.add(v1016, v1013);
        const v1018 = stdlib.div(v1017, stdlib.checkedBigNumberify('reach standard library:219:29:decimal', stdlib.UInt_max, 2));
        const v1019 = [v1013, v1018];
        const v1020 = [v1012, v1013];
        const v1021 = v1015 ? v1019 : v1020;
        const v1022 = [v1013, v1013];
        const v1023 = v1014 ? v1022 : v1021;
        const v1024 = v1023[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 0)];
        const v1025 = v1023[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 1)];
        const v1026 = stdlib.lt(v1025, stdlib.checkedBigNumberify('reach standard library:216:10:decimal', stdlib.UInt_max, 2));
        const v1027 = stdlib.lt(v1025, v1024);
        const v1028 = stdlib.div(v948, v1025);
        const v1029 = stdlib.add(v1028, v1025);
        const v1030 = stdlib.div(v1029, stdlib.checkedBigNumberify('reach standard library:219:29:decimal', stdlib.UInt_max, 2));
        const v1031 = [v1025, v1030];
        const v1032 = [v1024, v1025];
        const v1033 = v1027 ? v1031 : v1032;
        const v1034 = [v1025, v1025];
        const v1035 = v1026 ? v1034 : v1033;
        const v1036 = v1035[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 0)];
        const v1037 = v1035[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 1)];
        const v1038 = stdlib.lt(v1037, stdlib.checkedBigNumberify('reach standard library:216:10:decimal', stdlib.UInt_max, 2));
        const v1039 = stdlib.lt(v1037, v1036);
        const v1040 = stdlib.div(v948, v1037);
        const v1041 = stdlib.add(v1040, v1037);
        const v1042 = stdlib.div(v1041, stdlib.checkedBigNumberify('reach standard library:219:29:decimal', stdlib.UInt_max, 2));
        const v1043 = [v1037, v1042];
        const v1044 = [v1036, v1037];
        const v1045 = v1039 ? v1043 : v1044;
        const v1046 = [v1037, v1037];
        const v1047 = v1038 ? v1046 : v1045;
        const v1048 = v1047[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 0)];
        const v1049 = v1047[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 1)];
        const v1050 = stdlib.lt(v1049, stdlib.checkedBigNumberify('reach standard library:216:10:decimal', stdlib.UInt_max, 2));
        const v1051 = stdlib.lt(v1049, v1048);
        const v1052 = stdlib.div(v948, v1049);
        const v1053 = stdlib.add(v1052, v1049);
        const v1054 = stdlib.div(v1053, stdlib.checkedBigNumberify('reach standard library:219:29:decimal', stdlib.UInt_max, 2));
        const v1055 = [v1049, v1054];
        const v1056 = [v1048, v1049];
        const v1057 = v1051 ? v1055 : v1056;
        const v1058 = [v1049, v1049];
        const v1059 = v1050 ? v1058 : v1057;
        const v1060 = v1059[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 0)];
        const v1061 = v1059[stdlib.checkedBigNumberify('reach standard library:215:45:array', stdlib.UInt_max, 1)];
        const v1062 = stdlib.lt(v1061, stdlib.checkedBigNumberify('reach standard library:216:10:decimal', stdlib.UInt_max, 2));
        const v1063 = stdlib.lt(v1061, v1060);
        const v1064 = stdlib.div(v948, v1061);
        const v1065 = stdlib.add(v1064, v1061);
        const v1066 = stdlib.div(v1065, stdlib.checkedBigNumberify('reach standard library:219:29:decimal', stdlib.UInt_max, 2));
        const v1067 = [v1061, v1066];
        const v1068 = [v1060, v1061];
        const v1069 = v1063 ? v1067 : v1068;
        const v1070 = [v1061, v1061];
        const v1071 = v1062 ? v1070 : v1069;
        const v1072 = v1071[stdlib.checkedBigNumberify('reach standard library:221:8:array ref', stdlib.UInt_max, 1)];
        const v1073 = stdlib.div(stdlib.checkedBigNumberify('./index.rsh:24:16:decimal', stdlib.UInt_max, 5000000), v1072);
        v947 = v1073;
        }
      stdlib.protect(ctc2, await interact.displayTokenDetails(v944, v947), {
        at: './index.rsh:1:39:application',
        fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:92:43:application call to "liftedInteract" (defined at: ./index.rsh:92:43:application)'],
        msg: 'displayTokenDetails',
        who: 'OmegaUser'
        });
      
      const v1075 = stdlib.add(v765, v927);
      const v1076 = stdlib.add(v766, v932);
      const cv765 = v1075;
      const cv766 = v1076;
      const cv767 = v933;
      const cv774 = v944;
      const cv775 = v775;
      const cv776 = v776;
      
      v765 = cv765;
      v766 = cv766;
      v767 = cv767;
      v774 = cv774;
      v775 = cv775;
      v776 = cv776;
      
      continue;}
    
    }
  ;
  undefined;
  if (v776) {
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
int 10000000000
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
byte base64(MDEyMzQ1Njc=)
dig 1
gtxns ConfigAssetUnitName
==
assert
byte base64(MDEyMzQ1Njc4OTAxMjM0NTY3ODkwMTIzNDU2Nzg5MDE=)
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
byte base64(AAAAAAAAAnI=)
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
byte base64(AAAAAlQL5AA=)
concat
byte base64(AAAAAlQL5AA=)
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
load 3
dig 1
gtxns Receiver
==
assert
l6_checkTxnK:
pop
// Nothing
// "./index.rsh:88:12:application"
// "[]"
txn Sender
load 245
==
assert
// Nothing
// "./index.rsh:90:12:application"
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
int 10000000000
<=
bz l9_ifF
load 253
int 5
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
                "name": "v618",
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
                "name": "v618",
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
                "name": "v927",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v928",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v929",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v930",
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
                "name": "v931",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v932",
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
        "name": "v626",
        "type": "address"
      }
    ],
    "name": "oe_v626",
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
                "name": "v927",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v928",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v929",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v930",
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
                "name": "v931",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v932",
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
  Bytecode: `0x6080604052604051620025ee380380620025ee8339810160408190526200002691620003f1565b6000808055436003556040805160e08101825260c081018381528152815160208082018452848252808301919091528251606080820185528582528183018690528185018690528385019190915283518083018552858152818401526080830185905260a083019490945282518551815285820151518051828401529091015181840152915190927f819125e79b475e13c17f8bbe764be761fb45f83700d23d01d0548e85c578b478928290030190a1620000e434156007620002dc565b80517f3031323334353637383930313233343536373839303132333435363738393031905260208082015167303132333435363760c01b90526040808301805160009081905281518401819052905182018190526060840151528251518151928301520160408051601f1981840301815290829052602083810151516001600160c01b031916908301529060280160408051808303601f1901815282825284820151805160208083015192850151908601919091529284015260608301919091529060800160408051601f19818403018152828252606086015151602084015291016040516020818303038152906040526402540be4006012604051620001eb9062000306565b620001fc96959493929190620004d4565b604051809103906000f08015801562000219573d6000803e3d6000fd5b506001600160a01b03166080820181905260a082018190526040519081527f1e5740f4f50b8dec4ff3ac1060a183d7077bc097d24523c78b86fc1e58d3bd0c9060200160405180910390a1604080518082018252600060208083018281523380855260a08701516001600160a01b0390811683526001948590554390945585519283015251909116928101929092529060600160405160208183030381529060405260029080519060200190620002d292919062000314565b505050506200057c565b81620003025760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b610f75806200167983390190565b82805462000322906200053f565b90600052602060002090601f01602090048101928262000346576000855562000391565b82601f106200036157805160ff191683800117855562000391565b8280016001018555821562000391579182015b828111156200039157825182559160200191906001019062000374565b506200039f929150620003a3565b5090565b5b808211156200039f5760008155600101620003a4565b604080519081016001600160401b0381118282101715620003eb57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200040557600080fd5b6200040f620003ba565b835181526040601f19830112156200042657600080fd5b6040519150602082016001600160401b03811183821017156200045957634e487b7160e01b600052604160045260246000fd5b60405262000466620003ba565b60208581015182526040909501518186015282529283015250919050565b6000815180845260005b81811015620004ac576020818501810151868301820152016200048e565b81811115620004bf576000602083870101525b50601f01601f19169290920160200192915050565b60c081526000620004e960c083018962000484565b8281036020840152620004fd818962000484565b9050828103604084015262000513818862000484565b9050828103606084015262000529818762000484565b6080840195909552505060a00152949350505050565b600181811c908216806200055457607f821691505b602082108114156200057657634e487b7160e01b600052602260045260246000fd5b50919050565b6110ed806200058c6000396000f3fe6080604052600436106100565760003560e01c80630d19a5fb1461005f5780631e93b0f1146100725780637963168e1461009657806383230757146100a95780639afc5bcc146100be578063ab53f2c6146100d157005b3661005d57005b005b61005d61006d366004610d56565b6100f4565b34801561007e57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d6100a4366004610d56565b6102a2565b3480156100b557600080fd5b50600154610083565b61005d6100cc366004610d6e565b610436565b3480156100dd57600080fd5b506100e6610666565b60405161008d929190610dad565b6101046005600054146013610703565b61011e8135158061011757506001548235145b6014610703565b60008080556002805461013090610de7565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610de7565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610e5a565b90506101d58160e001514310156015610703565b7f64c05390f66d4c96d69b55a2d6f7bb5135997731e2b63f4a719a786bc0579627826040516102049190610f12565b60405180910390a161021834156012610703565b610220610c25565b815181516001600160a01b039182169052602080840151835192169181019190915260408084015182840180519190915260608086015182519094019390935280514392019190915260808085015182519093019290925260a08085015182519093019290925260c0840151905190151591015261029d8161072d565b505050565b6102b2600160005414600a610703565b6102cc813515806102c557506001548235145b600b610703565b6000808055600280546102de90610de7565b80601f016020809104026020016040519081016040528092919081815260200182805461030a90610de7565b80156103575780601f1061032c57610100808354040283529160200191610357565b820191906000526020600020905b81548152906001019060200180831161033a57829003601f168201915b505050505080602001905181019061036f9190610f37565b90507f9f41c6cf17ede288cbb2cfbbafdd05b2b2025dea3b047cdb79dbc892d7a9286d826040516103a09190610f12565b60405180910390a16103b434156008610703565b80516103cc906001600160a01b031633146009610703565b6103d4610c25565b815181516001600160a01b03918216905260208084015183519216918101919091528082018051600090819052815190920182905280514360409091015280516402540be40060609091018190528151608001525160a0015261029d8161072d565b610446600560005414600f610703565b6104608135158061045957506001548235145b6010610703565b60008080556002805461047290610de7565b80601f016020809104026020016040519081016040528092919081815260200182805461049e90610de7565b80156104eb5780601f106104c0576101008083540402835291602001916104eb565b820191906000526020600020905b8154815290600101906020018083116104ce57829003601f168201915b50505050508060200190518101906105039190610e5a565b90506105168160e0015143106011610703565b7fe3dd4d1e92f956195cdb05d6bf62cc37b6a849b951ebec81f91722b37d7ef9a8826040516105459190610fa4565b60405180910390a161055e3460e084013514600c610703565b61058c610571608084016060850161101c565b6001600160a01b0316336001600160a01b031614600d610703565b60808101516105a39060208401351115600e610703565b6105b98160200151338460200160000135610956565b6105c1610c25565b815181516001600160a01b039182169052602080840151835192169181019190915260408301516105f5918501359061104f565b602082015152606082015161060f9060e08501359061104f565b6020808301805182019290925290514360409091015260808301516106379185013590611067565b6020820180516060019190915260a08084015182516080015260c0840151915191151591015261029d8161072d565b60006060600054600280805461067b90610de7565b80601f01602080910402602001604051908101604052809291908181526020018280546106a790610de7565b80156106f45780601f106106c9576101008083540402835291602001916106f4565b820191906000526020600020905b8154815290600101906020018083116106d757829003601f168201915b50505050509050915091509091565b816107295760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6040805160208101909152600081526020820151516402540be400106108b1576005826020015160400151610762919061104f565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101919091528251516001600160a01b0390811682528351602090810151909116818301528084018051516040808501919091528151830151606080860191909152825101516080808601919091528251015160a080860191909152915190910151151560c0840152835160e0840152600560005543600155516108879183910160006101008201905060018060a01b038084511683528060208501511660208401525060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c0830151151560c083015260e083015160e083015292915050565b604051602081830303815290604052600290805190602001906108ab929190610c87565b50505050565b81515160208084015101516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156108f2573d6000803e3d6000fd5b5061090d82600001516020015183602001516080015161096a565b816020015160a0015115610931576000808055600181905561072990600290610d0b565b8151602001516109409061097d565b6000808055600181905561072990600290610d0b565b610961838383610992565b61029d57600080fd5b6109748282610a63565b61072957600080fd5b61098681610b3e565b61098f57600080fd5b50565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916109f19161107e565b60006040518083038185875af1925050503d8060008114610a2e576040519150601f19603f3d011682016040523d82523d6000602084013e610a33565b606091505b5091509150610a4482826002610be3565b5080806020019051810190610a59919061109a565b9695505050505050565b6000806000846001600160a01b031660006342966c6860e01b86604051602401610a8f91815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051610acd919061107e565b60006040518083038185875af1925050503d8060008114610b0a576040519150601f19603f3d011682016040523d82523d6000602084013e610b0f565b606091505b5091509150610b2082826003610be3565b5080806020019051810190610b35919061109a565b95945050505050565b60408051600481526024810182526020810180516001600160e01b031663083197ef60e41b1790529051600091829182916001600160a01b038616918391610b859161107e565b60006040518083038185875af1925050503d8060008114610bc2576040519150601f19603f3d011682016040523d82523d6000602084013e610bc7565b606091505b5091509150610bd882826004610be3565b506001949350505050565b60608315610bf2575081610c1e565b825115610c025782518084602001fd5b60405163100960cb60e01b815260048101839052602401610720565b9392505050565b60408051608081018252600091810182815260608201929092529081908152602001610c826040518060c0016040528060008152602001600081526020016000815260200160008152602001600081526020016000151581525090565b905290565b828054610c9390610de7565b90600052602060002090601f016020900481019282610cb55760008555610cfb565b82601f10610cce57805160ff1916838001178555610cfb565b82800160010185558215610cfb579182015b82811115610cfb578251825591602001919060010190610ce0565b50610d07929150610d41565b5090565b508054610d1790610de7565b6000825580601f10610d27575050565b601f01602090049060005260206000209081019061098f91905b5b80821115610d075760008155600101610d42565b600060408284031215610d6857600080fd5b50919050565b60006101008284031215610d6857600080fd5b60005b83811015610d9c578181015183820152602001610d84565b838111156108ab5750506000910152565b8281526040602082015260008251806040840152610dd2816060850160208701610d81565b601f01601f1916919091016060019392505050565b600181811c90821680610dfb57607f821691505b60208210811415610d6857634e487b7160e01b600052602260045260246000fd5b6001600160a01b038116811461098f57600080fd5b8051610e3c81610e1c565b919050565b801515811461098f57600080fd5b8051610e3c81610e41565b6000610100808385031215610e6e57600080fd5b6040519081019067ffffffffffffffff82118183101715610e9f57634e487b7160e01b600052604160045260246000fd5b8160405283519150610eb082610e1c565b818152610ebf60208501610e31565b602082015260408401516040820152606084015160608201526080840151608082015260a084015160a0820152610ef860c08501610e4f565b60c082015260e084015160e0820152809250505092915050565b81358152604081016020830135610f2881610e41565b80151560208401525092915050565b600060408284031215610f4957600080fd5b6040516040810181811067ffffffffffffffff82111715610f7a57634e487b7160e01b600052604160045260246000fd5b6040528251610f8881610e1c565b81526020830151610f9881610e1c565b60208201529392505050565b81358152602080830135908201526040808301359082015261010081016060830135610fcf81610e1c565b6001600160a01b039081166060840152608084013590610fee82610e1c565b8082166080850152505060a083013560a083015260c083013560c083015260e083013560e083015292915050565b60006020828403121561102e57600080fd5b8135610c1e81610e1c565b634e487b7160e01b600052601160045260246000fd5b6000821982111561106257611062611039565b500190565b60008282101561107957611079611039565b500390565b60008251611090818460208701610d81565b9190910192915050565b6000602082840312156110ac57600080fd5b8151610c1e81610e4156fea2646970667358221220bc5b0a599dc58ead65602f79186d4064b8562e28fbd5b7e3104a0e2ab39779c864736f6c6343000809003360806040523480156200001157600080fd5b5060405162000f7538038062000f75833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610af580620004806000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806342966c681161008c57806383197ef01161006657806383197ef01461019b57806395d89b41146101a5578063a9059cbb146101ad578063dd62ed3e146101c057600080fd5b806342966c68146101575780635600f04f1461016a57806370a082311461017257600080fd5b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd14610127578063313ce5671461013a578063392f37e91461014f575b600080fd5b6100dc6101f9565b6040516100e991906108fa565b60405180910390f35b61010561010036600461096b565b61028b565b60405190151581526020016100e9565b6002545b6040519081526020016100e9565b610105610135366004610995565b6102a1565b60085460405160ff90911681526020016100e9565b6100dc610357565b6101056101653660046109d1565b610366565b6100dc6103dc565b6101196101803660046109ea565b6001600160a01b031660009081526020819052604090205490565b6101a36103eb565b005b6100dc610492565b6101056101bb36600461096b565b6104a1565b6101196101ce366004610a0c565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461020890610a3f565b80601f016020809104026020016040519081016040528092919081815260200182805461023490610a3f565b80156102815780601f1061025657610100808354040283529160200191610281565b820191906000526020600020905b81548152906001019060200180831161026457829003601f168201915b5050505050905090565b60006102983384846104ae565b50600192915050565b60006102ae8484846105d3565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103385760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b61034c85336103478685610a90565b6104ae565b506001949350505050565b60606007805461020890610a3f565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b604482015260640161032f565b6005546103d4906001600160a01b0316836107ab565b506001919050565b60606006805461020890610a3f565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b604482015260640161032f565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b604482015260640161032f565b6005546001600160a01b0316ff5b60606004805461020890610a3f565b60006102983384846105d3565b6001600160a01b0383166105105760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161032f565b6001600160a01b0382166105715760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161032f565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166106375760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161032f565b6001600160a01b0382166106995760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161032f565b6001600160a01b038316600090815260208190526040902054818110156107115760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161032f565b61071b8282610a90565b6001600160a01b038086166000908152602081905260408082209390935590851681529081208054849290610751908490610aa7565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161079d91815260200190565b60405180910390a350505050565b6001600160a01b03821661080b5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161032f565b6001600160a01b0382166000908152602081905260409020548181101561087f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161032f565b6108898282610a90565b6001600160a01b038416600090815260208190526040812091909155600280548492906108b7908490610a90565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016105c6565b600060208083528351808285015260005b818110156109275785810183015185820160400152820161090b565b81811115610939576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461096657600080fd5b919050565b6000806040838503121561097e57600080fd5b6109878361094f565b946020939093013593505050565b6000806000606084860312156109aa57600080fd5b6109b38461094f565b92506109c16020850161094f565b9150604084013590509250925092565b6000602082840312156109e357600080fd5b5035919050565b6000602082840312156109fc57600080fd5b610a058261094f565b9392505050565b60008060408385031215610a1f57600080fd5b610a288361094f565b9150610a366020840161094f565b90509250929050565b600181811c90821680610a5357607f821691505b60208210811415610a7457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082821015610aa257610aa2610a7a565b500390565b60008219821115610aba57610aba610a7a565b50019056fea2646970667358221220f1d87605deb82a7b9d4ef08ae39ed0a44a4f06f7390a12e4c324962814b51ea964736f6c63430008090033`,
  BytecodeLen: 9710,
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
