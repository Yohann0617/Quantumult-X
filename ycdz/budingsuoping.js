/******************************

脚本功能：布丁锁屏-DIY锁屏组件+解锁订阅
下载地址：https://is.gd/y0cmbV
软件版本：3.0.1
脚本作者：彭于晏💞
更新时间：2022-11-21
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

https?:\/\/screen-lock\.51wnl-cq\.com\/userApi\/saveUser url script-echo-response https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/budingsuoping.js

[mitm] 

hostname = screen-lock.51wnl-cq.com

***********************************/


var _0x3495=['NcKTUsKxTMOmciY=','5b2m5Lu+5piz','wrDCnUTDn10MDUzDr8K0','w6dJw7TCmDljwoY=','w5fChkDCsFTCnDrDqWjDiHVL','woN0wpzDmcOgw47CrMKH','w7bDpBI7','w6TDnsKHBcKVK8OXXcKz','5b2m5Lib5pmM','GsOTRl4=','w7RSw551EVnDkCPDrA==','EMKJK8OtwrbChEYDNwsCw5t6csK3woYDwrY=','NEjDjcK1wqvDsAFRRsONPcOpUVwxwo3DhMOK','5p6e6IaN5pyP5YCd5L6u5a6K576P5Lio5rWq5L+Y55S577yi56SH5q+c6L6G6L6j5ZW76LKr','wrXCmULDhEYMCQ==','woBkGhHDlsKkwp7DscKKw50=','wqpTdsKg'];(function(_0x53c9c0,_0x349554){var _0xedce6e=function(_0x4ef75e){while(--_0x4ef75e){_0x53c9c0['push'](_0x53c9c0['shift']());}};_0xedce6e(++_0x349554);}(_0x3495,0x1c4));var _0xedce=function(_0x53c9c0,_0x349554){_0x53c9c0=_0x53c9c0-0x0;var _0xedce6e=_0x3495[_0x53c9c0];if(_0xedce['flUheq']===undefined){(function(){var _0x1208e4=function(){var _0x2b73ba;try{_0x2b73ba=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x4b6261){_0x2b73ba=window;}return _0x2b73ba;};var _0x230bb3=_0x1208e4();var _0x9343d='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x230bb3['atob']||(_0x230bb3['atob']=function(_0xb35041){var _0x5012a6=String(_0xb35041)['replace'](/=+$/,'');var _0x334eb7='';for(var _0x27f466=0x0,_0x4b787b,_0x33ead4,_0x46b9a3=0x0;_0x33ead4=_0x5012a6['charAt'](_0x46b9a3++);~_0x33ead4&&(_0x4b787b=_0x27f466%0x4?_0x4b787b*0x40+_0x33ead4:_0x33ead4,_0x27f466++%0x4)?_0x334eb7+=String['fromCharCode'](0xff&_0x4b787b>>(-0x2*_0x27f466&0x6)):0x0){_0x33ead4=_0x9343d['indexOf'](_0x33ead4);}return _0x334eb7;});}());var _0x20712c=function(_0x37aeda,_0x5ea33a){var _0x17ed60=[],_0x23f27c=0x0,_0x8c2805,_0x12daf6='',_0x35920c='';_0x37aeda=atob(_0x37aeda);for(var _0x27e0e7=0x0,_0x1dc7ab=_0x37aeda['length'];_0x27e0e7<_0x1dc7ab;_0x27e0e7++){_0x35920c+='%'+('00'+_0x37aeda['charCodeAt'](_0x27e0e7)['toString'](0x10))['slice'](-0x2);}_0x37aeda=decodeURIComponent(_0x35920c);var _0x7187ec;for(_0x7187ec=0x0;_0x7187ec<0x100;_0x7187ec++){_0x17ed60[_0x7187ec]=_0x7187ec;}for(_0x7187ec=0x0;_0x7187ec<0x100;_0x7187ec++){_0x23f27c=(_0x23f27c+_0x17ed60[_0x7187ec]+_0x5ea33a['charCodeAt'](_0x7187ec%_0x5ea33a['length']))%0x100;_0x8c2805=_0x17ed60[_0x7187ec];_0x17ed60[_0x7187ec]=_0x17ed60[_0x23f27c];_0x17ed60[_0x23f27c]=_0x8c2805;}_0x7187ec=0x0;_0x23f27c=0x0;for(var _0x18ec5e=0x0;_0x18ec5e<_0x37aeda['length'];_0x18ec5e++){_0x7187ec=(_0x7187ec+0x1)%0x100;_0x23f27c=(_0x23f27c+_0x17ed60[_0x7187ec])%0x100;_0x8c2805=_0x17ed60[_0x7187ec];_0x17ed60[_0x7187ec]=_0x17ed60[_0x23f27c];_0x17ed60[_0x23f27c]=_0x8c2805;_0x12daf6+=String['fromCharCode'](_0x37aeda['charCodeAt'](_0x18ec5e)^_0x17ed60[(_0x17ed60[_0x7187ec]+_0x17ed60[_0x23f27c])%0x100]);}return _0x12daf6;};_0xedce['DFGrIb']=_0x20712c;_0xedce['ayyrdb']={};_0xedce['flUheq']=!![];}var _0x4ef75e=_0xedce['ayyrdb'][_0x53c9c0];if(_0x4ef75e===undefined){if(_0xedce['kXQMTe']===undefined){_0xedce['kXQMTe']=!![];}_0xedce6e=_0xedce['DFGrIb'](_0xedce6e,_0x349554);_0xedce['ayyrdb'][_0x53c9c0]=_0xedce6e;}else{_0xedce6e=_0x4ef75e;}return _0xedce6e;};var _0x130228={};_0x130228[_0xedce('0x4','Q6e&')]=_0xedce('0x3','E4Pe');_0x130228['tgchannel']=_0xedce('0x2','^R9F');_0x130228[_0xedce('0xc','hQf8')]=_0xedce('0x1','yAXF');var _0x3e958a=_0x130228;var _0x598031={};_0x598031['id']='ddgksf2013';_0x598031[_0xedce('0x7','8pNG')]=_0xedce('0xf','ua24');_0x598031[_0xedce('0x6','wYQi')]=_0xedce('0x8','Z6Kz');_0x598031[_0xedce('0x0','bzq4')]=0x1;_0x598031['endTime']=0x833;_0x598031[_0xedce('0xb','E4Pe')]=null;_0x598031[_0xedce('0x5','w$m]')]=null;var _0x3c94ad={};_0x3c94ad[_0xedce('0x9','Q6e&')]=_0xedce('0xa','V9Dl');_0x3c94ad['errormsg']='';_0x3c94ad[_0xedce('0xd','fwJd')]=_0x598031;var _0x6e72b0=_0x3c94ad;var _0x29086c={};_0x29086c[_0xedce('0x10','ssRK')]=JSON[_0xedce('0xe','6X5z')](_0x6e72b0);$done(_0x29086c);