(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(e,t,n){e.exports=n(22)},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),l=n.n(c),o=n(11),u=n(1),i=n(2),s=n(4),m=n(3),h=n(5),p=n(9),d=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:n.props.name,number:n.props.number},n.handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(p.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.name,r=t.number;n.props.onAddContact(a,r),n.setState({name:"",number:""})},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{className:"TaskEditor-label"},"Name",r.a.createElement("input",{className:"TaskEditor-input",type:"text",placeholder:"Enter user name*",value:t,onChange:this.handleInputChange,name:"name",required:!0})),r.a.createElement("label",{className:"TaskEditor-label"},"Number",r.a.createElement("input",{className:"TaskEditor-input",type:"text",placeholder:"Enter user phone*",value:n,onChange:this.handleInputChange,name:"number",required:!0})),r.a.createElement("button",{type:"submit",className:"TaskEditor-button"},"Add contact")))}}]),t}(a.Component);d.defaultProps={name:"",number:""};var b=function(e){var t=e.contacts,n=e.onDeleteContact;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,t.map((function(e){var t=e.id,a=e.name,c=e.number;return r.a.createElement("li",{key:t},r.a.createElement("p",null,a,": ",c),r.a.createElement("button",{type:"submit",onClick:function(){return n(t)}},"Delete"))}))))},f=function(e){var t=e.value,n=e.onChangeFilter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",placeholder:"Search contacts by name*",value:t,onChange:function(e){var t=e.target;return n(t.value)}}))},E=function(e){var t=e.title,n=e.children;return r.a.createElement("section",null,r.a.createElement("h2",null,t),n)},g=function(e){var t=e.message;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,t))},v=n(10),C=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:n.props.contacts,filter:n.props.filter},n.addContact=function(e,t){n.setState((function(n){if(!n.contacts.some((function(t){return t.name===e}))){var a={id:Object(v.uuid)(),name:e,number:t};return{contacts:[].concat(Object(o.a)(n.contacts),[a])}}alert("".concat(e," is already in contacts"))}))},n.deleteContact=function(e){n.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},n.changeFilter=function(e){n.setState({filter:e})},n.getFilteredContacts=function(){var e=n.state,t=e.contacts,a=e.filter;return t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=this.getFilteredContacts();return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{title:"Phonebook"},r.a.createElement(d,{onAddContact:this.addContact})),r.a.createElement(E,{title:"Contacts"},t.length>1&&r.a.createElement(f,{value:n,onChangeFilter:this.changeFilter}),t.length<1?r.a.createElement(g,{message:"There is no contact yet..."}):r.a.createElement(b,{contacts:a,onDeleteContact:this.deleteContact})))}}]),t}(a.Component);C.defaultProps={contacts:[],filter:""},l.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.afdda410.chunk.js.map