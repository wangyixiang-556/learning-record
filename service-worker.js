if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const t=s||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let r={};const a=s=>l(s,t),u={module:{uri:t},exports:r,require:a};e[t]=Promise.all(i.map((s=>u[s]||a(s)))).then((s=>(n(...s),r)))}}define(["./workbox-ec81a2a1"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"87fbbddd81ef7e9cfb878d5b7d46333e"},{url:"Another/base.html",revision:"e22aab54400aba6a8b14dce24371324c"},{url:"assets/404.6c7e4d25.js",revision:null},{url:"assets/404.html.93146c89.js",revision:null},{url:"assets/404.html.9c1e525c.js",revision:null},{url:"assets/animation.html.98d417fa.js",revision:null},{url:"assets/animation.html.ba46cc39.js",revision:null},{url:"assets/app.165d7d0e.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/base.html.0914a4f6.js",revision:null},{url:"assets/base.html.0eb2367b.js",revision:null},{url:"assets/base.html.0f7b7921.js",revision:null},{url:"assets/base.html.1527c87c.js",revision:null},{url:"assets/base.html.1d138b10.js",revision:null},{url:"assets/base.html.f37d2a16.js",revision:null},{url:"assets/border.html.3b0ed8d8.js",revision:null},{url:"assets/border.html.8e54048f.js",revision:null},{url:"assets/canvas.html.71941745.js",revision:null},{url:"assets/canvas.html.e196c05f.js",revision:null},{url:"assets/clock.17e13f56.jpg",revision:null},{url:"assets/CustomClock.2670ea73.js",revision:null},{url:"assets/data.html.95a0e88f.js",revision:null},{url:"assets/data.html.b85581cb.js",revision:null},{url:"assets/echarts.html.1647bb09.js",revision:null},{url:"assets/echarts.html.3e4be269.js",revision:null},{url:"assets/expounding.html.c5d088da.js",revision:null},{url:"assets/expounding.html.dd34d410.js",revision:null},{url:"assets/files.html.597b70b3.js",revision:null},{url:"assets/files.html.e37b61d3.js",revision:null},{url:"assets/hotspot.html.6d125c62.js",revision:null},{url:"assets/hotspot.html.ca64051b.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.36bb5825.js",revision:null},{url:"assets/index.html.39c9dd7b.js",revision:null},{url:"assets/index.html.7489656d.js",revision:null},{url:"assets/index.html.8cbb8cba.js",revision:null},{url:"assets/input.html.39cab1e5.js",revision:null},{url:"assets/input.html.fd95e49c.js",revision:null},{url:"assets/judgment.html.13e55b59.js",revision:null},{url:"assets/judgment.html.f4b3197f.js",revision:null},{url:"assets/Layout.4446115e.js",revision:null},{url:"assets/mobile.html.114901a0.js",revision:null},{url:"assets/mobile.html.3b41549d.js",revision:null},{url:"assets/other.html.60c8b4bc.js",revision:null},{url:"assets/other.html.78ad3209.js",revision:null},{url:"assets/quantity.html.c74ba8a6.js",revision:null},{url:"assets/quantity.html.c7520074.js",revision:null},{url:"assets/sentence.html.3f3af196.js",revision:null},{url:"assets/sentence.html.6d28dec6.js",revision:null},{url:"assets/speech.html.2b8685d1.js",revision:null},{url:"assets/speech.html.e2f6f1a0.js",revision:null},{url:"assets/style.919f539c.css",revision:null},{url:"assets/template.html.a096328e.js",revision:null},{url:"assets/template.html.e8d40e38.js",revision:null},{url:"assets/text.html.40594a9e.js",revision:null},{url:"assets/text.html.d497388d.js",revision:null},{url:"assets/time.html.2fd351da.js",revision:null},{url:"assets/time.html.f14682a2.js",revision:null},{url:"assets/utils.html.12a2829b.js",revision:null},{url:"assets/utils.html.9e21a611.js",revision:null},{url:"assets/validate.html.2ecf9bcc.js",revision:null},{url:"assets/validate.html.58386f77.js",revision:null},{url:"assets/vue.html.008a7f8d.js",revision:null},{url:"assets/vue.html.af5fe568.js",revision:null},{url:"assets/vue.html.cec13a64.js",revision:null},{url:"assets/vue.html.d6721056.js",revision:null},{url:"assets/word.html.b13d29af.js",revision:null},{url:"assets/word.html.ece0e852.js",revision:null},{url:"assets/writing.html.2a07aa99.js",revision:null},{url:"assets/writing.html.e6162a32.js",revision:null},{url:"assets/三集合标准型.4bf96bbb.png",revision:null},{url:"assets/三集合非标准型.b2b1ffc1.png",revision:null},{url:"assets/两集合.3d746c33.png",revision:null},{url:"assets/增长量与增长率.592e836d.png",revision:null},{url:"assets/年均增长率.3320381b.png",revision:null},{url:"assets/排列组合的计算.066e2d10.png",revision:null},{url:"assets/特殊排列组合.a8780c4c.png",revision:null},{url:"assets/现期量与基期量.76e60a4b.png",revision:null},{url:"Css/animation.html",revision:"e28349c4505080fcf555a66f5bdf7000"},{url:"Css/base.html",revision:"d0846a357cf8a0b1a953d3e809ef1f56"},{url:"Css/border.html",revision:"3196734b5b1a197206f017bcc0a59328"},{url:"Css/canvas.html",revision:"b85dca2740d7e54fe4835a37d90ddf2f"},{url:"Css/input.html",revision:"8128dd9c3e334acfa33683c9dc17c7d8"},{url:"Css/text.html",revision:"c84dfe7b57a18942d347efea0b732cda"},{url:"Home/index.html",revision:"636fcdd40fb54c642e26737c558d3376"},{url:"images/hero.svg",revision:"f45e1c5db75af698ce65e3796f96e191"},{url:"images/icons/android-chrome-192x192.png",revision:"a7c0f551bb0d8a3b3d1e5ba459d37fbd"},{url:"images/icons/android-chrome-384x384.png",revision:"8cb09736376e9b987860e3bfd36c46da"},{url:"images/icons/apple-touch-icon.png",revision:"d30c9636541f77af02d18f70f22c5f22"},{url:"images/icons/favicon-16x16.svg",revision:"c82c2979d85f9157926ed50134c49bac"},{url:"images/icons/favicon-32x32.svg",revision:"c3b1e9a0f8ae4e8bbfe9fcf4f0989b78"},{url:"images/icons/mstile-150x150.png",revision:"98880ba757f7f874c76a3aa0d7fd7687"},{url:"images/icons/safari-pinned-tab.svg",revision:"0d5c51174ba151989592340bcf39444a"},{url:"images/logo.svg",revision:"fece147c3016afd4fd547d1a97751851"},{url:"index.html",revision:"b1527138c506dd02966fb2b61b7784d1"},{url:"JavaScript/base.html",revision:"88dcbfff09bfbd9a917d89fe8718cb4f"},{url:"JavaScript/time.html",revision:"dafc78dab56982197bff42e57e9f70aa"},{url:"JavaScript/utils.html",revision:"799c4eac31354f99c90164e17275c8c6"},{url:"JavaScript/validate.html",revision:"90413a31a9d1424288734fe7a8d23381"},{url:"Skills/other.html",revision:"a0a45211f92569e18d67688d1bf9c37b"},{url:"Skills/vue.html",revision:"c80f018008880465c6a73c87fba8f0d4"},{url:"Study/note/data.html",revision:"e09e8ed2d7883933c78297849bef0939"},{url:"Study/note/expounding.html",revision:"2cc00500716b1f41fb0bed9b5b4851af"},{url:"Study/note/files.html",revision:"fc27101f4e4385326f9cbd081a8e837d"},{url:"Study/note/hotspot.html",revision:"dcff5c787ef41cccef120e03aa4a6e85"},{url:"Study/note/judgment.html",revision:"a8c835be4dc599acdf3f2abb34e848db"},{url:"Study/note/quantity.html",revision:"ec2e1447162914f9c462d0e3b2964f56"},{url:"Study/note/sentence.html",revision:"a7998a016771615278cb6b874171114b"},{url:"Study/note/speech.html",revision:"b5026370b040b78fa9fe77966f6c5e10"},{url:"Study/note/template.html",revision:"8428207988ec3ebf2209074726a99a0b"},{url:"Study/note/word.html",revision:"0d807ff09209f897b608678d365663ad"},{url:"Study/note/writing.html",revision:"ec8e1890ee64abc86c330e13e8f9c7ac"},{url:"Utils/echarts.html",revision:"acb6f3e5c2780f9ccf0f649a88568163"},{url:"Utils/mobile.html",revision:"df86c5df47a23c5957a44933ffe5335c"},{url:"Utils/vue.html",revision:"dea7d787b20e72d49bdc5261781def32"}],{})}));