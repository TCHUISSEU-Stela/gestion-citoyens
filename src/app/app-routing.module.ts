import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
     { path: '', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
     { path: 'auth', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
     { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
     { path: 'citoyens', loadChildren: () => import('./citoyens/citoyens.module').then(m => m.CitoyensModule) },
];

@NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule],
})
export class AppRoutingModule {}
