sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageToast"
], function (Controller, MessageBox, MessageToast) {
	"use strict";

	return Controller.extend("sapneo.my.wire.wire_ui5_neo.controller.Detail", {

		handleFavorite: function (evt) {
			// show confirmation dialog
			var bundle = this.getView().getModel("i18n").getResourceBundle();
			MessageBox.confirm(
				bundle.getText("FavoriteDialogMsg"),
				function (oAction) {
					if (MessageBox.Action.OK === oAction) {
						// notify user
						var successMsg = bundle.getText("FavoriteDialogSuccessMsg");
						MessageToast.show(successMsg);
						// TODO call proper service method and update model (not part of this tutorial)
					}
				},
				bundle.getText("OrderDialogTitle")
			);
		},

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sapneo.my.wire.wire_ui5_neo.view.Detail
		 */
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("Detail").attachMatched(this._onRouteMatched, this);
		},
		_onRouteMatched: function (oEvent) {
			var oArgs, oView;
			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();
			oView.bindElement({
				//path: "/V_Team(" + "100001" + ")",
				path: "/V_Team(" + oArgs.teamId + ")",
				events: {
					dataRequested: function () {
						oView.setBusy(true);
					},
					dataReceived: function () {
						oView.setBusy(false);
					}
				}
			});
		},
		handleNavButtonPress: function (evt) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			//oRouter.navTo("home"); //maybe not working? home in manifest.json
			oRouter.navTo("");
		},
		
		//show in a pop-up which list element was pressed
		handleListItemPress: function (oEvent) {
			var expertName = oEvent.getSource().getBindingContext().getProperty("NAME");
			var expertId = oEvent.getSource().getBindingContext().getProperty("ID");
			var expertExtId = oEvent.getSource().getBindingContext().getProperty("EXT_ID");
			var expertManager = oEvent.getSource().getBindingContext().getProperty("REPORTS_TO");
			var skillSet = oEvent.getSource().getBindingContext().getProperty("SKILL_SET");
			MessageBox.show(
				"Name: " + expertName + "\n ID: " + expertId + "\n HR ID: " + expertExtId + "\n Manager: " + expertManager 
				+ "\n Skillset: " + skillSet, 
				{
					icon: sap.m.MessageBox.Icon.INFORMATION,
					title: "Expert Info",
					actions: [sap.m.MessageBox.Action.OK]
				}
			);
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sapneo.my.wire.wire_ui5_neo.view.Detail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sapneo.my.wire.wire_ui5_neo.view.Detail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sapneo.my.wire.wire_ui5_neo.view.Detail
		 */
		//	onExit: function() {
		//
		//	}

	});

});