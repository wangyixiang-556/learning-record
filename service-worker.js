if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const a=s=>l(s,r),u={module:{uri:r},exports:t,require:a};e[r]=Promise.all(i.map((s=>u[s]||a(s)))).then((s=>(n(...s),t)))}}define(["./workbox-ec81a2a1"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"f986b3f01e6730b428dbc9159aef0d85"},{url:"Another/base.html",revision:"cf1a5d91018bbfc382379b8ca311a618"},{url:"assets/404.2eaec404.js",revision:null},{url:"assets/404.html.93146c89.js",revision:null},{url:"assets/404.html.a6c82485.js",revision:null},{url:"assets/animation.html.98d417fa.js",revision:null},{url:"assets/animation.html.d19057db.js",revision:null},{url:"assets/app.ac8823b3.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/base.html.0914a4f6.js",revision:null},{url:"assets/base.html.0f7b7921.js",revision:null},{url:"assets/base.html.18038828.js",revision:null},{url:"assets/base.html.1d138b10.js",revision:null},{url:"assets/base.html.66cc5d3c.js",revision:null},{url:"assets/base.html.82af0524.js",revision:null},{url:"assets/border.html.8e54048f.js",revision:null},{url:"assets/border.html.c9f35715.js",revision:null},{url:"assets/canvas.html.612091a5.js",revision:null},{url:"assets/canvas.html.71941745.js",revision:null},{url:"assets/clock.17e13f56.jpg",revision:null},{url:"assets/CustomClock.19ce116a.js",revision:null},{url:"assets/data.html.95a0e88f.js",revision:null},{url:"assets/data.html.c1efe1a1.js",revision:null},{url:"assets/echarts.html.3e4be269.js",revision:null},{url:"assets/echarts.html.8995985c.js",revision:null},{url:"assets/expounding.html.c5d088da.js",revision:null},{url:"assets/expounding.html.eb530865.js",revision:null},{url:"assets/files.html.c3364e0f.js",revision:null},{url:"assets/files.html.ec5db923.js",revision:null},{url:"assets/hotspot.html.0c00a50b.js",revision:null},{url:"assets/hotspot.html.6d125c62.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.39c9dd7b.js",revision:null},{url:"assets/index.html.3ee7efa7.js",revision:null},{url:"assets/index.html.5d13a305.js",revision:null},{url:"assets/index.html.8cbb8cba.js",revision:null},{url:"assets/input.html.39cab1e5.js",revision:null},{url:"assets/input.html.bd2aa1d1.js",revision:null},{url:"assets/judgment.html.94069c47.js",revision:null},{url:"assets/judgment.html.f4b3197f.js",revision:null},{url:"assets/Layout.baa414f5.js",revision:null},{url:"assets/mobile.html.114901a0.js",revision:null},{url:"assets/mobile.html.43aa382b.js",revision:null},{url:"assets/other.html.27775f75.js",revision:null},{url:"assets/other.html.60c8b4bc.js",revision:null},{url:"assets/quantity.html.1f21f278.js",revision:null},{url:"assets/quantity.html.c7520074.js",revision:null},{url:"assets/sentence.html.3f3af196.js",revision:null},{url:"assets/sentence.html.ddea3d7b.js",revision:null},{url:"assets/speech.html.717d62a5.js",revision:null},{url:"assets/speech.html.e2f6f1a0.js",revision:null},{url:"assets/style.177607a0.css",revision:null},{url:"assets/text.html.40594a9e.js",revision:null},{url:"assets/text.html.8192f26e.js",revision:null},{url:"assets/time.html.2fd351da.js",revision:null},{url:"assets/time.html.59af4625.js",revision:null},{url:"assets/utils.html.9e21a611.js",revision:null},{url:"assets/utils.html.e0b0c805.js",revision:null},{url:"assets/validate.html.58386f77.js",revision:null},{url:"assets/validate.html.a3694ea1.js",revision:null},{url:"assets/vue.html.008a7f8d.js",revision:null},{url:"assets/vue.html.648b71dc.js",revision:null},{url:"assets/vue.html.af5fe568.js",revision:null},{url:"assets/vue.html.d75f53fd.js",revision:null},{url:"assets/word.html.89136f3d.js",revision:null},{url:"assets/word.html.ece0e852.js",revision:null},{url:"assets/writing.html.1ff738e5.js",revision:null},{url:"assets/writing.html.e6162a32.js",revision:null},{url:"assets/三集合标准型.4bf96bbb.png",revision:null},{url:"assets/三集合非标准型.b2b1ffc1.png",revision:null},{url:"assets/两集合.3d746c33.png",revision:null},{url:"assets/增长量与增长率.592e836d.png",revision:null},{url:"assets/年均增长率.3320381b.png",revision:null},{url:"assets/排列组合的计算.066e2d10.png",revision:null},{url:"assets/特殊排列组合.a8780c4c.png",revision:null},{url:"assets/现期量与基期量.76e60a4b.png",revision:null},{url:"Css/animation.html",revision:"d60e9e97868cc27c7fa417a3b5f766d4"},{url:"Css/base.html",revision:"d41ab523ca6df7f0252a2e7970d4eab4"},{url:"Css/border.html",revision:"e469a09d80aa7a21d3d8a415d9073246"},{url:"Css/canvas.html",revision:"54c9be52ef7fbc0634455faa14e8e874"},{url:"Css/input.html",revision:"e254e05a0c524be8c4fd28ac5d9e1798"},{url:"Css/text.html",revision:"3186adb06cdbb9f4f2cde1f79a8e0e19"},{url:"Home/index.html",revision:"ec48f13ff932ed5a1fed5cda2d69de16"},{url:"images/hero.svg",revision:"f45e1c5db75af698ce65e3796f96e191"},{url:"images/icons/android-chrome-192x192.png",revision:"a7c0f551bb0d8a3b3d1e5ba459d37fbd"},{url:"images/icons/android-chrome-384x384.png",revision:"8cb09736376e9b987860e3bfd36c46da"},{url:"images/icons/apple-touch-icon.png",revision:"d30c9636541f77af02d18f70f22c5f22"},{url:"images/icons/favicon-16x16.svg",revision:"c82c2979d85f9157926ed50134c49bac"},{url:"images/icons/favicon-32x32.svg",revision:"c3b1e9a0f8ae4e8bbfe9fcf4f0989b78"},{url:"images/icons/mstile-150x150.png",revision:"98880ba757f7f874c76a3aa0d7fd7687"},{url:"images/icons/safari-pinned-tab.svg",revision:"0d5c51174ba151989592340bcf39444a"},{url:"images/logo.svg",revision:"fece147c3016afd4fd547d1a97751851"},{url:"index.html",revision:"b444c4124cbe5e47f989fc1364a94026"},{url:"JavaScript/base.html",revision:"167a3c6df84d0f4c03cc954584fb83c2"},{url:"JavaScript/time.html",revision:"afb15c0d16583659f96990b28aacae39"},{url:"JavaScript/utils.html",revision:"e55da73b2867930fb3b0abbd287de77b"},{url:"JavaScript/validate.html",revision:"a2d64e645626783cf7f53a74f97c90ee"},{url:"Skills/other.html",revision:"e7002be9421546ebcb963d08b55a4228"},{url:"Skills/vue.html",revision:"cab04d78e3b8d64c51a6fe1efa2442b8"},{url:"Study/note/data.html",revision:"236c13a9bf74e36685e4f6a4720af9d5"},{url:"Study/note/expounding.html",revision:"c215dc032cb72afac5afcbc19421c273"},{url:"Study/note/files.html",revision:"bc57651fb8a2b5b86efcb50a0f2dad7e"},{url:"Study/note/hotspot.html",revision:"2a15e3050d41034e00177d342a323439"},{url:"Study/note/judgment.html",revision:"943a1d0250f672cafc583e0d5330d270"},{url:"Study/note/quantity.html",revision:"eb416132f0e3dee9e16865cb8e9281ae"},{url:"Study/note/sentence.html",revision:"e070657c73044f8c734e7c4560bcca46"},{url:"Study/note/speech.html",revision:"f7ffb5e35d0894fdc945ac74e029a91d"},{url:"Study/note/word.html",revision:"fb1dbc5a493249f19179b61a414bc9b5"},{url:"Study/note/writing.html",revision:"45c3abe5fdb2926624462dec049e4779"},{url:"Utils/echarts.html",revision:"02bd9f3b2667e9e33f8992513198ff5e"},{url:"Utils/mobile.html",revision:"7bba0797d029aad0e3b1124780c45fb9"},{url:"Utils/vue.html",revision:"ed2a012dcdcec14c1c7c2ba84431012b"}],{})}));
