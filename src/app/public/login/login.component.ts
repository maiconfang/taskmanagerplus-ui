
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { User, UserSession } from 'src/app/authentication/user-session.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private auth: AuthenticationService,
    private user: UserSession,
    private router: Router,
    private fb: FormBuilder
  ) { 

    this.createForm();
    this.doLoginAutomatic();

  }

  ngOnInit() {

  }

  createForm() {
    
    this.form = this.fb.group({
      // "login": ['luna.moon@maif.com', Validators.required],
      // "pass": ['123', [Validators.required, Validators.minLength(2)]],
      "login": ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      "pass": ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    });
  }

  onSubmit(form) {
    this.auth.login(<User>this.form.value)
      .subscribe(
        data => {
          console.log('Redirect');
          this.router.navigate(['/app']);
        }
      );
  }

  doLoginAutomatic() {
    console.log('Called doLoginAutomatic()')
    this.user.fethUser().then(res => {
      if (res && res.remember === true) {
        console.log('Permanecer logado ativado')
        this.router.navigate(['/home']);
      } 
    })
  }

}
