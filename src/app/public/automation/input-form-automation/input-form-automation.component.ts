import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-form-automation',
  templateUrl: './input-form-automation.component.html',
  styleUrls: ['./input-form-automation.component.scss']
})
export class InputFormAutomationComponent implements OnInit {
  form: FormGroup;
  titleForm = 'Automation Form';
  submitted = false;
  formData = {
    name: ''
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
  }

  save(): void {
    if (this.form.valid) {
      this.formData = this.form.value;
      this.submitted = true;
    }
  }
}
