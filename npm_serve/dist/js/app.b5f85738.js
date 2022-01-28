(function(e){function t(t){for(var r,n,s=t[0],i=t[1],u=t[2],d=0,p=[];d<s.length;d++)n=s[d],Object.prototype.hasOwnProperty.call(l,n)&&l[n]&&p.push(l[n][0]),l[n]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);c&&c(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var i=a[s];0!==l[i]&&(r=!1)}r&&(o.splice(t--,1),e=n(n.s=a[0]))}return e}var r={},l={app:0},o=[];function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=i;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("4cae")},"18d9":function(e,t){e.exports=VueQuillEditor},"1af2":function(e,t){e.exports=NProgress},"39ac":function(e,t,a){},"4cae":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("4de4"),a("d3b7");var r=a("8bbf"),l=a.n(r),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],s=a("2877"),i={},u=Object(s["a"])(i,o,n,!1,null,null,null),c=u.exports,d=a("6389"),p=a.n(d),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login_container"},[a("div",{staticClass:"login_box"},[e._m(0),a("el-form",{ref:"loginFormRef",staticClass:"login_form",attrs:{model:e.loginForm,rules:e.loginFormReules,"label-width":"0px"}},[a("el-form-item",{attrs:{prop:"username"}},[a("el-input",{model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}},[a("i",{staticClass:"iconfont icon-user",attrs:{slot:"prefix"},slot:"prefix"})])],1),a("el-form-item",{attrs:{prop:"password"}},[a("el-input",{attrs:{type:"password"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}},[a("i",{staticClass:"iconfont icon-3702mima",attrs:{slot:"prefix"},slot:"prefix"})])],1),a("el-form-item",{staticClass:"btns"},[a("el-button",{attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")]),a("el-button",{attrs:{type:"info"},on:{click:e.resetLoginForm}},[e._v("重置")])],1)],1)],1)])},g=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"avatar_box"},[r("img",{attrs:{src:a("cf05"),alt:""}})])}],b=a("1da1"),f=(a("96cf"),{data:function(){return{loginForm:{username:"admin",password:"123456"},loginFormReules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:5,message:"长度不符",trigger:"blur"}],password:[{min:3,max:15,message:"长度不符",trigger:"blur"}]}}},mounted:function(){this.checkIsLogin()},methods:{resetLoginForm:function(){console.log(this),this.$refs.loginFormRef.resetFields()},checkIsLogin:function(){var e=localStorage.getItem("token");e&&(console.log("token---"),console.log(e),this.$router.push("/home"))},login:function(){var e=this;this.$refs.loginFormRef.validate(function(){var t=Object(b["a"])(regeneratorRuntime.mark((function t(a){var r,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(a),a){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,e.$http.post("login",e.loginForm);case 5:r=t.sent,l=r.data,console.log("result---"),console.log(l),console.log(l.data),200==l.meta.status?(localStorage.setItem("token",l.data.token),e.$message.success("登录成功"),e.checkIsLogin()):e.$message.error("登录失败");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}}),h=f,v=(a("4d1d"),Object(s["a"])(h,m,g,!1,null,"0883d042",null)),w=v.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{staticClass:"home-container"},[r("el-header",{attrs:{height:"100px"}},[r("div",[r("img",{attrs:{src:a("d806"),alt:""}}),r("span",[e._v("电商后台管理系统")])]),r("el-button",{attrs:{type:"info"},on:{click:e.logOut}},[e._v("退出")])],1),r("el-container",[r("el-aside",{attrs:{width:e.isCollapse?"65px":"200px"}},[r("div",{staticClass:"toggle-button",on:{click:e.toggleCollspse}},[e._v(" "+e._s(e.isCollapse?"展开":"折叠")+" ")]),r("el-menu",{attrs:{collapse:e.isCollapse,"unique-opened":"",router:!0,"background-color":"rgb(87, 86, 105)","collapse-transition":!1,"text-color":"#fff","active-text-color":"rgb(138, 135, 199)","default-active":e.activePath}},e._l(e.menulist,(function(t){return r("el-submenu",{key:t.id,attrs:{index:"/"+t.path}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-platform-eleme"}),r("span",[e._v(e._s(t.authName))])]),e._l(t.children,(function(t){return r("el-menu-item",{key:t.id,attrs:{index:"/"+t.path},on:{click:function(a){return e.saveNavState(t)}}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-menu"}),r("span",[e._v(e._s(t.authName))])])],2)}))],2)})),1)],1),r("el-main",[r("router-view")],1)],1)],1)},x=[],_={data:function(){return{menulist:[],isCollapse:!1,activePath:""}},created:function(){this.getMenuList(),this.activePath=window.sessionStorage.getItem("activePath")},methods:{saveNavState:function(e){window.sessionStorage.setItem("activePath","/"+e.path),this.activePath="/"+e.path},toggleCollspse:function(){this.isCollapse=!this.isCollapse},getMenuList:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("menus");case 2:if(a=t.sent,r=a.data,200==r.meta.status){t.next=9;break}return e.$message.error(r.meta.msg),t.abrupt("return");case 9:e.menulist=r.data;case 10:console.log(r);case 11:case"end":return t.stop()}}),t)})))()},logOut:function(){console.log(localStorage),localStorage.clear(),this.$router.push("/login")}}},k=_,$=(a("7e2e"),Object(s["a"])(k,y,x,!1,null,"9e6cc512",null)),C=$.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("Welcome")])},F=[],S={},O=S,j=Object(s["a"])(O,R,F,!1,null,null,null),I=j.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v("用户管理")]),a("el-breadcrumb-item",[e._v("用户列表")])],1),a("el-card",{staticClass:"box-card"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:7}},[a("el-input",{attrs:{placeholder:"请输入内容",clearable:""},on:{clear:e.getUserList},model:{value:e.queryInfo.query,callback:function(t){e.$set(e.queryInfo,"query",t)},expression:"queryInfo.query"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getUserList},slot:"append"})],1)],1),a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("添加用户")])],1)],1),a("el-table",{attrs:{data:e.userlist,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"index"}}),a("el-table-column",{attrs:{label:"姓名",prop:"username"}}),a("el-table-column",{attrs:{label:"邮箱",prop:"email"}}),a("el-table-column",{attrs:{label:"电话",prop:"mobile"}}),a("el-table-column",{attrs:{label:"角色",prop:"role_name"}}),a("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{on:{change:function(a){return e.changeSwitchState(t.row)}},model:{value:t.row.mg_state,callback:function(a){e.$set(t.row,"mg_state",a)},expression:"scope.row.mg_state"}})]}}])}),a("el-table-column",{attrs:{label:"操作",width:"180px"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",circle:""}}),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""}}),a("el-tooltip",{attrs:{effect:"dark",content:"删除",placement:"top",enterable:!1}},[a("el-button",{attrs:{type:"warning",icon:"el-icon-setting"}})],1)]}}])})],1),a("el-pagination",{attrs:{"current-page":e.queryInfo.pagenum,"page-sizes":[1,2,5,10],"page-size":e.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),a("el-dialog",{attrs:{title:"添加用户",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t},close:e.addDialogClosed}},[a("el-form",{ref:"addFormRef",attrs:{model:e.addForm,x:"",rules:e.addFormReules,"label-width":"70px"}},[a("el-form-item",{attrs:{prop:"username",label:"用户名"}},[a("el-input",{model:{value:e.addForm.username,callback:function(t){e.$set(e.addForm,"username",t)},expression:"addForm.username"}})],1),a("el-form-item",{attrs:{prop:"password",label:"密码"}},[a("el-input",{attrs:{type:"password"},model:{value:e.addForm.password,callback:function(t){e.$set(e.addForm,"password",t)},expression:"addForm.password"}})],1),a("el-form-item",{attrs:{prop:"email",label:"邮箱"}},[a("el-input",{model:{value:e.addForm.email,callback:function(t){e.$set(e.addForm,"email",t)},expression:"addForm.email"}})],1),a("el-form-item",{attrs:{prop:"mobile",label:"手机"}},[a("el-input",{model:{value:e.addForm.mobile,callback:function(t){e.$set(e.addForm,"mobile",t)},expression:"addForm.mobile"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("确 定")])],1)],1)],1)},L=[],q=(a("ac1f"),a("00b4"),a("d9e2"),a("99af"),{data:function(){var e=function(e,t,a){var r=/^\w{3,}(\.\w+)*@[A-z 0-9]+(\.[A-z]{2,5}){1,2}$/;if(r.test(t))return a();a(new Error("请输入合法的邮箱"))},t=function(e,t,a){var r=/^[1][3,4,5,6,7,8][0-9]{9}$/;if(r.test(t))return a();a(new Error("请输入合法手机号"))};return{queryInfo:{query:"",pagenum:1,pagesize:2},dialogVisible:!1,userlist:[],total:0,addForm:{username:"",password:"",email:"",mobile:""},addFormReules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:10,message:"长度不符,3-10",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:15,message:"长度不符6-15",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:e,trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:t,trigger:"blur"}]}}},created:function(){console.log("process.env.NODE_ENV111"),console.log("production"),this.getUserList()},methods:{addUser:function(){var e=this;this.$refs.addFormRef.validate(function(){var t=Object(b["a"])(regeneratorRuntime.mark((function t(a){var r,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a){t.next=2;break}return t.abrupt("return");case 2:return console.log("0000--"),t.next=5,e.$http.post("users",e.addForm);case 5:r=t.sent,l=r.data,201!=l.meta.status?e.$message.error(l.meta.msg):(e.dialogVisible=!1,e.$message.success("添加成功"));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},addDialogClosed:function(){this.$refs.addFormRef.resetFields()},changeSwitchState:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function a(){var r,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log(e),a.next=3,t.$http.put("users/".concat(e.id,"/state/").concat(e.mg_state));case 3:r=a.sent,l=r.data,200!==l.meta.status&&(t.$message.error("更新失败"),e.mg_state=!e.mg_state);case 6:case"end":return a.stop()}}),a)})))()},getUserList:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("users",{params:e.queryInfo});case 2:if(a=t.sent,r=a.data,200==r.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("获取用户列表失败"));case 6:e.userlist=r.data.users,e.total=r.data.total;case 8:case"end":return t.stop()}}),t)})))()},handleSizeChange:function(e){console.log(e+"---newPageSize"),this.queryInfo.pagesize=e,this.getUserList()},handleCurrentChange:function(e){console.log(e+"---newPage"),this.queryInfo.pagenum=e,this.getUserList()}}}),N=q,z=Object(s["a"])(N,P,L,!1,null,"35fe6288",null),E=z.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v("权限管理")]),a("el-breadcrumb-item",[e._v("权限列表")])],1),a("el-card",[a("el-table",{attrs:{data:e.rightsList,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"index"}}),a("el-table-column",{attrs:{label:"权限名称",prop:"authName"}}),a("el-table-column",{attrs:{label:"路径",prop:"path"}}),a("el-table-column",{attrs:{label:"权限等级",prop:"level"},scopedSlots:e._u([{key:"default",fn:function(t){return["0"===t.row.level?a("el-tag",[e._v("1级")]):"1"===t.row.level?a("el-tag",{attrs:{type:"success"}},[e._v("2级")]):a("el-tag",{attrs:{type:"warning"}},[e._v("3级")])]}}])})],1)],1)],1)},M=[],V={data:function(){return{rightsList:[]}},methods:{getRightsList:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rights/list");case 2:if(a=t.sent,r=a.data,200==r.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("获取权限列表失败"));case 6:console.log(r.data),e.rightsList=r.data;case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.getRightsList()}},D=V,U=Object(s["a"])(D,T,M,!1,null,null,null),K=U.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v("权限管理")]),a("el-breadcrumb-item",[e._v("角色列表")])],1),a("el-card",[a("div",[a("el-button",{attrs:{type:"primary"},on:{click:e.addRole}},[e._v("角色添加")]),a("el-cascader",{attrs:{options:e.options,props:{expandTrigger:"hover"}},on:{change:e.handleChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),a("div",[a("quill-editor")],1),a("el-table",{attrs:{data:e.rolelist,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.children,(function(t,r){return a("el-row",{key:t.id,class:["bdbottom",0==r?"bdtop":"","elmargin"]},[a("el-col",{attrs:{span:5}},[a("el-tag",{attrs:{closable:""}},[e._v(" "+e._s(t.authName)+" ")]),a("el-icon",{staticClass:"el-icon-caret-right"})],1),a("el-col",{attrs:{span:19}},e._l(t.children,(function(t,r){return a("el-row",{key:t.id},[a("el-col",{class:[0==r?"":"bdtop"],attrs:{span:6}},[a("el-tag",{attrs:{closable:"",type:"success"}},[e._v(e._s(t.authName))]),a("el-icon",{staticClass:"el-icon-caret-right"})],1),a("el-col",{attrs:{span:18}},e._l(t.children,(function(t,r){return a("el-tag",{key:t.id,attrs:{closable:"",type:"warning"}},[e._v(" "+e._s(t.authName)+" ")])})),1)],1)})),1)],1)}))}}])}),a("el-table-column",{attrs:{type:"index"}}),a("el-table-column",{attrs:{label:"角色名称",prop:"roleName"}}),a("el-table-column",{attrs:{label:"角描述",prop:"roleDesc"}}),a("el-table-column",{attrs:{label:"操作",width:"350px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit"}},[e._v("编辑")]),a("el-button",{attrs:{type:"warning",icon:"el-icon-delete"}},[e._v("删除")]),a("el-button",{attrs:{type:"success",icon:"el-icon-share"},on:{click:function(a){return e.disRoles(t.row)}}},[e._v("分配权限")])]}}])})],1)],1),a("el-dialog",{attrs:{title:"分配权限",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-tree",{ref:"treeRef",attrs:{data:e.rightlist,props:e.treeProps,"show-checkbox":"","node-key":"id","default-expand-all":"","default-checked-keys":e.defKeys}}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.allotRights}},[e._v("确 定")])],1)],1)],1)},Y=[],A=a("2909"),H=(a("a15b"),a("159b"),{options:[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"},{value:"xiaolv",label:"效率"},{value:"kekong",label:"可控"}]},{value:"daohang",label:"导航",children:[{value:"cexiangdaohang",label:"侧向导航"},{value:"dingbudaohang",label:"顶部导航"}]}]},{value:"zujian",label:"组件",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout 布局"},{value:"color",label:"Color 色彩"},{value:"typography",label:"Typography 字体"},{value:"icon",label:"Icon 图标"},{value:"button",label:"Button 按钮"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio 单选框"},{value:"checkbox",label:"Checkbox 多选框"},{value:"input",label:"Input 输入框"},{value:"input-number",label:"InputNumber 计数器"},{value:"select",label:"Select 选择器"},{value:"cascader",label:"Cascader 级联选择器"},{value:"switch",label:"Switch 开关"},{value:"slider",label:"Slider 滑块"},{value:"time-picker",label:"TimePicker 时间选择器"},{value:"date-picker",label:"DatePicker 日期选择器"},{value:"datetime-picker",label:"DateTimePicker 日期时间选择器"},{value:"upload",label:"Upload 上传"},{value:"rate",label:"Rate 评分"},{value:"form",label:"Form 表单"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table 表格"},{value:"tag",label:"Tag 标签"},{value:"progress",label:"Progress 进度条"},{value:"tree",label:"Tree 树形控件"},{value:"pagination",label:"Pagination 分页"},{value:"badge",label:"Badge 标记"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert 警告"},{value:"loading",label:"Loading 加载"},{value:"message",label:"Message 消息提示"},{value:"message-box",label:"MessageBox 弹框"},{value:"notification",label:"Notification 通知"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"NavMenu 导航菜单"},{value:"tabs",label:"Tabs 标签页"},{value:"breadcrumb",label:"Breadcrumb 面包屑"},{value:"dropdown",label:"Dropdown 下拉菜单"},{value:"steps",label:"Steps 步骤条"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog 对话框"},{value:"tooltip",label:"Tooltip 文字提示"},{value:"popover",label:"Popover 弹出框"},{value:"card",label:"Card 卡片"},{value:"carousel",label:"Carousel 走马灯"},{value:"collapse",label:"Collapse 折叠面板"}]}]},{value:"ziyuan",label:"资源",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"组件交互文档"}]}]}),J={data:function(){return{dialogVisible:!1,rolelist:[],rightlist:[],roleId:"",defKeys:[],treeProps:{children:"children",label:"authName"},value:[],options:H.options}},methods:{addRole:function(){},handleChange:function(e){console.log(e)},allotRights:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var a,r,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=[].concat(Object(A["a"])(e.$refs.treeRef.getCheckedKeys()),Object(A["a"])(e.$refs.treeRef.getHalfCheckedKeys())),console.log("keys-----"),console.log(a),t.next=5,e.$http.post("roles/".concat(e.roleId,"/rights"),{rids:a.join(",")});case 5:if(r=t.sent,l=r.data,200==l.meta.status){t.next=9;break}return t.abrupt("return",e.$message.error(l.msg));case 9:e.dialogVisible=!1,e.getRoles();case 11:case"end":return t.stop()}}),t)})))()},getRoles:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("roles");case 2:if(a=t.sent,r=a.data,200==r.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("获取角色列表失败"));case 6:console.log(r.data),e.rolelist=r.data;case 8:case"end":return t.stop()}}),t)})))()},disRoles:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function a(){var r,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.roleId=e.id,a.next=3,t.$http.get("rights/tree");case 3:if(r=a.sent,l=r.data,200===l.meta.status){a.next=7;break}return a.abrupt("return",t.$message.error("获取权限列表失败"));case 7:t.rightlist=l.data,console.log(e),t.defKeys=[],t.getLeafKeys(e,t.defKeys),t.dialogVisible=!0;case 12:case"end":return a.stop()}}),a)})))()},getLeafKeys:function(e,t){var a=this;if(!e.children)return t.push(e.id);e.children.forEach((function(e){a.getLeafKeys(e,t)}))}},created:function(){this.getRoles()}},Q=J,W=(a("d21d"),Object(s["a"])(Q,B,Y,!1,null,"24d5a8b4",null)),G=W.exports,X=a("1af2"),Z=a.n(X);l.a.use(p.a);var ee=[{path:"/",redirect:"/login"},{path:"/login",component:w},{path:"/home",component:C,redirect:"/welcome",children:[{path:"/welcome",component:I},{path:"/users",component:E},{path:"/rights",component:K},{path:"/roles",component:G}]}],te=new p.a({routes:ee});te.beforeEach((function(e,t,a){if("/login"===e.path)return a();var r=localStorage.getItem("token");if(console.log(r),console.log(e.path),console.log("-----111-"),!r)return a("/login");console.log("------"),a()})),te.afterEach((function(){}));var ae=te,re=a("2f62");l.a.use(re["a"]);var le=new re["a"].Store({state:{},mutations:{},actions:{},modules:{}}),oe=(a("0fae"),a("1f94")),ne=a.n(oe),se=(a("aede"),a("5c96")),ie=a("18d9"),ue=a.n(ie);a("a753"),a("8096"),a("14e1");l.a.use(se["Button"]),l.a.use(se["Form"]),l.a.use(se["FormItem"]),l.a.use(se["Input"]),l.a.use(se["Container"]),l.a.use(se["Header"]),l.a.use(se["Aside"]),l.a.use(se["Main"]),l.a.use(se["Menu"]),l.a.use(se["Submenu"]),l.a.use(se["MenuItem"]),l.a.use(se["Breadcrumb"]),l.a.use(se["BreadcrumbItem"]),l.a.use(se["Card"]),l.a.use(se["Row"]),l.a.use(se["Col"]),l.a.use(se["Table"]),l.a.use(se["TableColumn"]),l.a.use(se["Switch"]),l.a.use(se["Tooltip"]),l.a.use(se["Pagination"]),l.a.use(se["Dialog"]),l.a.use(se["Tag"]),l.a.use(se["Icon"]),l.a.use(se["Tree"]),l.a.use(se["Select"]),l.a.use(se["Option"]),l.a.use(se["Cascader"]),l.a.use(ue.a),l.a.prototype.$message=se["Message"];var ce=a("cebe"),de=a.n(ce),pe=window.location.host,me=document.domain,ge=window.location.href;console.log("url"),console.log(ge),console.log("host"),console.log(pe),console.log("host2"),console.log(me),de.a.defaults.baseURL="https://lianghj.top:8888/api/private/v1/",de.a.interceptors.request.use((function(e){Z.a.start();var t=localStorage.getItem("token");return e.headers.Authorization=t,console.log("config---"),console.log(e),e})),de.a.interceptors.response.use((function(e){Z.a.done();try{404!=e.status&&400!=e.data.meta.status&&404!=e.data.meta.status||(console.log("config---111-"),console.log(ae),localStorage.clear(),ae.push("/login"))}catch(t){}return console.log("config----"),console.log(e),e})),l.a.prototype.$http=de.a;a("82da"),a("a5d8");console.log("process.env.NODE_ENV"),console.log("production"),l.a.config.productionTip=!1,l.a.use(ne.a),l.a.filter("dayFormat",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD";return moment(e).format(t)})),l.a.filter("minFormat",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return moment(e).format(t)})),new l.a({router:ae,store:le,render:function(e){return e(c)}}).$mount("#app")},"4d1d":function(e,t,a){"use strict";a("bb6b")},6389:function(e,t){e.exports=VueRouter},"7e2e":function(e,t,a){"use strict";a("d8cb")},"82da":function(e,t,a){},"8bbf":function(e,t){e.exports=Vue},aede:function(e,t,a){},bb6b:function(e,t,a){},cebe:function(e,t){e.exports=axios},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},d21d:function(e,t,a){"use strict";a("39ac")},d806:function(e,t,a){e.exports=a.p+"img/heima.b5a855ee.png"},d8cb:function(e,t,a){}});
//# sourceMappingURL=app.b5f85738.js.map