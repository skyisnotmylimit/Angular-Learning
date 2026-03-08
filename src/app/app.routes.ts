import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'', redirectTo:'main-page', pathMatch:'full'},
  {path:'main-page', loadComponent:()=>import('./main-page-layout/main-page-layout').then(m=>m.MainPageLayout)},
  {path:'form', loadComponent:()=>import('./form-component/form-component').then(m=>m.FormComponent)}
];
