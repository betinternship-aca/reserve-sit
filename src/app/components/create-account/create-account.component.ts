import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { EMAIL_REGEX } from '../../org/register-account/register-account.component';
import { IGender } from '../../defines/IGender';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})

export class UserRegisterAccountComponent implements OnInit {
  regForm: FormGroup;
  isSubmit: boolean;
  genders: IGender[] = ['Male', 'Female'];

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) {
  }

  formBuild() {
    this.regForm = this.fb.group({
      login: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.pattern(EMAIL_REGEX), Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^\d*$/)]],
      gender: ['Male'],
      password: ['', [Validators.required, Validators.minLength(15)]]
    });
  }

  UserRegister() {
    this.isSubmit = true;
    this.userService.createUser(this.regForm.value).subscribe(() => {
        this.router.navigate(['', {outlets: {'account': 'login'}}]);
      },
      (error) => console.log(error.message));
  }

  errorStateMatcher(control: FormControl): boolean {
    return control.invalid && (control.dirty || control.touched);
  }

  ngOnInit() {
    this.formBuild();
  }
}