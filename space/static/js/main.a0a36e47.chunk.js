(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,n){e.exports=n(248)},132:function(e,t,n){},242:function(e,t,n){},248:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"setConfig",function(){return _}),n.d(a,"setIssues",function(){return J}),n.d(a,"setIssue",function(){return R}),n.d(a,"setIssueAdd",function(){return F}),n.d(a,"setRepos",function(){return z});var o=n(0),r=n.n(o),s=n(56),c=n.n(s),l=(n(131),n(132),n(19)),i=n(20),u=n(25),d=n(24),h=n(26),m=n(31),f=n(35),p=n(112),g={config:{},pageTitle:"\u9996\u9875",user:[]},b=(Symbol("SET_CONFIG"),Symbol("GET_STATE"),Symbol("SET_ISSUE")),v=Symbol("SET_ISSUES"),y=(Symbol("SET_CLIENT"),Symbol("SET_REPOS"));var E=Object(f.c)({setIssue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.config,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return e.issue=t.data,Object.assign({},e);default:return e}},setIssues:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.config,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return e.issues=t.data,console.log("\u5f97\u5230",e,"data",t,t.type),Object.assign({},e);default:return e}}}),k=Object(f.d)(E,Object(f.a)(p.a)),I=n(120),w=n(36),j=n(253),C=n(250),O=n(254),S=n(122),x=n(123),T=n(124),A=n(62),B=n(63),M=n.n(B);function D(){var e=Object(A.a)(['\n    mutation CreateIssuePayload\n    {\n      createIssue(input:{repositoryId:"','", title: "','",body:" ','",labelIds: "','"}) {\n          issue{\n            id\n            number\n            title\n            bodyHTML\n            body\n            author{\n              login\n            }\n            createdAt\n            comments( ',") {\n              totalCount\n              edges{\n                node{\n                  bodyHTML\n                  author{\n                    login\n                  }\n                  reactions(content:HEART){\n                    totalCount\n                  }\n                  createdAt\n                }\n                cursor\n              }\n            }\n            reactions(content:HEART){\n              totalCount\n            }\n          }\n      }\n    }\n    "]);return D=function(){return e},e}function N(){var e=Object(A.a)(['\n        {\n          repository(owner: "','", name: "','") {\n              issue(',"){\n                id\n                number\n                title\n                bodyHTML\n                body\n                author{\n                  login\n                }\n                createdAt\n                comments( "," ",") {\n                  totalCount\n                  edges{\n                    node{\n                      bodyHTML\n                      author{\n                        login\n                      }\n                      reactions(content:HEART){\n                        totalCount\n                      }\n                      createdAt\n                    }\n                    cursor\n                  }\n                }\n                reactions(content:HEART){\n                  totalCount\n                }\n              }\n          }\n        }\n        "]);return N=function(){return e},e}function H(){var e=Object(A.a)(['\n        {\n          repository(owner: "','", name: "','") {\n              issues('," "," ",",orderBy:{field:CREATED_AT,direction:DESC}){\n                totalCount\n                pageInfo {\n                  endCursor\n                  startCursor\n                  hasNextPage\n                  hasPreviousPage\n                } \n                edges {\n                  node {\n                    id\n                    number\n                    title\n                    bodyHTML\n                    body\n                    author{\n                        login\n                    }\n                    createdAt\n                    comments {\n                     totalCount\n                    }\n                    reactions(content:HEART){\n                      totalCount\n                    }\n                  }\n                }\n              }\n          }\n        }\n        "]);return H=function(){return e},e}var q,L,P=function(){function e(t){Object(l.a)(this,e),this.owner=t.owner,this.name=t.name,this.labels=t.labels?',labels:"'.concat(t.labels,'"'):"",this.labelIds=t.labelIds?t.labelIds:"MDU6TGFiZWwxMzU2ODYzMTMz",this.repositoryId=t.repositoryId?t.repositoryId:"MDEwOlJlcG9zaXRvcnkxMjM4ODY3NzE=",this.graphql="",this.currentPage="first:10"}return Object(i.a)(e,[{key:"getIssues",value:function(e,t,n,a){return"next"===e?(t=t?"first:".concat(t):"",n=n?',after:"'.concat(n,'"'):""):(t=t?"last:".concat(t):"",n=n?',before:"'.concat(n,'"'):""),a=a?',labels:"'.concat(a,'"'):this.labels,console.log("gql set",a),M()(H(),this.owner,this.name,t,n,a)}},{key:"getIssue",value:function(e,t,n){return e="number:".concat(e),t=t?"first:".concat(t):"",n=n?',after:"'.concat(n,'"'):"",M()(N(),this.owner,this.name,e,t,n)}},{key:"setIssueAdd",value:function(e,t,n,a){if(t=t||"\u6ca1\u6709\u6807\u9898\u771f\u662f\u592a\u5947\u602a\u4e86",a=a||this.labelIds,n=n||this.repositoryId)return console.log(t,a,n,e),M()(D(),n,t,e,a,"first: 100");alert("\u9700\u8981\u4ed3\u5e93\u7684ID")}}]),e}(),_=function(e){var t=function(e){if(e){var t=e.token,n=new T.a({uri:"https://api.github.com/graphql",headers:{Authorization:"Bearer ".concat(t)}});return{client:new S.a({link:n,cache:new x.a}),repos:new P(e)}}}(e);q=t.client,L=t.repos},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=e.type||"next",a=e.first||10,o=e.after;q.query({query:L.getIssues(n,a,o)}).then(function(e){t({type:v,data:e.data.repository.issues})})}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=e.number||6,a=e.first||10,o=e.after;q.query({query:L.getIssue(n,a,o)}).then(function(e){var n=e.data.repository.issue;t({type:b,data:n})})}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){console.log("data",e);var n=e.content,a=e.title;q.mutate({mutation:L.setIssueAdd(n,a)}).then(function(e){console.log(e)})}},z=function(e,t,n){return function(e){e({type:y})}},G=J,U=F,V=R,W=function(e){function t(e){var n;Object(l.a)(this,t),n=Object(u.a)(this,Object(d.a)(t).call(this,e));var a=e.match.params,o=a.number?a.number:6;return n.state={msg:"msg hhh",number:o},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.setIssue,t=this.state.number;console.log("Post\u521d\u59cb\u5316",t),e({number:t})}},{key:"handleClick",value:function(){this.setState({msg:"msg\u4fee\u6539"}),console.log(this)}},{key:"render",value:function(){var e,t=this;if(this.props.state.setIssue.issue){var n=this.props.state.setIssue.issue;e=r.a.createElement(j.a,{className:"post-content"},r.a.createElement(j.a.Header,null,n.title),r.a.createElement(j.a.Title,null,n.createdAt),r.a.createElement(j.a.Body,{dangerouslySetInnerHTML:{__html:n.bodyHTML}}))}else e=r.a.createElement(j.a,null,"\u7b49\u7b49");return r.a.createElement(C.a,{className:"xx-space-post"},r.a.createElement(j.a,null,e),r.a.createElement(j.a,null,"\u653e\u8bc4\u8bba\u7684\u5730\u65b9"),r.a.createElement(O.a,{onClick:function(e){return t.handleClick(e)}},"Evernote"))}}]),t}(o.Component),Y=Object(m.b)(function(e){return console.log("state \u6620\u5c04",e),{state:e}},function(e,t){return{setIssue:function(t){e(V(t))}}})(W),K=n(251),X=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={message:"test",spaces:[]},console.log(e),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.setIssues;console.log("Home \u521d\u59cb\u5316"),e()}},{key:"handleClick",value:function(){alert("home")}},{key:"preClick",value:function(e,t){var n=this.props.setIssues,a={type:"previous"};a.after=t,console.log("\u8bbe\u7f6e\u4e0a\u4e00\u9875",a),n(a)}},{key:"nextClick",value:function(e,t){var n=this.props.setIssues,a=t;console.log("\u8bbe\u7f6e\u4e0b\u4e00\u9875",a),n({after:a})}},{key:"render",value:function(){var e,t=this,n="",a="",o="";if(this.props.state.setIssues.issues){var s=this.props.state.setIssues.issues,c=s.edges,l=s.pageInfo,i=s.totalCount;e=c.map(function(e,t){var n=new Date(e.node.createdAt);return r.a.createElement(j.a,{key:t},r.a.createElement(j.a.Header,null,e.node.title),r.a.createElement(j.a.Title,null,n.toLocaleString()),r.a.createElement(j.a.Body,{dangerouslySetInnerHTML:{__html:e.node.bodyHTML}}),r.a.createElement(j.a.Footer,null,e.node.reactions.totalCount,"|comments: ",e.node.comments.totalCount))}),l.hasPreviousPage&&(a=r.a.createElement(O.a,{onClick:function(e){return t.preClick(e,l.startCursor)}},"\u4e0a\u4e00\u9875")),l.hasNextPage&&(n=r.a.createElement(O.a,{onClick:function(e){return t.nextClick(e,l.endCursor)}},"\u4e0b\u4e00\u9875")),o=r.a.createElement("div",null,i)}else e=r.a.createElement(j.a,null,"\u8bf7\u9a9a\u7b49");return r.a.createElement(C.a,{className:"xx-space"},r.a.createElement(j.a,null,r.a.createElement(j.a.Body,null,e),r.a.createElement(K.a,null,a,n),r.a.createElement(j.a.Footer,null,o)))}}]),t}(o.Component),Z=Object(m.b)(function(e){return console.log("state \u6620\u5c04",e),{state:e}},function(e,t){return{setIssues:function(t){e(G(t))}}})(X),$=n(252),Q=n(61),ee=n(8),te=ee.n.fromJSON({object:"value",document:{object:"document",nodes:[{object:"block",type:"paragraph",nodes:[{object:"text",text:'The editor gives you full control over the logic you can add. For example, it\'s fairly common to want to add markdown-like shortcuts to editors. So that, when you start a line with "> " you get a blockquote that looks like this:'}]},{object:"block",type:"block-quote",nodes:[{object:"text",text:"A wise quote."}]},{object:"block",type:"paragraph",nodes:[{object:"text",text:'Order when you start a line with "## " you get a level-two heading, like this:'}]},{object:"block",type:"heading-two",nodes:[{object:"text",text:"Try it out!"}]},{object:"block",type:"paragraph",nodes:[{object:"text",text:'Try it out for yourself! Try starting a new line with ">", "-", or "#"s.'}]}]}}),ne=(r.a.Component,ee.n.fromJSON({document:{nodes:[{object:"block",type:"paragraph",nodes:[{object:"text",leaves:[{text:"\u771f\u662f\u5f00\u5fc3\u554a"}]}]}]}})),ae=function(e){function t(e){var n;Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).getType=function(e){switch(e){case"*":case"-":case"+":return"list-item";case">":return"block-quote";case"#":return"heading-one";case"##":return"heading-two";case"###":return"heading-three";case"####":return"heading-four";case"#####":return"heading-five";case"######":return"heading-six";default:return null}},n.onChangeTitle=function(e){var t=e.target.value;t!==n.state.title&&localStorage.setItem("title",t),n.setState({title:t})},n.onValueChange=function(e){var t=e.value;if(t.document!==n.state.value.document){var a=JSON.stringify(t.toJSON());localStorage.setItem("content",a)}n.setState({value:t})},n.onClickAddNewPost=function(){var e=n.props.setIssueAdd,t=JSON.stringify(n.state.value.document),a=JSON.parse(t).nodes.map(function(e,t){return e.nodes[0].text}).join("\\r\\n"),o={content:a,title:n.state.title};console.log(a),localStorage.removeItem("title"),localStorage.removeItem("content"),e(o)},n.renderBlock=function(e,t,n){var a=e.attributes,o=e.children;switch(e.node.type){case"block-quote":return r.a.createElement("blockquote",a,o);case"bulleted-list":return r.a.createElement("ul",a,o);case"heading-one":return r.a.createElement("h1",a,o);case"heading-two":return r.a.createElement("h2",a,o);case"heading-three":return r.a.createElement("h3",a,o);case"heading-four":return r.a.createElement("h4",a,o);case"heading-five":return r.a.createElement("h5",a,o);case"heading-six":return r.a.createElement("h6",a,o);case"list-item":return r.a.createElement("li",a,o);default:return n()}},n.onKeyDown=function(e,t,a){switch(e.key){case" ":return n.onSpace(e,t,a);case"Backspace":return n.onBackspace(e,t,a);case"Enter":return n.onEnter(e,t,a);default:return a()}},n.onSpace=function(e,t,a){var o=t.value,r=o.selection;if(r.isExpanded)return a();var s=o.startBlock,c=r.start,l=s.text.slice(0,c.offset).replace(/\s*/g,""),i=n.getType(l);return i?"list-item"===i&&"list-item"===s.type?a():(e.preventDefault(),t.setBlocks(i),"list-item"===i&&t.wrapBlock("bulleted-list"),void t.moveFocusToStartOfNode(s).delete()):a()},n.onBackspace=function(e,t,n){var a=t.value,o=a.selection;if(o.isExpanded)return n();if(0!==o.start.offset)return n();var r=a.startBlock;if("paragraph"===r.type)return n();e.preventDefault(),t.setBlocks("paragraph"),"list-item"===r.type&&t.unwrapBlock("bulleted-list")},n.onEnter=function(e,t,a){var o=t.value,r=o.selection,s=r.start,c=r.end;if(r.isExpanded)return a();var l=o.startBlock;return 0===s.offset&&0===l.text.length?n.onBackspace(e,t,a):c.offset!==l.text.length?a():"heading-one"!==l.type&&"heading-two"!==l.type&&"heading-three"!==l.type&&"heading-four"!==l.type&&"heading-five"!==l.type&&"heading-six"!==l.type&&"block-quote"!==l.type?a():(e.preventDefault(),void t.splitBlock().setBlocks("paragraph"))};var a=e.match.params,o=a.number?a.number:"new",s=new Date,c=Math.floor((s-1443365529298)/864e5),i=s.getDay(),h="\u4f20\u8bf4\u4e4b\u65c5".concat(c," ").concat(["\u661f\u671f\u5929","\u661f\u671f\u4e00","\u661f\u671f\u4e8c","\u661f\u671f\u4e09","\u661f\u671f\u56db","\u661f\u671f\u4e94","\u661f\u671f\u516d"][i]);return n.state={msg:"msg hhh",number:o,title:h,value:ne},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.setIssue,t=this.state.number;if("new"===t){var n=localStorage.getItem("title"),a=localStorage.getItem("conent");n&&this.setState({title:n}),a&&this.setState({content:a})}else e({number:t});console.log("Edit\u521d\u59cb\u5316",t)}},{key:"handleClick",value:function(){this.setState({msg:"msg\u4fee\u6539"}),console.log(this)}},{key:"render",value:function(){var e=this,t=r.a.createElement(O.a,{onClick:function(t){return e.onClickAddNewPost(t)}},"\u589e\u52a0");if(this.props.state.setIssue.issue)this.props.state.setIssue.issue;else r.a.createElement(j.a,null,"\u7b49\u7b49");return r.a.createElement(C.a,{className:"xx-space-Edit"},r.a.createElement(j.a,null,r.a.createElement(j.a,{className:"Edit-content"},r.a.createElement(j.a.Header,null,r.a.createElement($.a.Control,{type:"text",onChange:function(t){return e.onChangeTitle(t)},placeholder:"\u9898\u76ee",defaultValue:this.state.title})),r.a.createElement(j.a.Title,null,this.state.createdAt||(new Date).toLocaleString()),r.a.createElement(j.a.Body,null,r.a.createElement(Q.a,{placeholder:"hhh",value:this.state.value,onChange:this.onValueChange})),r.a.createElement(j.a.Footer,null,r.a.createElement(j.a,null,r.a.createElement(K.a,null,t))))))}}]),t}(o.Component),oe=Object(m.b)(function(e){return console.log("state \u6620\u5c04",e),{state:e}},function(e,t){return{setIssue:function(t){e(V(t))},setIssueAdd:function(t){e(U(t))}}})(ae),re=(n(242),{token:"2a4917fe31a289c29616b82047f0e03c8c1976a6",owner:"abearxiong",name:"abearxiong.github.io",labels:"xx-space"}),se=function(e){function t(e){var n;return Object(l.a)(this,t),n=Object(u.a)(this,Object(d.a)(t).call(this,e)),_(re),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(m.a,{store:k},r.a.createElement(I.a,null,r.a.createElement(w.d,null,r.a.createElement(w.b,{path:"/",exact:!0,component:Z}),r.a.createElement(w.b,{path:"/post/:number",component:Y}),r.a.createElement(w.b,{path:"/edit/:number",component:oe}),r.a.createElement(w.a,{to:"/"}))))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[126,1,2]]]);
//# sourceMappingURL=main.a0a36e47.chunk.js.map