import { LoginDetailsService } from './../../service/login-details.service';
import { UserDetailsService } from './../../service/user-details.service';
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
user:any;
  admins: any;
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
    private login:LoginDetailsService,
    private userdata: UserDetailsService,
    private fb: FormBuilder,
    private router: Router,
  ) {}

  //doubt login values =addNewContactUser
  addNewContact() {
    const newFormData = {
      password: this.password,
      email: this.email,
    };
    this.login.loginvalues(newFormData).subscribe((data) => {
      console.log(data);
      
    });
  };

  submit() {
    
    this.userdata.userRegisterDetails().subscribe((res:any)=>{
      console.log(res);
      this.user=res;
    
      for (let users of this.user) {
        console.log('users')
        if (users.email == this.loginForm.value.email) {
          this.saveData();
          console.log('savedata')
          this.router.navigate(['home-page']);
        }
      }  ;
      
    });
      this.adminlogin();
     
  };
  adminlogin(){
    this.login.adminLoginDetailsGet().subscribe((data)=>{
      console.log(data);
      this.admins=data;
      for(let admindetails of this.admins){
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



