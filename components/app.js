class App{
  constructor(gradeTable, pageHeader, gradeForm){
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
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

  createGrade(name, course, grade){
    console.log(name, course, grade);
  }

  handleCreateGradeError(error){
    console.error(error);
  }

  handleCreateGradeSuccess(){
    this.getGrades();
  }
}
