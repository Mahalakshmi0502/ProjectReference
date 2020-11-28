import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmPassComponent } from './confirm-pass/confirm-pass.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'; 
import { ProductlistComponent } from './productlist/productlist.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [ {path:"",redirectTo:"Home",pathMatch:'full'},
{path:"Home",component:HomeComponent},
{path:"Register",component:RegisterComponent},
{path:"Login",component:LoginComponent},
{path:"ForgotPass",component:ForgotPasswordComponent},
{path:"ConfirmPass",component:ConfirmPassComponent},
{path:"Product",component:ProductlistComponent},
{path:"Purchase",component:PurchaseComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
