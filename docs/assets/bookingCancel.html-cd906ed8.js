import{_ as c,r as o,o as l,c as r,b as a,w as n,a as d,d as e}from"./app-5bf3c4c4.js";const i={},p=d(`<h2 id="booking-cancel-patch" tabindex="-1"><a class="header-anchor" href="#booking-cancel-patch" aria-hidden="true">#</a> Booking Cancel (PATCH)</h2><div class="language-curl" data-ext="curl"><pre class="language-curl"><code>https://dmc-uat-api.ttdthailand.com/api/clients/bookings/TESTBOOK-U0003/cancel
</code></pre></div><h3 id="example-request" tabindex="-1"><a class="header-anchor" href="#example-request" aria-hidden="true">#</a> Example Request</h3><div class="language-json" data-ext="json"><pre class="language-json"><code>curl --location -g --request PATCH &#39;<span class="token punctuation">{</span><span class="token punctuation">{</span>BASE_URL<span class="token punctuation">}</span><span class="token punctuation">}</span>/clients/bookings/TESTBOOK-U0004/cancel&#39;
</code></pre></div><h3 id="example-response" tabindex="-1"><a class="header-anchor" href="#example-response" aria-hidden="true">#</a> Example Response</h3>`,5),u=e("div",{class:"language-json","data-ext":"json"},[e("pre",{class:"language-json"},[e("code",null,`No response body
This request doesn't return any response body
`)])],-1),h=e("div",{class:"language-204 NO CONTENT","data-ext":"204 NO CONTENT"},[e("pre",{class:"language-204 NO CONTENT"},[e("code",null,`Server                                  openresty

Date                                    Tue, 13 Jun 2023 15:58:44 GMT

Connection                              keep-alive

X-Powered-By                            Express

Access-Control-Allow-Origin             *

ETag                                    W/"26-t+GXWTClmx36sI0qQsaZVYoQm0I"

X-Served-By                             dmc-uat-api.ttdthailand.com
`)])],-1);function g(_,m){const s=o("CodeGroupItem"),t=o("CodeGroup");return l(),r("div",null,[p,a(t,null,{default:n(()=>[a(s,{title:"Body"},{default:n(()=>[u]),_:1}),a(s,{title:"Headers (7)"},{default:n(()=>[h]),_:1})]),_:1})])}const C=c(i,[["render",g],["__file","bookingCancel.html.vue"]]);export{C as default};
