import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[{
        path: 'welcome',
        loadChildren: () => import('../welcome/welcome.module').then( m => m.WelcomePageModule),
    },
    {
      path: 'perfil',
      loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
