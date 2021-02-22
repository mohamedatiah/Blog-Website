import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ContactComponent } from './contact/contact.component';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {HttpClient}from'@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'
import {FormsModule } from '@angular/forms'
import { AuthGuard } from './guards/auth.guard';
import {  CustomInterceptor } from './services/auth-interceptor.service';
import { ReactiveFormsModule } from '@angular/forms';


import { LogoutComponent } from './logout/logout.component';
import { SearchComponent } from './search/search.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { GetfullNamePipe } from './getfull-name.pipe';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    HomePageComponent,
    ProfileComponent,
    AddPostComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    SearchComponent,
    PostEditComponent,
    GetfullNamePipe,
    EditUserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [AuthGuard,GetfullNamePipe,{ provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
