import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  

fg = new FormGroup({
  name : new FormControl("",[Validators.required,Validators.minLength(2),Validators.maxLength(13)]),
  email : new FormControl("",[Validators.required,Validators.maxLength(15)]),
  phone : new FormControl("",[Validators.required,Validators.minLength(3)]),
  password : new FormControl("",[Validators.required,Validators.minLength(2),Validators.maxLength(15)])
})
name: any;
onSubmit(){
  console.log(this.fg.value)
}

  constructor() {

   }

  ngOnInit(): void {
  }

}
