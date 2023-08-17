import{_ as c,r as o,o as r,c as l,b as s,w as t,a as u,d as n,e as a}from"./app-5bf3c4c4.js";const i={},d=u(`<h2 id="login-token-post" tabindex="-1"><a class="header-anchor" href="#login-token-post" aria-hidden="true">#</a> Login Token (POST)</h2><div class="language-curl" data-ext="curl"><pre class="language-curl"><code>https://dmc-uat-api.ttdthailand.com/api/clients/auth
</code></pre></div><h3 id="body" tabindex="-1"><a class="header-anchor" href="#body" aria-hidden="true">#</a> Body</h3><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;grant_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;client_credentials&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;client_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lhFWu62Ep54NgN8R&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;client_secret&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jZ0iuTmjMsbWw5K9OxplZzpJiguW2ckE&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="example-request" tabindex="-1"><a class="header-anchor" href="#example-request" aria-hidden="true">#</a> Example Request</h3><div class="language-json" data-ext="json"><pre class="language-json"><code>curl --location &#39;https<span class="token operator">:</span><span class="token comment">//dmc-uat-api.ttdthailand.com/api/clients/auth&#39; \\</span>
--data &#39;<span class="token punctuation">{</span>
    <span class="token property">&quot;grant_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;client_credentials&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;client_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lhFWu62Ep54NgN8R&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;client_secret&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jZ0iuTmjMsbWw5K9OxplZzpJiguW2ckE&quot;</span>
<span class="token punctuation">}</span>

&#39;
</code></pre></div><h3 id="example-response" tabindex="-1"><a class="header-anchor" href="#example-response" aria-hidden="true">#</a> Example Response</h3>`,7),k=n("div",{class:"language-json","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},'"access_token"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"684eGmRdA3SH6ZtnxsHAP0Bbiav0wYQ1"'),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token property"},'"token_type"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"Bearer"'),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token property"},'"expires_in"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"2023-06-27 08:41:24"'),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token property"},'"updated"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token property"},'"generatedMaps"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token property"},'"raw"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token property"},'"affected"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])])],-1),g=n("div",{class:"language-201 CREATED","data-ext":"201 CREATED"},[n("pre",{class:"language-201 CREATED"},[n("code",null,`Server                                  openresty

Date                                    Tue, 20 Jun 2023 08:41:24 GMT

Content-Type                            application/json; charset=utf-8

Content-Length                          161

Connection                              keep-alive

X-Powered-By                            Express

Access-Control-Allow-Origin             *

ETag                                    W/"a1-sDfQ13bDJnqD6QfZb/fW1GgdefI"

X-Served-By                             dmc-uat-api.ttdthailand.com
`)])],-1);function h(_,m){const e=o("CodeGroupItem"),p=o("CodeGroup");return r(),l("div",null,[d,s(p,null,{default:t(()=>[s(e,{title:"Body"},{default:t(()=>[k]),_:1}),s(e,{title:"Headers (9)"},{default:t(()=>[g]),_:1})]),_:1})])}const x=c(i,[["render",h],["__file","loginToken.html.vue"]]);export{x as default};
