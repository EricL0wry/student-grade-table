class GradeTable{
  constructor(tableElement, noGradesElement){
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
    this.deleteGrade = null;
    this.updateGrades = this.updateGrades.bind(this);
    this.renderGradeRow = this.renderGradeRow.bind(this);
  }

  updateGrades(grades){
    var tableBody = this.tableElement.querySelector("tbody");
    tableBody.innerHTML = "";

    if(!grades){
      this.noGradesElement.className = "";
    } else {
      this.noGradesElement.className = "d-none";
    }

    for(var gradeIndex = 0; gradeIndex < grades.length; gradeIndex++){
      var newRow = this.renderGradeRow(grades[gradeIndex], this.deleteGrade);

      tableBody.appendChild(newRow);
    }
  }

  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade){
    var newRow = document.createElement("tr");
    var newStudent = document.createElement("td");
    var newCourse = document.createElement('td');
    var newGrade = document.createElement("td");
    var newOperations = document.createElement("td");
    var newDeleteButton = document.createElement("button");

    newStudent.textContent = data.name;
    newCourse.textContent = data.course;
    newGrade.textContent = data.grade;
    newDeleteButton.textContent = "DELETE";
    newDeleteButton.className = "btn btn-outline-danger btn-sm"
    newDeleteButton.addEventListener("click", function(data){
      deleteGrade(data.id);
    })

    newOperations.appendChild(newDeleteButton);

    newRow.appendChild(newStudent);
    newRow.appendChild(newCourse);
    newRow.appendChild(newGrade);
    newRow.appendChild(newOperations);

    return newRow;
  }

}
