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
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
    this.editGrade = this.editGrade.bind(this);
    this.updateGrade = this.updateGrade.bind(this);
    this.handleUpdateGradeError = this.handleUpdateGradeError.bind(this);
    this.handleUpdateGradeSuccess = this.handleUpdateGradeSuccess.bind(this);
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
    averageGrade = (gradeTotal / grades.length).toFixed(1);

    if(averageGrade === "NaN"){
      averageGrade = "0.0";
    }

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
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeForm.onUpdate(this.updateGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);
    this.gradeTable.onEditClick(this.editGrade);
  }

  createGrade(name, course, grade){
    $.ajax({
      method: "POST",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: {
        "X-Access-Token": "U8ZjMVRH"
      },
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    })
  }

  handleCreateGradeError(error){
    console.error(error);
  }

  handleCreateGradeSuccess(){
    this.getGrades();
  }

  deleteGrade(id){
    $.ajax({
      method: "DELETE",
      url: `https://sgt.lfzprototypes.com/api/grades/${id}`,
      headers: {
        "X-Access-Token": "U8ZjMVRH"
      },
      success: this.handleDeleteGradeSuccess,
      fail: this.handleDeleteGradeError
    })
  }

  handleDeleteGradeError(error){
    console.error(error);
  }

  handleDeleteGradeSuccess(){
    this.getGrades();
  }

  editGrade(gradeData){
    console.log("app.editGrade called", gradeData);
    this.gradeForm.prepareUpdateForm(gradeData);
  }

  updateGrade(id, name, course, grade){
    $.ajax({
      method: "PATCH",
      url: `https://sgt.lfzprototypes.com/api/grades/${id}`,
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      headers: {
        "X-Access-Token": "U8ZjMVRH"
      },
      success: this.handleUpdateGradeSuccess,
      error: this.handleUpdateGradeError
    })
  }

  handleUpdateGradeError(error){
    console.error("farts", error);
    this.gradeForm.resetForm()
  }

  handleUpdateGradeSuccess(){
    this.getGrades();
    this.gradeForm.resetForm();
  }
}
