(function(t){function o(o){for(var i,a,s=o[0],d=o[1],c=o[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&f.push(n[a][0]),n[a]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(t[i]=d[i]);u&&u(o);while(f.length)f.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,o=0;o<r.length;o++){for(var e=r[o],i=!0,s=1;s<e.length;s++){var d=e[s];0!==n[d]&&(i=!1)}i&&(r.splice(o--,1),t=a(a.s=e[0]))}return t}var i={},n={app:0},r=[];function a(o){if(i[o])return i[o].exports;var e=i[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=i,a.d=function(t,o,e){a.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,o){if(1&o&&(t=a(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var i in t)a.d(e,i,function(o){return t[o]}.bind(null,i));return e},a.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(o,"a",o),o},a.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},a.p="/c4-11/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=o,s=s.slice();for(var c=0;c<s.length;c++)o(s[c]);var u=d;r.push([0,"chunk-vendors"]),e()})({0:function(t,o,e){t.exports=e("56d7")},"034f":function(t,o,e){"use strict";var i=e("85ec"),n=e.n(i);n.a},"33f6":function(t,o,e){},"39a3":function(t,o,e){"use strict";var i=e("33f6"),n=e.n(i);n.a},"56d7":function(t,o,e){"use strict";e.r(o);e("e260"),e("e6cf"),e("cca6"),e("a79d"),e("f9e3");var i=e("5f5b"),n=e("2b0e"),r=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},a=[],s=(e("034f"),e("2877")),d={},c=Object(s["a"])(d,r,a,!1,null,null,null),u=c.exports,l=e("8c4f"),f=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container"},[e("div",{staticClass:"col-sm-10"},[e("h1",[t._v("Задачи")]),t.showConfirmation?e("confirmation",{attrs:{variant:t.confirmation_variant,message:t.message,showConfirmation:t.showConfirmation}}):t._e(),e("button",{directives:[{name:"b-modal",rawName:"v-b-modal.todo-edit-modal",modifiers:{"todo-edit-modal":!0}}],staticClass:"btn btn-success btn-sm align-left d-block",attrs:{type:"button",id:"task-add"},on:{click:function(o){return t.resetForm()}}},[t._v(" Добавить задачу ")]),e("div",[t._v(" Выполнено: "+t._s(t.count_on)+", Не выполнено: "+t._s(t.count_off)+", Всего задач: "+t._s(t.count_all)+" ")]),e("table",{staticClass:"table table-dark table-stripped table-hover"},[t._m(0),e("tbody",t._l(t.todos,(function(o,i){return e("tr",{key:i},[e("td",{staticClass:"todo-uid"},[t._v(t._s(o.uid))]),e("td",[t._v(t._s(o.description))]),e("td",[o.is_completed?e("span",[t._v("Выполнено")]):e("span",[t._v("Не выполнено")])]),e("td",[e("div",{staticClass:"btn-group",attrs:{role:"group"}},[e("button",{directives:[{name:"b-modal",rawName:"v-b-modal.todo-edit-modal",modifiers:{"todo-edit-modal":!0}}],staticClass:"btn btn-secondary btn-sm",attrs:{type:"button"},on:{click:function(e){return t.updateTodo(o)}}},[t._v(" Обновить ")]),t._v(" "),e("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(e){return t.deleteTodo(o)}}},[t._v(" X ")])])])])})),0)]),e("b-modal",{ref:"editTodoModal",attrs:{id:"todo-edit-modal",title:"upd"==this.editType?"Изменение":"Добавление","hide-footer":""},on:{hide:t.onHide}},[e("b-form",{staticClass:"w-100",on:{submit:t.onSubmit,reset:t.onReset}},[e("b-form-group",{attrs:{id:"form-description-group",label:"Описание:","label-for":"form-description-input"}},[e("b-form-input",{attrs:{id:"form-description-input",type:"text",required:""},model:{value:t.editTodoForm.description,callback:function(o){t.$set(t.editTodoForm,"description",o)},expression:"editTodoForm.description"}})],1),e("b-form-group",{attrs:{id:"form-complete-group"}},[e("b-form-checkbox-group",{attrs:{id:"form-checks"},model:{value:t.editTodoForm.is_completed,callback:function(o){t.$set(t.editTodoForm,"is_completed",o)},expression:"editTodoForm.is_completed"}},[e("b-form-checkbox",{attrs:{value:"true"}},[t._v("Задача выполнена?")])],1)],1),e("b-button-group",[e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Обновить")]),e("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Сброс")])],1)],1)],1)],1)])},m=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("thead",{staticClass:"thead-light"},[e("tr",[e("th",[t._v("Uid")]),e("th",[t._v("Описание")]),e("th",[t._v("Выполнена?")]),e("th")])])}],p=(e("a4d3"),e("e01a"),e("d81d"),e("13d5"),e("07ac"),e("2909")),h=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("b-alert",{attrs:{variant:t.variant,show:t.showConfirmation,dismissible:""},on:{dismissed:function(o){t.showConfirmation=!1}}},[t._v(" "+t._s(t.message)+" ")])],1)},v=[],b={props:["message","variant","showConfirmation"]},_=b,g=Object(s["a"])(_,h,v,!1,null,null,null),T=g.exports,y="data";function w(){var t=window.localStorage.getItem(y);return null===t?{}:JSON.parse(t)}function C(t){window.localStorage.setItem(y,JSON.stringify(t))}function O(t){var o=t,e=w(),i=Object.values(e);return o.uid=0===i.length?1:Math.max.apply(Math,Object(p["a"])(i.map((function(t){return t.uid}))))+1,e[o.uid]=o,C(e),{rec:o,confirmation_variant:"success",message:"Задача с uid=".concat(t.uid," добавлена")}}function F(t){var o=w();return t.uid in o?(o[t.uid]=t,C(o),{confirmation_variant:"success",message:"Задача с uid=".concat(t.uid," обновлена")}):{confirmation_variant:"danger",message:"Отсутствует uid=".concat(t.uid)}}function j(t){var o=w();return t.uid in o?(delete o[t.uid],C(o),{confirmation_variant:"success",message:"Задача с uid=".concat(t.uid," удалена")}):{confirmation_variant:"danger",message:"Отсутствует uid=".concat(t.uid)}}function k(){return Object.values(w())}var x={name:"Todo",data:function(){return{todos:[],editTodoForm:{uid:0,description:"",is_completed:[]},message:"",confirmation_variant:"",showConfirmation:!1,editType:"",count_on:0,count_off:0,count_all:0}},methods:{getTodos:function(){this.todos=k(),this.count_all=this.todos.length,this.count_on=this.todos.reduce((function(t,o){return t+(o.is_completed?1:0)}),0),this.count_off=this.count_all-this.count_on},resetForm:function(){this.editTodoForm.description="",this.editTodoForm.is_completed=[],this.editType=""},onSubmit:function(t){t.preventDefault();var o={uid:this.editTodoForm.uid,description:this.editTodoForm.description,is_completed:this.editTodoForm.is_completed.length>0};if("upd"===this.editType){var e=F(o);this.confirmation_variant=e.confirmation_variant,this.message=e.message}else{var i=O(o);this.confirmation_variant=i.confirmation_variant,this.message=i.message}this.getTodos(),this.showConfirmation=!0,this.$refs.editTodoModal.hide()},onHide:function(){this.resetForm()},onReset:function(t){t.preventDefault(),this.$refs.editTodoModal.hide()},updateTodo:function(t){this.editType="upd",this.editTodoForm.uid=t.uid,this.editTodoForm.description=t.description,t.is_completed&&(this.editTodoForm.is_completed=[!0])},deleteTodo:function(t){var o=j(t);this.confirmation_variant=o.confirmation_variant,this.message=o.message,this.getTodos(),this.showConfirmation=!0,this.$refs.editTodoModal.hide()}},created:function(){this.getTodos()},components:{confirmation:T}},S=x,M=(e("39a3"),Object(s["a"])(S,f,m,!1,null,null,null)),$=M.exports;n["default"].use(l["a"]);var P=[{path:"/",name:"todos",component:$}],E=new l["a"]({mode:"history",base:"/c4-11/",routes:P}),J=E;n["default"].use(i["a"]),n["default"].config.productionTip=!1,new n["default"]({router:J,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,o,e){}});
//# sourceMappingURL=app.116e4aa7.js.map