import{r as j,j as u}from"./app-95eecb40.js";import{K as T}from"./KeyValue-2fd1bc79.js";import te from"./BillDetailsTable-431d3733.js";import{I as re}from"./ID-0468a484.js";import{N as _}from"./Num-107dd470.js";import{p as G}from"./index-008cf8d3.js";import{F as ne}from"./FromDate-542b151a.js";import{L as ae}from"./Logo-c31c5985.js";import"./BillDetailRow-8657e62e.js";import"./index-abdbd0b7.js";var O={},K={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},se=K;function F(e){this.mode=se.MODE_8BIT_BYTE,this.data=e}F.prototype={getLength:function(e){return this.data.length},write:function(e){for(var t=0;t<this.data.length;t++)e.put(this.data.charCodeAt(t),8)}};var ie=F,U={L:1,M:0,Q:3,H:2},b=U;function E(e,t){this.totalCount=e,this.dataCount=t}E.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];E.getRSBlocks=function(e,t){var n=E.getRsBlockTable(e,t);if(n==null)throw new Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+t);for(var r=n.length/3,a=new Array,s=0;s<r;s++)for(var o=n[s*3+0],i=n[s*3+1],l=n[s*3+2],h=0;h<o;h++)a.push(new E(i,l));return a};E.getRsBlockTable=function(e,t){switch(t){case b.L:return E.RS_BLOCK_TABLE[(e-1)*4+0];case b.M:return E.RS_BLOCK_TABLE[(e-1)*4+1];case b.Q:return E.RS_BLOCK_TABLE[(e-1)*4+2];case b.H:return E.RS_BLOCK_TABLE[(e-1)*4+3];default:return}};var oe=E;function X(){this.buffer=new Array,this.length=0}X.prototype={get:function(e){var t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)==1},put:function(e,t){for(var n=0;n<t;n++)this.putBit((e>>>t-n-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var ue=X,p={glog:function(e){if(e<1)throw new Error("glog("+e+")");return p.LOG_TABLE[e]},gexp:function(e){for(;e<0;)e+=255;for(;e>=256;)e-=255;return p.EXP_TABLE[e]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)};for(var g=0;g<8;g++)p.EXP_TABLE[g]=1<<g;for(var g=8;g<256;g++)p.EXP_TABLE[g]=p.EXP_TABLE[g-4]^p.EXP_TABLE[g-5]^p.EXP_TABLE[g-6]^p.EXP_TABLE[g-8];for(var g=0;g<255;g++)p.LOG_TABLE[p.EXP_TABLE[g]]=g;var Y=p,L=Y;function M(e,t){if(e.length==null)throw new Error(e.length+"/"+t);for(var n=0;n<e.length&&e[n]==0;)n++;this.num=new Array(e.length-n+t);for(var r=0;r<e.length-n;r++)this.num[r]=e[r+n]}M.prototype={get:function(e){return this.num[e]},getLength:function(){return this.num.length},multiply:function(e){for(var t=new Array(this.getLength()+e.getLength()-1),n=0;n<this.getLength();n++)for(var r=0;r<e.getLength();r++)t[n+r]^=L.gexp(L.glog(this.get(n))+L.glog(e.get(r)));return new M(t,0)},mod:function(e){if(this.getLength()-e.getLength()<0)return this;for(var t=L.glog(this.get(0))-L.glog(e.get(0)),n=new Array(this.getLength()),r=0;r<this.getLength();r++)n[r]=this.get(r);for(var r=0;r<e.getLength();r++)n[r]^=L.gexp(L.glog(e.get(r))+t);return new M(n,0).mod(e)}};var J=M,c=K,z=J,le=Y,P={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},v={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(e){for(var t=e<<10;v.getBCHDigit(t)-v.getBCHDigit(v.G15)>=0;)t^=v.G15<<v.getBCHDigit(t)-v.getBCHDigit(v.G15);return(e<<10|t)^v.G15_MASK},getBCHTypeNumber:function(e){for(var t=e<<12;v.getBCHDigit(t)-v.getBCHDigit(v.G18)>=0;)t^=v.G18<<v.getBCHDigit(t)-v.getBCHDigit(v.G18);return e<<12|t},getBCHDigit:function(e){for(var t=0;e!=0;)t++,e>>>=1;return t},getPatternPosition:function(e){return v.PATTERN_POSITION_TABLE[e-1]},getMask:function(e,t,n){switch(e){case P.PATTERN000:return(t+n)%2==0;case P.PATTERN001:return t%2==0;case P.PATTERN010:return n%3==0;case P.PATTERN011:return(t+n)%3==0;case P.PATTERN100:return(Math.floor(t/2)+Math.floor(n/3))%2==0;case P.PATTERN101:return t*n%2+t*n%3==0;case P.PATTERN110:return(t*n%2+t*n%3)%2==0;case P.PATTERN111:return(t*n%3+(t+n)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}},getErrorCorrectPolynomial:function(e){for(var t=new z([1],0),n=0;n<e;n++)t=t.multiply(new z([1,le.gexp(n)],0));return t},getLengthInBits:function(e,t){if(1<=t&&t<10)switch(e){case c.MODE_NUMBER:return 10;case c.MODE_ALPHA_NUM:return 9;case c.MODE_8BIT_BYTE:return 8;case c.MODE_KANJI:return 8;default:throw new Error("mode:"+e)}else if(t<27)switch(e){case c.MODE_NUMBER:return 12;case c.MODE_ALPHA_NUM:return 11;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 10;default:throw new Error("mode:"+e)}else if(t<41)switch(e){case c.MODE_NUMBER:return 14;case c.MODE_ALPHA_NUM:return 13;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 12;default:throw new Error("mode:"+e)}else throw new Error("type:"+t)},getLostPoint:function(e){for(var t=e.getModuleCount(),n=0,r=0;r<t;r++)for(var a=0;a<t;a++){for(var s=0,o=e.isDark(r,a),i=-1;i<=1;i++)if(!(r+i<0||t<=r+i))for(var l=-1;l<=1;l++)a+l<0||t<=a+l||i==0&&l==0||o==e.isDark(r+i,a+l)&&s++;s>5&&(n+=3+s-5)}for(var r=0;r<t-1;r++)for(var a=0;a<t-1;a++){var h=0;e.isDark(r,a)&&h++,e.isDark(r+1,a)&&h++,e.isDark(r,a+1)&&h++,e.isDark(r+1,a+1)&&h++,(h==0||h==4)&&(n+=3)}for(var r=0;r<t;r++)for(var a=0;a<t-6;a++)e.isDark(r,a)&&!e.isDark(r,a+1)&&e.isDark(r,a+2)&&e.isDark(r,a+3)&&e.isDark(r,a+4)&&!e.isDark(r,a+5)&&e.isDark(r,a+6)&&(n+=40);for(var a=0;a<t;a++)for(var r=0;r<t-6;r++)e.isDark(r,a)&&!e.isDark(r+1,a)&&e.isDark(r+2,a)&&e.isDark(r+3,a)&&e.isDark(r+4,a)&&!e.isDark(r+5,a)&&e.isDark(r+6,a)&&(n+=40);for(var f=0,a=0;a<t;a++)for(var r=0;r<t;r++)e.isDark(r,a)&&f++;var C=Math.abs(100*f/t/t-50)/5;return n+=C*10,n}},fe=v,he=ie,V=oe,W=ue,D=fe,ve=J;function x(e,t){this.typeNumber=e,this.errorCorrectLevel=t,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var d=x.prototype;d.addData=function(e){var t=new he(e);this.dataList.push(t),this.dataCache=null};d.isDark=function(e,t){if(e<0||this.moduleCount<=e||t<0||this.moduleCount<=t)throw new Error(e+","+t);return this.modules[e][t]};d.getModuleCount=function(){return this.moduleCount};d.make=function(){if(this.typeNumber<1){var e=1;for(e=1;e<40;e++){for(var t=V.getRSBlocks(e,this.errorCorrectLevel),n=new W,r=0,a=0;a<t.length;a++)r+=t[a].dataCount;for(var a=0;a<this.dataList.length;a++){var s=this.dataList[a];n.put(s.mode,4),n.put(s.getLength(),D.getLengthInBits(s.mode,e)),s.write(n)}if(n.getLengthInBits()<=r*8)break}this.typeNumber=e}this.makeImpl(!1,this.getBestMaskPattern())};d.makeImpl=function(e,t){this.moduleCount=this.typeNumber*4+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++)this.modules[n][r]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(e,t),this.typeNumber>=7&&this.setupTypeNumber(e),this.dataCache==null&&(this.dataCache=x.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,t)};d.setupPositionProbePattern=function(e,t){for(var n=-1;n<=7;n++)if(!(e+n<=-1||this.moduleCount<=e+n))for(var r=-1;r<=7;r++)t+r<=-1||this.moduleCount<=t+r||(0<=n&&n<=6&&(r==0||r==6)||0<=r&&r<=6&&(n==0||n==6)||2<=n&&n<=4&&2<=r&&r<=4?this.modules[e+n][t+r]=!0:this.modules[e+n][t+r]=!1)};d.getBestMaskPattern=function(){for(var e=0,t=0,n=0;n<8;n++){this.makeImpl(!0,n);var r=D.getLostPoint(this);(n==0||e>r)&&(e=r,t=n)}return t};d.createMovieClip=function(e,t,n){var r=e.createEmptyMovieClip(t,n),a=1;this.make();for(var s=0;s<this.modules.length;s++)for(var o=s*a,i=0;i<this.modules[s].length;i++){var l=i*a,h=this.modules[s][i];h&&(r.beginFill(0,100),r.moveTo(l,o),r.lineTo(l+a,o),r.lineTo(l+a,o+a),r.lineTo(l,o+a),r.endFill())}return r};d.setupTimingPattern=function(){for(var e=8;e<this.moduleCount-8;e++)this.modules[e][6]==null&&(this.modules[e][6]=e%2==0);for(var t=8;t<this.moduleCount-8;t++)this.modules[6][t]==null&&(this.modules[6][t]=t%2==0)};d.setupPositionAdjustPattern=function(){for(var e=D.getPatternPosition(this.typeNumber),t=0;t<e.length;t++)for(var n=0;n<e.length;n++){var r=e[t],a=e[n];if(this.modules[r][a]==null)for(var s=-2;s<=2;s++)for(var o=-2;o<=2;o++)s==-2||s==2||o==-2||o==2||s==0&&o==0?this.modules[r+s][a+o]=!0:this.modules[r+s][a+o]=!1}};d.setupTypeNumber=function(e){for(var t=D.getBCHTypeNumber(this.typeNumber),n=0;n<18;n++){var r=!e&&(t>>n&1)==1;this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=r}for(var n=0;n<18;n++){var r=!e&&(t>>n&1)==1;this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=r}};d.setupTypeInfo=function(e,t){for(var n=this.errorCorrectLevel<<3|t,r=D.getBCHTypeInfo(n),a=0;a<15;a++){var s=!e&&(r>>a&1)==1;a<6?this.modules[a][8]=s:a<8?this.modules[a+1][8]=s:this.modules[this.moduleCount-15+a][8]=s}for(var a=0;a<15;a++){var s=!e&&(r>>a&1)==1;a<8?this.modules[8][this.moduleCount-a-1]=s:a<9?this.modules[8][15-a-1+1]=s:this.modules[8][15-a-1]=s}this.modules[this.moduleCount-8][8]=!e};d.mapData=function(e,t){for(var n=-1,r=this.moduleCount-1,a=7,s=0,o=this.moduleCount-1;o>0;o-=2)for(o==6&&o--;;){for(var i=0;i<2;i++)if(this.modules[r][o-i]==null){var l=!1;s<e.length&&(l=(e[s]>>>a&1)==1);var h=D.getMask(t,r,o-i);h&&(l=!l),this.modules[r][o-i]=l,a--,a==-1&&(s++,a=7)}if(r+=n,r<0||this.moduleCount<=r){r-=n,n=-n;break}}};x.PAD0=236;x.PAD1=17;x.createData=function(e,t,n){for(var r=V.getRSBlocks(e,t),a=new W,s=0;s<n.length;s++){var o=n[s];a.put(o.mode,4),a.put(o.getLength(),D.getLengthInBits(o.mode,e)),o.write(a)}for(var i=0,s=0;s<r.length;s++)i+=r[s].dataCount;if(a.getLengthInBits()>i*8)throw new Error("code length overflow. ("+a.getLengthInBits()+">"+i*8+")");for(a.getLengthInBits()+4<=i*8&&a.put(0,4);a.getLengthInBits()%8!=0;)a.putBit(!1);for(;!(a.getLengthInBits()>=i*8||(a.put(x.PAD0,8),a.getLengthInBits()>=i*8));)a.put(x.PAD1,8);return x.createBytes(a,r)};x.createBytes=function(e,t){for(var n=0,r=0,a=0,s=new Array(t.length),o=new Array(t.length),i=0;i<t.length;i++){var l=t[i].dataCount,h=t[i].totalCount-l;r=Math.max(r,l),a=Math.max(a,h),s[i]=new Array(l);for(var f=0;f<s[i].length;f++)s[i][f]=255&e.buffer[f+n];n+=l;var C=D.getErrorCorrectPolynomial(h),y=new ve(s[i],C.getLength()-1),w=y.mod(C);o[i]=new Array(C.getLength()-1);for(var f=0;f<o[i].length;f++){var Q=f+w.getLength()-o[i].length;o[i][f]=Q>=0?w.get(Q):0}}for(var $=0,f=0;f<t.length;f++)$+=t[f].totalCount;for(var k=new Array($),H=0,f=0;f<r;f++)for(var i=0;i<t.length;i++)f<s[i].length&&(k[H++]=s[i][f]);for(var f=0;f<a;f++)for(var i=0;i<t.length;i++)f<o[i].length&&(k[H++]=o[i][f]);return k};var ge=x,S={};Object.defineProperty(S,"__esModule",{value:!0});var de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ce=G,m=q(ce),Z=j,N=q(Z);function q(e){return e&&e.__esModule?e:{default:e}}function me(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var pe={bgColor:m.default.oneOfType([m.default.object,m.default.string]).isRequired,bgD:m.default.string.isRequired,fgColor:m.default.oneOfType([m.default.object,m.default.string]).isRequired,fgD:m.default.string.isRequired,size:m.default.number.isRequired,title:m.default.string,viewBoxSize:m.default.number.isRequired,xmlns:m.default.string},Te={title:void 0,xmlns:"http://www.w3.org/2000/svg"},I=(0,Z.forwardRef)(function(e,t){var n=e.bgColor,r=e.bgD,a=e.fgD,s=e.fgColor,o=e.size,i=e.title,l=e.viewBoxSize,h=me(e,["bgColor","bgD","fgD","fgColor","size","title","viewBoxSize"]);return N.default.createElement("svg",de({},h,{height:o,ref:t,viewBox:"0 0 "+l+" "+l,width:o}),i?N.default.createElement("title",null,i):null,N.default.createElement("path",{d:r,fill:n}),N.default.createElement("path",{d:a,fill:s}))});I.displayName="QRCodeSvg";I.propTypes=pe;I.defaultProps=Te;S.default=I;Object.defineProperty(O,"__esModule",{value:!0});O.QRCode=void 0;var Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xe=ge,Ce=A(xe),Be=U,Pe=A(Be),De=G,B=A(De),ee=j,Le=A(ee),we=S,ye=A(we);function A(e){return e&&e.__esModule?e:{default:e}}function _e(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var Ae={bgColor:B.default.oneOfType([B.default.object,B.default.string]),fgColor:B.default.oneOfType([B.default.object,B.default.string]),level:B.default.string,size:B.default.number,value:B.default.string.isRequired},Re={bgColor:"#FFFFFF",fgColor:"#000000",level:"L",size:256},R=(0,ee.forwardRef)(function(e,t){var n=e.bgColor,r=e.fgColor,a=e.level,s=e.size,o=e.value,i=_e(e,["bgColor","fgColor","level","size","value"]),l=new Ce.default(-1,Pe.default[a]);l.addData(o),l.make();var h=l.modules;return Le.default.createElement(ye.default,Ee({},i,{bgColor:n,bgD:h.map(function(f,C){return f.map(function(y,w){return y?"":"M "+w+" "+C+" l 1 0 0 1 -1 0 Z"}).join(" ")}).join(" "),fgColor:r,fgD:h.map(function(f,C){return f.map(function(y,w){return y?"M "+w+" "+C+" l 1 0 0 1 -1 0 Z":""}).join(" ")}).join(" "),ref:t,size:s,viewBoxSize:h.length}))});O.QRCode=R;R.displayName="QRCode";R.propTypes=Ae;R.defaultProps=Re;var be=O.default=R;function ze({bill:e}){var r,a;if(!e.business)throw new Error("Business expected to be defined got:"+e.business);const t=j.useMemo(()=>e.bill_details.reduce((s,o)=>s+(o.product.price??0)*o.quantity,0),[e.bill_details]),n=t*(1+e.business.taxPercent);return u.jsx("div",{className:"flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0",children:u.jsx("div",{className:"mt-6 w-full overflow-hidden bg-white px-6 pb-2 pt-4 shadow-md sm:max-w-md sm:rounded-lg",children:u.jsxs("section",{className:"space-y-4",children:[u.jsxs("header",{children:[u.jsx("h1",{className:"mb-2 text-center text-sm",children:"Simplified Invoice"}),((r=e.business)==null?void 0:r.logo)&&u.jsx(ae,{className:"mx-auto mb-3 h-24 w-auto rounded",businessLogo:e.business.logo}),u.jsx("p",{className:"text-center text-lg font-semibold",children:e.business.name}),u.jsx("p",{className:"text-center",children:e.business.address}),e.business.taxIdentificationNumber&&u.jsx(T,{k:"Tax Identification",v:e.business.taxIdentificationNumber})]}),u.jsxs("section",{children:[u.jsx(T,{k:"Date",v:u.jsxs("span",{children:[new Date(e.updated_at).toLocaleDateString("en-ca"),u.jsxs("span",{className:"print:hidden",children:[" ","(",u.jsx(ne,{date:e.updated_at}),")"]})]})}),u.jsx(T,{k:"Invoice ID",v:u.jsx(re,{id:e.id})}),u.jsx(T,{k:"Cashier",v:(a=e.created_by)==null?void 0:a.name})]}),u.jsx(te,{bill:e}),u.jsxs("section",{children:[u.jsx(T,{k:"Total without VAT",v:u.jsx(_,{amount:t,showCurrency:!0,currency:e.business.currency}),valueClassName:"!text-secondary-700"}),u.jsx(T,{k:`VAT (%${Number((e.business.taxPercent*100).toFixed(2))})`,v:u.jsx(_,{amount:t*e.business.taxPercent,showCurrency:!0,currency:e.business.currency}),valueClassName:"!text-danger-700"}),u.jsx(T,{k:"Net Invoice",v:u.jsx(_,{amount:n,currency:e.business.currency,showCurrency:!0}),valueClassName:"!text-primary-700"})]}),u.jsxs("section",{children:[u.jsx(T,{k:"Received",v:u.jsx(_,{amount:e.cashReceived,noAmount:"Digital Payment",currency:e.business.currency,showCurrency:!0})}),e.cashReceived&&u.jsx(T,{k:"Remaining",v:u.jsx(_,{amount:e.cashReceived===null?null:e.cashReceived-n,noAmount:"Digital Payment",currency:e.business.currency,showCurrency:!0})})]}),u.jsx("section",{className:"flex justify-center",children:u.jsx(be,{value:location.href,size:150})}),u.jsx("p",{className:"text-center text-xl font-semibold",children:"Thank you"}),u.jsx("footer",{children:u.jsx(T,{className:"text-xs text-center border-t pt-1",k:"Programmed by",v:"Laptop POS",noColon:!0})})]})})})}export{ze as default};
