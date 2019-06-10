import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { finalize, flatMap } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, AuthenticationService } from '@app/core';

const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  version: string = environment.version;
  loginError: string;
  signupError: string;
  loginForm: FormGroup;
  signupForm: FormGroup;
  isLoading = false;

  private static checkPasswords(control: AbstractControl) {
    if (control.get('password').value !== control.get('confirmPassword').value) {
      return { invalid: true };
    }
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  login() {
    this.isLoading = true;
    this.authenticationService
      .login(this.loginForm.value)
      .pipe(
        finalize(() => {
          this.loginForm.markAsPristine();
          this.isLoading = false;
        })
      )
      .subscribe(
        credentials => {
          log.debug(`${credentials.username} successfully logged in`);
          this.route.queryParams.subscribe(params =>
            this.router.navigate([params.redirect || '/'], { replaceUrl: true })
          );
        },
        error => {
          log.debug(`Login error: ${error}`);
          this.loginError = error;
        }
      );
  }

  signup() {
    this.isLoading = true;
    this.authenticationService
      .signup(this.signupForm.value)
      .pipe(
        finalize(() => {
          this.signupForm.markAsPristine();
          this.isLoading = false;
        })
      )
      .pipe(
        flatMap(() => {
          return this.authenticationService.login(this.signupForm.value);
        })
      )
      .subscribe(
        credentials => {
          log.debug(`${credentials.username} successfully signed up`);
          this.route.queryParams.subscribe(params =>
            this.router.navigate([params.redirect || '/'], { replaceUrl: true })
          );
        },
        error => {
          log.debug(`Signup error: ${error}`);
          this.signupError = error;
        }
      );
  }

  getSignupStatus() {
    if (this.signupError) {
      return 'warning';
    } else {
      return '';
    }
  }

  getLoginStatus(): string {
    if (this.loginError) {
      return 'warning';
    } else {
      return '';
    }
  }

  getSignupHeader(): string {
    if (this.signupError) {
      return 'Username already exits!';
    } else {
      return 'Create an account';
    }
  }

  getLoginHeader(): string {
    if (this.loginError) {
      return 'Incorrect username or password!';
    } else {
      return 'Sign in to your account';
    }
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.signupForm = this.formBuilder.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      },
      { validator: LoginComponent.checkPasswords }
    );
  }
}
