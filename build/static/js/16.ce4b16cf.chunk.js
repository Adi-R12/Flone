(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[16],{627:function(e,t,a){},689:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(6),r=a(35),i=a(121),m=a.n(i),s=a(52),o=a(44),u=(a(323),a(627),a(124)),d=a(63),E=a(122),p=a(120);t.default=Object(o.connect)((function(e){return{cartItems:e.cartData,wishlistItems:e.wishlistData,currency:e.currencyData}}),(function(e){return{addToCart:function(t,a,n){e(Object(d.f)(t,a,n))},addToWishlist:function(t,a,n){e(Object(u.d)(t,a,n))},removeFromWishlist:function(t,a,n){e(Object(u.f)(t,a,n))},removeAllFromWishlist:function(t){e(Object(u.e)(t))}}}))((function(e){var t=e.isLogin,a=e.SetUserLogin,i=e.location,o=e.cartItems,u=e.currency,d=e.addToCart,h=e.wishlistItems,b=e.removeFromWishlist,f=e.removeAllFromWishlist,v=Object(r.useToasts)().addToast,N=i.pathname;return c.a.createElement(n.Fragment,null,c.a.createElement(m.a,null,c.a.createElement("title",null,"Flone | Wishlist"),c.a.createElement("meta",{name:"description",content:"Wishlist page of flone react minimalist eCommerce template."})),c.a.createElement(s.BreadcrumbsItem,{to:"/"},"Home"),c.a.createElement(s.BreadcrumbsItem,{to:""+N},"Wishlist"),c.a.createElement(E.a,{SetUserLogin:a,headerTop:"visible",isLogin:t},c.a.createElement(p.a,null),c.a.createElement("div",{className:"cart-main-area pt-90 pb-100"},c.a.createElement("div",{className:"container"},h&&h.length>=1?c.a.createElement(n.Fragment,null,c.a.createElement("h3",{className:"cart-page-title"},"Your wishlist items"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"table-content table-responsive cart-table-content"},c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Product"),c.a.createElement("th",null,"Unit Price"),c.a.createElement("th",null,"Add To Cart"),c.a.createElement("th",null,"action"))),c.a.createElement("tbody",null,h.map((function(e,t){var a=e.discountedPrice,r=(e.price*u.currencyRate).toFixed(2),i=(a*u.currencyRate).toFixed(2),m=o.filter((function(t){return t.productID===e.productID}))[0];return c.a.createElement("tr",{key:t},c.a.createElement("td",{className:"product-thumbnail"},c.a.createElement("img",{className:"img-fluid",src:"http://localhost:9000/static/"+e.image,alt:""}),e.productName),c.a.createElement("td",{className:"product-price-cart"},null!==a?c.a.createElement(n.Fragment,null,c.a.createElement("span",{className:"amount old"},u.currencySymbol+r),c.a.createElement("span",{className:"amount"},u.currencySymbol+i)):c.a.createElement("span",{className:"amount"},u.currencySymbol+r)),c.a.createElement("td",{className:"product-wishlist-cart"},e.affiliateLink?c.a.createElement("a",{href:e.affiliateLink,rel:"noopener noreferrer",target:"_blank"}," ","Buy now"," "):e.variation&&e.variation.length>=1?c.a.createElement(l.b,{to:"".concat("","/product/").concat(e.id)},"Select option"):e.stock&&e.stock>0?c.a.createElement("button",{onClick:function(){return d(e,v)},className:void 0!==m&&m.quantity>0?"active":"",disabled:void 0!==m&&m.quantity>0,title:void 0!==e?"Added to cart":"Add to cart"},void 0!==m&&m.quantity>0?"Added":"Add to cart"):c.a.createElement("button",{disabled:!0,className:"active"},"Out of stock")),c.a.createElement("td",{className:"product-remove"},c.a.createElement("button",{onClick:function(){return b(e,v)}},c.a.createElement("i",{className:"fa fa-times"}))))}))))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"cart-shiping-update-wrapper"},c.a.createElement("div",{className:"cart-shiping-update"},c.a.createElement(l.b,{to:"/"},"Continue Shopping")),c.a.createElement("div",{className:"cart-clear"},c.a.createElement("button",{onClick:function(){return f(v)}},"Clear Wishlist")))))):c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"item-empty-area text-center"},c.a.createElement("div",{className:"item-empty-area__icon mb-30"},c.a.createElement("i",{className:"pe-7s-like"})),c.a.createElement("div",{className:"item-empty-area__text"},"No items found in wishlist ",c.a.createElement("br",null)," ",c.a.createElement(l.b,{to:"/"},"Add Items")))))))))}))}}]);
//# sourceMappingURL=16.ce4b16cf.chunk.js.map