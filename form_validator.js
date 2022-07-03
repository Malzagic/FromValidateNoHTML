class FormValidator {
  constructor() {
    this.formFields = [];

    this.form = document.querySelector('#form');

    this.addFromField('#username', {minlength: 4, maxlength: 20});
    this.addFromField('#email', {minlength: 4, maxlength: 100});
    this.addFromField('#password', {minlength: 5, maxlength: 30});
    this.addFromField('#password2', {minlength: 5, maxlength: 30, matchWithPasswordId: '#password'});

    this.init();
  }

  addFromField = (cssSelector, options) => {
    const formField = new FormField(cssSelector, options);
    this.formFields.push(formField)
  }

  init() {
    this.form.addEventListener('submit', e => {
      e.preventDefault();

      this.validateForm();
    });
  }

  validateForm = () => {
    const formResults = this.formFields.map(f => f.validate());
  }
}