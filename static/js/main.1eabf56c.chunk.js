(this.webpackJsonpdyno=this.webpackJsonpdyno||[]).push([[0],[,function(e,a,t){e.exports={wrapper:"NavBar_wrapper__1xoU1",h3:"NavBar_h3__zIeIP",collapsingContainer:"NavBar_collapsingContainer__O0hCK",ul:"NavBar_ul__3C8JT",li:"NavBar_li__V35iz",h5:"NavBar_h5__1vOZq",a:"NavBar_a__T8Hwn",navBarButton:"NavBar_navBarButton__2MXyQ",menuIconContainer:"NavBar_menuIconContainer__2ZDNU",bar1:"NavBar_bar1__p_XyB",bar2:"NavBar_bar2__3dse1",bar3:"NavBar_bar3__bffzK",change:"NavBar_change__1n-Nk"}},,function(e,a,t){e.exports={wrapper:"Landing_wrapper__1vSKw",firstContainer:"Landing_firstContainer__2BIWg",firstRow:"Landing_firstRow__2Hbe1",secondRow:"Landing_secondRow__nK2q_",thirdRow:"Landing_thirdRow__2nGUN",fourthRow:"Landing_fourthRow__30EMa",fifthRow:"Landing_fifthRow__2ktgi",firstCol:"Landing_firstCol__1yTTS",firstP:"Landing_firstP__3Fn7o",secondCol:"Landing_secondCol__3gWvq",thirdCol:"Landing_thirdCol__1SWlg",fourthCol:"Landing_fourthCol__i1PUL",fifthCol:"Landing_fifthCol__2NoSI",sixthCol:"Landing_sixthCol__arLLF",seventhCol:"Landing_seventhCol__1BeVY",myPic:"Landing_myPic__21u8y",me:"Landing_me__2GMpC",secondContainer:"Landing_secondContainer__3KkEs"}},,,,,,function(e,a,t){e.exports={errorWrapper:"Error_errorWrapper__2PvK8",eRow:"Error_eRow__2VynC",eCol:"Error_eCol__3J5Hh",eh1:"Error_eh1__1wYNz",eh2:"Error_eh2__eHon5",eHomeButton:"Error_eHomeButton__32uWj"}},,,,,,,,,,,,,,,function(e,a,t){e.exports={wrapper:"EntryPoint_wrapper__1b-vD",techImage:"EntryPoint_techImage__3ttnf",container:"EntryPoint_container__2ObEt",button:"EntryPoint_button__2zsUt"}},,,,,function(e,a,t){e.exports={curvedDivWrapper:"About_curvedDivWrapper__1Zau-",curvedDiv:"About_curvedDiv__1K8Vq"}},,,,,function(e,a,t){e.exports=t.p+"static/media/MeDuh.56a7c0ec.JPG"},function(e,a,t){e.exports=t.p+"static/media/ConfettiEffectPic.f7c3f985.PNG"},function(e,a,t){e.exports=t.p+"static/media/CrackedFontPic.80694fb7.PNG"},function(e,a,t){e.exports=t.p+"static/media/InfiniteStarsPic.5f6c597c.PNG"},function(e,a,t){e.exports=t.p+"static/media/InfinityBoxPic.57f1125e.PNG"},function(e,a,t){e.exports=t.p+"static/media/RealWaterPic.ec7eea65.PNG"},,function(e,a,t){e.exports=t(55)},,,,,function(e,a,t){},,,,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(22),l=t.n(c),o=(t(46),t(11)),i=t(12),s=t(14),m=t(13),h=t(21),u=t(4),E=t(17),d=t(23),f=t.n(d),p=t(24),_=t.n(p),N=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:_.a.wrapper},r.a.createElement(f.a,{delay:1e3},r.a.createElement("div",{className:_.a.techImage},r.a.createElement(E.a,{className:_.a.container},r.a.createElement(f.a,{delay:2e3},r.a.createElement(h.b,{to:"/Landing"},r.a.createElement("button",{className:_.a.button},"Enter"))))))))}}]),t}(n.Component),v=t(8),g=t(6),y=t(25),C=t(40),w=t(1),b=t.n(w),B=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={open:!1,changeNavBar:!1},e.toggleCollapse=function(a){a.preventDefault(),e.setState({changeNavBar:!e.state.changeNavBar}),!1===e.state.open?e.setState({open:!0}):(e.state.open,e.setState({open:!1}))},e}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:b.a.wrapper},r.a.createElement(E.a,{className:b.a.navBarContainer},r.a.createElement(v.a,{className:b.a.row},r.a.createElement(g.a,{className:b.a.col},r.a.createElement("h3",{className:b.a.h3},"Jesse McKinney")),r.a.createElement(g.a,{className:b.a.col},r.a.createElement(y.a,{className:this.state.changeNavBar?"change":"",id:b.a.navBarButton,onClick:this.toggleCollapse,"aria-controls":"example-collapse-text","aria-expanded":this.state.open},r.a.createElement("div",{id:b.a.menuIconContainer},r.a.createElement("div",{className:b.a.bar1}),r.a.createElement("div",{className:b.a.bar2}),r.a.createElement("div",{className:b.a.bar3})))))),r.a.createElement(E.a,{className:b.a.collapsingContainer},r.a.createElement(C.a,{in:this.state.open},r.a.createElement("div",{id:"example-collapse-text",className:b.a.content},r.a.createElement(v.a,{className:b.a.navBarRow},r.a.createElement(g.a,{className:b.a.col},r.a.createElement("ul",{className:b.a.ul},r.a.createElement("li",{className:b.a.li},r.a.createElement("h5",{className:b.a.h5},r.a.createElement("a",{className:b.a.a,href:"#/action-1"},"The World Of React 1"))),r.a.createElement("li",{className:b.a.li},r.a.createElement("h5",{className:b.a.h5},r.a.createElement("a",{className:b.a.a,href:"#/action-2"},"The World Of React 2"))),r.a.createElement("li",{className:b.a.li},r.a.createElement("h5",{className:b.a.h5},r.a.createElement("a",{className:b.a.a,href:"#/action-3"},"The World Of React 3"))))),r.a.createElement(g.a,{className:b.a.col},r.a.createElement("ul",{className:b.a.ul},r.a.createElement("li",{className:b.a.li},r.a.createElement("h5",{className:b.a.h5},r.a.createElement("a",{className:b.a.a,href:"#/action-4"},"The World Of React 4"))),r.a.createElement("li",{className:b.a.li},r.a.createElement("h5",{className:b.a.h5},r.a.createElement("a",{className:b.a.a,href:"#/action-5"},"The World Of React 5"))),r.a.createElement("li",{className:b.a.li},r.a.createElement("h5",{className:b.a.h5},r.a.createElement("a",{className:b.a.a,href:"#/action-6"},"The World Of React 6"))))),r.a.createElement(g.a,{className:b.a.col},r.a.createElement("ul",{className:b.a.ul},r.a.createElement("li",{className:b.a.li},r.a.createElement("h5",{className:b.a.h5},r.a.createElement("a",{className:b.a.a,href:"#/action-7"},"The World Of React 7"))),r.a.createElement("li",{className:b.a.li},r.a.createElement("h5",{className:b.a.h5},r.a.createElement("a",{className:b.a.a,href:"#/action-8"},"The World Of React 8"))),r.a.createElement("li",{className:b.a.li},r.a.createElement("h5",{className:b.a.h5},r.a.createElement("a",{className:b.a.a,href:"#/action-9"},"The World Of React 9")))))))))))}}]),t}(n.Component),L=t(34),O=t.n(L),R=t(35),j=t.n(R),k=t(36),P=t.n(k),x=t(37),I=t.n(x),W=t(38),T=t.n(W),D=t(39),H=t.n(D),M=t(3),S=t.n(M),F=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:S.a.wrapper},r.a.createElement(B,null),r.a.createElement(E.a,{className:S.a.firstContainer},r.a.createElement(v.a,{className:S.a.firstRow},r.a.createElement(g.a,{className:S.a.firstCol},r.a.createElement("h2",{className:S.a.firstH2},"My Work: "),r.a.createElement("p",{className:S.a.firstP},"I look forward to each and every project I begin. Whether it is an assignment or a self-motivated project, I take both very seriously. From the starting snippet of code to the final finishing touches of a new app, each moment offers an opportunity for growth and improvement. Learning to design, build, and write code. Has been one of my biggest projects, to this day...")),r.a.createElement(g.a,{className:S.a.secondCol},r.a.createElement("img",{className:S.a.me,src:O.a,alt:"Jesse McKinney"})))),r.a.createElement(E.a,{className:S.a.secondContainer},r.a.createElement(v.a,{className:S.a.secondRow},r.a.createElement(v.a,{className:S.a.thirdRow},r.a.createElement("h1",null,"Animated Projects:")),r.a.createElement(g.a,{className:S.a.thirdCol},r.a.createElement("a",{href:"https://j-mckinney.github.io/ConfettiEffect/",className:S.a.a},r.a.createElement("img",{className:S.a.myPic,src:j.a,alt:"Confetti Effect"}))),r.a.createElement(g.a,{className:S.a.fourthCol},r.a.createElement("a",{href:"https://j-mckinney.github.io/CrackedFont/",className:S.a.a},r.a.createElement("img",{className:S.a.myPic,src:P.a,alt:"Cracked Effect"})))),r.a.createElement("br",null),r.a.createElement(v.a,{className:S.a.fourthRow},r.a.createElement(g.a,{className:S.a.fifthCol},r.a.createElement("a",{href:"https://j-mckinney.github.io/InfinityStars/",className:S.a.a},r.a.createElement("img",{className:S.a.myPic,src:I.a,alt:"Infinite Stars Effect"}))),r.a.createElement(g.a,{className:S.a.sixthCol},r.a.createElement("a",{href:"https://j-mckinney.github.io/InfinityBox/",className:S.a.a},r.a.createElement("img",{className:S.a.myPic,src:T.a,alt:"Infinity Box Effect"})))),r.a.createElement("br",null),r.a.createElement(v.a,{className:S.a.fifthRow},r.a.createElement(g.a,{className:S.a.seventhCol},r.a.createElement("a",{href:"https://j-mckinney.github.io/Realistic-Water-Effect/",className:S.a.a},r.a.createElement("img",{className:S.a.myPic,src:H.a,alt:"Realistic Water Effect"}))),r.a.createElement(g.a,{className:S.a.eigthCol},r.a.createElement("a",{href:"#-action",className:S.a.a},r.a.createElement("img",{className:S.a.myPic,src:"",alt:""}))))))}}]),t}(n.Component),A=t(29),G=t.n(A),K=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:G.a.curvedDivWrapper},r.a.createElement("div",{className:G.a.curvedDiv},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},r.a.createElement("path",{fill:"#333333",fillOpacity:"1",d:"M0,320L48,293.3C96,267,192,213,288,181.3C384,149,480,139,576,165.3C672,192,768,256,864,261.3C960,267,1056,213,1152,192C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"})),r.a.createElement("h1",null,"Jesse McKinney"),r.a.createElement("p",null),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},r.a.createElement("path",{fill:"#333333",fillOpacity:"1",d:"M0,320L48,293.3C96,267,192,213,288,181.3C384,149,480,139,576,165.3C672,192,768,256,864,261.3C960,267,1056,213,1152,192C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"})))))}}]),t}(n.Component),J=t(9),z=t.n(J),U=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:z.a.errorWrapper},r.a.createElement(E.a,{id:z.a.eCon},r.a.createElement(v.a,{id:z.a.eRow},r.a.createElement(g.a,{id:z.a.eCol},r.a.createElement("div",{id:z.a.eh1},"ERROR 1203499C0005\u0186B"))),r.a.createElement(v.a,{id:z.a.eRow},r.a.createElement("div",{id:z.a.eh2},"Well'p, now you did it. Broke the damn computer. You probably didn't even do anything major, did you? But see, I'm the dreaded Blue Screen of Death, and I pop up totally randomly, and most times, for no gah-darn reason.")),r.a.createElement(v.a,{id:z.a.eRow},r.a.createElement("div",{id:z.a.eh2},"You're probably sweatin' bullets right now, aren't you? I love it. So, there are a couple options you could try, neither of which will work whatsoever, but heck, be my guest.")),r.a.createElement(v.a,{id:z.a.eRow},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",{id:z.a.eh2},"Hit CTRL+ALT+DEL. This will restart me. But, everything you've done on me up until this point will be gone. Tough $H!T. But if you're into downloading weird online GIF's (which you are), I'm guessing this isn't a terrible option. Pervert.")),r.a.createElement("br",null),r.a.createElement("li",null,r.a.createElement("div",{id:z.a.eh2},"Don't hit CTRL+ALT+DEL and get on the phone with every computer repair guy in town. All of 'em. Give'em all a shot. It's fine. I'll wait. I ain't going anywhere. I can stay like this alllllllllll daaaaaaaayyyyyyyy...")))),r.a.createElement(v.a,null,r.a.createElement(f.a,{delay:18e3},r.a.createElement(h.b,{to:"/"},r.a.createElement(y.a,{id:z.a.eHomeButton},"Home")))))))}}]),t}(n.Component),Z=(t(54),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{basename:"/"},r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/Dyno",component:N}),r.a.createElement(u.a,{path:"/Landing",component:F}),r.a.createElement(u.a,{path:"/About",component:K}),r.a.createElement(u.a,{component:U}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[41,1,2]]]);
//# sourceMappingURL=main.1eabf56c.chunk.js.map