var table = document.getElementById("grade-table");
var header = document.getElementById("header");
var gradeTable = new GradeTable(table);
var pageHeader = new PageHeader(header);
var app = new App(gradeTable, pageHeader);

app.start();
