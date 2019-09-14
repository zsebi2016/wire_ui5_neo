function initModel() {
	var sUrl = "/Wire_Service_Team138/odata/v2/ExpertService/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}