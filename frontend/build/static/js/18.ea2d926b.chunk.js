(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[18],{645:function(e,a,t){"use strict";t.r(a);var l=t(25),n=t(0),r=t.n(n),c=t(6),m=t(112),i=t.n(m),o=t(41),s=t(49),u=(t(301),t(113)),d=t(111),E=t(32),p=t(72),v=t.n(p),b=t(22),g=t(59),N=t(87);a.default=Object(o.connect)((function(e){return{cartItems:e.cartData,currency:e.currencyData}}),(function(e){return{removeAllFromCart:function(){e(Object(g.h)())},decrementProduct:function(a){e(Object(N.c)(a))}}}))((function(e){var a=e.user,t=e.location,m=e.cartItems,o=e.currency,p=e.isLogin,g=e.SetUserLogin,N=e.removeAllFromCart,h=e.decrementProduct,y=t.pathname,f=Object(E.useToasts)().addToast,O=0,A=Object(n.useState)(a.name?a.name:""),j=Object(l.a)(A,2),k=j[0],P=j[1],C=Object(n.useState)("Pickup"),S=Object(l.a)(C,2),w=S[0],x=S[1],z=Object(n.useState)(a.address?a.address:""),Z=Object(l.a)(z,2),F=Z[0],D=Z[1],q=Object(n.useState)(a.number?a.number:""),_=Object(l.a)(q,2),I=_[0],L=_[1],R=Object(n.useState)(a.email?a.email:""),T=Object(l.a)(R,2),B=T[0],$=T[1],H=Object(n.useState)(""),J=Object(l.a)(H,2),U=J[0],W=J[1],X=Object(b.f)();return r.a.createElement(n.Fragment,null,r.a.createElement(i.a,null,r.a.createElement("title",null,"Flone | Checkout"),r.a.createElement("meta",{name:"description",content:"Checkout page of flone react minimalist eCommerce template."})),r.a.createElement(s.BreadcrumbsItem,{to:"/"},"Home"),r.a.createElement(s.BreadcrumbsItem,{to:""+y},"Checkout"),r.a.createElement(u.a,{SetUserLogin:g,headerTop:"visible",isLogin:p},r.a.createElement(d.a,null),r.a.createElement("div",{className:"checkout-area pt-95 pb-100"},r.a.createElement("div",{className:"container"},m&&m.length>=1?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-7"},r.a.createElement("div",{className:"billing-info-wrap"},r.a.createElement("h3",null,"Billing Details"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 col-md-6"},r.a.createElement("div",{className:"billing-info mb-20"},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",onChange:function(e){return P(e.target.value)},value:k}))),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"billing-select mb-20"},r.a.createElement("label",null,"Delivery option"),r.a.createElement("select",{onChange:function(e){return x(e.target.value)},value:w},r.a.createElement("option",null,"Pickup"),r.a.createElement("option",null,"Home Delivery")))),"Pickup"!==w&&r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"billing-info mb-20"},r.a.createElement("label",null,"Address"),r.a.createElement("input",{className:"billing-address",placeholder:"Address",type:"text",onChange:function(e){return D(e.target.value)},value:F}))),r.a.createElement("div",{className:"col-lg-6 col-md-6"},r.a.createElement("div",{className:"billing-info mb-20"},r.a.createElement("label",null,"Phone"),r.a.createElement("input",{type:"number",onChange:function(e){e.target.value.length<=10&&L(e.target.value)},value:I}))),r.a.createElement("div",{className:"col-lg-6 col-md-6"},r.a.createElement("div",{className:"billing-info mb-20"},r.a.createElement("label",null,"Email Address"),r.a.createElement("input",{type:"email",onChange:function(e){$(e.target.value)},value:B})))),r.a.createElement("div",{className:"additional-info-wrap"},r.a.createElement("h4",null,"Additional information"),r.a.createElement("div",{className:"additional-info"},r.a.createElement("label",null,"Order notes"),r.a.createElement("textarea",{placeholder:"Notes about your order, e.g. special notes for delivery. ",name:"message",onChange:function(e){W(e.target.value)},value:U}))))),r.a.createElement("div",{className:"col-lg-5"},r.a.createElement("div",{className:"your-order-area"},r.a.createElement("h3",null,"Your order"),r.a.createElement("div",{className:"your-order-wrap gray-bg-4"},r.a.createElement("div",{className:"your-order-product-info"},r.a.createElement("div",{className:"your-order-top"},r.a.createElement("ul",null,r.a.createElement("li",null,"Product"),r.a.createElement("li",null,"Total"))),r.a.createElement("div",{className:"your-order-middle"},r.a.createElement("ul",null,m.map((function(e,a){var t=e.discountedPrice,l=(e.price*o.currencyRate).toFixed(2),n=(t*o.currencyRate).toFixed(2);return O+=null!=t?n*e.quantity:l*e.quantity,r.a.createElement("li",{key:a},r.a.createElement("span",{className:"order-middle-left"},e.productName," X ",e.quantity)," ",r.a.createElement("span",{className:"order-price"},null!==t?o.currencySymbol+(n*e.quantity).toFixed(2):o.currencySymbol+(l*e.quantity).toFixed(2)))})))),r.a.createElement("div",{className:"your-order-bottom"},r.a.createElement("ul",null,r.a.createElement("li",{className:"your-order-shipping"},"Shipping"),r.a.createElement("li",null,"Free shipping"))),r.a.createElement("div",{className:"your-order-total"},r.a.createElement("ul",null,r.a.createElement("li",{className:"order-total"},"Total"),r.a.createElement("li",null,o.currencySymbol+O.toFixed(2))))),r.a.createElement("div",{className:"payment-method"})),r.a.createElement("div",{className:"place-order mt-25"},r.a.createElement("button",{onClick:function(){if(function(){var e=new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/),a=new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+\.[A-Za-z]+$/),t=new RegExp(/^[a-zA-Z0-9]+\.+[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/),l=[0,1,0,0,0,1],n=["Name","deliveryOption","Address","Phone Number","Email","Note"];k.trim().length>0&&(l[0]=1),"Pickup"!==w&&F.trim().length>0&&(l[2]=1),"Pickup"===w&&(l[2]=1),10===(I+"").length&&(l[3]=1),(e.test(B)||a.test(B)||t.test(B))&&(l[4]=1);for(var r=0;r<6;r++)if(0===l[r])return f("Please Write valid ".concat(n[r]),{appearance:"warning",autoDismiss:!0}),!1;return!0}()){var e={userID:a,name:k,address:F,phone:I,email:B,note:U,deliverOption:w,products:m,status:"PLACED"};v.a.post("".concat("http://localhost:9000/","placeOrder"),e).then((function(e){console.log(e),f("Order Placed Successfully",{appearance:"success",autoDismiss:!0}),P(""),D(""),W(""),L(""),$("");for(var a=0;a<m.length;a++)h({_id:m[a]._id,stock:m[a].stock-m[a].quantity});N(),X.push("/")}))}},className:"btn-hover"},"Place Order"))))):r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"item-empty-area text-center"},r.a.createElement("div",{className:"item-empty-area__icon mb-30"},r.a.createElement("i",{className:"pe-7s-cash"})),r.a.createElement("div",{className:"item-empty-area__text"},"No items found in cart to checkout ",r.a.createElement("br",null)," ",r.a.createElement(c.b,{to:"/"},"Shop Now")))))))))}))}}]);
//# sourceMappingURL=18.ea2d926b.chunk.js.map