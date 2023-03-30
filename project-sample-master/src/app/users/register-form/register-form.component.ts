import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/guards/login.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {


  zipcode: any;
  state: any;
  city: any;
  street: any;
  lastname: any;
  firstname: any;
  email: any;

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['',Validators.pattern('[0-9]{6}')],
      email: ['',Validators.required],
      
    }),
  });

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}
  
  //post
  addNewUserRegister() {
    const registerFormData = {
      firstname: this.firstname,
      lastname: this.lastname,
      street: this.street,
      city: this.city,
      state: this.state,
      zipcode: this.zipcode,
      email: this.email,
    };
    console.log('hi');
    this.loginService
      .addNewUserRegisterDetails(registerFormData)
      .subscribe((data) => {
        console.log(data);
        this.profileForm.reset();
      });
  }

  onSubmit() {
    console.warn(this.profileForm.value);
    alert(
      'you have successfully registered 🏨️🛌️'
    );
    this.router.navigate(['/login-form']);
  }
}
