(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),o=a.n(s),i=(a(15),a(8)),c=a(1),l=a(2),m=a(4),d=a(3),u=a(5),h=(a(17),function(){return r.a.createElement("section",{className:"hero is-primary"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("h1",{className:"title has-text-centered is-uppercase has-text-weight-bold is-size-1"},"To Do's")))}),g=function(e){var t=e.toDoItem,a=e.handleDelete,n=t.length>0?t.map(function(e,t){return r.a.createElement("div",{className:"card",key:e.id},r.a.createElement("header",{className:"card-header"},r.a.createElement("p",{className:"card-header-title"},e.task),r.a.createElement("button",{className:"delete",style:{margin:".8rem"},onClick:function(){return a(e.id)}})))}):r.a.createElement("div",{className:"notification is-primary has-text-weight-bold"},"Yepeeeeee!!!! Your To Do List Is Empty.",r.a.createElement("span",{role:"img","aria-label":"smiley"},"\ud83d\ude00"));return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"container"},n))},E=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={task:"",showErrorMessage:!1},a.handleSubmit=function(e){e.preventDefault(),a.state.task.length<1?a.setState(function(e){return{showErrorMessage:!e.showErrorMessage}}):(a.props.addItem(a.state),a.setState({task:""}))},a.handleChange=function(e){a.setState({task:e.target.value,showErrorMessage:!1})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"container",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Add Item"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{style:this.state.showErrorMessage?{border:"1px solid red"}:{border:""},className:"input",type:"text",placeholder:"Add Task...",name:"item",onChange:this.handleChange,value:this.state.task})),this.state.showErrorMessage&&r.a.createElement("p",{className:"help",style:{color:"red"}},"Please add the item.")),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("button",{className:"button is-success"},"ADD"))))}}]),t}(r.a.Component),b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={toDoList:[{task:"Complete React Course",id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)},{task:"Start React Project",id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)}]},a.addItem=function(e){e.id=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),a.setState(function(t){return{toDoList:[].concat(Object(i.a)(t.toDoList),[e])}})},a.handleDelete=function(e){var t=a.state.toDoList.filter(function(t){return t.id!==e});a.setState({toDoList:t})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(g,{toDoItem:this.state.toDoList,handleDelete:this.handleDelete}),r.a.createElement("div",{className:"section"},r.a.createElement(E,{addItem:this.addItem})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.23d9f5e8.chunk.js.map