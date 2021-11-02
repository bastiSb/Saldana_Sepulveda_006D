import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard"
import { NologinGuard } from "./guards/nologin.guard"

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'info-re',
    loadChildren: () => import('./pages/info-re/info-re.module').then( m => m.InfoRePageModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'form-re',
    loadChildren: () => import('./pages/form-re/form-re.module').then( m => m.FormRePageModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then( m => m.NoticiasPageModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./componentes/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NologinGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./componentes/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NologinGuard]
  },
  {
    path: 'inventario-re',
    loadChildren: () => import('./componentes/inventario-re/inventario-re.module').then( m => m.InventarioRePageModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'ver-inve',
    loadChildren: () => import('./componentes/ver-inve/ver-inve.module').then( m => m.VerInvePageModule),
    canActivate : [AuthGuard]
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
