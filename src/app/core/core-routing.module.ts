import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
     { path: 'login', component: LoginComponent, title: 'login' },
     { path: 'register', component: RegisterComponent, title: 'register' },
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule],
})
export class CoreRoutingModule {}
