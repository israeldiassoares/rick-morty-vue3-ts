import{d as L,a as P,b as x,o as k,c as R,e as o,f as l,w as m,u as h,F as E,g as f,h as S,R as p,i as I,j as U,k as A,l as C,m as F}from"./vendor-29a55132.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const b="modulepreload",T=function(e){return"/raketech-challenge/"+e},_={},d=function(t,s,i){if(!s||s.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(s.map(a=>{if(a=T(a),a in _)return;_[a]=!0;const n=a.endsWith(".css"),w=n?'[rel="stylesheet"]':"";if(!!i)for(let u=r.length-1;u>=0;u--){const g=r[u];if(g.href===a&&(!n||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${w}`))return;const c=document.createElement("link");if(c.rel=n?"stylesheet":b,n||(c.as="script",c.crossOrigin=""),c.href=a,document.head.appendChild(c),n)return new Promise((u,g)=>{c.addEventListener("load",u),c.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t())},N=L("initial-value-setup",{state:()=>({theme:""}),getters:{getCurrentTheme(e){return e.theme}},actions:{retrieveLocalTheme(){const e=localStorage==null?void 0:localStorage.getItem("retrieveTheme");e!==null?(this.theme=e,this.toggleTheme()):localStorage.setItem("retrieveTheme","light")},toggleTheme(){this.theme==="light"?(localStorage.setItem("retrieveTheme","light"),document.documentElement.classList.remove("dark"),this.theme="dark"):(localStorage.setItem("retrieveTheme","dark"),document.documentElement.classList.add("dark"),this.theme="light")}}}),O={class:"grid grid-cols-2 dark:bg-gray-700 dark:border-gray-600"},D={class:"grid grid-cols-4"},H={class:"flex flex-row justify-end"},$={class:"dark:bg-gray-700 dark:border-gray-600"},B=o("footer",{class:"bg-green-700 dark:bg-gray-700 dark:border-gray-600"},[o("p",{class:"text-sm font-medium text-black dark:text-green-300"},[f(" Developed by "),o("a",{href:"https://www.linkedin.com/in/israel-soares-016b1738/",class:"text-green-300"},"Israel Soares.")])],-1),V=P({__name:"App",setup(e){const t=N(),s=x({loader:()=>d(()=>import("./AtomSwitchButton-daebb5f8.js"),["assets/AtomSwitchButton-daebb5f8.js","assets/vendor-29a55132.js"])});return k(()=>{t.retrieveLocalTheme()}),(i,r)=>(S(),R(E,null,[o("header",O,[o("nav",null,[o("ul",D,[o("li",null,[l(h(p),{to:"/"},{default:m(()=>[f("Home")]),_:1})]),o("li",null,[l(h(p),{to:"/add-your-own-hero"},{default:m(()=>[f("Add your own hero")]),_:1})]),o("li",null,[l(h(p),{to:"/favorite-hero"},{default:m(()=>[f(" ❦ Favorite hero")]),_:1})])])]),o("div",H,[l(h(s))])]),o("main",$,[l(h(I))]),B],64))}}),v="https://rickandmortyapi.com/api",j=L("character",{state:()=>({charactersList:[],character:{},queryParam:"",textSearch:"",pages:0,nextPageURL:null,prevPageURL:null,loading:!1,error:String,favoriteHeroList:[],response:{}}),getters:{getCharactersList:e=>{let t;for(let s in e.charactersList)s=="results"&&(t=e.charactersList[s]);return t},getCurrentNumberPage:e=>{var i,r;let t=Number((i=e.nextPageURL)==null?void 0:i.match(/\d/)),s=String((r=e.prevPageURL)==null?void 0:r.match(/\d/));return t===2&&s==""?1:t-1},getPrevPagination:e=>{for(let t in e.charactersList)if(t=="info")return e.charactersList[t]},getCharacterDetails:e=>e.character,getQuantityPage(e){return e.charactersList},getFavoriteHeroList(e){return e.favoriteHeroList}},actions:{async getAllOrFiltredResult(){let e="/([aA-zZ])w+/g";this.queryParam.match(e)&&this.textSearch.match(e)?await this.getFilteredCharacter():await this.fetchCharacters()},async fetchCharacters(){this.loading=!0;try{this.charactersList=await fetch(`${v}/character`).then(e=>e.json())}catch(e){this.error=e}finally{this.loading=!1}},async fetchCharacterById(e){localStorage.setItem("charID",String(e)),this.loading=!0;try{return this.character=await fetch(`${v}/character/${e}`).then(t=>t.json())}catch(t){this.error=t}finally{this.loading=!1}},async getFilteredCharacter(){this.loading=!0;try{this.charactersList=await fetch(`${v}/character/?${this.queryParam}=${this.textSearch}`).then(e=>e.json())}catch(e){this.error=e}finally{this.loading=!1}},async getNextPageData(){console.log("getNextPAge",this.nextPageURL);try{if(this.nextPageURL!==null){let e=await fetch(`${this.nextPageURL}`).then(t=>t.json());this.setNextPageURL(),this.setPrevPageURL(),this.charactersList=e}}catch(e){this.error=e}finally{this.loading=!1}},async getPrevPageData(){console.log("getNextPAge",this.nextPageURL);try{if(this.prevPageURL!==null){let e=await fetch(`${this.prevPageURL}`).then(t=>t.json());this.setNextPageURL(),this.setPrevPageURL(),this.charactersList=e}}catch(e){this.error=e}finally{this.loading=!1}},setQuantityPage(){},setNextPageURL(){let e={};for(let t in this.charactersList)t=="info"&&(e=t);return this.nextPageURL=e},setPrevPageURL(){let e={};for(let t in this.charactersList)t=="info"&&(e=t);return this.prevPageURL=e},setSelectedParam(e){return this.queryParam=e},setTextSearch(e){return this.textSearch=e},addFavorite(e){try{return this.favoriteHeroList.push({...e})}catch(t){return console.error(t)}},checkIfExistHeroOnFavorite(e){let t=[...this.getFavoriteHeroList],s=e.id,i=!1;t.length||(i=!0);for(const r of t)if(console.log("list",t),r.id!=s)i=!0;else return i=!1;return i},removeFromFavorite(e){this.favoriteHeroList=this.getFavoriteHeroList.filter((t,s)=>t.id!=e.id)},favoriteActions(e){this.checkIfExistHeroOnFavorite(e)?this.addFavorite(e):this.removeFromFavorite(e)},async retrieveSelectedCharacter(){const e=localStorage==null?void 0:localStorage.getItem("charID");e!==null&&this.character.id==null&&(console.log("recupera if"),await this.fetchCharacterById(Number(e)))}}}),q=P({__name:"HomeView",setup(e){j().getAllOrFiltredResult();const s=x({loader:()=>d(()=>import("./OrganismHome-2d95eed2.js"),["assets/OrganismHome-2d95eed2.js","assets/vendor-29a55132.js"])});return(i,r)=>(S(),R("section",null,[l(h(s))]))}}),Q=U({history:A("/raketech-challenge/"),routes:[{path:"/",name:"home",component:q},{path:"/add-your-own-hero",name:"add-your-own-hero",component:()=>d(()=>import("./OwnHeroView-92ffd93d.js"),["assets/OwnHeroView-92ffd93d.js","assets/vendor-29a55132.js"])},{path:"/character/:id",name:"charater-by-id",component:()=>d(()=>import("./CardDetailView-2a3b098e.js"),["assets/CardDetailView-2a3b098e.js","assets/vendor-29a55132.js"])},{path:"/favorite-hero",name:"favorite-hero",component:()=>d(()=>import("./FavoriteHeroView-29874847.js"),["assets/FavoriteHeroView-29874847.js","assets/vendor-29a55132.js"])}]});const y=C(V);y.use(F());y.use(Q);y.mount("#app");export{d as _,j as a,Q as r,N as u};