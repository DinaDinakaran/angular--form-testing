import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ServerService } from '../server.service';

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


  constructor(private _user :ServerService) {

   }

  ngOnInit(): void {
  }

  onSubmit(){
  
  this._user.SaveNewuser(this.fg.value).subscribe(
    sub => console.log(sub),
    err => console.log(err)
  )
  }
  

}
