(this["webpackJsonpstore-project"]=this["webpackJsonpstore-project"]||[]).push([[0],{52:function(e,c,t){},53:function(e,c,t){},55:function(e,c,t){},85:function(e,c,t){"use strict";t.r(c);var s=t(0),i=t.n(s),a=t(13),r=t.n(a),n=(t(52),t(53),t(54),t(55),t(1)),l=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Header"})})},o=t(20),j=t(6),d=t(10),m=t(23),g=t(17),b=t(18),O=t(42),p=t.n(O),u=(t(77),t(78),t(39)),h=t.n(u),x=t(37),S=t.n(x),f=function(){var e=Object(b.c)((function(e){return e})).allProducts.products,c=Object(s.useState)(""),t=Object(g.a)(c,2),i=t[0],a=t[1],r=Object(s.useState)(),l=Object(g.a)(r,2),j=l[0],O=l[1],u=Object(s.useState)([]),x=Object(g.a)(u,2),f=x[0],v=x[1],y=Object(s.useState)(""),I=Object(g.a)(y,2),N=I[0],C=I[1],k=function(){if(""===i)return C(Object(n.jsx)("h2",{children:"Fill the search box first"}));""!==i&&e.filter((function(e){if(e.title.toLowerCase().includes(i.toLowerCase()))return e})).map((function(e){v((function(c){return[].concat(Object(m.a)(c),[e])})),O(f),f.splice(j)}))};return j?Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"container-fluid Section1 p-5",children:[Object(n.jsx)("h2",{children:"ProductListing"}),Object(n.jsxs)("div",{className:"searchBox",children:[Object(n.jsx)("input",{type:"text",placeholder:"Search Items",onChange:function(e){a(e.target.value)}}),Object(n.jsx)("span",{onClick:k,children:Object(n.jsx)(S.a,{})})]}),N,Object(n.jsx)("div",{className:"row",children:f.map((function(e,c){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"col-3",children:[Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("img",{className:"card-img img-fluid",src:e.imgSrc,alt:e.title}),Object(n.jsxs)("div",{style:{overflow:"hidden"},className:"card-img-overlay",children:[Object(n.jsx)("img",{className:"card-img",src:e.imgOverlay,alt:e.title}),Object(n.jsx)("div",{className:"card-img-overlay",children:Object(n.jsx)(o.b,{to:"/product/".concat(e.id),children:Object(n.jsx)("span",{style:{color:"white"},className:"card-icon",children:Object(n.jsx)(h.a,{onClick:function(){}})},c)})})]})]},e.id),Object(n.jsxs)("div",{className:"pt-3",children:[Object(n.jsx)("h6",{children:e.title}),Object(n.jsxs)("span",{children:["$",e.price]})]})]})})}))})]})}):Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"container-fluid Section1 p-5",children:[Object(n.jsx)("h2",{children:"ProductListing"}),Object(n.jsxs)("div",{className:"searchBox",children:[Object(n.jsx)("input",{type:"text",placeholder:"Search Items",onChange:function(e){a(e.target.value)}}),Object(n.jsx)("span",{onClick:k,children:Object(n.jsx)(S.a,{})})]}),N,Object(n.jsx)(p.a,Object(d.a)(Object(d.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),{},{children:e.map((function(e,c){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("img",{className:"card-img img-fluid",src:e.imgSrc,alt:e.title}),Object(n.jsxs)("div",{className:"card-img-overlay",children:[Object(n.jsx)("img",{className:"card-img",src:e.imgOverlay,alt:e.title}),Object(n.jsx)("div",{className:"card-img-overlay",children:Object(n.jsx)(o.b,{to:"/product/".concat(c),children:Object(n.jsx)("span",{style:{color:"white"},className:"card-icon",children:Object(n.jsx)(h.a,{onClick:function(){}})},c)})})]})]},c),Object(n.jsxs)("div",{className:"pt-3",children:[Object(n.jsx)("h6",{children:e.title}),Object(n.jsxs)("span",{children:["$",e.price]})]})]})}))}))]})})},v=t(31),y=t.n(v),I=t(30),N=t.n(I),C=t(99),k=t(98),T=t(100),w=function(){var e=Object(j.f)().productId,c=Object(b.c)((function(e){return e})),t=c.allProducts.products,a=c.allProducts.images,r=c.allProducts.size,l=t[e],m=t[e].id,O=a[e],p=Object(s.useState)(l.imgSrc),u=Object(g.a)(p,2),h=u[0],x=u[1],S=Object(s.useState)(r[0]),f=Object(g.a)(S,2),v=f[0],I=f[1],w=Object(b.b)(),L=l.title,P=l.price,E=function(e){x(e.target.src)},_=function(e){I(e.target.value),Number(v)},D=Object(s.useState)(0),F=Object(g.a)(D,2),z=F[0],B=F[1],A=Object(s.useState)(0),R=Object(g.a)(A,2),Y=R[0],$=R[1],M=i.a.useState(!1),U=Object(g.a)(M,2),X=U[0],H=U[1];function V(c){return Object(n.jsxs)(C.a,Object(d.a)(Object(d.a)({},c),{},{size:"md",centered:!0,children:[Object(n.jsx)(C.a.Header,{closeButton:!0,children:Object(n.jsx)(C.a.Title,{children:"Added to Cart"})}),Object(n.jsx)(C.a.Body,{children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-4",children:Object(n.jsx)("img",{className:"img-fluid",src:l.imgSrc})}),Object(n.jsxs)("div",{className:"col-8",children:[Object(n.jsx)("h6",{children:l.title}),Object(n.jsxs)("h6",{children:["Price : $",l.price]}),Object(n.jsx)(o.b,{to:"/product/cart/".concat(e),children:Object(n.jsx)(k.a,{variant:"success",children:"View Cart"})})]})]})})]}))}return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"container-fluid Detail",children:[Object(n.jsx)(V,{show:X,onHide:function(){return H(!1)}}),Object(n.jsxs)("div",{className:"row p-lg-5",children:[Object(n.jsx)("div",{className:"col-lg-6",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-lg-3 order-2 order-lg-1 left-section",children:[Object(n.jsx)("img",{onClick:E,className:"detailImages mx-3",src:O.imgSrc0}),Object(n.jsx)("img",{onClick:E,className:"detailImages mx-3",src:O.imgSrc1}),Object(n.jsx)("img",{onClick:E,className:"detailImages mx-3",src:O.imgSrc2}),Object(n.jsx)("img",{onClick:E,className:"detailImages mx-3",src:O.imgSrc3})]}),Object(n.jsx)("div",{className:"col-lg-9 order-1 order-lg-2 middle-section",children:Object(n.jsx)("div",{className:"card m-3 m-lg-0",children:Object(n.jsx)("img",{src:h,alt:l.title})})})]})}),Object(n.jsxs)("div",{className:"col-lg-6 p-5 pt-lg-0 order-2 right-section",children:[Object(n.jsx)("h5",{style:{fontSize:"1em",fontWeight:"bold"},children:l.title}),Object(n.jsxs)("h5",{style:{color:"gray",marginBottom:"30px"},children:["PRICE: ",l.price,"$/:"]}),Object(n.jsx)("p",{children:"Size Chart"}),Object(n.jsxs)("h6",{children:["SIZE: ",v]}),Object(n.jsx)("input",{type:"button",onClick:_,value:"40/6"}),Object(n.jsx)("input",{type:"button",onClick:_,value:"41/7"}),Object(n.jsx)("input",{type:"button",onClick:_,value:"42/8"}),Object(n.jsx)("input",{type:"button",onClick:_,value:"43/9"}),Object(n.jsx)("input",{type:"button",onClick:_,value:"44/10"}),Object(n.jsx)("input",{type:"button",onClick:_,value:"45/11"}),Object(n.jsxs)("div",{className:"AddtoCart",children:[Object(n.jsx)("h6",{className:"pt-4",children:"QUANTITY:"}),Object(n.jsxs)(T.a,{className:"pb-4",children:[Object(n.jsx)(T.a.Item,{onClick:function(){z>0?(B(z-1),$(Y-l.price)):alert("Item can't be less than 0")},children:Object(n.jsx)(N.a,{style:{color:"black"}})}),Object(n.jsx)(T.a.Item,{children:Object(n.jsx)("span",{style:{color:"black"},children:z})}),Object(n.jsx)(T.a.Item,{onClick:function(){z<10?(B(z+1),$(Y+l.price)):alert("You can't select more than 10 items")},children:Object(n.jsx)(y.a,{style:{color:"black"}})}),Object(n.jsx)(k.a,{variant:"dark",onClick:function(){z>0?(w({type:"ADD_TO_CART",payload:{shoeSize:v,totalPrice:Y,count:z,id:m,img:h,title:L,price:P}}),H(!0)):alert("You didn't select quantity of your item")},children:"Add to Cart"})]}),Object(n.jsxs)("h6",{style:{color:"gray",marginBottom:"30px"},children:["SUBTOTAL: $",Y]})]})]})]})]})})},L=t(45),P=t.n(L),E=function(){var e=Object(b.c)((function(e){return e.cartItems.responce})),c=Object(b.b)();return Object(n.jsxs)("div",{className:"shoppingCart",children:[Object(n.jsxs)("div",{className:"top_text",children:[Object(n.jsx)("h4",{children:"Your Shopping Cart"}),Object(n.jsx)("h6",{children:"Products / Your Cart"})]}),Object(n.jsxs)("div",{className:"row top_row",children:[Object(n.jsx)("div",{className:"col-12 col-sm-4",children:Object(n.jsx)("h6",{children:"Products"})}),Object(n.jsx)("div",{className:"col-sm-2 d-none d-sm-block",children:"Price"}),Object(n.jsx)("div",{className:"col-sm-2 d-none d-sm-block",children:"Quantity"}),Object(n.jsx)("div",{className:"col-sm-2 d-none d-sm-block",children:"Total Price"}),Object(n.jsx)("div",{className:"col-sm-2 d-none d-sm-block",children:"Remove"})]}),e.length>0?Object(n.jsx)(n.Fragment,{children:e.map((function(e){return Object(n.jsxs)("div",{className:"row product_row",children:[Object(n.jsx)("div",{className:"col-12 col-sm-4",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-6",children:Object(n.jsx)("img",{class:"img-fluid",src:e.img})}),Object(n.jsxs)("div",{className:"col-6 d-flex flex-column justify-content-center product",children:[Object(n.jsx)("h6",{children:e.title}),Object(n.jsx)("h6",{children:e.shoeSize})]})]})}),Object(n.jsxs)("div",{className:"col-3 col-sm-2 py-4 p-sm-0 d-flex flex-column justify-content-center price",children:["$",e.price]}),Object(n.jsx)("div",{className:"col-3 col-sm-2 py-4 p-sm-0 d-flex flex-column justify-content-center quantiy",children:Object(n.jsxs)(T.a,{size:"sm",className:"pagination",children:[Object(n.jsx)(T.a.Item,{onClick:function(){e.count>0?c({type:"DEC",payload:e.id}):alert("You can't remove less than 0 items")},children:Object(n.jsx)(N.a,{style:{color:"black",fontSize:"16px"}})}),Object(n.jsx)(T.a.Item,{children:Object(n.jsx)("span",{style:{color:"black"},children:e.count})}),Object(n.jsx)(T.a.Item,{onClick:function(){e.count<10?c({type:"INC",payload:e.id}):alert("You can't add more than 10 items")},children:Object(n.jsx)(y.a,{style:{color:"black",fontSize:"16px"}})})]})}),Object(n.jsxs)("div",{className:"col-3 col-sm-2 py-4 p-sm-0 d-flex flex-column justify-content-center totalPrice",children:["$",e.totalPrice]}),Object(n.jsx)("div",{className:"col-3 col-sm-2 py-4 p-sm-0 d-flex flex-column justify-content-center remove",children:Object(n.jsx)(P.a,{onClick:function(){c({type:"DELETE",payload:e.id})}})})]})}))}):"Cart is empty"]})};var _=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(o.a,{children:[Object(n.jsx)(l,{}),Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{exact:!0,path:"/",component:f}),Object(n.jsx)(j.a,{exact:!0,path:"/product/:productId",component:w}),Object(n.jsx)(j.a,{exact:!0,path:"/product/:productId/:cartId",component:E}),Object(n.jsx)(j.a,{children:"404 not found"})]})]})})},D=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,101)).then((function(c){var t=c.getCLS,s=c.getFID,i=c.getFCP,a=c.getLCP,r=c.getTTFB;t(e),s(e),i(e),a(e),r(e)}))},F=t(32),z={products:[{id:0,link:"Rustic-Leather-Loafers-For-Men",title:"Rustic Leather Loafers For Men",price:45,imgSrc:"/assets/Sec1Images/img1(i).jpg",imgOverlay:"/assets/Sec1Images/img1(ii).jpg"},{id:1,link:"Broad-Strap-Chappals-for-Men",title:"Broad Strap Chappals for Men",price:50,imgSrc:"/assets/Sec1Images/img2(i).jpg",imgOverlay:"/assets/Sec1Images/img2(ii).jpg"},{id:2,link:"Formal-Tassel-Loafer",title:"Formal Tassel Loafer",price:80,imgSrc:"/assets/Sec1Images/img3(i).jpg",imgOverlay:"/assets/Sec1Images/img3(ii).jpg"},{id:3,link:"Leather-Loafers",title:"Leather Loafers",price:100,imgSrc:"/assets/Sec1Images/img4(i).jpg",imgOverlay:"/assets/Sec1Images/img4(ii).jpg"},{id:4,link:"Formal-Suede-Loafers",title:"Formal Suede Loafers",price:70,imgSrc:"/assets/Sec1Images/img5(i).jpg",imgOverlay:"/assets/Sec1Images/img5(ii).jpg"},{id:5,link:"Leather-Tassel-Loafers",title:"Leather Tassel Loafers",price:149,imgSrc:"/assets/Sec1Images/img6(i).jpg",imgOverlay:"/assets/Sec1Images/img6(ii).jpg"}],images:[{id:0,imgSrc0:"/assets/Sec1Images/img1(i).jpg",imgSrc1:"/assets/Sec1Images/img1(ii).jpg",imgSrc2:"/assets/Sec1Images/img1(iii).jpg",imgSrc3:"/assets/Sec1Images/img1(iv).jpg"},{id:1,imgSrc0:"/assets/Sec1Images/img2(i).jpg",imgSrc1:"/assets/Sec1Images/img2(ii).jpg",imgSrc2:"/assets/Sec1Images/img2(iii).jpg",imgSrc3:"/assets/Sec1Images/img2(iv).jpg"},{id:2,imgSrc0:"/assets/Sec1Images/img3(i).jpg",imgSrc1:"/assets/Sec1Images/img3(ii).jpg",imgSrc2:"/assets/Sec1Images/img3(iii).jpg",imgSrc3:"/assets/Sec1Images/img3(iv).jpg"},{id:3,imgSrc0:"/assets/Sec1Images/img4(i).jpg",imgSrc1:"/assets/Sec1Images/img4(ii).jpg",imgSrc2:"/assets/Sec1Images/img4(iii).jpg",imgSrc3:"/assets/Sec1Images/img4(iv).jpg"},{id:4,imgSrc0:"/assets/Sec1Images/img5(i).jpg",imgSrc1:"/assets/Sec1Images/img5(ii).jpg",imgSrc2:"/assets/Sec1Images/img5(iii).jpg",imgSrc3:"/assets/Sec1Images/img5(iv).jpg"},{id:5,imgSrc0:"/assets/Sec1Images/img6(i).jpg",imgSrc1:"/assets/Sec1Images/img6(ii).jpg",imgSrc2:"/assets/Sec1Images/img6(iii).jpg",imgSrc3:"/assets/Sec1Images/img6(iv).jpg"}],size:["40/6","41/7","42/8","43/9","44/10","45/11"]},B={responce:[]},A=Object(F.a)({allProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,c=arguments.length>1?arguments[1]:void 0;c.type,c.payload;return e},cartItems:function(){var e,c,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case"ADD_TO_CART":var i=s.payload,a=i.id,r=i.img,n=i.title,l=i.price,o=i.shoeSize,j=i.totalPrice,g=i.count,b=t.responce.find((function(e){return e.id===s.payload.id}));return b?t:Object(d.a)(Object(d.a)({},t),{},{responce:[].concat(Object(m.a)(t.responce),[{id:a,img:r,title:n,price:l,shoeSize:o,totalPrice:j,count:g}])});case"INC":return e=t.responce.find((function(e){return e.id===s.payload})),c=t.responce.findIndex((function(e){return e.id===s.payload})),e.count+=1,e.totalPrice+=e.price,t.responce[c]=e,Object(d.a)(Object(d.a)({},t),{},{responce:Object(m.a)(t.responce)});case"DEC":return e=t.responce.find((function(e){return e.id===s.payload})),c=t.responce.findIndex((function(e){return e.id===s.payload})),e.count-=1,e.totalPrice-=e.price,t.responce[c]=e,Object(d.a)(Object(d.a)({},t),{},{responce:Object(m.a)(t.responce)});case"DELETE":var O=t.responce.filter((function(e){return e.id!==s.payload}));return Object(d.a)(Object(d.a)({},t),{},{responce:O});default:return t}}}),R=Object(F.b)(A,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(b.a,{store:R,children:Object(n.jsx)(_,{})})}),document.getElementById("root")),D()}},[[85,1,2]]]);
//# sourceMappingURL=main.2c0ef50b.chunk.js.map