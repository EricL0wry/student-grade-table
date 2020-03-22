class GradeForm{
  constructor(formElement){
    this.formElement = formElement.addEventListener("submit", this.handleSubmit);
    this.createGrade = null;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onSubmit(createGrade){
    this.createGrade = createGrade;
  }

  handleSubmit(event){
    event.preventDefautl();
    console.log("GradeForm.handleSubmit fired")
  }

}
