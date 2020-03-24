class GradeForm{
  constructor(formElement){
    this.formElement = formElement;
    this.formTitle = this.formElement.querySelector("#formTitle");
    this.formStudent = this.formElement.querySelector("#studentNameInput");
    this.formCourse = this.formElement.querySelector("#courseInput");
    this.formGrade = this.formElement.querySelector("#gradeInput");
    this.formId = this.formElement.querySelector("#gradeId");
    this.formSubmit = this.formElement.querySelector("#submitButton");
    this.createGrade = null;
    this.updateGrade = null;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.prepareUpdateForm = this.prepareUpdateForm.bind(this);
    this.resetForm = this.resetForm.bind(this);

    this.formElement.addEventListener("submit", this.handleSubmit);
  }

  onSubmit(createGrade){
    this.createGrade = createGrade;
  }

  onUpdate(updateGrade){
    this.updateGrade = updateGrade;
  }

  handleSubmit(event){
    event.preventDefault();
    var target = event.target;
    var formData = new FormData(target);
    console.log("handleSubmit called", formData)
    var nameInput = formData.get("name");
    var courseInput = formData.get("course");
    var gradeInput = formData.get("grade");

    this.createGrade(nameInput, courseInput, gradeInput);
    target.reset();
  }

  handleUpdate(event){
    // return function() {
      event.preventDefault();
      var target = event.target;
      var formData = new FormData(target);
      console.log("handleUpdate called", formData)
      var idInput = formData.get("id");
      var nameInput = formData.get("name");
      var courseInput = formData.get("course");
      var gradeInput = formData.get("grade");

      this.updateGrade(idInput, nameInput, courseInput, gradeInput);
      target.reset();

    // }
  }

  prepareUpdateForm(gradeData){
    this.formTitle.textContent = "Update Grade";
    this.formStudent.value = gradeData.name;
    this.formCourse.value = gradeData.course;
    this.formGrade.value = gradeData.grade;
    this.formId.value = gradeData.id;
    console.log(gradeData.id);
    this.formSubmit.textContent = "Update"
    this.formElement.removeEventListener("submit", this.handleSubmit);
    this.formElement.addEventListener("submit", this.handleUpdate);
  }

  resetForm(){
    this.formTitle.textContent = "Add Grade";
    this.formSubmit.textContent = "Add";
    this.formElement.removeEventListener("submit", this.handleUpdate);
    this.formElement.addEventListener("submit", this.handleSubmit);
  }
}
