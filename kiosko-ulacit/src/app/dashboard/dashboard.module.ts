import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingComponent } from '../ranking/ranking.component';
import { GradesComponent } from '../grades/grades.component';
import { DashboardComponent } from './dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import { TopComponent } from "../top/top.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'grades', component: GradesComponent},
      {path: 'ranking', component: RankingComponent},
      {path: 'top', component: TopComponent},
    ])
  ],
  exports: [
    RouterModule
  ],
  declarations: [RankingComponent, GradesComponent, DashboardComponent, TopComponent]
})
export class DashboardModule { }
