(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[14],{619:function(e,t,a){"use strict";var c=a(0),r=a.n(c);t.a=function(e){for(var t=e.ratingValue,a=[],n=0;n<5;n++)a.push(r.a.createElement("i",{className:"fa fa-star-o",key:n}));if(t&&t>0)for(var l=0;l<=t-1;l++)a[l]=r.a.createElement("i",{className:"fa fa-star-o yellow",key:l});return r.a.createElement(c.Fragment,null,a)}},633:function(e,t,a){"use strict";var c=a(26),r=a(0),n=a.n(r),l=a(623),s=a.n(l),o=a(323),i=a(692),m=a(619),d=a(44);t.a=Object(d.connect)((function(e){return{cartitems:e.cartData}}))((function(e){var t=e.product,a=e.currency,l=e.discountedprice,d=e.finalproductprice,u=e.finaldiscountedprice,p=Object(r.useState)(null),E=Object(c.a)(p,2),v=E[0],b=E[1],f=Object(r.useState)(null),g=Object(c.a)(f,2),N=g[0],h=g[1],w=Object(r.useState)(t.variation?t.variation[0].color:""),y=Object(c.a)(w,2),O=y[0],k=y[1],j=Object(r.useState)(t.variation?t.variation[0].size[0].name:""),S=Object(c.a)(j,2),C=S[0],x=S[1],P=Object(r.useState)(t.variation?t.variation[0].size[0].stock:t.stock),T=Object(c.a)(P,2),A=T[0],I=T[1],L=Object(r.useState)(1),D=Object(c.a)(L,2),F=D[0],q=D[1],B=e.wishlistitem,z=e.compareitem,H=e.addtocart,R=e.addtowishlist,K=e.addtocompare,W=e.addtoast,V=e.cartitems,_=Object(o.b)(V,t,O,C);Object(r.useEffect)((function(){null!==v&&v.controller&&null!==N&&N.controller&&(v.controller.control=N,N.controller.control=v)}),[v,N]);var J={getSwiper:b,spaceBetween:10,loopedSlides:4,loop:!0},M={getSwiper:h,spaceBetween:10,slidesPerView:4,loopedSlides:4,touchRatio:.2,freeMode:!0,loop:!0,slideToClickedSlide:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},renderPrevButton:function(){return n.a.createElement("button",{className:"swiper-button-prev ht-swiper-button-nav"},n.a.createElement("i",{className:"pe-7s-angle-left"}))},renderNextButton:function(){return n.a.createElement("button",{className:"swiper-button-next ht-swiper-button-nav"},n.a.createElement("i",{className:"pe-7s-angle-right"}))}};return n.a.createElement(r.Fragment,null,n.a.createElement(i.a,{show:e.show,onHide:e.onHide,className:"product-quickview-modal-wrapper"},n.a.createElement(i.a.Header,{closeButton:!0}),n.a.createElement("div",{className:"modal-body"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-5 col-sm-12 col-xs-12"},n.a.createElement("div",{className:"product-large-image-wrapper"},n.a.createElement(s.a,J,t.image&&t.image.map((function(e,t){return n.a.createElement("div",{key:t},n.a.createElement("div",{className:"single-image"},n.a.createElement("img",{src:""+e,className:"img-fluid",alt:""})))})))),n.a.createElement("div",{className:"product-small-image-wrapper mt-15"},n.a.createElement(s.a,M,t.image&&t.image.map((function(e,t){return n.a.createElement("div",{key:t},n.a.createElement("div",{className:"single-image"},n.a.createElement("img",{src:""+e,className:"img-fluid",alt:""})))}))))),n.a.createElement("div",{className:"col-md-7 col-sm-12 col-xs-12"},n.a.createElement("div",{className:"product-details-content quickview-content"},n.a.createElement("h2",null,t.name),n.a.createElement("div",{className:"product-details-price"},null!==l?n.a.createElement(r.Fragment,null,n.a.createElement("span",null,a.currencySymbol+u)," ",n.a.createElement("span",{className:"old"},a.currencySymbol+d)):n.a.createElement("span",null,a.currencySymbol+d," ")),t.rating&&t.rating>0?n.a.createElement("div",{className:"pro-details-rating-wrap"},n.a.createElement("div",{className:"pro-details-rating"},n.a.createElement(m.a,{ratingValue:t.rating}))):"",n.a.createElement("div",{className:"pro-details-list"},n.a.createElement("p",null,t.shortDescription)),t.variation?n.a.createElement("div",{className:"pro-details-size-color"},n.a.createElement("div",{className:"pro-details-color-wrap"},n.a.createElement("span",null,"Color"),n.a.createElement("div",{className:"pro-details-color-content"},t.variation.map((function(e,t){return n.a.createElement("label",{className:"pro-details-color-content--single ".concat(e.color),key:t},n.a.createElement("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===O?"checked":"",onChange:function(){k(e.color),x(e.size[0].name),I(e.size[0].stock),q(1)}}),n.a.createElement("span",{className:"checkmark"}))})))),n.a.createElement("div",{className:"pro-details-size"},n.a.createElement("span",null,"Size"),n.a.createElement("div",{className:"pro-details-size-content"},t.variation&&t.variation.map((function(e){return e.color===O?e.size.map((function(e,t){return n.a.createElement("label",{className:"pro-details-size-content--single",key:t},n.a.createElement("input",{type:"radio",value:e.name,checked:e.name===C?"checked":"",onChange:function(){x(e.name),I(e.stock),q(1)}}),n.a.createElement("span",{className:"size-name"},e.name))})):""}))))):"",t.affiliateLink?n.a.createElement("div",{className:"pro-details-quality"},n.a.createElement("div",{className:"pro-details-cart btn-hover"},n.a.createElement("a",{href:t.affiliateLink,rel:"noopener noreferrer",target:"_blank"},"Buy Now"))):n.a.createElement("div",{className:"pro-details-quality"},n.a.createElement("div",{className:"cart-plus-minus"},n.a.createElement("button",{onClick:function(){return q(F>1?F-1:1)},className:"dec qtybutton"},"-"),n.a.createElement("input",{className:"cart-plus-minus-box",type:"text",value:F,readOnly:!0}),n.a.createElement("button",{onClick:function(){return q(F<A-_?F+1:F)},className:"inc qtybutton"},"+")),n.a.createElement("div",{className:"pro-details-cart btn-hover"},A&&A>0?n.a.createElement("button",{onClick:function(){return H(t,W,F,O,C)},disabled:_>=A}," ","Add To Cart"," "):n.a.createElement("button",{disabled:!0},"Out of Stock")),n.a.createElement("div",{className:"pro-details-wishlist"},n.a.createElement("button",{className:void 0!==B?"active":"",disabled:void 0!==B,title:void 0!==B?"Added to wishlist":"Add to wishlist",onClick:function(){return R(t,W)}},n.a.createElement("i",{className:"pe-7s-like"}))),n.a.createElement("div",{className:"pro-details-compare"},n.a.createElement("button",{className:void 0!==z?"active":"",disabled:void 0!==z,title:void 0!==z?"Added to compare":"Add to compare",onClick:function(){return K(t,W)}},n.a.createElement("i",{className:"pe-7s-shuffle"}))))))))))}))},694:function(e,t,a){"use strict";a.r(t);var c=a(26),r=a(0),n=a.n(r),l=a(121),s=a.n(l),o=a(641),i=(a(52),a(44)),m=a(323),d=a(122),u=(a(120),function(e){var t=e.setSearchKeyword;return n.a.createElement("div",{className:"sidebar-widget"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Search "),n.a.createElement("div",{className:"pro-sidebar-search mb-50 mt-25"},n.a.createElement("form",{className:"pro-sidebar-search-form",action:"#"},n.a.createElement("input",{type:"text",onChange:function(e){t(e.target.value)},placeholder:"Search here..."}),n.a.createElement("button",null,n.a.createElement("i",{className:"pe-7s-search"})))))}),p=function(e){var t=e.categories,a=e.getSortParams;return n.a.createElement("div",{className:"sidebar-widget"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Categories "),n.a.createElement("div",{className:"sidebar-widget-list mt-30"},t?n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{onClick:function(e){a("category",""),Object(m.j)(e)}},n.a.createElement("span",{className:"checkmark"})," All Categories"))),t.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{onClick:function(t){a("category",e),Object(m.j)(t)}}," ",n.a.createElement("span",{className:"checkmark"})," ",e," ")))}))):"No categories found"))},E=function(e){var t=e.products,a=e.setSearchKeyword,c=e.getSortParams,r=e.sideSpaceClass,l=Object(m.f)(t);Object(m.g)(t),Object(m.d)(t),Object(m.h)(t);return n.a.createElement("div",{className:"sidebar-style ".concat(r||"")},n.a.createElement(u,{setSearchKeyword:a}),n.a.createElement(p,{categories:l,getSortParams:c}))},v=function(e){var t=e.getLayout,a=e.getFilterSortParams,c=e.productCount,r=e.sortedProductCount;return n.a.createElement("div",{className:"shop-top-bar mb-35"},n.a.createElement("div",{className:"select-shoing-wrap"},n.a.createElement("div",{className:"shop-select"},n.a.createElement("select",{onChange:function(e){return a("filterSort",e.target.value)}},n.a.createElement("option",{value:"default"},"Default"),n.a.createElement("option",{value:"priceHighToLow"},"Price - High to Low"),n.a.createElement("option",{value:"priceLowToHigh"},"Price - Low to High"))),n.a.createElement("p",null,"Showing ",r," of ",c," result")),n.a.createElement("div",{className:"shop-tab"},n.a.createElement("button",{onClick:function(e){t("grid two-column"),Object(m.i)(e)}},n.a.createElement("i",{className:"fa fa-th-large"})),n.a.createElement("button",{onClick:function(e){t("grid three-column"),Object(m.i)(e)}},n.a.createElement("i",{className:"fa fa-th"})),n.a.createElement("button",{onClick:function(e){t("list"),Object(m.i)(e)}},n.a.createElement("i",{className:"fa fa-list-ul"}))))},b=function(e){var t=e.getLayout,a=e.getFilterSortParams,c=e.productCount,l=e.sortedProductCount;return n.a.createElement(r.Fragment,null,n.a.createElement(v,{getLayout:t,getFilterSortParams:a,productCount:c,sortedProductCount:l}))},f=a(63),g=a(124),N=a(153),h=a(6),w=a(35),y=(a(619),a(633),a(325),"http://localhost:9000/static/"),O=function(e){var t=e.product,a=e.currency,l=e.addToCart,s=e.addToWishlist,o=e.addToCompare,i=e.cartItem,m=e.wishlistItem,d=e.compareItem,u=e.sliderClassName,p=e.spaceBottomClass,E=Object(r.useState)(!1),v=Object(c.a)(E,2),b=(v[0],v[1],Object(w.useToasts)().addToast),f=t.discountedPrice,g=100-f/t.price*100;g=Math.floor(g);var N=+(t.price*a.currencyRate).toFixed(2),O=+(f*a.currencyRate).toFixed(2);return n.a.createElement(r.Fragment,null,n.a.createElement("div",{className:"col-xl-4 col-sm-6 ".concat(u||"")},n.a.createElement("div",{className:"product-wrap ".concat(p||"")},n.a.createElement("div",{className:"product-img"},n.a.createElement("img",{className:"default-img",src:y+t.image,alt:""}),t.image.length>1?n.a.createElement("img",{className:"hover-img",src:y+t.image,alt:""}):"",g?n.a.createElement("div",{className:"product-img-badges"},g?n.a.createElement("span",{className:"pink"},"-",g,"%"):""):"",n.a.createElement("div",{className:"product-action"},n.a.createElement("div",{className:"pro-same-action pro-wishlist"},n.a.createElement("button",{className:void 0!==m?"active":"",disabled:void 0!==m,title:void 0!==m?"Added to wishlist":"Add to wishlist",onClick:function(){return s(t,b)}},n.a.createElement("i",{className:"pe-7s-like"}))),n.a.createElement("div",{className:"pro-same-action pro-cart"},t.affiliateLink?n.a.createElement("a",{href:t.affiliateLink,rel:"noopener noreferrer",target:"_blank"}," ","Buy now"," "):t.variation&&t.variation.length>=1?n.a.createElement(h.b,{to:"".concat("","/product/").concat(t.id)},"Select Option"):t.stock&&t.stock>0?n.a.createElement("button",{onClick:function(){return l(t,b)},className:void 0!==i&&i.quantity>0?"active":"",disabled:void 0!==i&&i.quantity>0,title:void 0!==i?"Added to cart":"Add to cart"}," ",n.a.createElement("i",{className:"pe-7s-cart"})," ",void 0!==i&&i.quantity>0?"Added":"Add to cart"):n.a.createElement("button",{disabled:!0,className:"active"},"Out of Stock")))),n.a.createElement("div",{className:"product-content text-center"},n.a.createElement("h3",null,t.productName),n.a.createElement("div",{className:"product-price"},null!==f?n.a.createElement(r.Fragment,null,n.a.createElement("span",null,a.currencySymbol+O)," ",n.a.createElement("span",{className:"old"},a.currencySymbol+N)):n.a.createElement("span",null,a.currencySymbol+N," ")))),n.a.createElement("div",{className:"shop-list-wrap mb-30"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xl-4 col-md-5 col-sm-6"},n.a.createElement("div",{className:"product-list-image-wrap"},n.a.createElement("div",{className:"product-img"},n.a.createElement("img",{className:"default-img img-fluid",src:y+t.image,alt:""}),g?n.a.createElement("div",{className:"product-img-badges"},t.discount?n.a.createElement("span",{className:"pink"},"-",g,"%"):""):""))),n.a.createElement("div",{className:"col-xl-8 col-md-7 col-sm-6"},n.a.createElement("div",{className:"shop-list-content"},n.a.createElement("h3",null,t.name),n.a.createElement("div",{className:"product-list-price"},null!==f?n.a.createElement(r.Fragment,null,n.a.createElement("span",null,a.currencySymbol+O)," ",n.a.createElement("span",{className:"old"},a.currencySymbol+N)):n.a.createElement("span",null,a.currencySymbol+N," ")),t.shortDescription?n.a.createElement("p",null,t.shortDescription):"",n.a.createElement("div",{className:"shop-list-actions d-flex align-items-center"},n.a.createElement("div",{className:"shop-list-btn btn-hover"},t.affiliateLink?n.a.createElement("a",{href:t.affiliateLink,rel:"noopener noreferrer",target:"_blank"}," ","Buy now"," "):t.variation&&t.variation.length>=1?n.a.createElement(h.b,{to:"".concat("","/product/").concat(t.id)},"Select Option"):t.stock&&t.stock>0?n.a.createElement("button",{onClick:function(){return l(t,b)},className:void 0!==i&&i.quantity>0?"active":"",disabled:void 0!==i&&i.quantity>0,title:void 0!==i?"Added to cart":"Add to cart"}," ",n.a.createElement("i",{className:"pe-7s-cart"})," ",void 0!==i&&i.quantity>0?"Added":"Add to cart"):n.a.createElement("button",{disabled:!0,className:"active"},"Out of Stock")),n.a.createElement("div",{className:"shop-list-wishlist ml-10"},n.a.createElement("button",{className:void 0!==m?"active":"",disabled:void 0!==m,title:void 0!==m?"Added to wishlist":"Add to wishlist",onClick:function(){return s(t,b)}},n.a.createElement("i",{className:"pe-7s-like"}))),n.a.createElement("div",{className:"shop-list-compare ml-10"},n.a.createElement("button",{className:void 0!==d?"active":"",disabled:void 0!==d,title:void 0!==d?"Added to compare":"Add to compare",onClick:function(){return o(t,b)}},n.a.createElement("i",{className:"pe-7s-shuffle"}))))))))))},k=Object(i.connect)((function(e){return{currency:e.currencyData,cartItems:e.cartData,wishlistItems:e.wishlistData,compareItems:e.compareData}}),(function(e){return{addToCart:function(t,a,c,r,n){e(Object(f.f)(t,a,c,r,n))},addToWishlist:function(t,a){e(Object(g.d)(t,a))},addToCompare:function(t,a){e(Object(N.c)(t,a))}}}))((function(e){var t=e.products,a=e.currency,c=e.addToCart,l=e.addToWishlist,s=e.addToCompare,o=e.cartItems,i=e.wishlistItems,m=e.compareItems,d=e.sliderClassName,u=e.spaceBottomClass;return n.a.createElement(r.Fragment,null,t.map((function(e){return n.a.createElement(O,{sliderClassName:d,spaceBottomClass:u,product:e,currency:a,addToCart:c,addToWishlist:l,addToCompare:s,cartItem:o.filter((function(t){return t.productID===e.productID}))[0],wishlistItem:i.filter((function(t){return t.productID===e.productID}))[0],compareItem:m.filter((function(t){return t.productID===e.productID}))[0],key:e.productID})})))})),j=function(e){var t=e.products,a=e.layout;return n.a.createElement("div",{className:"shop-bottom-area mt-35"},n.a.createElement("div",{className:"row ".concat(a||"")},n.a.createElement(k,{products:t,spaceBottomClass:"mb-25"})))};t.default=Object(i.connect)((function(e){return{products:e.productData.products}}))((function(e){e.location,e.Products;var t=e.isLogin,a=e.SetUserLogin,l=Object(r.useState)("grid three-column"),u=Object(c.a)(l,2),p=u[0],v=u[1],f=Object(r.useState)(""),g=Object(c.a)(f,2),N=g[0],h=g[1],w=Object(r.useState)(""),y=Object(c.a)(w,2),O=y[0],k=y[1],S=Object(r.useState)(""),C=Object(c.a)(S,2),x=C[0],P=C[1],T=Object(r.useState)(""),A=Object(c.a)(T,2),I=A[0],L=A[1],D=Object(r.useState)(0),F=Object(c.a)(D,2),q=F[0],B=F[1],z=Object(r.useState)(1),H=Object(c.a)(z,2),R=H[0],K=H[1],W=Object(r.useState)([]),V=Object(c.a)(W,2),_=V[0],J=V[1],M=Object(r.useState)([]),U=Object(c.a)(M,2),G=U[0],Q=U[1],X=Object(r.useState)(""),Y=Object(c.a)(X,2),Z=Y[0],$=Y[1],ee=Object(r.useState)([]),te=Object(c.a)(ee,2),ae=te[0],ce=te[1],re=Object(i.useSelector)((function(e){return e.productData.products}));Object(r.useEffect)((function(){ce(re)}),[re]);return Object(r.useEffect)((function(){var e=Object(m.e)(ae,N,O),t=function(e,t){var a=new RegExp(t,"i");return e.filter((function(e){return a.test(e.productName)}))}(Object(m.e)(e,x,I),Z);Q(e=t),J(e.slice(q,q+15))}),[q,ae,N,O,x,I,Z]),n.a.createElement(r.Fragment,null,n.a.createElement(s.a,null,n.a.createElement("title",null,"Flone | Shop Page"),n.a.createElement("meta",{name:"description",content:"Shop page of flone react minimalist eCommerce template."})),n.a.createElement(d.a,{headerTop:"visible",isLogin:t,SetUserLogin:a},n.a.createElement("div",{className:"shop-area pt-95 pb-100"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row d-flex flex-row flex-wrap-reverse"},n.a.createElement("div",{className:"col-lg-3 order-2 order-lg-1"},n.a.createElement(E,{setSearchKeyword:$,products:ae,getSortParams:function(e,t){h(e),k(t)},sideSpaceClass:"mr-30"})),n.a.createElement("div",{className:"col-lg-9 order-1 order-lg-2"},n.a.createElement(b,{getLayout:function(e){v(e)},getFilterSortParams:function(e,t){P(e),L(t)},productCount:ae.length,sortedProductCount:_.length}),n.a.createElement(j,{layout:p,products:_}),n.a.createElement("div",{className:"pro-pagination-style text-center mt-30"},n.a.createElement(o.a,{totalRecords:G.length,pageLimit:15,pageNeighbours:2,setOffset:B,currentPage:R,setCurrentPage:K,pageContainerClass:"mb-0 mt-0",pagePrevText:"\xab",pageNextText:"\xbb"}))))))))}))}}]);
//# sourceMappingURL=14.385de3ec.chunk.js.map