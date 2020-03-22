var table = document.getElementById("grade-table");
var header = document.getElementById("header");
var form = document.getElementById("grade-form");
var gradeTable = new GradeTable(table);
var pageHeader = new PageHeader(header);
var gradeForm = new GradeForm(form);
var app = new App(gradeTable, pageHeader, gradeForm);

app.start();
