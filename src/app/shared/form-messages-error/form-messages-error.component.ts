import { Component, OnInit, Input } from '@angular/core';
import { FormValidations } from '../form-validations';
import { FormControl } from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-form-messages-error',
  templateUrl: './form-messages-error.component.html',
  styleUrls: ['./form-messages-error.component.scss']
})
export class FormMessagesErrorComponent implements OnInit {

  @Input() control: FormControl;
  @Input() label: string;

  constructor(
    public translateM: TranslateService,
    public formValidations: FormValidations
  ) { }

  ngOnInit() {
  }

  get errorMessage() {

    if (this.control != null) {
      for (const propertyName in this.control.errors) {
        if (this.control.errors.hasOwnProperty(propertyName) &&
          this.control.touched) {
          return this.formValidations.getErrorMsg(this.label, propertyName, this.control.errors[propertyName]);
        }
      }
    }

    return null;
  }

}
