import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    //TODO: Validar (se o usuario tiver logado, não pode ir para login ou cadastro)
/*     {
      path: '',
      //canActivate: [AuthGuard],
      component: ContentLayoutComponent,
      children: []
    } */
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
