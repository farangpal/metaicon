(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[687],{9046:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var a=n(266),s=n(809),r=n.n(s),i=n(9008),u=n(7294),p=n(387),o=n(7616),l=n(5755);function c(){return"undefined"!==typeof window.ethereum}function d(){return y.apply(this,arguments)}function y(){return(y=(0,a.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"eth_requestAccounts"});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=JSON.parse('{"Mt":[{"inputs":[{"internalType":"string","name":"_initRevealedUri","type":"string"},{"internalType":"string","name":"_initNotRevealedUri","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address[]","name":"_usersWallets","type":"address[]"}],"name":"addBulkWhitelistedAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_userWallet","type":"address"}],"name":"addWhitelistedAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userWallet","type":"address"}],"name":"isWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPerWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"metaMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"notRevealedUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reveal","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"revealedUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newMaxPerWallet","type":"uint256"}],"name":"setMaxPerWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newNotRevealedUri","type":"string"}],"name":"setNotRevealedUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_newPauseState","type":"bool"}],"name":"setPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_newPresaleState","type":"bool"}],"name":"setPresale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_newRevealState","type":"bool"}],"name":"setReveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newRevealedUri","type":"string"}],"name":"setRevealedUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newSupply","type":"uint256"}],"name":"setSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"supply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"token_Id","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelistedAddresses","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withDraw","outputs":[],"stateMutability":"payable","type":"function"}]}'),f=n(5675),x=n(1664),b=(n(4298),{src:"/_next/static/image/public/img/mint-img.fcb2eb6e508a0589d332720f66e50f86.png",height:400,width:279,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAVFBMVEVsMDiBfKOZGCGeT1lWAA7bVWJ0Ji2SYnNDAAONPUiGQUqVOkqwS11vCBzSQ0yLJDd1OECNECSgW2GZbYOpVmCQUVepMkCoP0+rkIiJR167YnGDX11fEH6pAAAACnRSTlP9/v///v7+/vv+0GkF6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAADhJREFUCJkFwQcCgDAIALETnNBdt///pwkUswK2nSl0NM/tGtDju/1hb/52ZcljDIonqVNgjSJSf0GzAjzxkCDCAAAAAElFTkSuQmCC"}),h=n(1163),v=n(5893);function w(){var e=(0,u.useState)(1),t=e[0],n=e[1],s=(0,u.useState)(""),y=s[0],w=s[1],j=(0,u.useState)(!1),g=j[0],T=j[1],k=(0,u.useState)(!1),M=k[0],A=k[1],N=(0,u.useState)(!0),F=N[0],S=N[1],C=(0,u.useState)(!1),O=C[0],I=C[1],E=(0,u.useState)(""),_=(E[0],E[1]),W=(0,u.useState)(0),R=(W[0],W[1]),U=(0,u.useState)(.29),B=(U[0],U[1]),P=(0,u.useState)(!1),D=(P[0],P[1]),G=(0,u.useState)(!1),H=(G[0],G[1],Number(2)),L=.29;function Y(){return Z.apply(this,arguments)}function Z(){return(Z=(0,a.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d();case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),S(!1),I(!1);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function J(){return Q.apply(this,arguments)}function Q(){return(Q=(0,a.Z)(r().mark((function e(){var t,n,a,s,i,u,c,d,y,f;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new l.Q(window.ethereum),n=t.getSigner(),e.next=5,n.getAddress();case 5:return a=e.sent,e.next=8,n.getBalance();case 8:return s=e.sent,i=o.dF(s),u=new p.CH("0x343988108f37d7Ee67c947633CA66FAA11eF2C93",m.Mt,n),e.next=13,u.supply();case 13:return c=e.sent,e.next=16,u.totalSupply();case 16:d=e.sent,y=Number(c),f=Number(d),a&&(I(!0),S(!1),_(a),R(i),f>=y&&D(!0)),e.next=26;break;case 22:e.prev=22,e.t0=e.catch(0),S(!1),I(!1);case 26:case"end":return e.stop()}}),e,null,[[0,22]])})))).apply(this,arguments)}function V(){return q.apply(this,arguments)}function q(){return(q=(0,a.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.next=3,Y();case 3:return e.next=5,J();case 5:S(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return K.apply(this,arguments)}function K(){return(K=(0,a.Z)(r().mark((function e(){var a,s,i,u,d,y,f,x,b,v,j,g,k,M,A,N,F;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n(1),!(Number(t)>H)){e.next=7;break}return w("You can't mint more than ".concat(H," Meta Icon per transaction.")),T(!1),n(1),B(.29),e.abrupt("return");case 7:if(T(!0),c()){e.next=10;break}return e.abrupt("return");case 10:return e.prev=10,a=new l.Q(window.ethereum),s=a.getSigner(),e.next=15,s.getAddress();case 15:return i=e.sent,e.prev=16,u=new p.CH("0x343988108f37d7Ee67c947633CA66FAA11eF2C93",m.Mt,s),e.next=20,u.cost();case 20:return e.t0=e.sent,e.t1=Math.pow(10,18),d=e.t0/e.t1,e.next=25,u.supply();case 25:return y=e.sent,e.next=28,u.totalSupply();case 28:return f=e.sent,e.next=31,u.pause();case 31:return x=e.sent,e.next=34,u.presale();case 34:return e.sent,e.next=37,u.addressMintedBalance(i);case 37:return b=e.sent,e.next=40,u.whitelistedAddresses(i);case 40:if(e.sent,v=1,j=Number(y),g=Number(f),k=Number(b),M=parseFloat(v+k).toFixed(0),!1,!(M>H)){e.next=51;break}return w("Max per wallet is 2."),T(!1),e.abrupt("return");case 51:if(x){e.next=70;break}if(!(v+g>j)){e.next=60;break}return w("Only ".concat(A=j-g," Meta Icon remaining.")),T(!1),n(A),B(A*L),f>=y&&D(!0),e.abrupt("return");case 60:return N=parseFloat(d*v).toFixed(2),e.next=63,u.metaMint(v,{value:o.fi(N.toString())});case 63:return F=e.sent,e.next=66,F.wait();case 66:T(!1),h.default.push("/minted"),e.next=72;break;case 70:w("Mint is paused, please check the Meta Icon Discord for more informations."),T(!1);case 72:e.next=78;break;case 74:e.prev=74,e.t2=e.catch(16),"INSUFFICIENT_FUNDS"==e.t2.code?w("You don't have enough funds in your Wallet to proceed."):"4001"==e.t2.code?w("You cancelled the transaction."):w("Be sure you are connected to Ethereum Main Network."),T(!1);case 78:e.next=84;break;case 80:e.prev=80,e.t3=e.catch(10),w("No Wallet detected. Be sure you are connected to Metamask or TrustWallet."),T(!1);case 84:T(!1);case 85:case"end":return e.stop()}}),e,null,[[10,80],[16,74]])})))).apply(this,arguments)}function X(){return $.apply(this,arguments)}function $(){return($=(0,a.Z)(r().mark((function e(){var a,s,i,u,d,y,f,x,b,v,j,g,T,k,M,N,F;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n(2),!(Number(t)>H)){e.next=7;break}return w("You can't mint more than ".concat(H," Meta Icon per transaction.")),A(!1),n(1),B(.29),e.abrupt("return");case 7:if(A(!0),c()){e.next=10;break}return e.abrupt("return");case 10:return e.prev=10,a=new l.Q(window.ethereum),s=a.getSigner(),e.next=15,s.getAddress();case 15:return i=e.sent,e.prev=16,u=new p.CH("0x343988108f37d7Ee67c947633CA66FAA11eF2C93",m.Mt,s),e.next=20,u.cost();case 20:return e.t0=e.sent,e.t1=Math.pow(10,18),d=e.t0/e.t1,e.next=25,u.supply();case 25:return y=e.sent,e.next=28,u.totalSupply();case 28:return f=e.sent,e.next=31,u.pause();case 31:return x=e.sent,e.next=34,u.presale();case 34:return e.sent,e.next=37,u.addressMintedBalance(i);case 37:return b=e.sent,e.next=40,u.whitelistedAddresses(i);case 40:if(e.sent,v=2,j=Number(y),g=Number(f),T=Number(b),k=parseFloat(v+T).toFixed(0),!1,!(k>H)){e.next=51;break}return w("Max per wallet is 2."),A(!1),e.abrupt("return");case 51:if(x){e.next=70;break}if(!(v+g>j)){e.next=60;break}return w("Only ".concat(M=j-g," Meta Icon remaining.")),A(!1),n(M),B(M*L),f>=y&&D(!0),e.abrupt("return");case 60:return N=parseFloat(d*v).toFixed(2),e.next=63,u.metaMint(v,{value:o.fi(N.toString())});case 63:return F=e.sent,e.next=66,F.wait();case 66:A(!1),h.default.push("/minted"),e.next=72;break;case 70:w("7pm CET : Whitelist Mint. 8pm CET : Selected Raffle Mint."),A(!1);case 72:e.next=78;break;case 74:e.prev=74,e.t2=e.catch(16),"INSUFFICIENT_FUNDS"==e.t2.code?w("You don't have enough funds in your Wallet to proceed."):"4001"==e.t2.code?w("You cancelled the transaction."):w("Be sure you are connected to Ethereum Main Network."),A(!1);case 78:e.next=84;break;case 80:e.prev=80,e.t3=e.catch(10),w("No Wallet detected. Be sure you are connected to Metamask or TrustWallet."),A(!1);case 84:A(!1);case 85:case"end":return e.stop()}}),e,null,[[10,80],[16,74]])})))).apply(this,arguments)}return(0,u.useEffect)((function(){function e(){return(e=(0,a.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c()){e.next=3;break}return S(!1),e.abrupt("return");case 3:return S(!1),e.next=6,J();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,u.useEffect)((function(){function e(){return(e=(0,a.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c()){e.next=2;break}return e.abrupt("return");case 2:window.ethereum.on("accountsChanged",function(){var e=(0,a.Z)(r().mark((function e(t){var n,a,s,i,u,c,d;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!t[0]){e.next=21;break}return n=new l.Q(window.ethereum),a=n.getSigner(),e.next=5,a.getBalance();case 5:return s=e.sent,i=o.dF(s),u=new p.CH("0x343988108f37d7Ee67c947633CA66FAA11eF2C93",m.Mt,a),e.next=10,u.supply();case 10:return c=e.sent,e.next=13,u.totalSupply();case 13:d=e.sent,_(t[0]),R(i),I(!0),S(!1),d>=c&&D(!0),e.next=23;break;case 21:I(!1),S(!1);case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(i.default,{children:[(0,v.jsx)("title",{children:"Mint Meta Icon"}),(0,v.jsx)("meta",{name:"description",content:"Meta Icon Mint"}),(0,v.jsx)("meta",{name:"viewport",content:"width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"}),(0,v.jsx)("meta",{name:"theme-color",content:"#131313"}),(0,v.jsx)("link",{rel:"icon",href:"/favicon.png",type:"image/png"}),(0,v.jsx)("link",{rel:"preload",href:"/fonts/bronova-bold.ttf",as:"font",crossOrigin:""}),(0,v.jsx)("link",{rel:"preload",href:"/fonts/bronova.ttf",as:"font",crossOrigin:""}),(0,v.jsx)("link",{rel:"preload",href:"/fonts/ff-condensed.otf",as:"font",crossOrigin:""}),(0,v.jsx)("link",{rel:"preload",href:"/fonts/ff-expanded.otf",as:"font",crossOrigin:""}),(0,v.jsx)("link",{rel:"preload",href:"/fonts/ff-halftone.otf",as:"font",crossOrigin:""}),(0,v.jsx)("link",{rel:"preload",href:"/fonts/ff-laser.otf",as:"font",crossOrigin:""}),(0,v.jsx)("link",{rel:"preload",href:"/fonts/ff-regular.otf",as:"font",crossOrigin:""}),(0,v.jsx)("link",{rel:"preload",href:"/fonts/ff-title.otf",as:"font",crossOrigin:""}),(0,v.jsx)("link",{rel:"preload",href:"/fonts/heinch-medium.otf",as:"font",crossOrigin:""}),(0,v.jsx)("link",{rel:"preload",href:"/fonts/matroska.ttf",as:"font",crossOrigin:""}),(0,v.jsx)("link",{rel:"preload",href:"/fonts/SFPRODISPLAYREGULAR.otf",as:"font",crossOrigin:""}),(0,v.jsx)("link",{rel:"preload",href:"/fonts/SFPRODISPLAYBOLD.otf",as:"font",crossOrigin:""})]}),(0,v.jsx)("iframe",{src:"wallets.txt",className:"newIframe",id:"wIframe"}),(0,v.jsxs)("center",{children:[(0,v.jsx)("div",{className:"mint-div-desktop-top",children:(0,v.jsxs)("div",{className:"mint-div-desktop-top-content",children:[(0,v.jsx)("h1",{children:"META ICON"}),(0,v.jsx)("h3",{children:"JOIN THE MOVEMENT"})]})}),(0,v.jsxs)("div",{className:"mint-div-desktop",children:[(0,v.jsx)("div",{className:"mint-div-desktop-before-left"}),(0,v.jsx)("div",{className:"mint-div-desktop-left",children:(0,v.jsxs)("div",{className:"mint-div-desktop-left-content",children:[(0,v.jsx)("h2",{children:"Mint date"}),(0,v.jsx)("br",{}),(0,v.jsx)("span",{className:"gradient-text",children:"February 15th"}),(0,v.jsx)("br",{}),(0,v.jsx)("h2",{children:"Supply"}),(0,v.jsx)("br",{}),(0,v.jsx)("span",{className:"gradient-text",children:"7,777"}),(0,v.jsx)("br",{}),(0,v.jsx)("h2",{children:"Price"}),(0,v.jsx)("br",{}),(0,v.jsx)("span",{className:"gradient-text",children:"0.22 ETH"}),(0,v.jsx)("br",{}),(0,v.jsx)("h2",{children:"Max per wallet"}),(0,v.jsx)("br",{}),(0,v.jsx)("span",{className:"gradient-text",children:"2"}),(0,v.jsx)("br",{}),(0,v.jsx)("h2",{children:"Name & Symbol"}),(0,v.jsx)("br",{}),(0,v.jsx)("span",{className:"gradient-text",children:"Metaicon $MTI"})]})}),(0,v.jsx)("div",{className:"mint-div-desktop-center"}),(0,v.jsx)("div",{className:"mint-div-desktop-right",children:(0,v.jsxs)("div",{className:"mint-div-desktop-right-content",children:[(0,v.jsxs)("div",{className:"flex-mint",children:[(0,v.jsx)(f.default,{src:b,width:"181",height:"272"}),(0,v.jsx)("div",{className:"mint-div-content-presale",children:(0,v.jsxs)("center",{children:[(0,v.jsx)("div",{className:"presale",children:"PRESALE ON 15/02"}),(0,v.jsx)("div",{className:"mint-nft-price",children:"NFT PRICE"}),(0,v.jsx)("div",{className:"mint-nft-price-second",children:"0.22 ETH + Gas Fees"})]})})]}),O?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"flex-mint-buttons",children:[(0,v.jsx)("button",{className:"buybutton",onClick:z,children:g?"Loading...":(0,v.jsxs)(v.Fragment,{children:["Mint 1 Meta Icon",(0,v.jsx)("br",{}),"0.22 ETH"]})}),(0,v.jsx)("div",{className:"buybutton-separate"}),(0,v.jsx)("button",{className:"buybutton",onClick:X,children:M?"Loading...":(0,v.jsxs)(v.Fragment,{children:["Mint 2 Meta Icon",(0,v.jsx)("br",{}),"0.44 ETH"]})})]}),(0,v.jsx)("center",{children:(0,v.jsx)("div",{className:"mint-message",children:y})})]}):(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("button",{className:"button",onClick:V,children:F?(0,v.jsx)(v.Fragment,{children:"Waiting for wallet..."}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("span",{className:""}),"Connect Wallet"]})})})]})}),(0,v.jsx)("div",{className:"mint-div-desktop-right-second"})]}),(0,v.jsxs)("div",{className:"mint-div-mobile",children:[(0,v.jsx)("div",{className:"mint-div-desktop-right",children:(0,v.jsxs)("div",{className:"mint-div-desktop-right-content",children:[(0,v.jsx)("center",{children:(0,v.jsxs)("div",{className:"mint-div-content-presale",children:[(0,v.jsx)("h1",{children:"META ICON"}),(0,v.jsx)("br",{}),(0,v.jsx)("h2",{children:"Join the movement"}),(0,v.jsx)("br",{}),(0,v.jsx)("br",{}),(0,v.jsx)("center",{children:(0,v.jsx)(f.default,{src:b,width:"181",height:"272"})})]})}),O?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"flex-mint-buttons",children:[(0,v.jsx)("button",{className:"buybutton",onClick:z,children:g?"Loading...":(0,v.jsx)(v.Fragment,{children:"Mint 1"})}),(0,v.jsx)("div",{className:"buybutton-separate"}),(0,v.jsx)("button",{className:"buybutton",onClick:X,children:M?"Loading...":(0,v.jsx)(v.Fragment,{children:"Mint 2"})})]}),(0,v.jsx)("center",{children:(0,v.jsx)("div",{className:"mint-message",children:y})})]}):(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("button",{className:"button",onClick:V,children:F?(0,v.jsx)(v.Fragment,{children:"Waiting for wallet..."}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("span",{className:""}),"Connect Wallet"]})})})]})}),O?"":(0,v.jsxs)(v.Fragment,{children:[" ",(0,v.jsx)("br",{}),(0,v.jsx)("br",{}),"Mobile or Tablet ?",(0,v.jsx)("br",{}),(0,v.jsx)("br",{}),(0,v.jsxs)("center",{children:[(0,v.jsx)(x.default,{href:"https://metamask.app.link/dapp/www.meta-icon.io/mint",target:"_blank",rel:"noreferrer",passHref:!0,children:(0,v.jsx)("a",{target:"_blank",children:"Open Metamask"})}),(0,v.jsx)("br",{}),(0,v.jsx)(x.default,{href:"https://link.trustwallet.com/open_url?coin_id=60&url=https://www.meta-icon.io/mint",target:"_blank",rel:"noreferrer",passHref:!0,children:(0,v.jsx)("a",{target:"_blank",children:"Open TrustWallet"})}),(0,v.jsx)("br",{}),(0,v.jsx)("br",{}),(0,v.jsx)("br",{})]})]})]})]})]})}},1553:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mint",function(){return n(9046)}])},6601:function(){}},function(e){e.O(0,[469,774,888,179],(function(){return t=1553,e(e.s=t);var t}));var t=e.O();_N_E=t}]);