(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{175:function(e,t,a){},187:function(e,t,a){},198:function(e,t,a){e.exports=a.p+"static/media/1.3ee16d09.md"},199:function(e,t,a){e.exports=a.p+"static/media/1cpp.204572dd.md"},200:function(e,t,a){e.exports=a.p+"static/media/1.2521b81c.md"},201:function(e,t,a){e.exports=a.p+"static/media/test1.75250e6a.md"},202:function(e,t,a){e.exports=a.p+"static/media/submit1.00ff6f5c.md"},203:function(e,t,a){e.exports=a.p+"static/media/1.1.7975c67a.md"},204:function(e,t,a){e.exports=a.p+"static/media/1.2.2fb15148.md"},205:function(e,t,a){e.exports=a.p+"static/media/1.3.6e3c73f9.md"},206:function(e,t,a){e.exports=a.p+"static/media/submit2.6911ec65.md"},207:function(e,t,a){e.exports=a.p+"static/media/2.1.5678c59a.md"},208:function(e,t,a){e.exports=a.p+"static/media/2.2.b73b0d59.md"},209:function(e,t,a){e.exports=a.p+"static/media/2.3.43882c71.md"},210:function(e,t,a){e.exports=a.p+"static/media/2.4.3c108c45.md"},211:function(e,t,a){e.exports=a.p+"static/media/2.5.b5633bde.md"},212:function(e,t,a){e.exports=a.p+"static/media/2.6.ab5cd2ce.md"},213:function(e,t,a){e.exports=a.p+"static/media/2.8c4ba10c.md"},214:function(e,t,a){e.exports=a.p+"static/media/2.20764833.md"},215:function(e,t,a){e.exports=a.p+"static/media/test2.00975d57.md"},216:function(e,t,a){e.exports=a.p+"static/media/submit3.d5d7a9ee.md"},217:function(e,t,a){e.exports=a.p+"static/media/3.1.1950e5d8.md"},218:function(e,t,a){e.exports=a.p+"static/media/3.2.f81870bd.md"},219:function(e,t,a){e.exports=a.p+"static/media/3.3.bcb764ca.md"},220:function(e,t,a){e.exports=a.p+"static/media/3.4.c1b2a76d.md"},221:function(e,t,a){e.exports=a.p+"static/media/3.5.2482fd50.md"},222:function(e,t,a){e.exports=a.p+"static/media/3.6.20e13ca8.md"},223:function(e,t,a){e.exports=a.p+"static/media/3.eab4de77.md"},224:function(e,t,a){e.exports=a.p+"static/media/3.c29e5ffa.md"},225:function(e,t,a){e.exports=a.p+"static/media/test3.c0f5c902.md"},228:function(e,t,a){e.exports=a.p+"static/media/founder.ab533aed.jpg"},230:function(e){e.exports={GOOGLE_CLIENT_ID:"905403463410-otbpoc8a6gvcmmg8dl9d3qbmd771tqtr.apps.googleusercontent.com"}},233:function(e,t,a){e.exports=a(480)},238:function(e,t,a){},258:function(e,t){},260:function(e,t){},436:function(e,t,a){},472:function(e,t,a){e.exports=a.p+"static/media/theme.77c2d2ac.png"},473:function(e,t,a){},476:function(e,t,a){},480:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(39),s=a.n(i),o=(a(238),a(8)),l=a(9),r=a(12),m=a(10),u=a(11),d=a(6),p=a(42),h=(a(245),a(123)),b=a.n(h),f=a(5),v=a(16),E=a.n(v),g=(a(356),a(78),a(83)),k=a.n(g),y=(a(109),a(110),a(191)),j=(a(108),a(364),a(365),a(366),a(367),a(368),a(369),a(370),a(371),a(372),a(373),a(63)),O=a.n(j),C=a(85),x=a.n(C),N=(a(160),a(14)),w=(a(161),a(127)),S=a.n(w),L=(a(433),a(175),a(436),a(128)),T=a.n(L),I=a(60),B=a.n(I),A=a(64),M=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).state={show:!1,judge:""},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.judge).then(function(e){return e.text()}).then(function(t){e.setState({judge:t})})}},{key:"componentDidUpdate",value:function(e,t){var a=this;e.judge!=this.props.judge&&fetch(this.props.judge).then(function(e){return e.text()}).then(function(e){a.setState({judge:e})})}},{key:"render",value:function(){var e=this,t=c.a.createElement(N.a,{onClick:function(){e.setState({show:!0})}},"this");return 1==this.props.bstate&&(t=c.a.createElement(N.a,{onClick:function(){e.setState({show:!0})},className:"btn-secondary",style:{marginLeft:"3%",marginBottom:"10px"}},"Test",this.props.index)),2==this.props.bstate&&(t=c.a.createElement(N.a,{onClick:function(){e.setState({show:!0})},className:"btn-success",style:{marginLeft:"3%",marginBottom:"10px"}},"O")),3==this.props.bstate&&(t=c.a.createElement(N.a,{onClick:function(){e.setState({show:!0})},className:"btn-danger",style:{marginLeft:"3%",marginBottom:"10px"}},"X")),c.a.createElement(c.a.Fragment,null,t,c.a.createElement(A.a,{size:"sm",show:this.state.show,onHide:function(){e.setState({show:!1})},"aria-labelledby":"example-modal-sizes-title-sm"},c.a.createElement(A.a.Header,{closeButton:!0},c.a.createElement(A.a.Title,{id:"example-modal-sizes-title-sm"},"Test ",this.props.index)),c.a.createElement(A.a.Body,null,this.state.judge)))}}]),t}(n.Component),z=a(197),F=a.n(z),D=function(){return c.a.createElement(F.a,{width:500,height:500})};(new Map).java=0;var _=["tomorrow","github","monokai","kuroir","twilight","xcode","textmate","solarized_light","solarized_dark","terminal"],G=["java"],P=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).state={mycode:"",status:0,output:"",loading:!1,summiting:!1,A:[],inputstate:!0,myinput:"",correct:!1,done:!1,theme:"solarized_light",mode:"java"},e.onchange=e.onchange.bind(Object(d.a)(Object(d.a)(e))),e.handleCompile=e.handleCompile.bind(Object(d.a)(Object(d.a)(e))),e.changeOutput=e.changeOutput.bind(Object(d.a)(Object(d.a)(e))),e.changeInput=e.changeInput.bind(Object(d.a)(Object(d.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(d.a)(Object(d.a)(e))),e.inputstateChange=e.inputstateChange.bind(Object(d.a)(Object(d.a)(e))),e.select=e.select.bind(Object(d.a)(Object(d.a)(e))),e.selectLan=e.selectLan.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this;e.code!=this.props.code&&fetch(this.props.content).then(function(e){return e.text()}).then(function(e){return a.setState({mycode:a.props.code,A:[],done:!1,output:""})})}},{key:"selectLan",value:function(e){this.setState({mode:e.value})}},{key:"select",value:function(e){this.setState({theme:e.value})}},{key:"inputstateChange",value:function(){var e=!this.state.inputstate;this.setState({inputstate:e})}},{key:"componentDidMount",value:function(){var e=this;fetch(this.props.judgecase[0]).then(function(e){return e.text()}).then(function(t){e.setState({mycode:e.props.code,myinput:t})})}},{key:"onchange",value:function(e){localStorage.setItem(this.props.name,e),this.setState({mycode:e})}},{key:"changeOutput",value:function(e){this.setState({output:e.target.value})}},{key:"changeInput",value:function(e){this.setState({myinput:e.target.value})}},{key:"handleCompile",value:function(){var e=this;this.setState({loading:!0}),B.a.post("https://frozen-atoll-01566.herokuapp.com/api/run",{lang:this.state.mode,code:this.state.mycode+this.props.test,input:this.state.myinput}).then(function(t){var a=t.data,n=parseInt(a.message.status);console.log(t),e.setState({status:n,output:a.message,loading:!1,inputstate:!1})})}},{key:"handleSubmit",value:function(){var e=this;this.setState({summiting:!0}),B.a.post("https://frozen-atoll-01566.herokuapp.com/api/submit",{lang:this.state.mode,code:this.state.mycode+this.props.submit}).then(function(t){var a=0,n=t.data,c=parseInt(n.message.status),i=n.message.split("\n"),s=!1,o=[],l=[],r=e.props.testcase;i.length<r&&(r=0);for(var m=i.length-1;m>=0;m--)0!=i[m].length&&(r>0?("t"==i[m].charAt(0)&&a++,o.push(i[m]),r--):l.push(i[m]));a==e.props.testcase?(s=!0,T()("Congratulation!").then(function(t){t&&e.setState({correct:!1})})):T()({text:"You are not YOUXIU enough!",icon:"warning",dangerMode:!0}),e.setState({status:c,output:l.reverse().join("\n"),summiting:!1,inputstate:!1,done:!0,A:o.reverse(),correct:s})})}},{key:"render",value:function(){var e=this,t=c.a.createElement(N.a,{className:"outline-primary"},c.a.createElement("i",{class:"fa fa-refresh fa-spin"})),a=c.a.createElement(N.a,{className:"btn-info",style:{marginLeft:"5%"}},c.a.createElement("i",{class:"fa fa-refresh fa-spin"}));this.state.inputstate?c.a.createElement(N.a,{className:"btn-success ",onClick:this.inputstateChange},"My output"):c.a.createElement(N.a,{className:"btn-success",onClick:this.inputstateChange},"Input");var n=c.a.createElement(O.a,null,c.a.createElement("textarea",{id:"textarea",className:"output",name:"code",type:"textarea",componentClass:"textarea",rows:"10",cols:"150",width:"30%",value:this.state.output,onChange:this.changeOutput,style:{backgroundColor:"#e6ffff"}}));this.state.inputstate&&(n=c.a.createElement(O.a,null,c.a.createElement("textarea",{id:"textarea",className:"output",name:"code",type:"textarea",componentClass:"textarea",rows:"10",cols:"150",width:"30%",style:{backgroundColor:"black",color:"white"},value:this.state.myinput,onChange:this.changeInput})));for(var i,s=[],o=0;o<this.props.testcase;o++)this.state.done?(null!=this.state.A[o]&&this.state.A[o].length>=1&&"t"==this.state.A[o].charAt(0)?s.push(c.a.createElement(M,{bstate:2,index:o,judge:this.props.judgecase[o]})):s.push(c.a.createElement(M,{bstate:3,index:o,judge:this.props.judgecase[o]})),o%6==0&&0!=o&&(s.push(c.a.createElement("br",null)),s.push(c.a.createElement("br",null)))):(s.push(c.a.createElement(M,{bstate:1,index:o,judge:this.props.judgecase[o]})),o%6==0&&0!=o&&(s.push(c.a.createElement("br",null)),s.push(c.a.createElement("br",null))));return this.state.loading||(t=this.state.summiting?c.a.createElement(N.a,{className:"outline-primary"},"Compile"):c.a.createElement(N.a,{className:"outline-primary",onClick:this.handleCompile},"Compile")),this.state.summiting||(a=this.state.loading?c.a.createElement(N.a,{className:"btn-info",style:{marginLeft:"5%"}},"Submit"):c.a.createElement(N.a,{className:"btn-info",style:{marginLeft:"5%"},onClick:this.handleSubmit},"Submit")),this.state.correct&&(i=c.a.createElement(D,null)),c.a.createElement("div",null,c.a.createElement(x.a,Object(y.a)({vertical:!0,primaryMinSize:75,percentage:!0},"primaryMinSize",60),c.a.createElement("div",null,i,s,c.a.createElement("br",null),c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(S.a,{options:_,onChange:this.select,value:this.state.theme}),c.a.createElement(S.a,{options:G,onChange:this.selectLan,value:this.state.mode})),c.a.createElement(k.a,{height:1e3,width:1200,mode:this.state.mode,theme:this.state.theme,name:"blah2",onChange:this.onchange,fontSize:14,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,value:this.state.mycode,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!1,showLineNumbers:!0,tabSize:2}})),c.a.createElement("div",null,c.a.createElement("button",{className:this.state.inputstate?"depressed":"",style:{margin:"5px",backgroundColor:"pink"},onClick:function(){e.setState({inputstate:!0})}},"Test"),c.a.createElement("button",{className:this.state.inputstate?"":"depressed",style:{margin:"5px",backgroundColor:"pink"},onClick:function(){e.setState({inputstate:!1})}},"Output"),c.a.createElement("hr",{style:{height:"2px",borderWidth:"0",color:"grey","background-color":"grey"}}),n,c.a.createElement("br",null),t,a)))}}]),t}(n.Component),U=(a(454),a(187),a(472),a(473),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).handleClick1=e.handleClick1.bind(Object(d.a)(Object(d.a)(e))),e.handleClick2=e.handleClick2.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleClick1",value:function(){this.props.history.push("/Leetcode-TutorialBlog/problems")}},{key:"handleClick2",value:function(){this.props.history.push("/Leetcode-TutorialBlog/course")}},{key:"render",value:function(){return c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"cols"},c.a.createElement("div",{className:"col",onClick:this.handleClick1},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"front"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"Interview Coding Practice"))),c.a.createElement("div",{className:"back"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"Practice the top popular coding interview question"))))),c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"front"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"Online Assesment"))),c.a.createElement("div",{className:"back"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"Mock online coding assesment"))))),c.a.createElement("div",{className:"col",onClick:this.handleClick2},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"front"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"Algorithm Crash Course"))),c.a.createElement("div",{className:"back"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"Video explanation with the most frequent use data structure and algorithm")))))))}}]),t}(n.Component)),q=Object(f.f)(U),R=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).handleClick=e.handleClick.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e){this.props.history.push("/Leetcode-TutorialBlog/problems")}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("header",null,c.a.createElement("div",{class:"overlay"},c.a.createElement("h1",null,"Welcome To 66 Code"),c.a.createElement("h3",null,"Prepare Your Coding Interview"),c.a.createElement("br",null),c.a.createElement("button",{onClick:this.handleClick},"About 66 Code")),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(q,null)),c.a.createElement("br",null),c.a.createElement("hr",{style:{height:"2px",borderWidth:"0",color:"grey","background-color":"grey"}}))}}]),t}(n.Component),W=Object(f.f)(R),H=a(198),J=a.n(H),Y=a(199),X=a.n(Y),V=a(200),$=a.n(V),K=a(201),Q=a.n(K),Z=a(202),ee=a.n(Z),te=a(203),ae=a.n(te),ne=a(204),ce=a.n(ne),ie=a(205),se=a.n(ie),oe=a(206),le=a.n(oe),re=a(207),me=a.n(re),ue=a(208),de=a.n(ue),pe=a(209),he=a.n(pe),be=a(210),fe=a.n(be),ve=a(211),Ee=a.n(ve),ge=a(212),ke=a.n(ge),ye=a(213),je=a.n(ye),Oe=a(214),Ce=a.n(Oe),xe=a(215),Ne=a.n(xe),we=a(216),Se=a.n(we),Le=a(217),Te=a.n(Le),Ie=a(218),Be=a.n(Ie),Ae=a(219),Me=a.n(Ae),ze=a(220),Fe=a.n(ze),De=a(221),_e=a.n(De),Ge=a(222),Pe=a.n(Ge),Ue=a(223),qe=a.n(Ue),Re=a(224),We=a.n(Re),He=a(225),Je=a.n(He),Ye=a(231),Xe=[[J.a,X.a],[Ce.a],[We.a]],Ve=[$.a,je.a,qe.a],$e=["Two Sum","Present From 66","Eating Chocolate"],Ke=[Q.a,Ne.a,Je.a],Qe=[ee.a,le.a,Se.a],Ze=[3,6,6],et=[[ae.a,ce.a,se.a],[me.a,de.a,he.a,fe.a,Ee.a,ke.a],[Te.a,Be.a,Me.a,Fe.a,_e.a,Pe.a]],tt=[[0],[0],[0],[0],[0],[1,2]],at=[0,1,2],nt=["\u2b50","\u2b50\u2b50","\u2b50\u2b50\u2b50"],ct=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).handleClick1=e.handleClick1.bind(Object(d.a)(Object(d.a)(e))),e.solve=e.solve.bind(Object(d.a)(Object(d.a)(e))),e.state={main:!0,categoryIndex:0,practiceMode:!1,index:0},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleClick1",value:function(e){this.props.mode1(),this.setState({categoryIndex:e})}},{key:"solve",value:function(e){this.props.mode2(),this.setState({index:e})}},{key:"render",value:function(){var e,t=this,a=c.a.createElement("div",{className:"wrapper"},c.a.createElement("h1",null,"Our Topics :"),c.a.createElement(O.a,null,c.a.createElement("div",{className:"cols"},c.a.createElement("div",{className:"col",onClick:function(){t.handleClick1(0)}},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"front"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"Arrays"))),c.a.createElement("div",{className:"back"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null))))),c.a.createElement("div",{className:"col",onClick:function(){t.handleClick1(1)}},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"front"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"List"))),c.a.createElement("div",{className:"back"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null))))),c.a.createElement("div",{className:"col",onClick:function(){t.handleClick1(2)}},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"front"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"Tree"))),c.a.createElement("div",{className:"back"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null)))))),c.a.createElement("div",{className:"cols"},c.a.createElement("div",{className:"col",onClick:function(){t.handleClick1(3)}},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"front"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"DFS"))),c.a.createElement("div",{className:"back"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null))))),c.a.createElement("div",{className:"col",onClick:function(){t.handleClick1(4)}},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"front"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"BFS"))),c.a.createElement("div",{className:"back"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null))))),c.a.createElement("div",{className:"col",onClick:function(){t.handleClick1(5)}},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"front"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"Math"))),c.a.createElement("div",{className:"back"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null))))))));if(1==this.props.mode){a="";var n=tt[this.state.categoryIndex];e=c.a.createElement("div",{style:{width:"75%"}},c.a.createElement(O.a,null,n.map(function(e){return c.a.createElement(Ye.a.Item,{action:!0,variant:"primary",key:e,style:{margin:"2%"},onClick:function(){t.solve(e)}},e+1," . ",$e[e]," ",nt[at[e]])})))}var i=this.state.index;return c.a.createElement("div",{className:"div"},2==this.props.mode?c.a.createElement(it,{content:Xe[i][0],description:Ve[i],name:$e[i],test:Ke[i],index:i,submit:Qe[i],testcase:Ze[i],input:et[i]}):[a,e])}}]),t}(n.Component),it=(n.Component,function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).state={markdown:"",editor:null,name:"Two Sum",description:"",test:"",submit:"",testcases:0,darktheme:!1},e.darkmode=e.darkmode.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"darkmode",value:function(){var e=this.state.darktheme;console.log(e),this.setState({darktheme:!e})}},{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem(this.props.name);null==t?fetch(this.props.content).then(function(e){return e.text()}).then(function(t){e.setState({markdown:t})}):this.setState({markdown:t}),fetch(this.props.description).then(function(e){return e.text()}).then(function(t){e.setState({description:t})}),fetch(this.props.test).then(function(e){return e.text()}).then(function(t){e.setState({test:t})}),fetch(this.props.submit).then(function(e){return e.text()}).then(function(t){e.setState({submit:t})})}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(e.content!=this.props.content){var n=localStorage.getItem(this.props.name);null==n?fetch(this.props.content).then(function(e){return e.text()}).then(function(e){a.setState({markdown:e})}):this.setState({markdown:n}),fetch(this.props.description).then(function(e){return e.text()}).then(function(e){a.setState({description:e})}),fetch(this.props.test).then(function(e){return e.text()}).then(function(e){a.setState({test:e})}),fetch(this.props.submit).then(function(e){return e.text()}).then(function(e){a.setState({submit:e})})}}},{key:"render",value:function(){this.state.markdown;return c.a.createElement("div",null,c.a.createElement("div",{style:{width:"95%","margin-left":"5%"}},c.a.createElement("div",{style:{margin:"3%",width:"45%"}},c.a.createElement(x.a,{primaryMinSize:35,percentage:!0},c.a.createElement("div",null,c.a.createElement("h2",{style:{width:"45%","margin-left":"45%"}}," ",this.props.name),c.a.createElement(b.a,{escapeHtml:!0,source:this.state.description})),c.a.createElement("div",{style:{width:"100%"}},c.a.createElement(P,{judgecase:this.props.input,testcase:this.props.testcase,code:this.state.markdown,test:this.state.test,submit:this.state.submit,name:this.props.name}),c.a.createElement("br",null))))))}}]),t}(n.Component)),st=Object(p.b)(function(e){return{mode:e.mode}},function(e){return{mode1:function(){return e({type:"mode1"})},mode2:function(){return e({type:"mode2"})}}})(Object(f.f)(ct)),ot=a(228),lt=a.n(ot),rt=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{class:"team-section text-center my-5"},c.a.createElement("h2",{class:"h1-responsive font-weight-bold my-5"},"Our amazing team"),c.a.createElement("div",{class:"row text-center"},c.a.createElement("div",{class:"col-md-4 mb-md-0 mb-5"},c.a.createElement("div",{class:"avatar mx-auto"},c.a.createElement("div",null,c.a.createElement("img",{src:lt.a,style:{height:"25%",width:"25%",borderRadius:"40%"}}))),c.a.createElement("h4",{class:"font-weight-bold dark-grey-text my-4"},"JunBin Liang"),c.a.createElement("h6",{class:"text-uppercase grey-text mb-3"},c.a.createElement("strong",null,"Founder and Software Engineer"))))))}}]),t}(n.Component),mt=(a(476),function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null)}}]),t}(n.Component)),ut=a(125),dt=a(52),pt=a(229),ht=a(230),bt=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).handleClick1=e.handleClick1.bind(Object(d.a)(Object(d.a)(e))),e.handleClick2=e.handleClick2.bind(Object(d.a)(Object(d.a)(e))),e.handleClick3=e.handleClick3.bind(Object(d.a)(Object(d.a)(e))),e.googleResponse=e.googleResponse.bind(Object(d.a)(Object(d.a)(e))),e.onFailure=e.onFailure.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onFailure",value:function(){}},{key:"googleResponse",value:function(e){console.log(e),B.a.post("http://localhost:8080/login",{code:e.tokenId}).then(function(e){console.log(e);var t=e.data.token,a=e.data.user;localStorage.setItem("token",t),console.log(t),console.log(a)})}},{key:"handleClick1",value:function(){this.props.history.push("/Leetcode-TutorialBlog/")}},{key:"handleClick2",value:function(){this.props.resetMode(),this.props.history.push("/Leetcode-TutorialBlog/problems")}},{key:"handleClick3",value:function(){this.props.history.push("/Leetcode-TutorialBlog/about")}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(ut.a,{bg:"dark",variant:"dark"},c.a.createElement(dt.a,{className:"mr-auto"},c.a.createElement(dt.a.Link,{onClick:this.handleClick1},"Home"),c.a.createElement(dt.a.Link,{onClick:this.handleClick2},"Problems"),c.a.createElement(dt.a.Link,{onClick:this.handleClick3},"About Us")),c.a.createElement(pt.GoogleLogin,{render:function(e){return c.a.createElement(dt.a.Link,{onClick:e.onClick,style:{color:"white"}},"Login")},clientId:ht.GOOGLE_CLIENT_ID,buttonText:"Login",onSuccess:this.googleResponse,onFailure:this.onFailure,style:{padding:0,margin:0}})))}}]),t}(n.Component),ft=Object(p.b)(function(e){return{}},function(e){return{resetMode:function(){return e({type:"reset"})},loginSuccess:function(){return e({type:"login"})}}})(Object(f.f)(bt)),vt=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("token");null!==e&&this.props.setToken(e)}},{key:"render",value:function(){return console.log("reducer token",this.props.token),c.a.createElement("div",null,c.a.createElement(ft,null),c.a.createElement(f.c,null,c.a.createElement(f.a,{exact:!0,path:"/Leetcode-TutorialBlog/",component:W}),c.a.createElement(f.a,{exact:!0,path:"/Leetcode-TutorialBlog/course",component:mt}),c.a.createElement(f.a,{exact:!0,path:"/Leetcode-TutorialBlog/problems",component:st}),c.a.createElement(f.a,{exact:!0,path:"/Leetcode-TutorialBlog/about",component:rt})))}}]),t}(n.Component),Et=Object(p.b)(function(e){return{token:e.token}},function(e){return{setToken:function(t){return e({type:"setToken",val:t})}}})(vt);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var gt=a(32),kt=a(84),yt={mode:0,isAuthenticated:!1,token:""},jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt,t=arguments.length>1?arguments[1]:void 0;return console.log(t.val),"reset"===t.type?{mode:0}:"mode1"===t.type?{mode:1}:"mode2"===t.type?{mode:2}:"login"===t.type?{isAuthenticated:!0}:"setToken"===t.type?{token:t.val}:e},Ot=Object(kt.b)(jt);s.a.render(c.a.createElement(gt.a,null,c.a.createElement(p.a,{store:Ot},c.a.createElement(Et,null))),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[233,2,1]]]);
//# sourceMappingURL=main.39f161c6.chunk.js.map