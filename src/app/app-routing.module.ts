import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerComponent } from './pages/trainer/trainer.component';
import { AddlearnerComponent } from './pages/addlearner/addlearner.component';
import { UpdateleanerComponent } from './pages/updateleaner/updateleaner.component';
import { AddstaffComponent } from './admin/addstaff/addstaff.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './common/login/login.component';
import { EdituserComponent } from './admin/edituser/edituser.component';
import { UploadfileComponent } from './pages/uploadfile/uploadfile.component';

const routes: Routes = [
  {path:'learners',component:TrainerComponent},
  {path:'add',component:AddlearnerComponent},
  {path:'update/:id',component:UpdateleanerComponent},
  {path:'add-user',component:AddstaffComponent},
  {path:'users',component:AdmindashboardComponent},
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'edit/:id',component:EdituserComponent},
  {path:'csv',component:UploadfileComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
