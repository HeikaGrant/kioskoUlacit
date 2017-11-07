import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {LoginModule} from "./login/login.module";
import { TopComponent } from './top/top.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    RouterModule.forRoot(
      [
        {path: '', pathMatch: 'full', redirectTo: 'login'},
        {path: 'login', loadChildren: 'app/login/login.module#LoginModule'}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
