import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { allroute, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ServerService } from './server.service';
import { PresentComponent } from './present/present.component';
import { LastComponent } from './last/last.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
@NgModule({
  declarations: [
    AppComponent,
    allroute,
    ForgetPasswordComponent,
    PresentComponent,
    LastComponent,
    WellcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
