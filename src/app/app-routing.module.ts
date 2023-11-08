import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuatreCentQuatreComponent } from './core/error/quatre-cent-quatre/quatre-cent-quatre.component';
import { LandingPageComponent } from './core/landing-page/landing-page.component';

const routes: Routes = [
     { path: 'auth', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
     { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
     { path: 'citoyens', loadChildren: () => import('./citoyens/citoyens.module').then(m => m.CitoyensModule) },
     { path: '', component: LandingPageComponent },
     { path: '**', component: QuatreCentQuatreComponent },
];

@NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule],
})
export class AppRoutingModule {}
