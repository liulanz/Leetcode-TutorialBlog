(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(t,e,a){t.exports=a.p+"static/media/1.3ee16d09.md"},106:function(t,e,a){t.exports=a.p+"static/media/1.2521b81c.md"},107:function(t,e,a){t.exports=a.p+"static/media/test1.ff7c0ecf.md"},108:function(t,e,a){t.exports=a.p+"static/media/submit1.9fa65f4d.md"},109:function(t,e,a){t.exports=a.p+"static/media/1.1.0e3da01e.md"},110:function(t,e,a){t.exports=a.p+"static/media/1.2.fc6921e6.md"},111:function(t,e,a){t.exports=a.p+"static/media/1.3.c51d0e5e.md"},115:function(t,e,a){t.exports=a(282)},120:function(t,e,a){},135:function(t,e){},137:function(t,e){},280:function(t,e,a){t.exports=a.p+"static/media/theme.77c2d2ac.png"},282:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(29),c=a.n(i),o=(a(120),a(19)),r=a(20),l=a(23),u=a(21),m=a(22),h=(a(122),a(57)),p=a.n(h),d=a(10),f=a.n(d),b=(a(238),a(54),a(41)),g=a.n(b),v=(a(55),a(56),a(6)),y=a(5),E=(a(88),a(42)),j=a.n(E),O=a(31),w=function(t){function e(){var t;return Object(o.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this))).state={show:!1,judge:""},t}return Object(m.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch(this.props.judge).then(function(t){return t.text()}).then(function(e){t.setState({judge:e})})}},{key:"render",value:function(){var t=this,e=s.a.createElement(y.a,{onClick:function(){t.setState({show:!0})}},"this");return 1==this.props.bstate&&(e=s.a.createElement(y.a,{onClick:function(){t.setState({show:!0})},className:"btn-secondary",style:{"margin-left":"3%"}},"Test",this.props.index)),2==this.props.bstate&&(e=s.a.createElement(y.a,{onClick:function(){t.setState({show:!0})},className:"btn-success",style:{"margin-left":"3%"}},"O")),3==this.props.bstate&&(e=s.a.createElement(y.a,{onClick:function(){t.setState({show:!0})},className:"btn-danger",style:{"margin-left":"3%"}},"X")),s.a.createElement(s.a.Fragment,null,e,s.a.createElement(O.a,{size:"sm",show:this.state.show,onHide:function(){t.setState({show:!1})},"aria-labelledby":"example-modal-sizes-title-sm"},s.a.createElement(O.a.Header,{closeButton:!0},s.a.createElement(O.a.Title,{id:"example-modal-sizes-title-sm"},"Test ",this.props.index)),s.a.createElement(O.a.Body,null,this.state.judge)))}}]),e}(n.Component),S=function(t){function e(){var t;return Object(o.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this))).state={mycode:"",status:0,output:"",loading:!1,summiting:!1,A:[],inputstate:!1,myinput:"",done:!1},t.onchange=t.onchange.bind(Object(v.a)(Object(v.a)(t))),t.handleCompile=t.handleCompile.bind(Object(v.a)(Object(v.a)(t))),t.changeOutput=t.changeOutput.bind(Object(v.a)(Object(v.a)(t))),t.changeInput=t.changeInput.bind(Object(v.a)(Object(v.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(v.a)(Object(v.a)(t))),t.inputstateChange=t.inputstateChange.bind(Object(v.a)(Object(v.a)(t))),t}return Object(m.a)(e,t),Object(r.a)(e,[{key:"componentDidUpdate",value:function(t,e){var a=this;t.code!=this.props.code&&fetch(this.props.content).then(function(t){return t.text()}).then(function(t){return a.setState({mycode:a.props.code})})}},{key:"inputstateChange",value:function(){var t=!this.state.inputstate;this.setState({inputstate:t})}},{key:"componentDidMount",value:function(){this.setState({mycode:this.props.code})}},{key:"onchange",value:function(t){this.setState({mycode:t})}},{key:"changeOutput",value:function(t){this.setState({output:t.target.value})}},{key:"changeInput",value:function(t){this.setState({myinput:t.target.value})}},{key:"handleCompile",value:function(){var t=this;this.setState({loading:!0}),j.a.post("https://frozen-atoll-01566.herokuapp.com/api/run",{lang:"java",code:this.state.mycode+this.props.test,input:this.state.myinput}).then(function(e){var a=e.data,n=parseInt(a.message.status);console.log(e),t.setState({status:n,output:a.message,loading:!1,inputstate:!1})})}},{key:"handleSubmit",value:function(){var t=this;this.setState({summiting:!0}),j.a.post("https://frozen-atoll-01566.herokuapp.com/api/submit",{lang:"java",code:this.state.mycode+this.props.submit}).then(function(e){var a=e.data,n=parseInt(a.message.status),s=a.message.split("\n");t.setState({status:n,output:a.message,summiting:!1,inputstate:!1,done:!0,A:s})})}},{key:"render",value:function(){var t=s.a.createElement(y.a,{className:"outline-primary"},s.a.createElement("i",{class:"fa fa-refresh fa-spin"})),e=s.a.createElement(y.a,{className:"btn-info",style:{margin:"5%"}},s.a.createElement("i",{class:"fa fa-refresh fa-spin"})),a="",n="";this.state.inputstate?(a=s.a.createElement(y.a,{className:"btn-success ",style:{margin:"5%"},onClick:this.inputstateChange},"My output"),n="Input Your Data please!"):(a=s.a.createElement(y.a,{className:"btn-success",style:{margin:"5%"},onClick:this.inputstateChange},"Input"),n="Here is Your Output!");var i=s.a.createElement("textarea",{className:"output",name:"code",type:"textarea",componentClass:"textarea",rows:"5",cols:"100",width:200,value:this.state.output,onChange:this.changeOutput});this.state.inputstate&&(i=s.a.createElement("textarea",{className:"output",name:"code",type:"textarea",componentClass:"textarea",rows:"5",cols:"100",width:200,value:this.state.myinput,onChange:this.changeInput}));for(var c=[],o=0;o<this.props.testcase;o++)this.state.done?(console.log(this.state.A),null!=this.state.A[o]&&this.state.A[o].length>=1&&"t"==this.state.A[o].charAt(0)?c.push(s.a.createElement(w,{bstate:2,index:o,judge:this.props.judgecase[o]})):c.push(s.a.createElement(w,{bstate:3,index:o,judge:this.props.judgecase[o]}))):c.push(s.a.createElement(w,{bstate:1,index:o,judge:this.props.judgecase[o]}));return this.state.loading||(t=this.state.summiting?s.a.createElement(y.a,{className:"outline-primary"},"Compile"):s.a.createElement(y.a,{className:"outline-primary",onClick:this.handleCompile},"Compile")),this.state.summiting||(e=this.state.loading?s.a.createElement(y.a,{className:"btn-info",style:{margin:"5%"}},"Submit"):s.a.createElement(y.a,{className:"btn-info",style:{margin:"5%"},onClick:this.handleSubmit},"Submit")),s.a.createElement("div",null,c,s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(g.a,{height:500,width:750,mode:"java",theme:"github",name:"blah2",onChange:this.onchange,fontSize:14,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,value:this.state.mycode,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!1,showLineNumbers:!0,tabSize:2}}),a,s.a.createElement("br",null),n,i,s.a.createElement("br",null),t,e)}}]),e}(n.Component),k=(a(263),a(280),a(105)),x=a.n(k),C=a(106),N=a.n(C),I=a(107),A=a.n(I),H=a(108),T=a.n(H),z=a(109),D=a.n(z),L=a(110),M=a.n(L),B=a(111),K=a.n(B),P=[[x.a,""]],J=[N.a],U=["Two Sum"],W=[A.a],Y=[T.a],q=[3],F=[[D.a,M.a,K.a]],G=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(X,null))}}]),e}(n.Component),X=function(t){function e(){var t;return Object(o.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this))).state={index:0,code:null,isHome:!0},t}return Object(m.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this,e=null;return this.state.isHome&&(e=s.a.createElement("h1",{style:{"margin-left":"35%"}},"My Coding Platform")),s.a.createElement("div",null,s.a.createElement(f.a,{onSelect:function(e){if("Leetcode"==e.split(" ")[0]){var a=parseInt(e.split(" ")[1]);t.setState({isHome:!1,index:a,code:s.a.createElement($,{content:P[a][0],description:J[a],name:U[a],test:W[a],index:a,submit:Y[a],testcase:q[a],input:F[a]})})}else t.setState({index:0,code:null,isHome:!0})}},s.a.createElement(f.a.Toggle,null),s.a.createElement(f.a.Nav,{defaultSelected:"home"},s.a.createElement(d.NavItem,{eventKey:"home"},s.a.createElement(d.NavIcon,null,s.a.createElement("i",{className:"fa fa-fw fa-home",style:{fontSize:"1.75em"}})),s.a.createElement(d.NavText,null,"Home")),s.a.createElement(d.NavItem,{eventKey:"Leetcode"},s.a.createElement(d.NavIcon,null,"Problems"),s.a.createElement(d.NavItem,{eventKey:"Leetcode 0"},s.a.createElement(d.NavText,null,"1. Two sum"))))),e,this.state.code)}}]),e}(n.Component),$=function(t){function e(){var t;return Object(o.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this))).state={markdown:"",editor:null,name:"Two Sum",description:"",test:"",submit:"",testcases:0},t}return Object(m.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch(this.props.content).then(function(t){return t.text()}).then(function(e){t.setState({markdown:e})}),fetch(this.props.description).then(function(t){return t.text()}).then(function(e){t.setState({description:e})}),fetch(this.props.test).then(function(t){return t.text()}).then(function(e){t.setState({test:e})}),fetch(this.props.submit).then(function(t){return t.text()}).then(function(e){t.setState({submit:e})})}},{key:"componentDidUpdate",value:function(t,e){var a=this;t.content!=this.props.content&&fetch(this.props.content).then(function(t){return t.text()}).then(function(t){return a.setState({markdown:t})})}},{key:"render",value:function(){this.state.markdown;return s.a.createElement("div",null,s.a.createElement("h2",{style:{width:"100%","margin-left":"45%"}},this.state.name),s.a.createElement("div",{style:{width:"100%","margin-left":"5%"},class:"code"},s.a.createElement("div",{style:{margin:"3%"}},s.a.createElement(p.a,{escapeHtml:!0,source:this.state.description}),s.a.createElement("br",null),s.a.createElement("br",null)),s.a.createElement("div",{style:{margin:"5%"}},s.a.createElement(S,{judgecase:this.props.input,testcase:this.props.testcase,code:this.state.markdown,test:this.state.test,submit:this.state.submit}),s.a.createElement("br",null))))}}]),e}(n.Component),Q=G;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(Q,null),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},88:function(t,e,a){}},[[115,2,1]]]);
//# sourceMappingURL=main.174a82c4.chunk.js.map