import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './dashboard/account/account.component';
import { BioComponent } from './dashboard/account/bio/bio.component';
import { EditComponent } from './dashboard/edit/edit.component';
import { ProfileDetailsComponent } from './dashboard/account/profile-details/profile-details.component';
import { ProfilePreviewComponent } from './dashboard/account/profile-preview/profile-preview.component';
import { SchoolingComponent } from './dashboard/account/schooling/schooling.component';
import { ListComponent } from './dashboard/list/list.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { SigninComponent } from './signin/signin.component';
import { EditBioComponent } from './dashboard/edit/edit-bio/edit-bio.component';
import { EditDetailsComponent } from './dashboard/edit/edit-details/edit-details.component';
import { EditPreviewComponent } from './dashboard/edit/edit-preview/edit-preview.component';
import { EditSchoolingComponent } from './dashboard/edit/edit-schooling/edit-schooling.component';
import { AddDegreeComponent } from './dashboard/edit/edit-schooling/add-degree/add-degree.component';
import { EditDegreeListComponent } from './dashboard/edit/edit-schooling/edit-degree-list/edit-degree-list.component';
import { DegreeItemComponent } from './dashboard/account/schooling/degree-item/degree-item.component';
import { DegreeDetailsComponent } from './dashboard/account/schooling/degree-details/degree-details.component';
import { ListItemComponent } from './dashboard/list/list-item/list-item.component';
import { FormsModule } from '@angular/forms';
import { AccountServiceService } from './services/Admin/account-service.service';
import { AuthService } from './auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    BioComponent,
    EditComponent,
    ProfileDetailsComponent,
    ProfilePreviewComponent,
    SchoolingComponent,
    ListComponent,
    HeaderComponent,
    SigninComponent,
    EditBioComponent,
    EditDetailsComponent,
    EditPreviewComponent,
    EditSchoolingComponent,
    AddDegreeComponent,
    EditDegreeListComponent,
    DegreeItemComponent,
    DegreeDetailsComponent,
    ListItemComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AccountServiceService,
  AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
