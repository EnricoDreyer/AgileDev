(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c286c302"],{"0952":function(s,e,a){},1075:function(s,e,a){},"39fc":function(s,e,a){"use strict";var t=a("1075"),c=a.n(t);c.a},be3f:function(s,e,a){"use strict";var t=function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("vs-sidebar",{staticClass:"add-new-data-sidebar items-no-padding",attrs:{"click-not-close":"","position-right":"",parent:"body","default-index":"1",color:"primary",spacer:""},model:{value:s.isSidebarActiveLocal,callback:function(e){s.isSidebarActiveLocal=e},expression:"isSidebarActiveLocal"}},[a("div",{staticClass:"mt-6 flex items-center justify-between px-6"},[a("h4",[s._v(s._s(0===Object.entries(this.data).length?"ADD NEW":"UPDATE")+" ITEM")]),a("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:"XIcon"},on:{click:function(e){e.stopPropagation(),s.isSidebarActiveLocal=!1}}})],1),a("vs-divider",{staticClass:"mb-0"}),a(s.scrollbarTag,{key:s.$vs.rtl,tag:"component",staticClass:"scroll-area--data-list-add-new",attrs:{settings:s.settings}},[a("div",[a("div",{staticClass:"vx-row px-4 pt-2 pb-3"},[a("div",{staticClass:"vx-col flex-1"},[a("label",[s._v("Customer")]),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"icon-pack":"feather",icon:"icon-user",placeholder:"Customer Name",name:"Customer Name"},model:{value:s.cusname,callback:function(e){s.cusname=e},expression:"cusname"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("Customer Name"),expression:"errors.has('Customer Name')"}],staticClass:"text-danger text-sm"},[s._v(s._s(s.errors.first("Customer Name")))])],1),a("div",{staticClass:"vx-col flex-1"},[a("label",[s._v("Category")]),a("vs-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],ref:"categorySelect",staticClass:"w-full",attrs:{placeholder:"Select Category"},on:{change:function(e){return s.myFunction(e)}},model:{value:s.cuscategorycustomer,callback:function(e){s.cuscategorycustomer=e},expression:"cuscategorycustomer"}},s._l(s.categoryDropdown,(function(s){return a("vs-select-item",{key:s.value,attrs:{value:s.value,text:s.text}})})),1),a("span",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("Category"),expression:"errors.has('Category')"}],staticClass:"text-danger text-sm"},[s._v(s._s(s.errors.first("Category")))])],1)]),a("div",{staticClass:"vx-row px-4 pb-3"},[a("div",{staticClass:"vx-col flex-1"},[a("label",[s._v("VAT Number")]),a("vs-input",{staticClass:"w-full",attrs:{"icon-pack":"feather",icon:"icon-hash",placeholder:"VAT Number",name:"VAT Number"},model:{value:s.cusvatnumber,callback:function(e){s.cusvatnumber=e},expression:"cusvatnumber"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("VAT Number"),expression:"errors.has('VAT Number')"}],staticClass:"text-danger text-sm"},[s._v(s._s(s.errors.first("VAT Number")))])],1),a("div",{staticClass:"vx-col flex-1"},[a("label",[s._v("Contact Name")]),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"icon-pack":"feather",icon:"icon-user",placeholder:"Contact Name",name:"Contact Name"},model:{value:s.cuscontactname,callback:function(e){s.cuscontactname=e},expression:"cuscontactname"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("Contact Name"),expression:"errors.has('Contact Name')"}],staticClass:"text-danger text-sm"},[s._v(s._s(s.errors.first("Contact Name")))])],1)]),a("div",{staticClass:"vx-row px-4 pb-3"},[a("div",{staticClass:"vx-col flex-1"},[a("label",[s._v("Contact Email")]),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"w-full",attrs:{"icon-pack":"feather",icon:"icon-at-sign",placeholder:"Contact Email",name:"item-contactEmail"},model:{value:s.cuscontactEmail,callback:function(e){s.cuscontactEmail=e},expression:"cuscontactEmail"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("item-contactEmail"),expression:"errors.has('item-contactEmail')"}],staticClass:"text-danger text-sm"},[s._v(s._s(s.errors.first("item-contactEmail")))])],1),a("div",{staticClass:"vx-col flex-1"},[a("label",[s._v("Contact Mobile")]),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"digits:10",expression:"'digits:10'"}],staticClass:"w-full",attrs:{"icon-pack":"feather",icon:"icon-smartphone",placeholder:"Contact Mobile",name:"Contact Mobile"},model:{value:s.cuscontactmobile,callback:function(e){s.cuscontactmobile=e},expression:"cuscontactmobile"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("Contact Mobile"),expression:"errors.has('Contact Mobile')"}],staticClass:"text-danger text-sm"},[s._v(s._s(s.errors.first("Contact Mobile")))])],1)]),a("div",{staticClass:"vx-row px-4 pb-3"},[a("div",{staticClass:"vx-col flex-1"},[a("label",[s._v("Contact Phone")]),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"digits:10",expression:"'digits:10'"}],staticClass:"w-full",attrs:{"icon-pack":"feather",icon:"icon-phone",placeholder:"Contact Phone",name:"Contact Phone"},model:{value:s.cuscontactphone,callback:function(e){s.cuscontactphone=e},expression:"cuscontactphone"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("Contact Phone"),expression:"errors.has('Contact Phone')"}],staticClass:"text-danger text-sm"},[s._v(s._s(s.errors.first("Contact Phone")))])],1),a("div",{staticClass:"vx-col flex-1"},[a("label",[s._v("Web Address")]),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"url:require_protocol",expression:"'url:require_protocol'"}],staticClass:"w-full",attrs:{"icon-pack":"feather",icon:"icon-globe",placeholder:"Web Address",name:"Web Address"},model:{value:s.cuswebaddress,callback:function(e){s.cuswebaddress=e},expression:"cuswebaddress"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("Web Address"),expression:"errors.has('Web Address')"}],staticClass:"text-danger text-sm"},[s._v(s._s(s.errors.first("Web Address")))])],1)]),a("div",{staticClass:"vx-row px-4 pb-3"},[a("div",{staticClass:"vx-col flex-1"},[a("label",[s._v("Address 1")]),a("vs-input",{staticClass:"w-full",attrs:{"icon-pack":"feather",icon:"icon-map-pin",placeholder:"Address 1",name:"item-address1"},model:{value:s.cusaddress1,callback:function(e){s.cusaddress1=e},expression:"cusaddress1"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("item-address1"),expression:"errors.has('item-address1')"}],staticClass:"text-danger text-sm"},[s._v(s._s(s.errors.first("item-address1")))])],1),a("div",{staticClass:"vx-col flex-1"},[a("label",[s._v("Address 2")]),a("vs-input",{staticClass:"w-full",attrs:{"icon-pack":"feather",icon:"icon-map-pin",placeholder:"Address 2",name:"item-address2"},model:{value:s.cusaddress2,callback:function(e){s.cusaddress2=e},expression:"cusaddress2"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("item-address2"),expression:"errors.has('item-address2')"}],staticClass:"text-danger text-sm"},[s._v(s._s(s.errors.first("item-address2")))])],1)]),a("div",{staticClass:"vx-row px-4 pb-3"},[a("div",{staticClass:"vx-col flex-1"},[a("label",[s._v("Address 3")]),a("vs-input",{staticClass:"w-full",attrs:{"icon-pack":"feather",icon:"icon-map-pin",placeholder:"Address 3",name:"item-address3"},model:{value:s.cusaddress3,callback:function(e){s.cusaddress3=e},expression:"cusaddress3"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("item-address3"),expression:"errors.has('item-address3')"}],staticClass:"text-danger text-sm"},[s._v(s._s(s.errors.first("item-address3")))])],1),a("div",{staticClass:"vx-col flex-1"},[a("label",[s._v("Address 4")]),a("vs-input",{staticClass:"w-full",attrs:{"icon-pack":"feather",icon:"icon-map-pin",placeholder:"Address 4",name:"item-address4"},model:{value:s.cusaddress4,callback:function(e){s.cusaddress4=e},expression:"cusaddress4"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("item-address4"),expression:"errors.has('item-address4')"}],staticClass:"text-danger text-sm"},[s._v(s._s(s.errors.first("item-address4")))])],1)]),a("div",{staticClass:"vx-row px-4 pb-3"},[a("div",{staticClass:"vx-col w-1/2"},[a("label",[s._v("Postal Code")]),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"numeric",expression:"'numeric'"}],staticClass:"w-full",attrs:{"icon-pack":"feather",icon:"icon-map-pin",placeholder:"Postal Code",name:"Postal Code"},model:{value:s.cuspostcalcode,callback:function(e){s.cuspostcalcode=e},expression:"cuspostcalcode"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("Postal Code"),expression:"errors.has('Postal Code')"}],staticClass:"text-danger text-sm"},[s._v(s._s(s.errors.first("Postal Code")))])],1)])])]),a("div",{staticClass:"flex flex-wrap items-center p-6",attrs:{slot:"footer"},slot:"footer"},[a("vs-button",{staticClass:"mr-6",on:{click:s.submitData}},[s._v("Submit")]),a("vs-button",{attrs:{type:"border",color:"danger"},on:{click:function(e){s.isSidebarActiveLocal=!1}}},[s._v("Cancel")])],1)],1)},c=[],r=(a("7f7f"),a("ac6a"),a("ffc1"),a("9d63")),i=a.n(r),o=(a("bc3a"),{props:{isSidebarActive:{type:Boolean,required:!0},data:{type:Object,default:function(){}}},components:{VuePerfectScrollbar:i.a},mounted:function(){this.loadcategories()},data:function(){return{dataId:null,cusid:0,cusaccountID:0,cuscategorycustomer:"",cuscategorycustomerid:0,cuscurrencyid:1,cusname:"",cusvatnumber:"",cusaddress1:"",cusaddress2:"",cusaddress3:"",cusaddress4:"",cuspostcalcode:"",cuscontactname:"",cuscontactphone:"",cuscontactEmail:"",cuscontactmobile:"",cuswebaddress:"",cusenable:0,categoryDropdown:[],category:[],settings:{maxScrollbarLength:60,wheelSpeed:.6}}},watch:{isSidebarActive:function(s){s||this.initValues(),0===Object.entries(this.data).length?(this.initValues(),this.$validator.reset()):(this.dataId=this.data.id,this.cusid=this.data.id,this.cuscategorycustomer=this.data.categoryCustomerID,this.cuscategorycustomerid=this.data.categoryCustomerID,this.cusaccountID=this.data.accountID,this.cuscurrencyid=this.data.currencyid,this.cusname=this.data.customer,this.cusvatnumber=this.data.vatNumber,this.cusaddress1=this.data.address1,this.cusaddress2=this.data.address2,this.cusaddress3=this.data.address3,this.cusaddress4=this.data.address4,this.cuspostcalcode=this.data.postcalCode,this.cuscontactname=this.data.contactName,this.cuscontactphone=this.data.contactPhone,this.cuscontactEmail=this.data.contactEmail,this.cuscontactmobile=this.data.contactMobile,this.cuswebaddress=this.data.contactMobile,this.initValues())}},computed:{isSidebarActiveLocal:{get:function(){return this.isSidebarActive},set:function(s){s||(this.$emit("closeSidebar"),this.initValues())}},isFormValid:function(){return!this.errors.any()&&this.cusname&&this.cuscategorycustomerid&&this.dataPrice>0},scrollbarTag:function(){return this.$store.getters.scrollbarTag}},methods:{myFunction:function(s){},initValues:function(){this.data.id||(this.categoryDropdown=0,this.dataId=null,this.dataName="",this.cusaccountID=0,this.dataCategory=null,this.dataOrder_status="pending",this.dataPrice=0,this.cusid=null,this.cusaccountID=0,this.cuscategorycustomerid=0,this.cuscurrencyid=0,this.cusname="",this.cusvatnumber="",this.cusaddress1="",this.cusaddress2="",this.cusaddress3="",this.cusaddress4="",this.cuscontactname="",this.cuscontactphone="",this.cuscontactmobile="",this.cuswebaddress="",this.cusenable=0,this.cuspostcalcode="",this.cuscontactEmail="")},showLoadingOnElement:function(s,e,a){var t=this;t.$vs.loading({type:a,container:t.$refs[s].$el,scale:e})},loadcategories:function(){var s=this;s.showLoadingOnElement("categorySelect",1,"radius");var e=function(e){s.category=e.data,s.categoryDropdown=e.data.map((function(s){return{text:s.name,value:s.id}}))},a=function(){s.$vs.loading.close(s.$refs.categorySelect.$el)};s.$ajaxGet(s,"SalesSeeker/SP_JsonResult?storeproc=CRUD_CategoryCustomer",e,a)},submitData:function(){var s=this,e=this;this.$validator.validateAll().then((function(a){if(a){var t={id:s.dataId,categorycustomerid:s.cuscategorycustomer,currencyid:1,accountID:1,customer:s.cusname,name:s.cusname,vatnumber:s.cusvatnumber,address1:s.cusaddress1,address2:s.cusaddress2,address3:s.cusaddress3,address4:s.cusaddress4,postcalCode:s.cuspostcalcode,contactName:s.cuscontactname,contactEmail:s.cuscontactEmail,contactPhone:s.cuscontactphone,contactMobile:s.cuscontactmobile,webAddress:s.cuswebaddress,enable:1};null!==s.dataId&&s.dataId>=0?e.$emit("update",t):(delete t.id,t.popularity=0,e.$emit("addcustomer",t)),s.$emit("closeSidebar"),s.initValues()}}))}}}),n=o,l=(a("39fc"),a("2877")),d=Object(l["a"])(n,t,c,!1,null,"00b9cd70",null);e["a"]=d.exports}}]);
//# sourceMappingURL=chunk-c286c302.4624ec88.js.map