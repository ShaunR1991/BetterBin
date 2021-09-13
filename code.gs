//Return the HTML from the Index file
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index');
}
  
  //Declare the spreadsheet to use
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  
  //Return total litres of non-recyclable trash based on number of days entered
  function returnBinOneXDays() {
    var bin1Days = spreadsheet.getRange(2, 6).getValues();
    return bin1Days;
  }

  //Return total litres of recyclable trash based on number of days entered
  function returnBinTwoXDays() {
    var bin2Days = spreadsheet.getRange(3, 6).getValues();
    return bin2Days;
  }

  //Return total litres of non-recyclable trash based on month entered
  function returnBinOneMonth() {
    var bin1Month = spreadsheet.getRange(2, 12).getValues();
    return bin1Month;
  }

  //Return total litres of recyclable trash based on month entered
  function returnBinTwoMonth() {
    var bin2Month = spreadsheet.getRange(3, 12).getValues();
    return bin2Month;
  }

  //Uses the input from HTML to set the number of days of data wanted
  function setXDays(xDays) {
    spreadsheet.getRange(1, 6).activate();
    spreadsheet.getRange(1, 6).setValue(xDays);
};

  //Uses the input from HTML to set the month of data wanted
  function setMonth(month) {
    spreadsheet.getRange(1, 12).activate();
    spreadsheet.getRange(1, 12).setValue(month);
  }

  //Returns the corresponding yearly waste value for input month. Used for chart.
  function getYearlyData(){
    return spreadsheet.getRange(1, 27, 13, 3).getValues();
  }

function test() {
  var e = {};
  e.parameter = {};
  e.parameter.event = 'sheetTest1';
  e.parameter.data = '[1,1234]';
  e.parameter.coreid = '1f0030001647ffffffffffff';
  e.parameter.published_at = new Date().toISOString();
  doPost(e);
}

function doPost(e) {
  // e.parameter.event
  // e.parameter.data
  // e.parameter.coreid
  // e.parameter.published_at "2016-04-16T13:37:08.728Z"

  var publishedAt = new Date(e.parameter.published_at);

  var dataArray = [];
  try {
    dataArray = JSON.parse(e.parameter.data);
  }
  catch(e) {
  }

  var sheet = SpreadsheetApp.getActiveSheet();

  var row = [e.parameter.coreid, publishedAt];

  row = row.concat(dataArray);

  sheet.appendRow(row);

  var result = {};
  result.ok = true;

  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}
