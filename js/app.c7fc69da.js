(function(t){function e(e){for(var i,a,s=e[0],d=e[1],c=e[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&f.push(n[a][0]),n[a]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(t[i]=d[i]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],i=!0,s=1;s<o.length;s++){var d=o[s];0!==n[d]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=o[0]))}return t}var i={},n={app:0},r=[];function a(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=i,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(o,i,function(e){return t[e]}.bind(null,i));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/c4-11/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=d;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var i=o("85ec"),n=o.n(i);n.a},"33f6":function(t,e,o){},"39a3":function(t,e,o){"use strict";var i=o("33f6"),n=o.n(i);n.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("f9e3");var i=o("5f5b"),n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},a=[],s=(o("034f"),o("2877")),d={},c=Object(s["a"])(d,r,a,!1,null,null,null),u=c.exports,l=o("8c4f"),f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"col-sm-10"},[o("h1",[t._v("Задачи")]),t.showConfirmation?o("confirmation",{attrs:{variant:t.confirmation_variant,message:t.message,showConfirmation:t.showConfirmation}}):t._e(),o("button",{directives:[{name:"b-modal",rawName:"v-b-modal.todo-edit-modal",modifiers:{"todo-edit-modal":!0}}],staticClass:"btn btn-success btn-sm align-left d-block",attrs:{type:"button",id:"task-add"},on:{click:function(e){return t.resetForm()}}},[t._v(" Добавить задачу ")]),o("div",[t._v("Выполнено: "+t._s(t.count_on)+", Не выполнено: "+t._s(t.count_off))]),o("table",{staticClass:"table table-dark table-stripped table-hover"},[t._m(0),o("tbody",t._l(t.todos,(function(e,i){return o("tr",{key:i},[o("td",{staticClass:"todo-uid"},[t._v(t._s(e.uid))]),o("td",[t._v(t._s(e.description))]),o("td",[e.is_completed?o("span",[t._v("Выполнено")]):o("span",[t._v("Не выполнено")])]),o("td",[o("div",{staticClass:"btn-group",attrs:{role:"group"}},[o("button",{directives:[{name:"b-modal",rawName:"v-b-modal.todo-edit-modal",modifiers:{"todo-edit-modal":!0}}],staticClass:"btn btn-secondary btn-sm",attrs:{type:"button"},on:{click:function(o){return t.updateTodo(e)}}},[t._v(" Обновить ")]),t._v(" "),o("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(o){return t.deleteTodo(e)}}},[t._v(" X ")])])])])})),0)]),o("b-modal",{ref:"editTodoModal",attrs:{id:"todo-edit-modal",title:"upd"==this.editType?"Изменение":"Добавление","hide-footer":""},on:{hide:t.onHide}},[o("b-form",{staticClass:"w-100",on:{submit:t.onSubmit,reset:t.onReset}},[o("b-form-group",{attrs:{id:"form-description-group",label:"Описание:","label-for":"form-description-input"}},[o("b-form-input",{attrs:{id:"form-description-input",type:"text",required:""},model:{value:t.editTodoForm.description,callback:function(e){t.$set(t.editTodoForm,"description",e)},expression:"editTodoForm.description"}})],1),o("b-form-group",{attrs:{id:"form-complete-group"}},[o("b-form-checkbox-group",{attrs:{id:"form-checks"},model:{value:t.editTodoForm.is_completed,callback:function(e){t.$set(t.editTodoForm,"is_completed",e)},expression:"editTodoForm.is_completed"}},[o("b-form-checkbox",{attrs:{value:"true"}},[t._v("Задача выполнена?")])],1)],1),o("b-button-group",[o("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Обновить")]),o("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Сброс")])],1)],1)],1)],1)])},m=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",{staticClass:"thead-light"},[o("tr",[o("th",[t._v("Uid")]),o("th",[t._v("Описание")]),o("th",[t._v("Выполнена?")]),o("th")])])}],p=(o("a4d3"),o("e01a"),o("d81d"),o("13d5"),o("07ac"),o("2909")),h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-alert",{attrs:{variant:t.variant,show:t.showConfirmation,dismissible:""},on:{dismissed:function(e){t.showConfirmation=!1}}},[t._v(" "+t._s(t.message)+" ")])],1)},v=[],b={props:["message","variant","showConfirmation"]},_=b,g=Object(s["a"])(_,h,v,!1,null,null,null),T=g.exports,y="data";function w(){var t=window.localStorage.getItem(y);return null===t?{}:JSON.parse(t)}function C(t){window.localStorage.setItem(y,JSON.stringify(t))}function O(t){var e=t,o=w(),i=Object.values(o);return e.uid=0===i.length?1:Math.max.apply(Math,Object(p["a"])(i.map((function(t){return t.uid}))))+1,o[e.uid]=e,C(o),{rec:e,confirmation_variant:"success",message:"Задача с uid=".concat(t.uid," добавлена")}}function F(t){var e=w();return t.uid in e?(e[t.uid]=t,C(e),{confirmation_variant:"success",message:"Задача с uid=".concat(t.uid," обновлена")}):{confirmation_variant:"danger",message:"Отсутствует uid=".concat(t.uid)}}function j(t){var e=w();return t.uid in e?(delete e[t.uid],C(e),{confirmation_variant:"success",message:"Задача с uid=".concat(t.uid," удалена")}):{confirmation_variant:"danger",message:"Отсутствует uid=".concat(t.uid)}}function k(){return Object.values(w())}var x={name:"Todo",data:function(){return{todos:[],editTodoForm:{uid:0,description:"",is_completed:[]},message:"",confirmation_variant:"",showConfirmation:!1,editType:"",count_on:0,count_off:0}},methods:{getTodos:function(){this.todos=k(),this.count_on=this.todos.reduce((function(t,e){return t+(e.is_completed?1:0)}),0),this.count_off=this.todos.length-this.count_on},resetForm:function(){this.editTodoForm.description="",this.editTodoForm.is_completed=[],this.editType=""},onSubmit:function(t){t.preventDefault();var e={uid:this.editTodoForm.uid,description:this.editTodoForm.description,is_completed:this.editTodoForm.is_completed.length>0};if("upd"===this.editType){var o=F(e);this.confirmation_variant=o.confirmation_variant,this.message=o.message}else{var i=O(e);this.confirmation_variant=i.confirmation_variant,this.message=i.message}this.getTodos(),this.showConfirmation=!0,this.$refs.editTodoModal.hide()},onHide:function(){this.resetForm()},onReset:function(t){t.preventDefault(),this.$refs.editTodoModal.hide()},updateTodo:function(t){this.editType="upd",this.editTodoForm.uid=t.uid,this.editTodoForm.description=t.description,t.is_completed&&(this.editTodoForm.is_completed=[!0])},deleteTodo:function(t){var e=j(t);this.confirmation_variant=e.confirmation_variant,this.message=e.message,this.getTodos(),this.showConfirmation=!0,this.$refs.editTodoModal.hide()}},created:function(){this.getTodos()},components:{confirmation:T}},S=x,M=(o("39a3"),Object(s["a"])(S,f,m,!1,null,null,null)),$=M.exports;n["default"].use(l["a"]);var P=[{path:"/",name:"todos",component:$}],E=new l["a"]({mode:"history",base:"/c4-11/",routes:P}),J=E;n["default"].use(i["a"]),n["default"].config.productionTip=!1,new n["default"]({router:J,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,e,o){}});
//# sourceMappingURL=app.c7fc69da.js.map