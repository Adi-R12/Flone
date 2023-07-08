(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[17],{619:function(e,a,t){"use strict";var r=t(0),c=t.n(r);a.a=function(e){for(var a=e.ratingValue,t=[],n=0;n<5;n++)t.push(c.a.createElement("i",{className:"fa fa-star-o",key:n}));if(a&&a>0)for(var l=0;l<=a-1;l++)t[l]=c.a.createElement("i",{className:"fa fa-star-o yellow",key:l});return c.a.createElement(r.Fragment,null,t)}},690:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),n=t(6),l=t(35),m=t(121),o=t.n(m),i=t(52),s=t(44),u=t(63),d=t(153),p=t(323),E=t(122),f=t(120),N=t(619);a.default=Object(s.connect)((function(e){return{cartItems:e.cartData,compareItems:e.compareData,currency:e.currencyData}}),(function(e){return{addToCart:function(a,t,r){e(Object(u.f)(a,t,r))},removeFromCompare:function(a,t){e(Object(d.d)(a,t))}}}))((function(e){var a=e.isLogin,t=e.location,m=e.cartItems,s=e.compareItems,u=e.addToCart,d=e.removeFromCompare,b=e.currency,v=t.pathname,y=Object(l.useToasts)().addToast;return c.a.createElement(r.Fragment,null,c.a.createElement(o.a,null,c.a.createElement("title",null,"Flone | Compare"),c.a.createElement("meta",{name:"description",content:"Compare page of flone react minimalist eCommerce template."})),c.a.createElement(i.BreadcrumbsItem,{to:"/"},"Home"),c.a.createElement(i.BreadcrumbsItem,{to:""+v},"Compare"),c.a.createElement(E.a,{headerTop:"visible",isLogin:a},c.a.createElement(f.a,null),c.a.createElement("div",{className:"compare-main-area pt-90 pb-100"},c.a.createElement("div",{className:"container"},s&&s.length>=1?c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"compare-page-content"},c.a.createElement("div",{className:"compare-table table-responsive"},c.a.createElement("table",{className:"table table-bordered mb-0"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",{className:"title-column"},"Product Info"),s.map((function(e,a){var t=m.filter((function(a){return a.id===e.id}))[0];return c.a.createElement("td",{className:"product-image-title",key:a},c.a.createElement("div",{className:"compare-remove"},c.a.createElement("button",{onClick:function(){return d(e,y)}},c.a.createElement("i",{className:"pe-7s-trash"}))),c.a.createElement(n.b,{to:"/product/"+e.id,className:"image"},c.a.createElement("img",{className:"img-fluid",src:""+e.image[0],alt:""})),c.a.createElement("div",{className:"product-title"},c.a.createElement(n.b,{to:"/product/"+e.id},e.name)),c.a.createElement("div",{className:"compare-btn"},e.affiliateLink?c.a.createElement("a",{href:e.affiliateLink,rel:"noopener noreferrer",target:"_blank"}," ","Buy now"," "):e.variation&&e.variation.length>=1?c.a.createElement(n.b,{to:"".concat("","/product/").concat(e.id)},"Select Option"):e.stock&&e.stock>0?c.a.createElement("button",{onClick:function(){return u(e,y)},className:void 0!==t&&t.quantity>0?"active":"",disabled:void 0!==t&&t.quantity>0,title:void 0!==e?"Added to cart":"Add to cart"},void 0!==t&&t.quantity>0?"Added":"Add to cart"):c.a.createElement("button",{disabled:!0,className:"active"},"Out of Stock")))}))),c.a.createElement("tr",null,c.a.createElement("th",{className:"title-column"},"Price"),s.map((function(e,a){var t=Object(p.a)(e.price,e.discount),n=(e.price*b.currencyRate).toFixed(2),l=(t*b.currencyRate).toFixed(2);return c.a.createElement("td",{className:"product-price",key:a},null!==t?c.a.createElement(r.Fragment,null,c.a.createElement("span",{className:"amount old"},b.currencySymbol+n),c.a.createElement("span",{className:"amount"},b.currencySymbol+l)):c.a.createElement("span",{className:"amount"},b.currencySymbol+n))}))),c.a.createElement("tr",null,c.a.createElement("th",{className:"title-column"},"Description"),s.map((function(e,a){return c.a.createElement("td",{className:"product-desc",key:a},c.a.createElement("p",null,e.shortDescription?e.shortDescription:"N/A"))}))),c.a.createElement("tr",null,c.a.createElement("th",{className:"title-column"},"Rating"),s.map((function(e,a){return c.a.createElement("td",{className:"product-rating",key:a},c.a.createElement(N.a,{ratingValue:e.rating}))}))))))))):c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"item-empty-area text-center"},c.a.createElement("div",{className:"item-empty-area__icon mb-30"},c.a.createElement("i",{className:"pe-7s-shuffle"})),c.a.createElement("div",{className:"item-empty-area__text"},"No items found in compare ",c.a.createElement("br",null)," ",c.a.createElement(n.b,{to:"/shop-grid-standard"},"Add Items")))))))))}))}}]);
//# sourceMappingURL=17.b2876156.chunk.js.map