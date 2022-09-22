import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  fg = new FormGroup({
    email : new FormControl("",[Validators.required,Validators.email]),
    password : new FormControl("",[Validators.required,Validators.pattern("(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")])
  })


  onSubmit(){
    console.log(this.fg.value)
    
  }
  gotoforget(){
    this.router.navigateByUrl("/forget")
  }
  

  constructor(private router : Router) { }
  get email (){
    return this.fg.get("email")
   }
  get password (){
    return this.fg.get("password")
   }

  ngOnInit(): void {
  }

}
