class GradeTable{
  constructor(tableElement, noGradesElement){
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
    this.deleteGrade = null;
    this.editGrade = null;
    this.updateGrades = this.updateGrades.bind(this);
    this.renderGradeRow = this.renderGradeRow.bind(this);
  }

  updateGrades(grades){
    var tableBody = this.tableElement.querySelector("tbody");
    tableBody.innerHTML = "";

    if(grades.length === 0){
      this.noGradesElement.className = "";
    } else {
      this.noGradesElement.className = "d-none";
    }

    for(var gradeIndex = 0; gradeIndex < grades.length; gradeIndex++){
      var newRow = this.renderGradeRow(grades[gradeIndex], this.deleteGrade, this.editGrade);

      tableBody.appendChild(newRow);
    }
  }

  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }

  onEditClick(editGrade){
    this.editGrade = editGrade;
  }

  renderGradeRow(data, deleteGrade, editGrade){
    var newRow = document.createElement("tr");
    var newStudent = document.createElement("td");
    var newCourse = document.createElement('td');
    var newGrade = document.createElement("td");
    var newOperations = document.createElement("td");
    var newDeleteButton = document.createElement("i");
    var newEditButton = document.createElement("i");

    newStudent.textContent = data.name;
    newCourse.textContent = data.course;
    newGrade.textContent = data.grade;

    newEditButton.className = "fas fa-edit text-info";
    newEditButton.addEventListener("click", function(){
      editGrade(data);
    });

    newDeleteButton.className = "fa fa-trash text-danger ml-4"
    newDeleteButton.addEventListener("click", function(){
      deleteGrade(data.id);
    });

    newOperations.appendChild(newEditButton);
    newOperations.appendChild(newDeleteButton);

    newRow.appendChild(newStudent);
    newRow.appendChild(newCourse);
    newRow.appendChild(newGrade);
    newRow.appendChild(newOperations);

    return newRow;
  }

}
