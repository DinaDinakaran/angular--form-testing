import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  fg = new FormGroup({
    email : new FormControl("",[Validators.required,Validators.maxLength(15)]),
    password : new FormControl("",[Validators.required,Validators.minLength(2),Validators.maxLength(15)])
  })
  name: any;
  onSubmit(){
    console.log(this.fg.value)
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
