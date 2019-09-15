sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller, MessageBox) {
	"use strict";

	return Controller.extend("sapneo.my.wire.wire_ui5_neo.controller.View1", {
		onInit: function () {

		},

		// show in a pop-up which list element was pressed - the starting impl
		/*handleListItemPress: function (oEvent) {
			MessageBox.show(
				"You pressed item: " + oEvent.getSource().getBindingContext(), {
					icon: sap.m.MessageBox.Icon.INFORMATION,
					title: "It works!",
					actions: [sap.m.MessageBox.Action.OK]
				}
			)*/
		
		handleListItemPress: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var selectedTeamId = oEvent.getSource().getBindingContext().getProperty("ID"); //ID from the V_TEAM
			oRouter.navTo("Detail", {
				//teamId: 100002
				teamId: selectedTeamId
			});
		}
	});
});