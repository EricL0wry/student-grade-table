var table = document.getElementById("grade-table");
var header = document.getElementById("header");
var form = document.getElementById("grade-form");
var noGradesElement = document.getElementById("no-grades");
var gradeTable = new GradeTable(table, noGradesElement);
var pageHeader = new PageHeader(header);
var gradeForm = new GradeForm(form);
var app = new App(gradeTable, pageHeader, gradeForm);

app.start();
