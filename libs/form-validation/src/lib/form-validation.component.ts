import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from './utils/validation';

@Component({
  selector: 'lib-formValidation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {
  form: FormGroup;
  isSubmitted: boolean = false;

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  constructor(public formBuilder: FormBuilder) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  /**
   * createForm
   */
  public createForm() {
    this.form = this.formBuilder.group(
      {
        fullName: ['', Validators.required],
        userName: ['', [
                        Validators.required,
                        Validators.minLength(6),
                        Validators.maxLength(20)
                      ]],
        email: ['', Validators.required, Validators.email],
        password: ['', [
                        Validators.required,
                        Validators.minLength(6),
                        Validators.minLength(40),
                      ]],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]              
    },
    {
      validators: [Validation.match('password', 'confirmPassword')]
    })
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.isSubmitted = false;
    this.form.reset();
  }
}
