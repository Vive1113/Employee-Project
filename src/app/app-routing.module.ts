import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LogoutComponent } from './logout/logout.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServicesComponent } from './services/services.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent,canActivate:[AuthGaurdService]},
  {path: 'create-employee', component: CreateEmployeeComponent,canActivate:[AuthGaurdService]},
  {path: '', redirectTo: 'login-page', pathMatch: 'full'},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'register-page', component: RegisterPageComponent},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent,canActivate:[AuthGaurdService]},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent,canActivate:[AuthGaurdService]},
  {path: 'feedback', component: FeedbackComponent,canActivate:[AuthGaurdService]},
  {path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService]},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
