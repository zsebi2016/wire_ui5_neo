/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapneo/my/wire/wire_ui5_neo/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});