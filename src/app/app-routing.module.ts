import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { TrainerComponent } from './trainer/trainer.component';

const appRoutes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: '/login'
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'trainer',
    component: TrainerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'catalogue',
    component: CatalogueComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
