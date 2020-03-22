class App{
  constructor(gradeTable, pageHeader, gradeForm){
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
  }

  handleGetGradesError(error){
    console.error(error);
  }

  handleGetGradesSuccess(grades){
    var gradeTotal = 0;
    var averageGrade = null;

    for(var gradeIndex = 0; gradeIndex < grades.length; gradeIndex++){
      gradeTotal += grades[gradeIndex].grade;
    }
    averageGrade = gradeTotal / grades.length;

    this.gradeTable.updateGrades(grades);
    this.pageHeader.updateAverage(averageGrade);
  }

  getGrades(){
    $.ajax({
      url: "https://sgt.lfzprototypes.com/api/grades",
      method: "GET",
      headers: {
        "X-Access-Token": "U8ZjMVRH"
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
  }

  start(){
    this.getGrades();
  }
}
