var w=Object.defineProperty;var B=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var f=(n,e,a)=>e in n?w(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a,g=(n,e)=>{for(var a in e||(e={}))T.call(e,a)&&f(n,a,e[a]);if(B)for(var a of B(e))S.call(e,a)&&f(n,a,e[a]);return n};import{_ as X,r as x,o as I,c as k,d as v,w as h,F as Y,a as s,e as l,V as P}from"./app.165d7d0e.js";const V={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:n,createTextVNode:e,openBlock:a,createElementBlock:u}=P,i={class:"scrapeLottoBox"},_=[n("div",{class:"scrapeLottoBox-btn"},"\u522E\u5F00\u4F18\u60E0",-1),n("div",{class:"scrapeLottoBox-price"},[n("span",null,"\xA5123"),e(".00")],-1),n("canvas",{id:"scrapeLottoCanvas",width:"150",height:"70"},null,-1)];function b(t,o){return a(),u("div",i,_)}return g({render:b},{mounted(){this.createScrapeLotto()},methods:{createScrapeLotto(){let t=document.getElementById("scrapeLottoCanvas"),o=t.getContext("2d");o.globalAlpha=1,o.fillStyle="#ccc",o.fillRect(0,0,300,140),o.fillStyle="#000",o.font="18px \u5FAE\u8F6F\u96C5\u9ED1",o.textAlign="center",o.textBaseline="middle",o.fillText("\u522E\u4E00\u522E",73,35,100);let c=!1;t.addEventListener("mousedown",function(D){c=!0,y(D)}),t.addEventListener("mousemove",function(D){c===!0&&y(D)}),t.addEventListener("mouseup",function(){c=!1,A()}),t.addEventListener("touchstart",function(D){c=!0,y(D)}),t.addEventListener("touchmove",function(D){c===!0&&y(D)}),t.addEventListener("touchend",function(){c=!1,A()});function y(D){const p=t.getBoundingClientRect(),C=document.documentElement.scrollTop||document.body.scrollTop,r=document.documentElement.scrollLeft||document.body.scrollLeft,d=(D.pageX||D.targetTouches[0].pageX)-p.left-r,m=(D.pageY||D.targetTouches[0].pageY)-p.top-C;o.globalCompositeOperation="destination-out",o.beginPath(),o.fillStyle="white",o.moveTo(d,m),o.arc(d,m,6,0,2*Math.PI),o.fill()}function A(){const D=o.getImageData(0,0,t.width,t.height);let p=0;const C=D.data.length/4;for(let r=0;r<D.data.length;r+=4)D.data[r+3]===0&&p++;p>=C*.4&&t.remove()}}}})}()}},N=s("h1",{id:"canvas",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#canvas","aria-hidden":"true"},"#"),l(" Canvas")],-1),z=s("h2",{id:"\u522E\u5956\u6548\u679C",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u522E\u5956\u6548\u679C","aria-hidden":"true"},"#"),l(" \u522E\u5956\u6548\u679C")],-1),R=s("div",{class:"language-vue"},[s("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#808080"}},"<"),s("span",{style:{color:"#569CD6"}},"template"),s("span",{style:{color:"#808080"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#808080"}},"<"),s("span",{style:{color:"#569CD6"}},"div"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#9CDCFE"}},"class"),s("span",{style:{color:"#D4D4D4"}},"="),s("span",{style:{color:"#CE9178"}},'"scrapeLottoBox"'),s("span",{style:{color:"#808080"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    "),s("span",{style:{color:"#808080"}},"<"),s("span",{style:{color:"#569CD6"}},"div"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#9CDCFE"}},"class"),s("span",{style:{color:"#D4D4D4"}},"="),s("span",{style:{color:"#CE9178"}},'"scrapeLottoBox-btn"'),s("span",{style:{color:"#808080"}},">"),s("span",{style:{color:"#D4D4D4"}},"\u522E\u5F00\u4F18\u60E0"),s("span",{style:{color:"#808080"}},"</"),s("span",{style:{color:"#569CD6"}},"div"),s("span",{style:{color:"#808080"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    "),s("span",{style:{color:"#808080"}},"<"),s("span",{style:{color:"#569CD6"}},"div"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#9CDCFE"}},"class"),s("span",{style:{color:"#D4D4D4"}},"="),s("span",{style:{color:"#CE9178"}},'"scrapeLottoBox-price"'),s("span",{style:{color:"#808080"}},"><"),s("span",{style:{color:"#569CD6"}},"span"),s("span",{style:{color:"#808080"}},">"),s("span",{style:{color:"#D4D4D4"}},"\xA5123"),s("span",{style:{color:"#808080"}},"</"),s("span",{style:{color:"#569CD6"}},"span"),s("span",{style:{color:"#808080"}},">"),s("span",{style:{color:"#D4D4D4"}},".00"),s("span",{style:{color:"#808080"}},"</"),s("span",{style:{color:"#569CD6"}},"div"),s("span",{style:{color:"#808080"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    "),s("span",{style:{color:"#6A9955"}},"<!-- \u8499\u5C42 -->")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    "),s("span",{style:{color:"#808080"}},"<"),s("span",{style:{color:"#569CD6"}},"canvas"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#9CDCFE"}},"id"),s("span",{style:{color:"#D4D4D4"}},"="),s("span",{style:{color:"#CE9178"}},'"scrapeLottoCanvas"'),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#9CDCFE"}},"width"),s("span",{style:{color:"#D4D4D4"}},"="),s("span",{style:{color:"#CE9178"}},'"150"'),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#9CDCFE"}},"height"),s("span",{style:{color:"#D4D4D4"}},"="),s("span",{style:{color:"#CE9178"}},'"70"'),s("span",{style:{color:"#808080"}},"></"),s("span",{style:{color:"#569CD6"}},"canvas"),s("span",{style:{color:"#808080"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#808080"}},"</"),s("span",{style:{color:"#569CD6"}},"div"),s("span",{style:{color:"#808080"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#808080"}},"</"),s("span",{style:{color:"#569CD6"}},"template"),s("span",{style:{color:"#808080"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#808080"}},"<"),s("span",{style:{color:"#569CD6"}},"script"),s("span",{style:{color:"#808080"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C586C0"}},"export"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#C586C0"}},"default"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#DCDCAA"}},"mounted"),s("span",{style:{color:"#D4D4D4"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    "),s("span",{style:{color:"#569CD6"}},"this"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#DCDCAA"}},"createScrapeLotto"),s("span",{style:{color:"#D4D4D4"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"methods:"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    "),s("span",{style:{color:"#DCDCAA"}},"createScrapeLotto"),s("span",{style:{color:"#D4D4D4"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      "),s("span",{style:{color:"#569CD6"}},"let"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#9CDCFE"}},"myCanvas"),s("span",{style:{color:"#D4D4D4"}}," = "),s("span",{style:{color:"#9CDCFE"}},"document"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#DCDCAA"}},"getElementById"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#CE9178"}},'"scrapeLottoCanvas"'),s("span",{style:{color:"#D4D4D4"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      "),s("span",{style:{color:"#6A9955"}},"// \u642D\u5EFA\u73AF\u5883")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      "),s("span",{style:{color:"#569CD6"}},"let"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#9CDCFE"}},"cxt"),s("span",{style:{color:"#D4D4D4"}}," = "),s("span",{style:{color:"#9CDCFE"}},"myCanvas"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#DCDCAA"}},"getContext"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#CE9178"}},'"2d"'),s("span",{style:{color:"#D4D4D4"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      "),s("span",{style:{color:"#6A9955"}},"// \u8BBE\u7F6E\u900F\u660E\u5EA6")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      "),s("span",{style:{color:"#9CDCFE"}},"cxt"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE"}},"globalAlpha"),s("span",{style:{color:"#D4D4D4"}}," = "),s("span",{style:{color:"#B5CEA8"}},"1"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      "),s("span",{style:{color:"#9CDCFE"}},"cxt"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE"}},"fillStyle"),s("span",{style:{color:"#D4D4D4"}}," = "),s("span",{style:{color:"#CE9178"}},'"#ccc"'),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      "),s("span",{style:{color:"#9CDCFE"}},"cxt"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#DCDCAA"}},"fillRect"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#B5CEA8"}},"0"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#B5CEA8"}},"0"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#B5CEA8"}},"300"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#B5CEA8"}},"140"),s("span",{style:{color:"#D4D4D4"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      "),s("span",{style:{color:"#6A9955"}},"// \u6587\u672C")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      "),s("span",{style:{color:"#9CDCFE"}},"cxt"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE"}},"fillStyle"),s("span",{style:{color:"#D4D4D4"}}," = "),s("span",{style:{color:"#CE9178"}},'"#000"'),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      "),s("span",{style:{color:"#9CDCFE"}},"cxt"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE"}},"font"),s("span",{style:{color:"#D4D4D4"}}," = "),s("span",{style:{color:"#CE9178"}},'"18px \u5FAE\u8F6F\u96C5\u9ED1"'),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      "),s("span",{style:{color:"#9CDCFE"}},"cxt"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE"}},"textAlign"),s("span",{style:{color:"#D4D4D4"}}," = "),s("span",{style:{color:"#CE9178"}},'"center"'),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      "),s("span",{style:{color:"#9CDCFE"}},"cxt"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE"}},"textBaseline"),s("span",{style:{color:"#D4D4D4"}}," = "),s("span",{style:{color:"#CE9178"}},'"middle"'),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      "),s("span",{style:{color:"#9CDCFE"}},"cxt"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#DCDCAA"}},"fillText"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#CE9178"}},"'\u522E\u4E00\u522E'"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#B5CEA8"}},"73"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#B5CEA8"}},"35"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#B5CEA8"}},"100"),s("span",{style:{color:"#D4D4D4"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      "),s("span",{style:{color:"#6A9955"}},"// pc")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      "),s("span",{style:{color:"#569CD6"}},"let"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#9CDCFE"}},"flag"),s("span",{style:{color:"#D4D4D4"}}," = "),s("span",{style:{color:"#569CD6"}},"false"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      "),s("span",{style:{color:"#9CDCFE"}},"myCanvas"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#DCDCAA"}},"addEventListener"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#CE9178"}},"'mousedown'"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#569CD6"}},"function"),s("span",{style:{color:"#D4D4D4"}}," ("),s("span",{style:{color:"#9CDCFE"}},"e"),s("span",{style:{color:"#D4D4D4"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#9CDCFE"}},"flag"),s("span",{style:{color:"#D4D4D4"}}," = "),s("span",{style:{color:"#569CD6"}},"true"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#DCDCAA"}},"drawArc"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#9CDCFE"}},"e"),s("span",{style:{color:"#D4D4D4"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      "),s("span",{style:{color:"#9CDCFE"}},"myCanvas"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#DCDCAA"}},"addEventListener"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#CE9178"}},"'mousemove'"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#569CD6"}},"function"),s("span",{style:{color:"#D4D4D4"}}," ("),s("span",{style:{color:"#9CDCFE"}},"e"),s("span",{style:{color:"#D4D4D4"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#C586C0"}},"if"),s("span",{style:{color:"#D4D4D4"}}," ("),s("span",{style:{color:"#9CDCFE"}},"flag"),s("span",{style:{color:"#D4D4D4"}}," === "),s("span",{style:{color:"#569CD6"}},"true"),s("span",{style:{color:"#D4D4D4"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"          "),s("span",{style:{color:"#DCDCAA"}},"drawArc"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#9CDCFE"}},"e"),s("span",{style:{color:"#D4D4D4"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      "),s("span",{style:{color:"#9CDCFE"}},"myCanvas"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#DCDCAA"}},"addEventListener"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#CE9178"}},"'mouseup'"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#569CD6"}},"function"),s("span",{style:{color:"#D4D4D4"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#9CDCFE"}},"flag"),s("span",{style:{color:"#D4D4D4"}}," = "),s("span",{style:{color:"#569CD6"}},"false"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#DCDCAA"}},"calcArea"),s("span",{style:{color:"#D4D4D4"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      "),s("span",{style:{color:"#6A9955"}},"// wap")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      "),s("span",{style:{color:"#9CDCFE"}},"myCanvas"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#DCDCAA"}},"addEventListener"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#CE9178"}},"'touchstart'"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#569CD6"}},"function"),s("span",{style:{color:"#D4D4D4"}}," ("),s("span",{style:{color:"#9CDCFE"}},"e"),s("span",{style:{color:"#D4D4D4"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#9CDCFE"}},"flag"),s("span",{style:{color:"#D4D4D4"}}," = "),s("span",{style:{color:"#569CD6"}},"true"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#DCDCAA"}},"drawArc"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#9CDCFE"}},"e"),s("span",{style:{color:"#D4D4D4"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      "),s("span",{style:{color:"#9CDCFE"}},"myCanvas"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#DCDCAA"}},"addEventListener"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#CE9178"}},"'touchmove'"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#569CD6"}},"function"),s("span",{style:{color:"#D4D4D4"}}," ("),s("span",{style:{color:"#9CDCFE"}},"e"),s("span",{style:{color:"#D4D4D4"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#C586C0"}},"if"),s("span",{style:{color:"#D4D4D4"}}," ("),s("span",{style:{color:"#9CDCFE"}},"flag"),s("span",{style:{color:"#D4D4D4"}}," === "),s("span",{style:{color:"#569CD6"}},"true"),s("span",{style:{color:"#D4D4D4"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"          "),s("span",{style:{color:"#DCDCAA"}},"drawArc"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#9CDCFE"}},"e"),s("span",{style:{color:"#D4D4D4"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      "),s("span",{style:{color:"#9CDCFE"}},"myCanvas"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#DCDCAA"}},"addEventListener"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#CE9178"}},"'touchend'"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#569CD6"}},"function"),s("span",{style:{color:"#D4D4D4"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#9CDCFE"}},"flag"),s("span",{style:{color:"#D4D4D4"}}," = "),s("span",{style:{color:"#569CD6"}},"false"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#DCDCAA"}},"calcArea"),s("span",{style:{color:"#D4D4D4"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      })")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      "),s("span",{style:{color:"#6A9955"}},"// \u7ED8\u753B\u533A\u57DF")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      "),s("span",{style:{color:"#569CD6"}},"function"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#DCDCAA"}},"drawArc"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#9CDCFE"}},"e"),s("span",{style:{color:"#D4D4D4"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#6A9955"}},"// \u83B7\u53D6\u77E9\u5F62 canvas \u5728\u9875\u9762\u4E2D\u7684\u7EDD\u5BF9\u4F4D\u7F6E")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#569CD6"}},"const"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#4FC1FF"}},"canvasPos"),s("span",{style:{color:"#D4D4D4"}}," = "),s("span",{style:{color:"#9CDCFE"}},"myCanvas"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#DCDCAA"}},"getBoundingClientRect"),s("span",{style:{color:"#D4D4D4"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#6A9955"}},"// \u83B7\u53D6\u9875\u9762\u6EDA\u52A8\u7684\u9AD8\u5EA6(\u5904\u7406\u9875\u9762\u4E0B\u6ED1\u540E\u624D\u51FA\u73B0\u522E\u5956\uFF0C\u8BA1\u7B97\u5750\u6807\u70B9)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#569CD6"}},"const"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#4FC1FF"}},"pageScrollTop"),s("span",{style:{color:"#D4D4D4"}}," = "),s("span",{style:{color:"#9CDCFE"}},"document"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE"}},"documentElement"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE"}},"scrollTop"),s("span",{style:{color:"#D4D4D4"}}," || "),s("span",{style:{color:"#9CDCFE"}},"document"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE"}},"body"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE"}},"scrollTop"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#569CD6"}},"const"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#4FC1FF"}},"pageScrollLeft"),s("span",{style:{color:"#D4D4D4"}}," = "),s("span",{style:{color:"#9CDCFE"}},"document"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE"}},"documentElement"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE"}},"scrollLeft"),s("span",{style:{color:"#D4D4D4"}}," || "),s("span",{style:{color:"#9CDCFE"}},"document"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE"}},"body"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE"}},"scrollLeft"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#6A9955"}},"// \u70B9\u51FB\u70B9\u5750\u6807\u7684 X \u8F74\u8DDD\u79BB - \u77E9\u5F62\u5DE6\u4E0A\u89D2 X \u8F74\u8DDD\u79BB - \u9875\u9762\u5377\u51FA\u53BB\u7684 X \u8DDD\u79BB")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#569CD6"}},"const"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#4FC1FF"}},"mouseX"),s("span",{style:{color:"#D4D4D4"}}," = ("),s("span",{style:{color:"#9CDCFE"}},"e"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE"}},"pageX"),s("span",{style:{color:"#D4D4D4"}}," || "),s("span",{style:{color:"#9CDCFE"}},"e"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE"}},"targetTouches"),s("span",{style:{color:"#D4D4D4"}},"["),s("span",{style:{color:"#B5CEA8"}},"0"),s("span",{style:{color:"#D4D4D4"}},"]."),s("span",{style:{color:"#9CDCFE"}},"pageX"),s("span",{style:{color:"#D4D4D4"}},") - "),s("span",{style:{color:"#9CDCFE"}},"canvasPos"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE"}},"left"),s("span",{style:{color:"#D4D4D4"}}," - "),s("span",{style:{color:"#9CDCFE"}},"pageScrollLeft"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#569CD6"}},"const"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#4FC1FF"}},"mouseY"),s("span",{style:{color:"#D4D4D4"}}," = ("),s("span",{style:{color:"#9CDCFE"}},"e"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE"}},"pageY"),s("span",{style:{color:"#D4D4D4"}}," || "),s("span",{style:{color:"#9CDCFE"}},"e"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE"}},"targetTouches"),s("span",{style:{color:"#D4D4D4"}},"["),s("span",{style:{color:"#B5CEA8"}},"0"),s("span",{style:{color:"#D4D4D4"}},"]."),s("span",{style:{color:"#9CDCFE"}},"pageY"),s("span",{style:{color:"#D4D4D4"}},") - "),s("span",{style:{color:"#9CDCFE"}},"canvasPos"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE"}},"top"),s("span",{style:{color:"#D4D4D4"}}," - "),s("span",{style:{color:"#9CDCFE"}},"pageScrollTop"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#6A9955"}},"// \u76F8\u4EA4\u90E8\u5206\u4E0D\u663E\u793A")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#9CDCFE"}},"cxt"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE"}},"globalCompositeOperation"),s("span",{style:{color:"#D4D4D4"}}," = "),s("span",{style:{color:"#CE9178"}},'"destination-out"'),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#6A9955"}},"// \u5F00\u59CB\u4E00\u6761\u8DEF\u5F84")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#9CDCFE"}},"cxt"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#DCDCAA"}},"beginPath"),s("span",{style:{color:"#D4D4D4"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#9CDCFE"}},"cxt"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE"}},"fillStyle"),s("span",{style:{color:"#D4D4D4"}}," = "),s("span",{style:{color:"#CE9178"}},'"white"'),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#6A9955"}},"// \u79FB\u52A8\u5230\u4F4D\u7F6E mouseX, mouseY")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#9CDCFE"}},"cxt"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#DCDCAA"}},"moveTo"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#9CDCFE"}},"mouseX"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#9CDCFE"}},"mouseY"),s("span",{style:{color:"#D4D4D4"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#6A9955"}},"// \u753B\u4E00\u4E2A\u5706 \u534A\u5F84\u4E3A 6")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#9CDCFE"}},"cxt"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#DCDCAA"}},"arc"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#9CDCFE"}},"mouseX"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#9CDCFE"}},"mouseY"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#B5CEA8"}},"6"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#B5CEA8"}},"0"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#B5CEA8"}},"2"),s("span",{style:{color:"#D4D4D4"}}," * "),s("span",{style:{color:"#4EC9B0"}},"Math"),s("span",{style:{color:"#D4D4D4"}},".PI);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#9CDCFE"}},"cxt"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#DCDCAA"}},"fill"),s("span",{style:{color:"#D4D4D4"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      "),s("span",{style:{color:"#6A9955"}},"// \u8BA1\u7B97\u533A\u57DF")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      "),s("span",{style:{color:"#569CD6"}},"function"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#DCDCAA"}},"calcArea"),s("span",{style:{color:"#D4D4D4"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#6A9955"}},"// \u83B7\u53D6\u50CF\u7D20\u70B9\u7684\u6570\u636E")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#569CD6"}},"const"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#4FC1FF"}},"myImg"),s("span",{style:{color:"#D4D4D4"}}," = "),s("span",{style:{color:"#9CDCFE"}},"cxt"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#DCDCAA"}},"getImageData"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#B5CEA8"}},"0"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#B5CEA8"}},"0"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#9CDCFE"}},"myCanvas"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE"}},"width"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#9CDCFE"}},"myCanvas"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE"}},"height"),s("span",{style:{color:"#D4D4D4"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#569CD6"}},"let"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#9CDCFE"}},"num"),s("span",{style:{color:"#D4D4D4"}}," = "),s("span",{style:{color:"#B5CEA8"}},"0"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#6A9955"}},"// \u53D6 1/4 \u8BA1\u7B97\u533A\u57DF\u6BD4\u4F8B\u5373\u53EF\uFF0C\u8282\u7701\u8BA1\u7B97\u5F00\u9500")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#569CD6"}},"const"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#4FC1FF"}},"max"),s("span",{style:{color:"#D4D4D4"}}," = "),s("span",{style:{color:"#9CDCFE"}},"myImg"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE"}},"data"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE"}},"length"),s("span",{style:{color:"#D4D4D4"}}," / "),s("span",{style:{color:"#B5CEA8"}},"4"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#C586C0"}},"for"),s("span",{style:{color:"#D4D4D4"}}," ("),s("span",{style:{color:"#569CD6"}},"let"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#9CDCFE"}},"i"),s("span",{style:{color:"#D4D4D4"}}," = "),s("span",{style:{color:"#B5CEA8"}},"0"),s("span",{style:{color:"#D4D4D4"}},"; "),s("span",{style:{color:"#9CDCFE"}},"i"),s("span",{style:{color:"#D4D4D4"}}," < "),s("span",{style:{color:"#9CDCFE"}},"myImg"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE"}},"data"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE"}},"length"),s("span",{style:{color:"#D4D4D4"}},"; "),s("span",{style:{color:"#9CDCFE"}},"i"),s("span",{style:{color:"#D4D4D4"}}," += "),s("span",{style:{color:"#B5CEA8"}},"4"),s("span",{style:{color:"#D4D4D4"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"          "),s("span",{style:{color:"#C586C0"}},"if"),s("span",{style:{color:"#D4D4D4"}}," ("),s("span",{style:{color:"#9CDCFE"}},"myImg"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#9CDCFE"}},"data"),s("span",{style:{color:"#D4D4D4"}},"["),s("span",{style:{color:"#9CDCFE"}},"i"),s("span",{style:{color:"#D4D4D4"}}," + "),s("span",{style:{color:"#B5CEA8"}},"3"),s("span",{style:{color:"#D4D4D4"}},"] === "),s("span",{style:{color:"#B5CEA8"}},"0"),s("span",{style:{color:"#D4D4D4"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"            "),s("span",{style:{color:"#9CDCFE"}},"num"),s("span",{style:{color:"#D4D4D4"}},"++;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#6A9955"}},"// 0 - 1 \u4E3A\u533A\u57DF\u767E\u5206\u6BD4\uFF0C\u6B64\u65F6 40% \u65F6\u6E05\u7A7A\u5168\u90E8\u8499\u5C42")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#C586C0"}},"if"),s("span",{style:{color:"#D4D4D4"}}," ("),s("span",{style:{color:"#9CDCFE"}},"num"),s("span",{style:{color:"#D4D4D4"}}," >= "),s("span",{style:{color:"#9CDCFE"}},"max"),s("span",{style:{color:"#D4D4D4"}}," * "),s("span",{style:{color:"#B5CEA8"}},"0.4"),s("span",{style:{color:"#D4D4D4"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"          "),s("span",{style:{color:"#9CDCFE"}},"myCanvas"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#DCDCAA"}},"remove"),s("span",{style:{color:"#D4D4D4"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"      }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#808080"}},"</"),s("span",{style:{color:"#569CD6"}},"script"),s("span",{style:{color:"#808080"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#808080"}},"<"),s("span",{style:{color:"#569CD6"}},"style"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#9CDCFE"}},"lang"),s("span",{style:{color:"#D4D4D4"}},"="),s("span",{style:{color:"#CE9178"}},'"scss"'),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#9CDCFE"}},"scoped"),s("span",{style:{color:"#808080"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D7BA7D"}},".scrapeLottoBox"),s("span",{style:{color:"#D4D4D4"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"width"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#B5CEA8"}},"285px"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"height"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#B5CEA8"}},"120px"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"margin"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#B5CEA8"}},"0"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"auto"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"background"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#DCDCAA"}},"url"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#CE9178"}},"'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6ace29d7c26e4e88a51ec638111d0a3f~tplv-k3u1fbpfcp-watermark.image'"),s("span",{style:{color:"#D4D4D4"}},") "),s("span",{style:{color:"#CE9178"}},"center"),s("span",{style:{color:"#D4D4D4"}},"/"),s("span",{style:{color:"#B5CEA8"}},"100%"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"no-repeat"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"position"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"relative"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D7BA7D"}},".scrapeLottoBox-btn"),s("span",{style:{color:"#D4D4D4"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"font-size"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#B5CEA8"}},"20px"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"color"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"#fff"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"width"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#B5CEA8"}},"50px"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"position"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"absolute"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"right"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#B5CEA8"}},"25px"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"top"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#B5CEA8"}},"30px"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"text-align"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"center"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D7BA7D"}},".scrapeLottoBox-price"),s("span",{style:{color:"#D4D4D4"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"color"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"#f51e55"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"width"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#B5CEA8"}},"150px"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"text-align"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"center"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"position"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"absolute"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"left"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#B5CEA8"}},"30px"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"top"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#B5CEA8"}},"25px"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"font-size"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#B5CEA8"}},"16px"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D7BA7D"}},".scrapeLottoBox-price"),s("span",{style:{color:"#D4D4D4"}},">"),s("span",{style:{color:"#D7BA7D"}},"span"),s("span",{style:{color:"#D4D4D4"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"font-size"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#B5CEA8"}},"40px"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"line-height"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#B5CEA8"}},"67px"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"font-weight"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#B5CEA8"}},"700"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D7BA7D"}},".scrapeLottoBox"),s("span",{style:{color:"#D4D4D4"}},">"),s("span",{style:{color:"#D7BA7D"}},"#scrapeLottoCanvas"),s("span",{style:{color:"#D4D4D4"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"position"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#CE9178"}},"absolute"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"left"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#B5CEA8"}},"30px"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"top"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#B5CEA8"}},"25px"),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#808080"}},"</"),s("span",{style:{color:"#569CD6"}},"style"),s("span",{style:{color:"#808080"}},">")]),l(`
`),s("span",{class:"line"})])])],-1);function j(n,e,a,u,i,L){const E=x("render-demo-0"),F=x("demo");return I(),k(Y,null,[N,z,v(F,{customClass:"demoBlockCustom",sourceCode:`<template>
  <div class="scrapeLottoBox">
    <div class="scrapeLottoBox-btn">\u522E\u5F00\u4F18\u60E0</div>
    <div class="scrapeLottoBox-price"><span>\xA5123</span>.00</div>
    <!-- \u8499\u5C42 -->
    <canvas id="scrapeLottoCanvas" width="150" height="70"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    this.createScrapeLotto()
  },
  methods: {
    createScrapeLotto() {
      let myCanvas = document.getElementById("scrapeLottoCanvas");
      // \u642D\u5EFA\u73AF\u5883
      let cxt = myCanvas.getContext("2d");
      // \u8BBE\u7F6E\u900F\u660E\u5EA6
      cxt.globalAlpha = 1;
      cxt.fillStyle = "#ccc";
      cxt.fillRect(0, 0, 300, 140);
      // \u6587\u672C
      cxt.fillStyle = "#000";
      cxt.font = "18px \u5FAE\u8F6F\u96C5\u9ED1";
      cxt.textAlign = "center";
      cxt.textBaseline = "middle";
      cxt.fillText('\u522E\u4E00\u522E', 73, 35, 100);

      // pc
      let flag = false;
      myCanvas.addEventListener('mousedown', function (e) {
        flag = true;
        drawArc(e)
      })
      myCanvas.addEventListener('mousemove', function (e) {
        if (flag === true) {
          drawArc(e)
        }
      })
      myCanvas.addEventListener('mouseup', function () {
        flag = false;
        calcArea();
      })
      // wap
      myCanvas.addEventListener('touchstart', function (e) {
        flag = true;
        drawArc(e)
      })
      myCanvas.addEventListener('touchmove', function (e) {
        if (flag === true) {
          drawArc(e)
        }
      })
      myCanvas.addEventListener('touchend', function () {
        flag = false;
        calcArea();
      })

      // \u7ED8\u753B\u533A\u57DF
      function drawArc(e) {
        // \u83B7\u53D6\u77E9\u5F62 canvas \u5728\u9875\u9762\u4E2D\u7684\u7EDD\u5BF9\u4F4D\u7F6E
        const canvasPos = myCanvas.getBoundingClientRect();
        // \u83B7\u53D6\u9875\u9762\u6EDA\u52A8\u7684\u9AD8\u5EA6(\u5904\u7406\u9875\u9762\u4E0B\u6ED1\u540E\u624D\u51FA\u73B0\u522E\u5956\uFF0C\u8BA1\u7B97\u5750\u6807\u70B9)
        const pageScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const pageScrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
        // \u70B9\u51FB\u70B9\u5750\u6807\u7684 X \u8F74\u8DDD\u79BB - \u77E9\u5F62\u5DE6\u4E0A\u89D2 X \u8F74\u8DDD\u79BB - \u9875\u9762\u5377\u51FA\u53BB\u7684 X \u8DDD\u79BB
        const mouseX = (e.pageX || e.targetTouches[0].pageX) - canvasPos.left - pageScrollLeft;
        const mouseY = (e.pageY || e.targetTouches[0].pageY) - canvasPos.top - pageScrollTop;
        // \u76F8\u4EA4\u90E8\u5206\u4E0D\u663E\u793A
        cxt.globalCompositeOperation = "destination-out";
        // \u5F00\u59CB\u4E00\u6761\u8DEF\u5F84
        cxt.beginPath();
        cxt.fillStyle = "white";
        // \u79FB\u52A8\u5230\u4F4D\u7F6E mouseX, mouseY
        cxt.moveTo(mouseX, mouseY);
        // \u753B\u4E00\u4E2A\u5706 \u534A\u5F84\u4E3A 6
        cxt.arc(mouseX, mouseY, 6, 0, 2 * Math.PI);
        cxt.fill();
      }

      // \u8BA1\u7B97\u533A\u57DF
      function calcArea() {
        // \u83B7\u53D6\u50CF\u7D20\u70B9\u7684\u6570\u636E
        const myImg = cxt.getImageData(0, 0, myCanvas.width, myCanvas.height);
        let num = 0;
        // \u53D6 1/4 \u8BA1\u7B97\u533A\u57DF\u6BD4\u4F8B\u5373\u53EF\uFF0C\u8282\u7701\u8BA1\u7B97\u5F00\u9500
        const max = myImg.data.length / 4;
        for (let i = 0; i < myImg.data.length; i += 4) {
          if (myImg.data[i + 3] === 0) {
            num++;
          }
        }
        // 0 - 1 \u4E3A\u533A\u57DF\u767E\u5206\u6BD4\uFF0C\u6B64\u65F6 40% \u65F6\u6E05\u7A7A\u5168\u90E8\u8499\u5C42
        if (num >= max * 0.4) {
          myCanvas.remove()
        }
      }
    }
  }
}
<\/script>

<style lang="scss" scoped>
.scrapeLottoBox{
  width: 285px;
  height: 120px;
  margin: 0 auto;
  background: url('https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6ace29d7c26e4e88a51ec638111d0a3f~tplv-k3u1fbpfcp-watermark.image') center/100% no-repeat;
  position: relative;
}
.scrapeLottoBox-btn{
  font-size: 20px;
  color: #fff;
  width: 50px;
  position: absolute;
  right: 25px;
  top: 30px;
  text-align: center;
}
.scrapeLottoBox-price{
  color: #f51e55;
  width: 150px;
  text-align: center;
  position: absolute;
  left: 30px;
  top: 25px;
  font-size: 16px;
}
.scrapeLottoBox-price>span{
  font-size: 40px;
  line-height: 67px;
  font-weight: 700;
}
.scrapeLottoBox>#scrapeLottoCanvas{
  position: absolute;
  left: 30px;
  top: 25px;
}
</style>
`},{highlight:h(()=>[R]),default:h(()=>[v(E)]),_:1})],64)}var q=X(V,[["render",j]]);export{q as default};
