(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[9],{618:function(e,a,t){"use strict";var r=t(3),n=t(7),c=t(62),l=t.n(c),s=/-(.)/g;var i=t(0),o=t.n(i),m=t(83);t.d(a,"a",(function(){return u}));var d=function(e){return e[0].toUpperCase()+(a=e,a.replace(s,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function u(e,a){var t=void 0===a?{}:a,c=t.displayName,s=void 0===c?d(e):c,i=t.Component,u=void 0===i?"div":i,b=t.defaultProps,f=o.a.forwardRef((function(a,t){var c=a.className,s=a.bsPrefix,i=a.as,d=void 0===i?u:i,b=Object(n.a)(a,["className","bsPrefix","as"]),f=Object(m.b)(s,e);return o.a.createElement(d,Object(r.a)({ref:t,className:l()(c,f)},b))}));return f.defaultProps=b,f.displayName=s,f}},621:function(e,a,t){"use strict";var r=t(3),n=t(0),c=t.n(n),l=t(62),s=t.n(l);a.a=function(e){return c.a.forwardRef((function(a,t){return c.a.createElement("div",Object(r.a)({},a,{ref:t,className:s()(a.className,e)}))}))}},626:function(e,a,t){"use strict";var r=function(){};e.exports=r},635:function(e,a,t){e.exports=t.p+"static/media/1642594831254-768274791i1.d7376d9e.PNG"},636:function(e,a,t){e.exports=t.p+"static/media/1642672514514-555806003i7.77221100.PNG"},637:function(e,a,t){"use strict";var r=t(0),n=t.n(r),c=t(638),l=t(3),s=t(7),i=t(62),o=t.n(i),m=t(83),d=n.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.noGutters,c=e.as,i=void 0===c?"div":c,d=e.className,u=Object(s.a)(e,["bsPrefix","noGutters","as","className"]),b=Object(m.b)(t,"row");return n.a.createElement(i,Object(l.a)({ref:a},u,{className:o()(d,b,r&&"no-gutters")}))}));d.defaultProps={noGutters:!1};var u=d,b=["xl","lg","md","sm","xs"],f=n.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,c=e.as,i=void 0===c?"div":c,d=Object(s.a)(e,["bsPrefix","className","as"]),u=Object(m.b)(t,"col"),f=[],v=[];return b.forEach((function(e){var a,t,r,n=d[e];if(delete d[e],null!=n&&"object"===typeof n){var c=n.span;a=void 0===c||c,t=n.offset,r=n.order}else a=n;var l="xs"!==e?"-"+e:"";null!=a&&f.push(!0===a?""+u+l:""+u+l+"-"+a),null!=r&&v.push("order"+l+"-"+r),null!=t&&v.push("offset"+l+"-"+t)})),f.length||f.push(u),n.a.createElement(i,Object(l.a)({},d,{ref:a,className:o.a.apply(void 0,[r].concat(f,v))}))}));f.displayName="Col";var v=f,p=(t(626),t(204)),O=t(206),E=t(207),N=t(76),j=n.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.active,i=e.disabled,d=e.className,u=e.variant,b=e.action,f=e.as,v=e.eventKey,p=e.onClick,O=Object(s.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);t=Object(m.b)(t,"list-group-item");var j=Object(r.useCallback)((function(e){if(i)return e.preventDefault(),void e.stopPropagation();p&&p(e)}),[i,p]);return n.a.createElement(E.a,Object(l.a)({ref:a},O,{eventKey:Object(N.b)(v,O.href),as:f||(b?O.href?"a":"button":"div"),onClick:j,className:o()(d,t,c&&"active",i&&"disabled",u&&t+"-"+u,b&&t+"-action")}))}));j.defaultProps={variant:null,active:!1,disabled:!1},j.displayName="ListGroupItem";var h=j,y=n.a.forwardRef((function(e,a){var t,r=Object(p.a)(e,{activeKey:"onSelect"}),c=r.className,i=r.bsPrefix,d=r.variant,u=r.horizontal,b=r.as,f=void 0===b?"div":b,v=Object(s.a)(r,["className","bsPrefix","variant","horizontal","as"]);return i=Object(m.b)(i,"list-group"),t=u?!0===u?"horizontal":"horizontal-"+u:null,n.a.createElement(O.a,Object(l.a)({ref:a},v,{as:f,className:o()(c,i,d&&i+"-"+d,t&&i+"-"+t)}))}));y.defaultProps={variant:null,horizontal:null},y.displayName="ListGroup",y.Item=h;var g=y,x=n.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,c=e.fluid,i=e.rounded,d=e.roundedCircle,u=e.thumbnail,b=Object(s.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);t=Object(m.b)(t,"img");var f=o()(c&&t+"-fluid",i&&"rounded",d&&"rounded-circle",u&&t+"-thumbnail");return n.a.createElement("img",Object(l.a)({ref:a},b,{className:o()(r,f)}))}));x.displayName="Image",x.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1};var P=x,w=t(208),C=n.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.variant,c=e.size,i=e.active,d=e.className,u=e.block,b=e.type,f=e.as,v=Object(s.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),p=Object(m.b)(t,"btn"),O=o()(d,p,i&&"active",p+"-"+r,u&&p+"-block",c&&p+"-"+c);if(v.href)return n.a.createElement(w.a,Object(l.a)({},v,{as:f,ref:a,className:o()(O,v.disabled&&"disabled")}));a&&(v.ref=a),f||(v.type=b);var E=f||"button";return n.a.createElement(E,Object(l.a)({},v,{className:O}))}));C.displayName="Button",C.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"};var I=C,k=(t(635),t(636),t(6));t(44),a.a=function(e){var a=e.data,t=0;a.products.map((function(e){t+=e.discountedPrice*e.quantity}));var r="/Orderdetail/".concat(a._id);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement(c.a,{style:{padding:"1rem"}},n.a.createElement(u,null,n.a.createElement(v,{md:"5"},n.a.createElement(c.a.Title,null,"Order Status : ",a.status)),n.a.createElement(v,{md:"5"},n.a.createElement(c.a.Title,null,"Order Total :  ",t,"\u20b9"))),n.a.createElement(c.a.Body,null,n.a.createElement(g,{variant:"flush"},a.products.map((function(e,a){if(!(a>=2))return n.a.createElement(g.Item,null,n.a.createElement(u,null,n.a.createElement(v,null,n.a.createElement(P,{style:{height:"100px"},rounded:!0,fluid:!0,src:"http://localhost:9000/static/"+e.image})),n.a.createElement(v,null,n.a.createElement("h4",null,e.productName))))})),a.products.length>2&&n.a.createElement(g.Item,{className:"text-center"},"+",a.products.length-2," Items"),n.a.createElement(g.Item,{className:"text-center"},n.a.createElement(I,null,n.a.createElement(k.b,{style:{color:"white"},to:r},"View Details")))))))))}},638:function(e,a,t){"use strict";var r=t(3),n=t(7),c=t(62),l=t.n(c),s=t(0),i=t.n(s),o=t(83),m=t(618),d=t(621),u=t(205),b=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,s=e.variant,m=e.as,d=void 0===m?"img":m,u=Object(n.a)(e,["bsPrefix","className","variant","as"]),b=Object(o.b)(t,"card-img");return i.a.createElement(d,Object(r.a)({ref:a,className:l()(s?b+"-"+s:b,c)},u))}));b.displayName="CardImg",b.defaultProps={variant:null};var f=b,v=Object(d.a)("h5"),p=Object(d.a)("h6"),O=Object(m.a)("card-body"),E=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,m=e.bg,d=e.text,b=e.border,f=e.body,v=e.children,p=e.as,E=void 0===p?"div":p,N=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),j=Object(o.b)(t,"card"),h=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:j+"-header"}}),[j]);return i.a.createElement(u.a.Provider,{value:h},i.a.createElement(E,Object(r.a)({ref:a},N,{className:l()(c,j,m&&"bg-"+m,d&&"text-"+d,b&&"border-"+b)}),f?i.a.createElement(O,null,v):v))}));E.displayName="Card",E.defaultProps={body:!1},E.Img=f,E.Title=Object(m.a)("card-title",{Component:v}),E.Subtitle=Object(m.a)("card-subtitle",{Component:p}),E.Body=O,E.Link=Object(m.a)("card-link",{Component:"a"}),E.Text=Object(m.a)("card-text",{Component:"p"}),E.Header=Object(m.a)("card-header"),E.Footer=Object(m.a)("card-footer"),E.ImgOverlay=Object(m.a)("card-img-overlay");a.a=E},687:function(e,a,t){"use strict";t.r(a);var r=t(26),n=t(52),c=t(0),l=t.n(c),s=t(121),i=t.n(s),o=t(120),m=t(122),d=t(6),u=t(75),b=t.n(u),f=t(637),v=t(44),p=t(301),O=t(95);a.default=Object(v.connect)((function(e){return{ordersArray:e.ordersData.orders}}))((function(e){var a=e.user,t=e.isLogin,s=e.SetUserLogin,u=e.ordersArray,E=Object(c.useState)(u.reverse()),N=Object(r.a)(E,2),j=N[0],h=N[1],y=Object(c.useState)(!1),g=Object(r.a)(y,2),x=g[0],P=g[1],w=Object(v.useDispatch)();return Object(c.useEffect)((function(){a&&a._id&&(P(!0),b.a.post("".concat("http://localhost:9000/","getOrders"),{userID:a._id}).then((function(e){h(e.data),P(!1),Object(p.b)(e.data)(w)})))}),[a]),l.a.createElement(c.Fragment,null,l.a.createElement(i.a,null,l.a.createElement("title",null,"Flone | Orders "),l.a.createElement("meta",{name:"description",content:"Orders page of flone react minimalist eCommerce template."})),l.a.createElement(n.BreadcrumbsItem,{to:"/"},"Home"),l.a.createElement(n.BreadcrumbsItem,{to:"Orders"},"Orders"),l.a.createElement(m.a,{SetUserLogin:s,headerTop:"visible",isLogin:t},l.a.createElement(o.a,null),x&&l.a.createElement(O.a,null),l.a.createElement("div",{className:"cart-main-area pt-90 pb-100"},l.a.createElement("div",{className:"container"},0!==j.length?l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",{className:"cart-page-title"},"Your Orders "),j.map((function(e){return console.log(e),l.a.createElement(f.a,{key:e._id,data:e})}))):l.a.createElement("div",{className:"cart-main-area pt-90 pb-100"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"item-empty-area text-center"},l.a.createElement("div",{className:"item-empty-area__icon mb-30"},l.a.createElement("i",{className:"pe-7s-cart"})),l.a.createElement("div",{className:"item-empty-area__text"},"No Orders found ",l.a.createElement("br",null)," ",l.a.createElement(d.b,{to:"/"},"Shop Now")))))))))))}))}}]);
//# sourceMappingURL=9.a6fcb901.chunk.js.map