import{a as b,S,i}from"./assets/vendor-BSTwZ_tR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const E="52389108-9de8a863b1caabc6aa6df9d02",q="https://pixabay.com/api/",R=15;async function p(s,t=1){return(await b.get(q,{params:{key:E,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:R,page:t}})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),h=document.querySelector(".load-more"),$=new S(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const t=s.map(r=>`
      <li class="gallery-item">
        <a href="${r.largeImageURL}">
          <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy"/>
        </a>
        <div class="info">
          <div class="info-item">
            <p class="label">Likes</p>
            <p class="value">${r.likes}</p>
          </div>
          <div class="info-item">
            <p class="label">Views</p>
            <p class="value">${r.views}</p>
          </div>
          <div class="info-item">
            <p class="label">Comments</p>
            <p class="value">${r.comments}</p>
          </div>
          <div class="info-item">
            <p class="label">Downloads</p>
            <p class="value">${r.downloads}</p>
          </div>
        </div>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",t),$.refresh()}function B(){f.innerHTML=""}function y(){m.classList.remove("hidden")}function v(){m.classList.add("hidden")}function M(){h.classList.remove("hidden")}function L(){h.classList.add("hidden")}const w=document.querySelector(".form"),u=w.querySelector('input[name="search-text"]'),P=document.querySelector(".load-more");let a="",n=1,l=0;w.addEventListener("submit",O);P.addEventListener("click",x);async function O(s){if(s.preventDefault(),a=u.value.trim(),!a){i.warning({title:"Warning",message:"Enter a search query",position:"topRight"});return}n=1,B(),L(),y();try{const t=await p(a,n);if(l=t.totalHits,!t.hits.length){i.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits),i.success({title:"Success",message:`Found ${l} images`,position:"topRight"}),t.hits.length<l&&M()}catch{i.error({title:"Error",message:"Something went wrong",position:"topRight"})}finally{v(),u.value=""}}async function x(){n+=1,y();try{const s=await p(a,n);g(s.hits),A(),n*15>=l&&(L(),i.info({title:"End of results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{i.error({title:"Error",message:"Something went wrong",position:"topRight"})}finally{v()}}function A(){const{height:s}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
