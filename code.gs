//Return the HTML from the Index file
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index');
}
  
  //Declare the spreadsheet to use
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('waste_tracking');
  
  //Return total litres of non-recyclable trash based on number of days entered
  function returnBinOneXDays() {
    var bin1Days = spreadsheet.getRange(2, 6).getValues();
    Logger.log(bin1Days);
    return bin1Days;
  }

  //Return total litres of recyclable trash based on number of days entered
  function returnBinTwoXDays() {
    var bin2Days = spreadsheet.getRange(3, 6).getValues();
    Logger.log(bin2Days);
    return bin2Days;
  }

  //Return total litres of non-recyclable trash based on month entered
  function returnBinOneMonth() {
    var bin1Month = spreadsheet.getRange(2, 12).getValues();
    Logger.log(bin1Month);
    return bin1Month;
  }

  //Return total litres of recyclable trash based on month entered
  function returnBinTwoMonth() {
    var bin2Month = spreadsheet.getRange(3, 12).getValues();
    Logger.log(bin2Month);
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
