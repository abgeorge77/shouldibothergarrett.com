(window["webpackJsonpshouldibothergarrett.com"]=window["webpackJsonpshouldibothergarrett.com"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(7),i=n.n(s),o=(n(13),n(1)),l=n(2),u=n(4),c=n(3),h=n(5),m="",p=function(e){m=e},b=function(){return"definitely"===m},d=(n(14),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).submit=function(){p(n.state.inputText);var e=n.state.attemptsRemaining-1;b()?n.props.checkLogin():n.setState({incorrectPassword:!0,attemptsRemaining:e})},n.setInputText=function(e){n.setState({inputText:e.target.value})},n.state={inputText:"",incorrectPassword:!1,attemptsRemaining:4},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"login"},r.a.createElement("input",{className:"login__input",type:"text",placeholder:"Enter password here...",value:this.state.inputText,onChange:this.setInputText}),r.a.createElement("button",{className:"login__button",onClick:function(){return e.submit()}},"Submit"),this.state.incorrectPassword?r.a.createElement("h3",null,"Incorrect password, ",this.state.attemptsRemaining," attempts remaining."):null)}}]),t}(r.a.Component)),w={garrett:{answer:"Garrett can currently be found curled up in a ball on his office floor. Please stand by for updates."},singapore:{answer:"Garrett returned from Singapore on February 12th without any signs of Coronavirus infection. You still should not bother him though."},role:{answer:"Garrett doesn't know his role either. Feel free to ask Bob."},job:{answer:"Garrett doesn't know his role either. Feel free to ask Bob."},promotion:{answer:"Garrett doesn't know his role either. Feel free to ask Bob."},interoperability:{answer:"Interoperability is completely overrated. send data with floppy disks. Remember floppy disks... wow, the memories."},Catalyst:{answer:"Too busy to fix that BioData Catalyst problem because of the other BioData Catalyst problems, no."},abby:{answer:"Abby who?"},kittens:{answer:"Kittens are Garretts only true source of happiness. Bring him some. NOTE: He is seriously allergic, so also bring drugs."},access:{answer:"I am not the Data Access Committee so, no."},alex:{answer:"Leave the poor man alone, no."},bob:{answer:"Garrett never knows where Bob is. Bothering him would be fruitless."},buckets:{answer:"We're indexing data, please be patient. Ask Alessandro."},dcf:{answer:"I am not the Project Manager for DCF, no."},lunch:{answer:"I have not eaten lunch yet, please bother me!"},jira:{answer:"I hate tickets, no."},pfb:{answer:"PFB will change the world, but no."},AnVIL:{answer:"What is AnVIL? Why is AnVIL? These are the important questions."},STAGE:{answer:"Do you mean BioData Catalyst?"}},f=function(e){e=e.toLowerCase();var t=Object.keys(w).find(function(t){return e.includes(t)});return t?w[t].answer:null},g=(n(15),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).checkLogin=function(){n.setState({loggedIn:b()})},n.setInitialQuestion=function(e){n.setState({initialQuestion:e.target.value})},n.askInitialQuestion=function(){var e=f(n.state.initialQuestion);n.setState({initialAnswer:e||"What? "})},n.state={initialQuestion:"",initialAnswer:"",loggedIn:!1},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"app"},r.a.createElement("h1",null,"Should I Bother Garrett?"),this.state.loggedIn?r.a.createElement("div",{className:"app__initial-question-area"},r.a.createElement("textarea",{className:"app__textarea",placeholder:"Please type your question for Garrett here...",value:this.state.initialQuestion,onChange:this.setInitialQuestion}),r.a.createElement("button",{className:"app__button",onClick:function(){return e.askInitialQuestion()}},"Should I?"),r.a.createElement("h2",null,this.state.initialAnswer)):r.a.createElement(d,{checkLogin:this.checkLogin}))}}]),t}(r.a.Component));i.a.render(r.a.createElement(g,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.4da1490c.chunk.js.map