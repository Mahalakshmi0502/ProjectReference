import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  Error;
 
  constructor(private router:Router) {
    this.loginForm=new FormGroup({
      username:new FormControl(null,[Validators.required,Validators.minLength(5)]),
      password:new FormControl(null,[Validators.required,Validators.minLength(8)])
    })
  }
 
  get username(){
    return this.loginForm.get("username");
  }
 
  get password(){
    return this.loginForm.get("password");
  }
 
  login(){
    if(this.username.value=="mahalakshmi" && this.password.value=="shanmugam"){
      sessionStorage.setItem('user',this.username.value)
      this.router.navigate(['/Home'])
    }
    else{
      this.Error="Try Again"
    }
  }
 
  ngOnInit(): void {
  }
 
}
