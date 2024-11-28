import './polyfills.server.mjs';
import{a as V,b as H,c as j,f as z,l as Q}from"./chunk-V6ZUGPJL.mjs";import{$ as x,Aa as h,Ba as u,Ca as f,Da as n,Ea as v,G as y,H as k,M as _,P as b,R as S,Ua as A,W as m,X as g,Ya as T,fa as C,la as E,ma as P,na as M,pa as O,qa as R,va as e,wa as t,xa as l,ya as I,za as p}from"./chunk-FX5ZICBI.mjs";var J=["skillSet"],Y=["projects"],W=["experience"],K=["letsconnect"],X=["home"],D=(()=>{class c{constructor(){this.name="K.H.Vishwas",this.dob="16/05/1999",this.email="vishwasravali@gmail.com",this.linkedIn="https://www.linkedin.com/in/vishwas-k-h-bb6a98189/",this.gitHub="https://github.com/vishwas99",this.twitter="https://x.com/khvat99",this.projects=["Project 1","Project 2","Project 3"],this.skills=["Skill 1","Skill 2","Skill 3"],this.skillSetRef=new x(null)}ngOnInit(){}scrollToDiv(i){console.log("Scrolling to div",this.skillSetRef),i==="skillSet"?this.skillSetRef.nativeElement.scrollIntoView({behavior:"smooth",block:"start"}):i==="projects"?(console.log("Scrolling to project set"),this.projectsRef.nativeElement.scrollIntoView({behavior:"smooth",block:"start"})):i==="experience"?this.experienceRef.nativeElement.scrollIntoView({behavior:"smooth",block:"start"}):i==="letsconnect"?this.letsconnectRef.nativeElement.scrollIntoView({behavior:"smooth",block:"start"}):i==="home"&&this.homeRef.nativeElement.scrollIntoView({behavior:"smooth",block:"start"})}redirect(i){i=="linkedin"?window.open(this.linkedIn,"_blank"):i=="github"?window.open(this.gitHub,"_blank"):i=="mail"?window.open("mailto:"+this.email,"_blank"):i=="discord"?window.open("https://discord.com/channels/@me","_blank"):i=="Insta"?window.open("https://www.instagram.com/","_blank"):i=="twitter"&&window.open("https://twitter.com/","_blank")}static{this.\u0275fac=function(a){return new(a||c)}}static{this.\u0275cmp=b({type:c,selectors:[["app-home"]],viewQuery:function(a,r){if(a&1&&(h(J,5),h(Y,5),h(W,5),h(K,5),h(X,5)),a&2){let s;u(s=f())&&(r.skillSetRef=s.first),u(s=f())&&(r.projectsRef=s.first),u(s=f())&&(r.experienceRef=s.first),u(s=f())&&(r.letsconnectRef=s.first),u(s=f())&&(r.homeRef=s.first)}},standalone:!0,features:[v],decls:246,vars:0,consts:[["home",""],["skillSet",""],["projects",""],["experience",""],["letsconnect",""],[1,"container",2,"max-width","100%","padding","0px","overflow-x","hidden"],[1,"image-row","bg-overlay-home"],[2,"position","relative","z-index","9999"],[1,"row",2,"top","15%"],[1,"text-right",2,"padding-top","5%","padding-right","30%"],["type","button",1,"button-header","btn-sm",2,"margin-left","20px",3,"click"],[1,"row"],[1,"col-md-8",2,"padding-top","10%","padding-left","20%"],[2,"text-align","left","color","white"],[2,"text-align","left"],[2,"color","rgb(255, 255, 255)"],[2,"color","rgb(255, 255, 255)","font-weight","100"],[1,"col-md-4",2,"padding","0%"],["src","../../assets/images/my_pic_cropped.png","alt","MyPic",1,"my-img"],[2,"background-color","ghostwhite","padding-bottom","5%"],[1,"row",2,"padding-top","2%"],[1,"col-md-12"],[2,"text-align","center","color","black"],[1,"row",2,"margin-top","5%"],[1,"col-md-2",2,"margin-right","5%"],[1,"col-md-2","fadein"],["href","https://angular.io/","target","_blank"],["src","../../assets/images/icons/angular.png","alt","Angular","title","Angular",1,"logo-class"],["target","_blank",1,"col-md-2","fadein"],["href","#"],["src","../../assets/images/icons/html.png","alt","HTML5","title","HTML5",1,"logo-class"],["src","../../assets/images/icons/css.png","alt","CSS3","title","CSS3",1,"logo-class"],["href","https://www.typescriptlang.org/"],["src","../../assets/images/icons/typescript.png","alt","TypeScript","title","TypeScript",1,"logo-class"],["href","https://www.java.com/en/","target","_blank"],["src","../../assets/images/icons/java.png","alt","Java","title","Java",1,"logo-class"],["href","https://spring.io/","target","_blank"],["src","../../assets/images/icons/spring.png","alt","spring","title","spring",1,"logo-class"],["href","https://www.mysql.com/","target","_blank"],["src","../../assets/images/icons/sql.png","alt","SQL","title","SQL",1,"logo-class"],["href","https://kafka.apache.org/","target","_blank"],["src","../../assets/images/icons/kafka.png","alt","kafka","title","kafka",1,"logo-class"],["href","https://www.python.org/","target","_blank"],["src","../../assets/images/icons/python.png","alt","python","title","python",1,"logo-class"],["src","../../assets/images/icons/datascience.png","alt","datascience","title","datascience",1,"logo-class"],["href","https://www.docker.com/","target","_blank"],["src","../../assets/images/icons/docker.png","alt","docker","title","docker",1,"logo-class"],["href","https://www.elastic.co/elastic-stack","target","_blank"],["src","../../assets/images/icons/elk.svg","alt","elk","title","elk",1,"logo-class","fadein"],[1,"parallax-scqo","text-white","bg-overlay"],[1,"row",2,"padding-top","5%"],[2,"text-align","center","color","white","font-family","Verdana, Geneva, Tahoma, sans-serif","font-weight","200"],[1,"col-md-12","text-center",2,"font-weight","100"],[1,"col-md-6","text-left",2,"padding-left","10%"],[2,"opacity","1","width","80%"],[2,"padding-top","5%","font-size","smaller","font-weight","100"],[1,"col-md-6","rotated"],["src","../../assets/images/scqohomerotatey.png","alt","SCQO",1,"rotated",2,"height","auto","width","80%","background","transparent","position","relative","bottom","0%","right","0%"],[1,"parallax-casecat","text-white","bg-overlay-casecat"],["src","../../assets/images/smartmockups_casecat.jpeg","alt","SCQO",1,"rotated",2,"height","auto","width","80%","background","transparent","position","relative","bottom","0%","right","0%"],[1,"parallax-cqi","text-white","bg-overlay-cqi"],["src","../../assets/images/cqimockup.jpeg","alt","CQI",1,"rotated",2,"height","auto","width","80%","background","transparent","position","relative","bottom","0%","right","0%"],[1,"row",2,"padding-top","5%","padding-bottom","5%","background-color","rgb(255, 255, 240)"],[1,"career-header",2,"padding-bottom","2%"],[1,"text-center"],[1,"col"],["data-aos","fade-up",1,"timeline-steps","aos-init","aos-animate"],[1,"timeline-step"],["data-toggle","popover","data-trigger","hover","data-placement","top","title","","data-content","And here's some amazing content. It's very engaging. Right?","data-original-title","2003",1,"timeline-content"],[1,"inner-circle"],[1,"h6","mt-3","mb-1"],[1,"h6","text-muted","mb-0","mb-lg-0"],["data-toggle","popover","data-trigger","hover","data-placement","top","title","","data-content","And here's some amazing content. It's very engaging. Right?","data-original-title","2004",1,"timeline-content"],["data-toggle","popover","data-trigger","hover","data-placement","top","title","","data-content","And here's some amazing content. It's very engaging. Right?","data-original-title","2005",1,"timeline-content"],["data-toggle","popover","data-trigger","hover","data-placement","top","title","","data-content","And here's some amazing content. It's very engaging. Right?","data-original-title","2010",1,"timeline-content"],[1,"row","contact-row",2,"background-color","black","padding-top","5%"],[1,"col-md-3","contact-text",2,"margin-left","10%"],[1,"col-md-4","contact-email","text-left",2,"font-family","Arial, Helvetica, sans-serif","font-size","x-large","font-weight","200"],[1,"email-font",2,"font-family","'Courier New', Courier, monospace"],[1,"row",2,"background-color","black","padding-top","2%"],[1,"col-md-4"],[1,"col-md-1"],["src","../../assets/images/icons/linkedin.png","alt","LinkedIn","title","Linked In",1,"logo-class","clickable-image",3,"click"],["src","../../assets/images/icons/github.png","alt","Github","title","Github",1,"logo-class","clickable-image",3,"click"],["src","../../assets/images/icons/google.png","alt","Google","title","Google",1,"logo-class","clickable-image",3,"click"],["src","../../assets/images/icons/twitter.png","alt","twitter","title","twitter",1,"logo-class","clickable-image",3,"click"],[1,"row",2,"background-color","black","padding-top","1%","padding-bottom","5%","top","15%"],[1,"text-left",2,"padding-top","2%","padding-left","5%"],["type","button",1,"button-header","btn-sm",3,"click"],["type","button",1,"button-header","btn-sm",2,"margin-left","40px",3,"click"]],template:function(a,r){if(a&1){let s=I();e(0,"div",5)(1,"div",6)(2,"div",7,0)(4,"div",8)(5,"div",9)(6,"button",10),p("click",function(){return m(s),g(r.scrollToDiv("home"))}),n(7,"Home"),t(),e(8,"button",10),p("click",function(){return m(s),g(r.scrollToDiv("skillSet"))}),n(9,"My Skills"),t(),e(10,"button",10),p("click",function(){return m(s),g(r.scrollToDiv("projects"))}),n(11,"Projects"),t(),e(12,"button",10),p("click",function(){return m(s),g(r.scrollToDiv("experience"))}),n(13,"Experience"),t(),e(14,"button",10),p("click",function(){return m(s),g(r.scrollToDiv("letsconnect"))}),n(15,"Let's Connect"),t()()()(),e(16,"div")(17,"div",11)(18,"div",12)(19,"h4",13)(20,"span"),n(21," Hi There! I'm "),t()(),e(22,"h1",14)(23,"strong",15),n(24,"Vishwas K H,"),t()(),e(25,"h1",14)(26,"strong",15),n(27,"a Senior Software Engineer"),t()(),e(28,"h1",14)(29,"strong",15),n(30," @ Cisco, India"),t()(),e(31,"span",16),n(32," Building scalable and reliable software solutions for the modern web."),l(33,"br"),n(34," Shaping the future by creating smarter solutions using cutting edge technologies."),l(35,"br"),t()(),e(36,"div",17),l(37,"img",18),t()()()(),e(38,"div",19,1)(40,"div",20)(41,"div",21)(42,"h1",22)(43,"strong"),n(44,"Skillset"),t()()()(),e(45,"div",23)(46,"div",21)(47,"div",11),l(48,"div",24),e(49,"div",25)(50,"a",26),l(51,"img",27),t()(),e(52,"div",28)(53,"a",29),l(54,"img",30),t()(),e(55,"div",28),l(56,"img",31),t(),e(57,"div",28)(58,"a",32),l(59,"img",33),t()()()()(),e(60,"div",23)(61,"div",21)(62,"div",11),l(63,"div",24),e(64,"div",25)(65,"a",34),l(66,"img",35),t()(),e(67,"div",25)(68,"a",36),l(69,"img",37),t()(),e(70,"div",25)(71,"a",38),l(72,"img",39),t()(),e(73,"div",25)(74,"a",40),l(75,"img",41),t()()()()(),e(76,"div",23)(77,"div",21)(78,"div",11),l(79,"div",24),e(80,"div",25)(81,"a",42),l(82,"img",43),t()(),e(83,"div",25),l(84,"img",44),t(),e(85,"div",25)(86,"a",45),l(87,"img",46),t()(),e(88,"div",25)(89,"a",47),l(90,"img",48),t()()()()()(),e(91,"div",49,2)(93,"div",50)(94,"div",21)(95,"h1",51)(96,"strong"),n(97,"Supply Chain Quality Orchestration"),t()()()(),e(98,"div",20)(99,"div",52)(100,"span"),n(101," Here is some of my work in improving "),e(102,"b"),n(103,"Supply Chain Quality"),t(),n(104," I've worked on. "),t()()(),e(105,"div",50)(106,"div",53)(107,"span"),n(108,"Project"),t(),l(109,"hr",54),e(110,"div")(111,"span")(112,"b"),n(113,"SCQO Platform :"),t(),n(114," SCQO is an advanced workflow-centric platform designed to streamline and enhance the management and orchestration of product quality concerns across field and factory environments. "),t()(),e(115,"div",55)(116,"span"),n(117," SCQO provides real-time insights into quality metrics, allowing teams to pinpoint issues early and address them before they escalate. The tool fosters clear and timely communication among stakeholders, facilitating a collaborative approach to problem-solving and decision-making. With its ability to collect and analyze quality-related data, SCQO enables organizations to make informed decisions based on accurate and up-to-date information. "),t()()(),e(118,"div",56),l(119,"img",57),t()()(),e(120,"div",58)(121,"div",50)(122,"div",21)(123,"h1",51)(124,"strong"),n(125,"Case Categorisation"),t()()()(),e(126,"div",20)(127,"div",52)(128,"span"),n(129," Here is a case study on improving "),e(130,"b"),n(131,"Incident Handling"),t(),n(132," using data science and machine learning. "),t()()(),e(133,"div",50)(134,"div",53)(135,"span"),n(136,"Case Study"),t(),l(137,"hr",54),e(138,"div")(139,"span")(140,"b"),n(141,"Case Categorisation :"),t(),n(142," Leverage machine learning and data science to transform incident reports into actionable insights through predictive categorization and trend analysis. "),t()(),e(143,"div",55)(144,"span"),n(145," Utilizing advanced NLP tools like BERT for deep contextual understanding and LDA for topic modeling, we've enhanced incident report analysis to enable precise categorization, uncover underlying themes, and predict future trends with higher accuracy and granularity. this use case significantly improves decision-making through real-time, nuanced categorization of incidents, accelerates response times, and proactively shapes strategies by identifying patterns and predicting emerging issues within large datasets. "),t()()(),e(146,"div",56),l(147,"img",59),t()()(),e(148,"div",60)(149,"div",50)(150,"div",21)(151,"h1",51)(152,"strong"),n(153,"Connected Quality Insights"),t()()()(),e(154,"div",20)(155,"div",52)(156,"span"),n(157," Here is a dashboard about "),e(158,"b"),n(159,"Quality Insights"),t(),n(160," across multiple product lines and metrics "),t()()(),e(161,"div",50)(162,"div",53)(163,"span"),n(164,"Case Study"),t(),l(165,"hr",54),e(166,"div")(167,"span")(168,"b"),n(169,"CQI :"),t(),n(170," CQI provides an integrated dashboard solution for real-time quality insights, enhancing visibility and performance across all business units and entities. "),t()(),e(171,"div",55)(172,"span"),n(173," The CQI (Continuous Quality Improvement) dashboard is a sophisticated analytics platform designed to aggregate, visualize, and manage quality metrics from across various business units and entities within an organization. This tool serves as a central hub for quality assurance, offering detailed and high-level views tailored to the needs of different stakeholders. Configurable notifications for when quality metrics fall outside of acceptable ranges or thresholds. Utilization of historical data to forecast potential quality issues before they arise. "),t()()(),e(174,"div",56),l(175,"img",61),t()()(),e(176,"div",62,3)(178,"div",63)(179,"h1",64),n(180,"Experience"),t()(),e(181,"div",65)(182,"div",66)(183,"div",67)(184,"div",68),l(185,"div",69),e(186,"p",70),n(187,"2021, January"),t(),e(188,"p",71),n(189,"Software Engineering Intern @ Cisco "),t()()(),e(190,"div",67)(191,"div",72),l(192,"div",69),e(193,"p",70),n(194,"2022, August"),t(),e(195,"p",71),n(196,"Software Engineer @ Cisco "),t()()(),e(197,"div",67)(198,"div",73),l(199,"div",69),e(200,"p",70),n(201,"2023, August"),t(),e(202,"p",71),n(203,"Software Engineer 2 @ Cisco "),t()()(),e(204,"div",67)(205,"div",74),l(206,"div",69),e(207,"p",70),n(208,"Now"),t(),e(209,"p",71),n(210,"Senior Software Engineer @ Cisco "),t()()()()()(),e(211,"div",null,4)(213,"div",75)(214,"div",76)(215,"span"),n(216,"Feel free to hit me up. I'm looking forward to hearing from you."),t()(),e(217,"div",77)(218,"span"),n(219,"Reach me at "),l(220,"br"),e(221,"span",78),n(222,"vishwasravali@gmail.com"),t()()()(),e(223,"div",79),l(224,"div",80),e(225,"div",81)(226,"img",82),p("click",function(){return m(s),g(r.redirect("linkedin"))}),t()(),e(227,"div",81)(228,"img",83),p("click",function(){return m(s),g(r.redirect("github"))}),t()(),e(229,"div",81)(230,"img",84),p("click",function(){return m(s),g(r.redirect("mail"))}),t()(),e(231,"div",81)(232,"img",85),p("click",function(){return m(s),g(r.redirect("twitter"))}),t()(),l(233,"div",80),t(),e(234,"div",86),l(235,"div",80),e(236,"div",80)(237,"div",87)(238,"button",88),p("click",function(){return m(s),g(r.scrollToDiv("home"))}),n(239,"Home"),t(),e(240,"button",89),p("click",function(){return m(s),g(r.scrollToDiv("skillSet"))}),n(241,"My Skills"),t(),e(242,"button",89),p("click",function(){return m(s),g(r.scrollToDiv("projects"))}),n(243,"Projects"),t(),e(244,"button",89),p("click",function(){return m(s),g(r.scrollToDiv("experience"))}),n(245,"Experience"),t()()()()()()}},styles:['.img-fluid[_ngcontent-%COMP%]{width:100%;height:50%;object-fit:cover;overflow-x:hidden}.text-center[_ngcontent-%COMP%]{top:10%;left:50%;transform:translate(-50%,-50%)}.my-img[_ngcontent-%COMP%]{height:auto!important;width:70%!important;background:transparent!important;position:relative!important;bottom:15%!important}.image-row[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;background-image:url("./media/home-bg3-WYJ2TH34.jpeg");background-size:cover;background-position:center}.image-text[_ngcontent-%COMP%]{color:#fff;font-size:1em;padding:20px;text-align:left}.button-header[_ngcontent-%COMP%]{appearance:none;background-color:transparent;border:2px #1A1A1A;border-radius:15px;box-sizing:border-box;color:#fff;cursor:pointer;display:inline-block;font-family:Roobert,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;font-size:16px;font-weight:450;line-height:normal;margin:0;font-style:"block";min-width:0;outline:none;text-align:center;text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:manipulation;will-change:transform}.button-header[_ngcontent-%COMP%]:disabled{pointer-events:none}.button-header[_ngcontent-%COMP%]:active{box-shadow:none;transform:translateY(0)}.logo-class[_ngcontent-%COMP%]{height:auto;width:30%;background:#fff;object-fit:contain;margin-right:20%}.fadein[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{opacity:1;transition:1s ease}.fadein[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{opacity:.5;transition:1s ease}.parallax-scqo[_ngcontent-%COMP%]{min-height:800px;position:relative}.parallax-scqo[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background-image:url("./media/supplychain-RUKYEPG6.jpeg");background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover;z-index:-1}.parallax-casecat[_ngcontent-%COMP%]{min-height:800px;position:relative}.parallax-casecat[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background-image:url("./media/casecategorisation-SWG3SJGD.jpeg");background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover;z-index:-1}.parallax-cqi[_ngcontent-%COMP%]{min-height:800px;position:relative}.parallax-cqi[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background-image:url("./media/cqibg-6RSGPBHG.jpeg");background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover;z-index:-1}.text-white[_ngcontent-%COMP%]{color:#fff;text-align:center!important;position:relative}.bg-overlay[_ngcontent-%COMP%]{background-color:transparent;background-image:linear-gradient(300deg,#002842e6,#00101ae6)}.bg-overlay-casecat[_ngcontent-%COMP%]{background-color:transparent;background-image:linear-gradient(300deg,#420022e6,#17001be6)}.bg-overlay-cqi[_ngcontent-%COMP%]{background-color:transparent;background-image:linear-gradient(300deg,#015eabfe,#17001be6)}.bg-overlay-home[_ngcontent-%COMP%]{background-color:transparent;background-image:linear-gradient(120deg,#000000fe,#3d3d3de6)}.line[_ngcontent-%COMP%]{content:"";display:block;width:100%;height:1px;background:#000;margin-top:10px}.rotated[_ngcontent-%COMP%]{transform:rotateY(0,1,0,30deg);background-color:transparent}.contact-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;background-color:#000;padding-top:10%}.contact-text[_ngcontent-%COMP%]{text-align:left;font-size:x-large;font-weight:200;font-family:Arial,Helvetica,sans-serif;color:#fff;word-wrap:break-word}.contact-email[_ngcontent-%COMP%]{text-align:center;color:#fff}.top[_ngcontent-%COMP%]{display:inline-block;width:4em;height:4em;border:.5em solid #333;border-radius:50%;margin-right:.75em}.top[_ngcontent-%COMP%]:after{content:"";display:inline-block;margin-top:1.4em;width:1.4em;height:1.4em;border-top:.5em solid #333;border-right:.5em solid #333;-moz-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.timeline-steps[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-wrap:wrap}.timeline-steps[_ngcontent-%COMP%]   .timeline-step[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;position:relative;margin:1rem}@media (min-width:768px){.timeline-steps[_ngcontent-%COMP%]   .timeline-step[_ngcontent-%COMP%]:not(:last-child):after{content:"";display:block;border-top:.25rem dotted #3b82f6;width:3.46rem;position:absolute;left:7.5rem;top:.3125rem}.timeline-steps[_ngcontent-%COMP%]   .timeline-step[_ngcontent-%COMP%]:not(:first-child):before{content:"";display:block;border-top:.25rem dotted #3b82f6;width:3.8125rem;position:absolute;right:7.5rem;top:.3125rem}}.timeline-steps[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]{width:10rem;text-align:center}.timeline-steps[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .inner-circle[_ngcontent-%COMP%]{border-radius:1.5rem;height:1rem;width:1rem;display:inline-flex;align-items:center;justify-content:center;background-color:#3b82f6}.timeline-steps[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .inner-circle[_ngcontent-%COMP%]:before{content:"";background-color:#3b82f6;display:inline-block;height:3rem;width:3rem;min-width:3rem;border-radius:6.25rem;opacity:.5}.career-header[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-left:5%}.row-connect[_ngcontent-%COMP%]{display:flex;justify-content:center}.clickable-image[_ngcontent-%COMP%]{cursor:pointer}']})}}return c})();var F=(()=>{class c{constructor(){this.title="minerva"}static{this.\u0275fac=function(a){return new(a||c)}}static{this.\u0275cmp=b({type:c,selectors:[["app-root"]],standalone:!0,features:[v],decls:1,vars:0,template:function(a,r){a&1&&l(0,"app-home")},dependencies:[D]})}}return c})();var L=[];var Z="@",$=(()=>{class c{constructor(i,a,r,s,d){this.doc=i,this.delegate=a,this.zone=r,this.animationType=s,this.moduleImpl=d,this._rendererFactoryPromise=null,this.scheduler=_(P,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-HQQCUOOK.mjs")).catch(a=>{throw new y(5300,!1)}).then(({\u0275createEngine:a,\u0275AnimationRendererFactory:r})=>{this._engine=a(this.animationType,this.doc,this.scheduler);let s=new r(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(i,a){let r=this.delegate.createRenderer(i,a);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let s=new w(r);return a?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(d=>{let B=d.createRenderer(i,a);s.use(B)}).catch(d=>{s.use(r)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(a){E()}}static{this.\u0275prov=k({token:c,factory:c.\u0275fac})}}return c})(),w=class{constructor(o){this.delegate=o,this.replay=[],this.\u0275type=1}use(o){if(this.delegate=o,this.replay!==null){for(let i of this.replay)i(o);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(o,i){return this.delegate.createElement(o,i)}createComment(o){return this.delegate.createComment(o)}createText(o){return this.delegate.createText(o)}get destroyNode(){return this.delegate.destroyNode}appendChild(o,i){this.delegate.appendChild(o,i)}insertBefore(o,i,a,r){this.delegate.insertBefore(o,i,a,r)}removeChild(o,i,a){this.delegate.removeChild(o,i,a)}selectRootElement(o,i){return this.delegate.selectRootElement(o,i)}parentNode(o){return this.delegate.parentNode(o)}nextSibling(o){return this.delegate.nextSibling(o)}setAttribute(o,i,a,r){this.delegate.setAttribute(o,i,a,r)}removeAttribute(o,i,a){this.delegate.removeAttribute(o,i,a)}addClass(o,i){this.delegate.addClass(o,i)}removeClass(o,i){this.delegate.removeClass(o,i)}setStyle(o,i,a,r){this.delegate.setStyle(o,i,a,r)}removeStyle(o,i,a){this.delegate.removeStyle(o,i,a)}setProperty(o,i,a){this.shouldReplay(i)&&this.replay.push(r=>r.setProperty(o,i,a)),this.delegate.setProperty(o,i,a)}setValue(o,i){this.delegate.setValue(o,i)}listen(o,i,a){return this.shouldReplay(i)&&this.replay.push(r=>r.listen(o,i,a)),this.delegate.listen(o,i,a)}shouldReplay(o){return this.replay!==null&&o.startsWith(Z)}};function G(c="animations"){return O("NgAsyncAnimations"),S([{provide:M,useFactory:(o,i,a)=>new $(o,i,a,c),deps:[T,V,R]},{provide:C,useValue:c==="noop"?"NoopAnimations":"BrowserAnimations"}])}var N={providers:[Q(L),j(),G()]};var ee={providers:[z()]},U=A(N,ee);var te=()=>H(F,U),Ee=te;export{Ee as a};