import{_ as c,r as o,o as r,c as l,b as t,w as a,a as u,d as n,e as s}from"./app-5bf3c4c4.js";const k={},i=u(`<h2 id="inventory-check-get" tabindex="-1"><a class="header-anchor" href="#inventory-check-get" aria-hidden="true">#</a> Inventory Check (GET)</h2><div class="language-curl" data-ext="curl"><pre class="language-curl"><code>https://dmc-uat-api.ttdthailand.com/api/clients/inventory?package_id=1&amp;date_start=2023-06-01&amp;date_end=2023-06-30
</code></pre></div><h3 id="authorization" tabindex="-1"><a class="header-anchor" href="#authorization" aria-hidden="true">#</a> Authorization</h3><table><thead><tr><th style="text-align:center;">Key</th><th style="text-align:center;">Value</th></tr></thead><tbody><tr><td style="text-align:center;">Token</td><td style="text-align:center;">&lt; token &gt;</td></tr></tbody></table><h3 id="params" tabindex="-1"><a class="header-anchor" href="#params" aria-hidden="true">#</a> Params</h3><table><thead><tr><th style="text-align:center;">Key</th><th style="text-align:center;">Value</th></tr></thead><tbody><tr><td style="text-align:center;">package_id</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">date_start</td><td style="text-align:center;">2023-06-01</td></tr><tr><td style="text-align:center;">date_end</td><td style="text-align:center;">2023-06-30</td></tr></tbody></table><h3 id="example-request" tabindex="-1"><a class="header-anchor" href="#example-request" aria-hidden="true">#</a> Example Request</h3><div class="language-curl" data-ext="curl"><pre class="language-curl"><code>curl --location &#39;https://dmc-uat-api.ttdthailand.com/api/clients/inventory?package_id=1&amp;date_start=2023-06-01&amp;date_end=2023-06-30&#39;
</code></pre></div><h3 id="example-response" tabindex="-1"><a class="header-anchor" href="#example-response" aria-hidden="true">#</a> Example Response</h3>`,9),y=n("div",{class:"language-json","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"DateStart"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-01"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"DateEnd"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-30"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"PackageID"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"PackageName"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1 Hour ATV Riding"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"Allotments"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"InventoryDate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-01"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"Qty"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"InventoryDate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-02"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"Qty"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"InventoryDate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-03"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"Qty"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"InventoryDate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-04"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"Qty"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"InventoryDate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-05"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"Qty"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"InventoryDate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-06"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"Qty"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"InventoryDate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-07"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"Qty"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"InventoryDate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-08"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"Qty"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"InventoryDate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-09"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"Qty"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"InventoryDate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-10"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"Qty"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"InventoryDate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-11"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"Qty"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"InventoryDate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-12"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"Qty"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"InventoryDate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-13"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"Qty"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"InventoryDate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-14"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"Qty"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"InventoryDate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-15"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"Qty"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"InventoryDate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-16"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"Qty"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"InventoryDate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-17"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"Qty"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"InventoryDate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-18"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"Qty"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"InventoryDate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-19"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"Qty"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"InventoryDate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-20"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"Qty"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"InventoryDate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-21"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"Qty"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"InventoryDate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-22"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"Qty"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"InventoryDate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-23"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"Qty"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"InventoryDate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-24"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"Qty"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"InventoryDate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-25"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"Qty"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"InventoryDate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-26"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"Qty"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"InventoryDate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-27"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"Qty"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"InventoryDate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-28"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"Qty"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"InventoryDate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-29"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"Qty"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"InventoryDate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2023-06-30"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"Qty"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),d=n("div",{class:"language-200 OK","data-ext":"200 OK"},[n("pre",{class:"language-200 OK"},[n("code",null,`Server                                  openresty

Date                                    Thu, 06 Jul 2023 03:21:56 GMT

Content-Type                            application/json; charset=utf-8

Content-Length                          1284

Connection                              keep-alive

X-Powered-By                            Express

Access-Control-Allow-Origin             *

ETag                                    W/"504-Un+NGAmjnLVFNlC1gtXJ2uwzbRs"

X-Served-By                             dmc-uat-api.ttdthailand.com
`)])],-1);function g(h,m){const e=o("CodeGroupItem"),p=o("CodeGroup");return r(),l("div",null,[i,t(p,null,{default:a(()=>[t(e,{title:"Body"},{default:a(()=>[y]),_:1}),t(e,{title:"Headers (9)"},{default:a(()=>[d]),_:1})]),_:1})])}const b=c(k,[["render",g],["__file","InventoryCheck.html.vue"]]);export{b as default};
