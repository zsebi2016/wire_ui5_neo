sap.ui.define([
	"./BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("sapneo.my.wire.wire_ui5_neo.controller.Info", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sapneo.my.wire.wire_ui5_neo.view.Info
		 */
		onInit: function () {

			this.getRouter().getRoute("Info").attachPatternMatched(this._onInfoMatched,
				this);
		},

		_onInfoMatched: function (oEvent) {
			var sObjectId = oEvent.getParameter("arguments").objectId;
			this.getModel("appView").setProperty("/layout", "ThreeColumnsEndExpanded");
			this.getModel().metadataLoaded().then(function () {
				var sObjectPath = this.getModel().createKey("V_Expert", {
					ID: sObjectId
				});
				this.getView().bindElement({
					path: "/" + sObjectPath
				});
			}.bind(this));
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sapneo.my.wire.wire_ui5_neo.view.Info
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sapneo.my.wire.wire_ui5_neo.view.Info
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sapneo.my.wire.wire_ui5_neo.view.Info
		 */
		//	onExit: function() {
		//
		//	}

	});

});