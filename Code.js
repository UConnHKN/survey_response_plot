

function putCharts() {
    var sheet = SpreadsheetApp.getActiveSheet();
    sheet.appendRow(['hello', 'bye']);
    //we get the data
    var temp = sheet.getDataRange();
    var data = sheet.getDataRange().getValues();


    for(var i = 1; i < data.length; i++){
	
	

	//getRange(row, column, numRows, numColumns)
	//3 columns.
	//row and column indexed at 1
	var range = sheet.getRange(i, 2, 2, 3);

	var chart = sheet.newChart().asBarChart().setOption('dataLabel', 'value').setOption('series', {'dataLabel':'value'}).setLegendPosition(Charts.Position.NONE).setStacked().addRange(range)
	        .setPosition(i, 6, 0, 0)
	        .build();
	sheet.insertChart(chart);
	
    }

}
function chartInfo(){
      /*
  Here are the options from our good looking chart: {\"options\":{\"legacyContinuousAxisRemoved\":true,\"legacyScatterChartLabels\":true,\"legend\":\"in\",\"titleTextStyle\":{\"fontSize\":16,\"color\":\"#000\",\"bold\":true},\"useFirstColumnAsDomain\":false,\"isStacked\":true,\"treatLabelsAsText\":true,\"booleanRole\":\"certainty\",\"vAxes\":[{\"minValue\":null,\"maxValue\":null,\"viewWindow\":null,\"viewWindowMode\":null,\"useFormatFromData\":true},{\"useFormatFromData\":true}],\"hAxis\":{\"viewWindow\":{\"max\":null,\"min\":null},\"minValue\":null,\"maxValue\":null,\"logScale\":false,\"useFormatFromData\":true,\"gridlines\":{\"count\":\"-1\"}},\"width\":600,\"height\":371,\"title\":\"HelloX\",\"theme\":\"maximized\",\"series\":{\"0\":{\"annotations\":{\"stemColor\":\"none\"},\"dataLabel\":\"value\"},\"1\":{\"annotations\":{\"stemColor\":\"none\"},\"dataLabel\":\"value\"},\"2\":{\"annotations\":{\"stemColor\":\"none\"},\"dataLabel\":\"value\"}},\"hasHiddenData\":false},\"state\":{},\"view\":{\"columns\":[{\"calc\":\"emptyString\",\"sourceColumn\":0,\"type\":\"string\"},0,{\"calc\":\"stringify\",\"type\":\"string\",\"sourceColumn\":0,\"properties\":{\"role\":\"annotation\"}},1,{\"calc\":\"stringify\",\"type\":\"string\",\"sourceColumn\":1,\"properties\":{\"role\":\"annotation\"}},2,{\"calc\":\"stringify\",\"type\":\"string\",\"sourceColumn\":2,\"properties\":{\"role\":\"annotation\"}}],\"rows\":null},\"isDefaultVisualization\":true,\"chartType\":\"BarChart\",\"chartName\":\"Chart 32\"}
      */
    var sheet = SpreadsheetApp.getActiveSheet();
    var charts = sheet.getCharts();
    var options = Object.getOwnPropertyNames(charts[0].getOptions());

    Logger.log(options);
}

function onOpen(){
    var spreadSheet = SpreadsheetApp.getActive();
    var menuItem = [{name: 'Generate bar chart', functionName: 'putCharts'}];
    spreadSheet.addMenu('Response Chart', menuItem);
}
