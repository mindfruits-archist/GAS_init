function doGet(e) {
  var html = HtmlService.createTemplateFromFile('index');

  html.myData = "thisismydata;)"

  return html.evaluate()
}
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}


function getLaunched(tmp){
  return "okok";
}
