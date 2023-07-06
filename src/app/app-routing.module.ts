import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './dashboard/account/account.component';
import { EditComponent } from './dashboard/edit/edit.component';
import { ListComponent } from './dashboard/list/list.component';
import { AddDegreeComponent } from './dashboard/edit/edit-schooling/add-degree/add-degree.component';
import { SigninComponent } from './signin/signin.component';
import { authGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, 
  canActivate: [authGuard],
  children:
[
  {path: 'account', component: AccountComponent},
    {path: 'edit', component: EditComponent},
    {path: 'view-list', component: ListComponent},
    {path: 'add-degree', component: AddDegreeComponent},
]},
    
  {path: 'sign-in', component: SigninComponent},
  
  {path: "", pathMatch: 'full', redirectTo: 'sign-in'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
