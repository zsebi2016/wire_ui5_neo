sap.ui.define([
	"sapneo/my/wire/wire_ui5_neo/controller/BaseController"
], function (BaseController) {
	"use strict";
	return BaseController.extend("sapneo.my.wire.wire_ui5_neo.controller.Home", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sapneo.my.wire.wire_ui5_neo.view.Home
		 */
		//onInit: function () {},
		onDisplayNotFound: function () {
			// display the "notFound" target without changing the hash
			this.getRouter().getTargets().display("TargetNotFound", {
				fromTarget: "Home"
			});
		},
		
		
		onNavToTeams: function () {
			//this.getRouter().navTo("View1");
			this.getRouter().getTargets().display("TargetView1", {
				fromTarget: "Home"
			})
		},
		
		
		onNavToEmployeeOverview: function (oEvent) {
			this.getRouter().navTo("employeeOverview");
		}

	});
});