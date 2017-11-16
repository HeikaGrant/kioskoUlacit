import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginModule } from "./login/login.module";
import { DashboardModule } from "./dashboard/dashboard.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    DashboardModule,
    RouterModule.forRoot(
      [
        {path: '', pathMatch: 'full', redirectTo: 'login'},
        {path: 'login', loadChildren: 'app/login/login.module#LoginModule'},
        {path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule'}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
