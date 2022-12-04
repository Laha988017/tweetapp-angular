import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TweetPageComponent } from './tweet-page/tweet-page.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  // {path:'aadhar', component:AadharComponent, canActivate:[AuthGuard]},
  // {path:'dashboard', component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'register', component:RegisterComponent},
  {path:'home', component:HomeComponent},
  {path:'tweet', component:TweetPageComponent},
  // {path:'pension-details', component:AmountComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
