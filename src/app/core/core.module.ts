import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { QuatreCentQuatreComponent } from './error/quatre-cent-quatre/quatre-cent-quatre.component';
import { CimqCentComponent } from './error/cimq-cent/cimq-cent.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    SidebarComponent,
    QuatreCentQuatreComponent,
    CimqCentComponent,
    LandingPageComponent,
  ],
  imports: [CommonModule, CoreRoutingModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
