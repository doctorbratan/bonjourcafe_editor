import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';

import { WorkLayoutComponent } from './work-layout/work-layout.component';

import { CategoryPageComponent } from './category-page/category-page.component';
import { CategoryEditComponent } from './category-page/category-edit/category-edit.component';


import { PositionPageComponent } from './position-page/position-page.component';
import { PositionEditComponent } from './position-page/position-edit/position-edit.component';

import { ChartPageComponent } from './chart-page/chart-page.component';
import { TelegramPageComponent } from './telegram-page/telegram-page.component';

const routes: Routes = [
  { path: "login", component: LoginPageComponent },

  { path: '', component: WorkLayoutComponent, 
  children: 
  [
    {path: '', redirectTo: '/login',  pathMatch: 'full' },
    {path: 'categories',  component: CategoryPageComponent},
    {path: 'category',  component: CategoryEditComponent},
    {path: 'positions',  component: PositionPageComponent},
    {path: 'position',  component: PositionEditComponent},
    {path: 'chart',  component: ChartPageComponent},
    {path: 'telegram',  component: TelegramPageComponent},
  ]
  },

  { path: "**", redirectTo: "/login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
