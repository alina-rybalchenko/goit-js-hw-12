import{a as b,S,i}from"./assets/vendor-BSTwZ_tR.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const E="52389108-9de8a863b1caabc6aa6df9d02",q="https://pixabay.com/api/",R=15;async function p(o,e=1){return(await b.get(q,{params:{key:E,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:R,page:e}})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),h=document.querySelector(".load-more"),$=new S(".gallery a",{captionsData:"alt",captionDelay:250});function g(o){const e=o.map(s=>`
    <li class="gallery-item">
      <a href="${s.largeImageURL}">
        <img src="${s.webformatURL}" alt="${s.tags}" loading="lazy"/>
      </a>
      <div class="info">
        <div class="info-item">
          <p class="label">Likes</p>
          <p class="value">${s.likes}</p>
        </div>
        <div class="info-item">
          <p class="label">Views</p>
          <p class="value">${s.views}</p>
        </div>
        <div class="info-item">
          <p class="label">Comments</p>
          <p class="value">${s.comments}</p>
        </div>
        <div class="info-item">
          <p class="label">Downloads</p>
          <p class="value">${s.downloads}</p>
        </div>
      </div>
    </li>
  `).join("");f.insertAdjacentHTML("beforeend",e),$.refresh()}function B(){f.innerHTML=""}function y(){m.classList.remove("hidden")}function v(){m.classList.add("hidden")}function M(){h.classList.remove("hidden")}function L(){h.classList.add("hidden")}const w=document.querySelector(".form"),u=w.querySelector('input[name="search-text"]'),P=document.querySelector(".load-more");let a="",n=1,l=0;w.addEventListener("submit",O);P.addEventListener("click",x);async function O(o){if(o.preventDefault(),a=u.value.trim(),!a){i.warning({title:"Warning",message:"Enter a search query",position:"topRight"});return}n=1,B(),L(),y();try{const e=await p(a,n);if(l=e.totalHits,!e.hits.length){i.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(e.hits),i.success({title:"Success",message:`Found ${l} images`,position:"topRight"}),e.hits.length<l&&M()}catch(e){console.error(e),i.error({title:"Error",message:"Something went wrong",position:"topRight"})}finally{v(),u.value=""}}async function x(){n+=1,y();try{const o=await p(a,n);g(o.hits),A(),n*15>=l&&(L(),i.info({title:"End of results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(o){console.error(o),i.error({title:"Error",message:"Something went wrong",position:"topRight"})}finally{v()}}function A(){const o=document.querySelector(".gallery").firstElementChild;if(!o)return;const{height:e}=o.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
