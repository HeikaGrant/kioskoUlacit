import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingComponent } from '../ranking/ranking.component';
import { GradesComponent } from '../grades/grades.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RankingComponent, GradesComponent, DashboardComponent]
})
export class DashboardModule { }
