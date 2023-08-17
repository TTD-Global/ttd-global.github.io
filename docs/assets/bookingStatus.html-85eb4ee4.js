import{_ as r,r as o,o as l,c as d,b as n,w as t,a as i,d as e,e as a}from"./app-5bf3c4c4.js";const u={},p=i(`<h2 id="booking-status-get" tabindex="-1"><a class="header-anchor" href="#booking-status-get" aria-hidden="true">#</a> Booking Status (GET)</h2><div class="language-curl" data-ext="curl"><pre class="language-curl"><code>https://dmc-uat-api.ttdthailand.com/api/clients/bookings/TESTBOOK-U0003/status
</code></pre></div><h3 id="example-request" tabindex="-1"><a class="header-anchor" href="#example-request" aria-hidden="true">#</a> Example Request</h3><div class="language-curl" data-ext="curl"><pre class="language-curl"><code>curl --location -g &#39;{{BASE_URL}}/clients/bookings/TESTBOOK-U0004/status&#39;
</code></pre></div><h3 id="example-response" tabindex="-1"><a class="header-anchor" href="#example-response" aria-hidden="true">#</a> Example Response</h3>`,5),g=e("div",{class:"language-json","data-ext":"json"},[e("pre",{class:"language-json"},[e("code",null,[e("span",{class:"token punctuation"},"{"),a(`
  `),e("span",{class:"token property"},'"statusCode"'),e("span",{class:"token operator"},":"),a(),e("span",{class:"token number"},"200"),e("span",{class:"token punctuation"},","),a(`
  `),e("span",{class:"token property"},'"bookingStatus"'),e("span",{class:"token operator"},":"),a(),e("span",{class:"token string"},'"confirmed"'),a(`
`),e("span",{class:"token punctuation"},"}"),a(`
`)])])],-1),h=e("div",{class:"language-200 OK","data-ext":"200 OK"},[e("pre",{class:"language-200 OK"},[e("code",null,`Server                                  openresty

Date                                    Tue, 13 Jun 2023 15:58:26 GMT

Content-Type                            application/json; charset=utf-8

Content-Length                          46

Connection                              keep-alive

X-Powered-By                            Express

Access-Control-Allow-Origin             *

ETag                                    W/"2e-TYylg13+0yEkqA8HFDkiRoQ3qhk"

X-Served-By                             dmc-uat-api.ttdthailand.com
`)])],-1);function _(k,m){const s=o("CodeGroupItem"),c=o("CodeGroup");return l(),d("div",null,[p,n(c,null,{default:t(()=>[n(s,{title:"Body"},{default:t(()=>[g]),_:1}),n(s,{title:"Headers (9)"},{default:t(()=>[h]),_:1})]),_:1})])}const f=r(u,[["render",_],["__file","bookingStatus.html.vue"]]);export{f as default};
