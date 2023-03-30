import { HttpClient } from '@angular/common/http';
import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/guards/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
 
  visible:boolean=true;
  changetype:boolean=true;

  @Output()
  childMessage=new EventEmitter()
  emails: any;
  passwords: any;
  static loginForm: any;
 
 //@ts-check

 viewpass(){
this.visible=!this.visible;
this.changetype=!this.changetype;
 }
  onsubmit() {
    console.log('on submit');
   this.childMessage.emit( this.store());
  }
users:any;
  admin: any;
  type: string = 'password';
  loginForm!: FormGroup;
  ngOnInit() {
    this.loginForm = this.fb.group({
      password: ['', Validators.required],
      email: ['', Validators.required],
    });
  };
  password: any;
  email: any;
 
  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router,
  ) {}
  addNewContact() {
    const newFormData = {
      password: this.password,
      email: this.email,
    };
    this.loginService.addNewContactUser(newFormData).subscribe((data) => {
      console.log(data);
      
    });
  };

  submit() {
    
    this.loginService.userRegisterDetails().subscribe((res:any)=>{
      console.log(res);
      this.users=res;
    
      for (let user of this.users) {
        console.log('users')
        if (user.email == this.loginForm.value.email) {
          this.saveData();
          console.log('savedata')
          this.router.navigate(['home-page']);
        }
      }  ;
      
    });
      this.adminlogin();
     
  };
  adminlogin(){
    this.loginService.adminLoginDetailsGet().subscribe((data)=>{
      console.log(data);
      this.admin=data;
      for(let admindetails of this.admin){
        if(admindetails.email==this.email && admindetails.password==this.password){
         this.router.navigate(['get-product']);
        
        }
      }
    });
   };

  store(){
    this.router.navigate(['register-form'])
  };

  saveData() {
    console.log('localstorage');
    const userData = {
      password: this.password,
      email: this.email,
    };   
    localStorage.setItem('userData', JSON.stringify(userData));
   
  };

}



