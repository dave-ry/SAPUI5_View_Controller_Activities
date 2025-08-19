sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("my.sapui5.act04.training.act04mvc.controller.view04", {
        onInit() {
        },

        onAddItem: function (){
                // this.fnDisplayMsg("Add button pressed");
                var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
                var sMsg = oTextBundle.getText("addButtonMsg");
                this.fnDisplayMsg(sMsg);
            },

        fnDisplayMsg: function (sMsg){
                MessageToast.show(sMsg);
            },

        onChangeMOP: function (oEvent) {
                var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");
                var oMobileLabel = this.getView().byId("idLblPhone");
                var oMobileInput = this.getView().byId("idInputPhone");

                if (sSelectedKey === "GCASH"){
                    // show the mobile field
                    oMobileLabel.setVisible(true);
                    oMobileInput.setVisible(true);
                } else {
                    oMobileLabel.setVisible(false);
                    oMobileInput.setVisible(false);
                }
            },

        onPressCheckout: function (){
                var oInputFNameValue = this.getView().byId("idInptFName").getValue();

                // Check if first name is blank
                if (oInputFNameValue === ""){
                    sap.m.MessageToast.show("Required Field is blank"); 
                }
            }
    });
});