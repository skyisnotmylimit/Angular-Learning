import { Component,signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form-component.html',
  styleUrls: ['./form-component.css'],
})
export class FormComponent {
  isReactiveForm = signal<boolean>(false);

  formSubmitedData = signal<string>("");

  reactiveFormData = new FormGroup({
    userName : new FormControl(""),
    password: new FormControl(""),
    role : new FormControl(""),
    preferedContact : new FormControl(""),
    acceptTermsConditions : new FormControl(false)
  });

  templateDrivenFormData = {
    name:"",
    age:"",
    dob:"",
    email:"",
    address:""
  }

  onToggleChange() {
    this.isReactiveForm.update((currentValue) => !currentValue);
  }

  onTdFormSubmit(form: NgForm) {
    this.formSubmitedData.set(JSON.stringify(form.value));
  }

  onReactiveFormSubmit() {
    this.formSubmitedData.set(JSON.stringify(this.reactiveFormData.value));
  }
}
