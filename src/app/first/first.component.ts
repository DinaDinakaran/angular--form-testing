import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  

fg = new FormGroup({
  name : new FormControl("",[Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
  email : new FormControl("",[Validators.required,Validators.email]),
  phone : new FormControl("",[Validators.required,Validators.minLength(3)]),
  password : new FormControl("",[Validators.required,Validators.pattern("(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")])
})

 
get name(){
  return this.fg.get("name")
}
get email(){
  return this.fg.get("email")
}
get phone(){
  return this.fg.get("phone")
}
get password(){
  return this.fg.get("password")
}


  constructor(private _user :ServerService,private router: Router) {

   }

  ngOnInit(): void {
  }

  onSubmit(){
  
  this._user.SaveNewuser(this.fg.value).subscribe(
    sub => console.log(sub),
    err => console.log(err)
    

  )
  this.router.navigateByUrl("/home")
  }
  

}
