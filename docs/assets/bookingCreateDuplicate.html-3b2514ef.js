import{_ as u,r as p,o as r,c,b as a,w as t,a as l,d as n,e as s}from"./app-5bf3c4c4.js";const k={},i=l(`<h2 id="booking-create-duplicate-post" tabindex="-1"><a class="header-anchor" href="#booking-create-duplicate-post" aria-hidden="true">#</a> Booking Create Duplicate (POST)</h2><div class="language-curl" data-ext="curl"><pre class="language-curl"><code>https://dmc-uat-api.ttdthailand.com/api/clients/bookings
</code></pre></div><h3 id="body" tabindex="-1"><a class="header-anchor" href="#body" aria-hidden="true">#</a> Body</h3><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;PackageID&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;BookingID&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TESTBOOK-U0003&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;RequestDate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-02&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;RequestTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10:00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;LeaderName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;leader_name&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;LeaderEmail&quot;</span><span class="token operator">:</span> <span class="token string">&quot;leader_email&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;LeaderMobile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;leader_mobile&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Nationality&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nationality&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ContactMethod&quot;</span><span class="token operator">:</span> <span class="token string">&quot;contact_method&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;FlightNumber&quot;</span><span class="token operator">:</span> <span class="token string">&quot;flight_number&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;HotelAndAddress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Patong&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;HotelName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Patong Hotel&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;HotelAddress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Patong&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;PickupLocationName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Patong&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;PickupLocationAddress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Patong&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;DropOffLocationName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Phuket Town&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;DropOffLocationAddress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Phuket Town&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;DropOffLocationBangkok&quot;</span><span class="token operator">:</span> <span class="token string">&quot;N/A&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;PickupTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;07:00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;TotalNumberOfPassengers&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ChildSeat&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;NumberOfLuggageItems&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;PreferLanguage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;English&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;PreferTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;16.00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;PreferLunchTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12.00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;TypeOfFood&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Indian&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;PassportName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12356565&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;PassportNumber&quot;</span><span class="token operator">:</span> <span class="token string">&quot;26263232&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ExtraDetail&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Good experience&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;DietaryRequirements&quot;</span><span class="token operator">:</span> <span class="token string">&quot;No Pork &quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Units&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;UnitID&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Qty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="example-request" tabindex="-1"><a class="header-anchor" href="#example-request" aria-hidden="true">#</a> Example Request</h3><div class="language-json" data-ext="json"><pre class="language-json"><code>curl --location -g &#39;<span class="token punctuation">{</span><span class="token punctuation">{</span>BASE_URL<span class="token punctuation">}</span><span class="token punctuation">}</span>/clients/bookings&#39; \\
--data &#39;<span class="token punctuation">{</span>
    <span class="token property">&quot;PackageID&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;BookingID&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TESTBOOK-U0004&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;RequestDate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-02&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;RequestTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10:00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;LeaderName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;leader_name&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;LeaderEmail&quot;</span><span class="token operator">:</span> <span class="token string">&quot;leader_email&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;LeaderMobile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;leader_mobile&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Nationality&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nationality&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ContactMethod&quot;</span><span class="token operator">:</span> <span class="token string">&quot;contact_method&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;FlightNumber&quot;</span><span class="token operator">:</span> <span class="token string">&quot;flight_number&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;HotelAndAddress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Patong&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;HotelName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Patong Hotel&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;HotelAddress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Patong&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;PickupLocationName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Patong&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;PickupLocationAddress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Patong&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;DropOffLocationName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Phuket Town&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;DropOffLocationAddress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Phuket Town&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;DropOffLocationBangkok&quot;</span><span class="token operator">:</span> <span class="token string">&quot;N/A&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;PickupTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;07:00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;TotalNumberOfPassengers&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ChildSeat&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;NumberOfLuggageItems&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;PreferLanguage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;English&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;PreferTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;16.00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;PreferLunchTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12.00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;TypeOfFood&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Indian&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;PassportName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12356565&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;PassportNumber&quot;</span><span class="token operator">:</span> <span class="token string">&quot;26263232&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ExtraDetail&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Good experience&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;DietaryRequirements&quot;</span><span class="token operator">:</span> <span class="token string">&quot;No Pork &quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Units&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;UnitID&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Qty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>&#39;
</code></pre></div><h3 id="example-response" tabindex="-1"><a class="header-anchor" href="#example-response" aria-hidden="true">#</a> Example Response</h3>`,7),q=n("div",{class:"language-json","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"statusCode"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"400"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"message"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"TESTBOOK-U0004 already exist."'),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),g=n("div",{class:"language-400 BAD REQUEST","data-ext":"400 BAD REQUEST"},[n("pre",{class:"language-400 BAD REQUEST"},[n("code",null,`Server                                  openresty

Date                                    Tue, 13 Jun 2023 16:10:12 GMT

Content-Type                            application/json; charset=utf-8

Content-Length                          60

Connection                              keep-alive

X-Powered-By                            Express

Access-Control-Allow-Origin             *

ETag                                    W/"3c-E3y+URf5jbieyYLmncBQknc5Ca4"
`)])],-1);function d(y,m){const o=p("CodeGroupItem"),e=p("CodeGroup");return r(),c("div",null,[i,a(e,null,{default:t(()=>[a(o,{title:"Body"},{default:t(()=>[q]),_:1}),a(o,{title:"Headers (8)"},{default:t(()=>[g]),_:1})]),_:1})])}const f=u(k,[["render",d],["__file","bookingCreateDuplicate.html.vue"]]);export{f as default};
