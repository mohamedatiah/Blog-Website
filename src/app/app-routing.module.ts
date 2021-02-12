import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddPostComponent } from './add-post/add-post.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './guards/auth.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';




  const routes: Routes = [
    {path:'home',component:HomePageComponent},

    {path:"profile",component:ProfileComponent,canActivate:[AuthGuard]},
    {path:"addpost",component:AddPostComponent,canActivate:[AuthGuard]},
    {path:"contact",component:ContactComponent},
    {path:"register",component:RegisterComponent},
    {path:"login",component:LoginComponent},
    {path:"logout",component:LogoutComponent},
    {path:"search",component:SearchComponent},
    {path:"editPost",component:PostEditComponent},
    
    {path:"notfound",component:NotFoundComponent},
    
  
  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
