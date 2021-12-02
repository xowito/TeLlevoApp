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
    },
    {
      path: 'conductor/:id',
      loadChildren: () => import('../conductor/conductor.module').then( m => m.ConductorPageModule)
    },
    {
      path: 'destino',
      loadChildren: () => import('../destino/destino.module').then( m => m.DestinoPageModule)
    },]

    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
