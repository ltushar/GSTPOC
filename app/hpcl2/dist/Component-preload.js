//@ui5-bundle hpcl2/Component-preload.js
sap.ui.require.preload({
	"hpcl2/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","hpcl2/model/models"],function(e,t,i){"use strict";return e.extend("hpcl2.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"hpcl2/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){"use strict";return n.extend("hpcl2.controller.App",{onInit:function(){}})});
},
	"hpcl2/controller/View1.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("hpcl2.controller.View1",{onInit:function(){var e=new sap.ui.model.json.JSONModel({isVisible:false});this.getView().setModel(e,"productsModel")},onPress:function(e){var t=this.getView().byId("fileUploader");var o=t.oFilePath.oParent.oFileUpload.files[0];var a=this.getView().getModel();var r=this.getView().getModel().getServiceUrl();if(o==undefined){sap.m.MessageBox.warning("Please upload the file")}else{if(o){var i=new FileReader;i.onload=e=>{var t=e.target.result;var o=this.getView().getModel("productsModel");var i=new Uint8Array(t);var n="";i.forEach(function(e){n+=String.fromCharCode(e)});var s=btoa(n);var l={Excelbase64:s};$.ajax({type:"POST",contentType:"application/json",url:r+"excelExtract",data:JSON.stringify(l),success:function(e,t,r){a.aBindings=e.value;sap.m.MessageBox.success(`Processed successfully, download the excel file.`,{onClose:function(e){if(e==="OK"){o.setProperty("/isVisible",true)}}})},error:function(){}});console.log("Base64 String:",s)};i.readAsArrayBuffer(o);this.sValue=t.mProperties.value}}},onDownload:function(){var e=this.getView().getModel().aBindings;var t=window.atob(e);var o=t.length;var a=new Uint8Array(o);for(let e=0;e<o;e++){a[e]=t.charCodeAt(e)}var r=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});var i=document.createElement("a");var n=URL.createObjectURL(r);i.href=n;i.download=this.sValue;document.body.appendChild(i);i.click();document.body.removeChild(i);URL.revokeObjectURL(n)}})});
},
	"hpcl2/i18n/i18n.properties":'# This is the resource bundle for hpcl2\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=GST File\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=GST File\n\n#XFLD,45\nflpTitle=GST File Upload\n',
	"hpcl2/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"hpcl2","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.14.4","toolsId":"c4f07164-b892-4257-8a53-8aa1244f87bc"},"dataSources":{"mainService":{"uri":"browse/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"gstfileupload-display":{"semanticObject":"gstfileupload","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.127.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"hpcl2.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"hpcl2.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteView1","pattern":":?query:","target":["TargetView1"]}],"targets":{"TargetView1":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"View1","viewName":"View1"}}},"rootView":{"viewName":"hpcl2.view.App","type":"XML","async":true,"id":"App"}},"sap.cloud":{"public":true,"service":"gstapprouter"}}',
	"hpcl2/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"hpcl2/view/App.view.xml":'<mvc:View controllerName="hpcl2.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"hpcl2/view/View1.view.xml":'<mvc:View controllerName="hpcl2.controller.View1"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m" xmlns:u="sap.ui.unified"><Page id="page" title="{i18n>title}"><content><u:FileUploader\n\t\t\tid="fileUploader"\n\t\t\tname="myFileUpload"\n\t\t\tuploadUrl="upload/"\n\t\t\ttooltip="Please upload the file"\n\t\t\tuploadComplete="handleUploadComplete"/><Button\n\t\t\ttext="Upload File"\n\t\t\tpress="onPress" id="uploadbtn"/><Button\n\t\t\ttext="Download File"\n\t\t\tpress="onDownload" id="uploadownload" visible="{productsModel>/isVisible}"/></content></Page></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
