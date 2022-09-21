import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LastComponent } from './last/last.component';
import { PresentComponent } from './present/present.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { WellcomeComponent } from './wellcome/wellcome.component';

const routes: Routes = [
  {path:"",redirectTo:"sign-up",pathMatch:"full"},
  {path:"sign-up",component:FirstComponent},
  {path :"sign-in",component:SignInComponent},
  {path:"home",component: PresentComponent},
  {path:"forget-succuss",component:LastComponent},
  {path :"forget",component:ForgetPasswordComponent},
  {path:"wellcome-home",component:WellcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const allroute=[
  FirstComponent,SignInComponent,ForgetPasswordComponent
]
