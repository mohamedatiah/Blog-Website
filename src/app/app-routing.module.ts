import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddPostComponent } from './add-post/add-post.component';
import { ContactComponent } from './contact/contact.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';



  const routes: Routes = [
    {path:'home',component:HomePageComponent},
    {path:"profile",component:ProfileComponent},
    {path:"addpost",component:AddPostComponent},
    {path:"contact",component:ContactComponent},
    {path:"register",component:RegisterComponent},
    {path:"login",component:LoginComponent},
  
  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
