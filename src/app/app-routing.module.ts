import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthHomeComponent } from './Component/pages/auth/auth-home/auth-home.component';
import { AuthGuard } from './Component/pages/auth/auth.guard';
import { HOmeComponent } from './Component/pages/home/home.component';
import { NotFoundComponent } from './Component/pages/not-found/not-found.component';

const routes: Routes = [{component:HOmeComponent ,
path:''},
{component:HOmeComponent ,
  path:'home'},

  {
    component:AuthHomeComponent ,
  path:'authhome',
  canActivate:[AuthGuard]
  
  
  },

  {component:NotFoundComponent ,
    path:'**'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
