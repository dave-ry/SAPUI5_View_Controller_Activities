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
            
                var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();

                var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");
                var oMobileLabel = this.getView().byId("idLblPhone");
                var oMobileInput = this.getView().byId("idInputPhone");

                var oCreditCardLabel = this.getView().byId("idLblcvv");
                var oCreditCardInput = this.getView().byId("idInputcvv");

                if (sSelectedKey === "GCASH"){

                    // show the mobile field
                    oMobileLabel.setVisible(true);
                    oMobileInput.setVisible(true);

                    // In case user change mode of payment after initial select
                    oCreditCardLabel.setVisible(false);
                    oCreditCardInput.setVisible(false);                  

                    var sMsgGCash = oTextBundle.getText("gcashSelect");
                    MessageToast.show(sMsgGCash);

                 }else if(sSelectedKey === "CC"){

                    // Show the new field we added
                    oCreditCardLabel.setVisible(true);
                    oCreditCardInput.setVisible(true);

                    // In case user change mode of payment after initial select
                    oMobileLabel.setVisible(false);
                    oMobileInput.setVisible(false);                    

                    var sMsgCC = oTextBundle.getText("creditCardSelect");
                    MessageToast.show(sMsgCC);

                }else{                    
                    
                    oCreditCardLabel.setVisible(false);
                    oCreditCardInput.setVisible(false);                  
                    oMobileLabel.setVisible(false);
                    oMobileInput.setVisible(false);    
                    var sMsgOthers = oTextBundle.getText("otherModeOfPayment");                  
                    MessageToast.show(sMsgOthers);
                }
            },

        onPressCheckout: function (){
                var oInputFNameValue = this.getView().byId("idInptFName").getValue();
                var oInputLNameValue = this.getView().byId("idInptLName").getValue(); 

                // Check if last name is blank
                if (oInputLNameValue === ""){
                    sap.m.MessageToast.show("Last Name is blank"); 
                }

                // Check if first name is blank
                if (oInputFNameValue === ""){
                    sap.m.MessageToast.show( "First Name is blank"); 
                }
                
            }
    });
});