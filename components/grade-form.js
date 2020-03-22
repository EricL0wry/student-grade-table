class GradeForm{
  constructor(formElement){
    this.formElement = formElement;
    this.createGrade = null;
    this.handleSubmit = this.handleSubmit.bind(this);

    this.formElement.addEventListener("submit", this.handleSubmit);
  }

  onSubmit(createGrade){
    this.createGrade = createGrade;
  }

  handleSubmit(event){
    event.preventDefault();
    var target = event.target;
    var formData = new FormData(target);
    var nameInput = formData.get("name");
    var courseInput = formData.get("course");
    var gradeInput = formData.get("grade");

    this.createGrade(nameInput, courseInput, gradeInput);
    target.reset();
  }

}
