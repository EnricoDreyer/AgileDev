(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1cdffb8"],{"0952":function(e,t,a){},"874e":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("product-sidebar",{attrs:{isSidebarActive:e.productSidebar,data:e.sidebarData},on:{closeSidebar:e.toggleDataSidebar,updateProduct:e.updateProduct,addProduct:e.addProduct}}),a("vx-card",{ref:"MainCard"},[a("div",[a("vs-table",{ref:"productTable",staticClass:"vs-con-loading__container",attrs:{pagination:"","max-items":e.itemsPerPage,search:"",data:e.products},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.data;return e._l(s,(function(t,s){return a("vs-tr",{key:s,attrs:{data:t}},[a("vs-td",{attrs:{data:t.code}},[e._v(e._s(t.code))]),a("vs-td",{attrs:{data:t.description}},[e._v(e._s(t.description))]),a("vs-td",{attrs:{data:t.sellingPrice}},[e._v(e._s("R "+Number(t.sellingPrice).toLocaleString("en")))]),a("vs-td",{staticClass:"whitespace-no-wrap"},[a("feather-icon",{attrs:{icon:"EditIcon",svgClasses:"w-5 h-5 hover:text-primary stroke-current"},on:{click:function(a){return a.stopPropagation(),e.editData(t)}}}),a("feather-icon",{staticClass:"ml-2",attrs:{icon:"TrashIcon",svgClasses:"w-5 h-5 hover:text-danger stroke-current"},on:{click:function(a){return a.stopPropagation(),e.deleteData(t.id)}}})],1)],1)}))}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[a("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow",attrs:{slot:"header"},slot:"header"},[a("div",{ref:"addNew",staticClass:"p-3 mr-4 rounded-lg cursor-pointer flex items-center justify-between text-lg font-medium text-base text-primary border border-solid border-primary",on:{click:e.addProduct}},[a("feather-icon",{attrs:{icon:"PlusIcon",svgClasses:"h-4 w-4"}}),a("span",{staticClass:"ml-2 text-base text-primary"},[e._v("Add New")])],1),a("vs-dropdown",{staticClass:"cursor-pointer mr-4",attrs:{"vs-trigger-click":""}},[a("div",{staticClass:"p-4 border border-solid border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"},[a("span",{staticClass:"mr-2"},[e._v(e._s(e.currentPage*e.itemsPerPage-(e.itemsPerPage-1))+" - "+e._s(e.products.length-e.currentPage*e.itemsPerPage>0?e.currentPage*e.itemsPerPage:e.products.length)+" of "+e._s(e.products.length))]),a("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),a("vs-dropdown-menu",[a("vs-dropdown-item",{on:{click:function(t){e.itemsPerPage=10}}},[a("span",[e._v("10")])]),a("vs-dropdown-item",{on:{click:function(t){e.itemsPerPage=20}}},[a("span",[e._v("20")])]),a("vs-dropdown-item",{on:{click:function(t){e.itemsPerPage=50}}},[a("span",[e._v("50")])]),a("vs-dropdown-item",{on:{click:function(t){e.itemsPerPage=100}}},[a("span",[e._v("100")])])],1)],1)],1),a("template",{slot:"thead"},[a("vs-th",{attrs:{"sort-key":"Code"}},[e._v("Code")]),a("vs-th",{attrs:{"sort-key":"Description"}},[e._v("Description")]),a("vs-th",{staticStyle:{"min-width":"110px"},attrs:{"sort-key":"SellingPrice"}},[e._v("Price")]),a("vs-th",[e._v("Action")])],1)],2)],1)])],1)},r=[],i=(a("bc3a"),a("c38f")),o=a.n(i),c=(a("0952"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vs-sidebar",{staticClass:"add-new-data-sidebar items-no-padding",attrs:{"click-not-close":"","position-right":"",parent:"body","default-index":"1",color:"primary",spacer:""},model:{value:e.isSidebarActiveLocal,callback:function(t){e.isSidebarActiveLocal=t},expression:"isSidebarActiveLocal"}},[a("div",{staticClass:"mt-6 flex items-center justify-between px-6"},[a("h4",[e._v(e._s(0===Object.entries(this.data).length?"ADD NEW":"UPDATE")+" ITEM")]),a("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:"XIcon"},on:{click:function(t){t.stopPropagation(),e.isSidebarActiveLocal=!1}}})],1),a("vs-divider",{staticClass:"mb-0"}),a("VuePerfectScrollbar",{staticClass:"scroll-area--data-list-add-new pt-4 pb-6",attrs:{settings:e.settings}},[a("div",{staticClass:"pl-6 pr-6 pb-6"},[a("div",{staticClass:"pb-4"},[a("label",[e._v("Category")]),a("v-select",{ref:"categoryDropdown",attrs:{placeholder:"Search / Select Category",options:e.categories},model:{value:e.categoryDropdown,callback:function(t){e.categoryDropdown=t},expression:"categoryDropdown"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("Category"),expression:"errors.has('Category')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("Category")))])],1),a("div",{staticClass:"pb-4"},[a("label",[e._v("Product Code")]),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{placeholder:"Product Code",name:"Product Code"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("Product Code"),expression:"errors.has('Product Code')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("Product Code")))])],1),a("div",[a("label",[e._v("Description")]),a("vs-textarea",{staticClass:"w-full",model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1),a("div",{staticClass:"pb-4"},[a("label",[e._v("Cost Price (R)")]),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{placeholder:"Cost Price",name:"Cost Price"},model:{value:e.costPrice,callback:function(t){e.costPrice=t},expression:"costPrice"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("Cost Price"),expression:"errors.has('Cost Price')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("Cost Price")))])],1),a("div",{staticClass:"pb-4"},[a("label",[e._v("Selling Price (R)")]),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{placeholder:"Selling Price",name:"Selling Price"},model:{value:e.sellingPrice,callback:function(t){e.sellingPrice=t},expression:"sellingPrice"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("Selling Price"),expression:"errors.has('Selling Price')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("Selling Price")))])],1)])]),a("div",{staticClass:"flex flex-wrap items-center justify-center pb-4 pt-1",attrs:{slot:"footer"},slot:"footer"},[a("vs-button",{staticClass:"mr-3",attrs:{color:"success"},on:{click:e.submitData}},[e._v("Submit")]),a("vs-button",{attrs:{type:"border",color:"danger"},on:{click:function(t){e.isSidebarActiveLocal=!1}}},[e._v("Cancel")])],1)],1)}),n=[],d=(a("7f7f"),a("ac6a"),a("ffc1"),a("9d63")),l=a.n(d),u=a("4a7a"),p=a.n(u),v={props:{isSidebarActive:{type:Boolean,required:!0},data:{type:Object,default:function(){}}},components:{VuePerfectScrollbar:l.a,"v-select":p.a},mounted:function(){},data:function(){return{pid:0,code:"",description:"",costPrice:"",sellingPrice:"",categoryDropdown:0,categories:[],settings:{maxScrollbarLength:60,wheelSpeed:.6}}},watch:{isSidebarActive:function(e){var t=this;e&&(0===Object.entries(t.data).length?(t.initValues(),t.loadCategories(),t.$validator.reset()):(t.loadCategories((function(){t.categoryDropdown=t.categories.filter((function(e){return e.value==t.data.categoryProductID}))[0]})),t.pid=t.data.pid,t.code=t.data.code,t.description=t.data.description,t.costPrice=t.data.costPrice,t.sellingPrice=t.data.sellingPrice))}},computed:{isSidebarActiveLocal:{get:function(){return this.isSidebarActive},set:function(e){e||(this.$emit("closeSidebar"),this.$validator.reset(),this.initValues())}},scrollbarTag:function(){return this.$store.getters.scrollbarTag}},methods:{initValues:function(){this.pid=null,this.categories=[],this.categoryDropdown=0,this.code="",this.description="",this.costPrice="",this.sellingPrice=""},showLoadingOnElement:function(e,t,a){var s=this;s.$vs.loading({type:a,container:s.$refs[e].$el,scale:t})},loadCategories:function(e){var t=this;t.showLoadingOnElement("categoryDropdown",.65,"radius");var a=function(a){t.categories=a.data.map((function(e){return{label:e.name,value:e.id}})),e&&"function"==typeof e&&e()},s=function(){t.$vs.loading.close(t.$refs.categoryDropdown.$el)};t.$ajaxGet(t,"SalesSeeker/SP_JsonResult?storeproc=CRUD_CategoryProduct&parameters=1",a,s)},submitData:function(){var e=this,t=this;this.$validator.validateAll().then((function(a){if(a){var s={id:e.dataId,categorycustomerid:e.cuscategorycustomer,currencyid:1,accountID:1,customer:e.cusname,name:e.cusname,vatnumber:e.cusvatnumber,address1:e.cusaddress1,address2:e.cusaddress2,address3:e.cusaddress3,address4:e.cusaddress4,postcalCode:e.cuspostcalcode,contactName:e.cuscontactname,contactEmail:e.cuscontactEmail,contactPhone:e.cuscontactphone,contactMobile:e.cuscontactmobile,webAddress:e.cuswebaddress,enable:1};null!==e.dataId&&e.dataId>=0?t.$emit("update",s):(delete s.id,s.popularity=0,t.$emit("addcustomer",s)),e.$emit("closeSidebar"),e.initValues()}}))}}},m=v,f=(a("b29a"),a("2877")),g=Object(f["a"])(m,c,n,!1,null,"82eae826",null),h=g.exports,b={data:function(){return{itemsPerPage:10,productSidebar:!1,selected:[],products:[],productserror:[],categorieserrors:[],datetime:null,configdateTimePicker:{enableTime:!0,dateFormat:"Y/m/d h:m"},date2:null,sidebarData:{},isMounted:!1}},components:{flatPickr:o.a,productSidebar:h},computed:{currentPage:function(){return this.isMounted?this.$refs.productTable.currentx:0}},mounted:function(){this.loadProducts(),this.isMounted=!0},methods:{addProduct:function(){this.sidebarData={},this.toggleDataSidebar(!0)},updateProduct:function(){},showLoadingOnElement:function(e,t,a){var s=this;s.$vs.loading({type:a,container:s.$refs[e].$el,scale:t})},deleteData:function(e){},editData:function(e){this.sidebarData=e,this.toggleDataSidebar(!0)},loadProducts:function(){var e=this;e.showLoadingOnElement("productTable",1,"radius");var t=function(t){e.products=t.data},a=function(){e.$vs.loading.close(e.$refs.productTable.$el)};e.$ajaxGet(e,"SalesSeeker/SP_JsonResult?storeproc=CRUD_Product_Get&parameters=1",t,a)},toggleDataSidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.productSidebar=e}}},P=b,w=Object(f["a"])(P,s,r,!1,null,null,null);t["default"]=w.exports},b29a:function(e,t,a){"use strict";var s=a("bc4f"),r=a.n(s);r.a},bc4f:function(e,t,a){}}]);
//# sourceMappingURL=chunk-d1cdffb8.8df78df4.js.map