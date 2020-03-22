class GradeTable{
  constructor(tableElement){
    this.tableElement = tableElement;
    this.deleteGrade = null;
    this.updateGrades = this.updateGrades.bind(this);
  }

  updateGrades(grades){
    console.log(grades);
    var tableBody = this.tableElement.querySelector("tbody");
    tableBody.innerHTML = "";
    for(var gradeIndex = 0; gradeIndex < grades.length; gradeIndex++){
      var newRow = document.createElement("tr");
      var newStudent = document.createElement("td");
      var newCourse = document.createElement('td');
      var newGrade = document.createElement("td");

      newStudent.textContent = grades[gradeIndex].name;
      newCourse.textContent = grades[gradeIndex].course;
      newGrade.textContent = grades[gradeIndex].grade;

      newRow.appendChild(newStudent);
      newRow.appendChild(newCourse);
      newRow.appendChild(newGrade);

      tableBody.appendChild(newRow);
    }
  }

  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }

}
