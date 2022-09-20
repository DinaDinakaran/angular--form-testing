import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  email = new FormControl("",[Validators.required,Validators.minLength(3)])
  Onsubmit(){
     console.log(this.email.value)
  }
  constructor() {
    // this.email.valueChanges.subscribe((data)=>console.log(data))
   }

  ngOnInit(): void {
  }

}
