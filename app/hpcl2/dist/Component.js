sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","hpcl2/model/models"],function(e,t,i){"use strict";return e.extend("hpcl2.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
//# sourceMappingURL=Component.js.map