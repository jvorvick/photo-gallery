import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children: [
      {
        path: 'tab-child',
        loadChildren: () => import('../tab-child/tab-child.module').then(m => m.TabChildPageModule)
      },
      {
        path: 'tab-child2',
        loadChildren: () => import('../tab-child2/tab-child2.module').then(m => m.TabChild2PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1/tab-child',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
