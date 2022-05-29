import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabChild2Page } from './tab-child2.page';

const routes: Routes = [
  {
    path: '',
    component: TabChild2Page,
    children: [
      {
        path: 'tab-child',
        loadChildren: () => import('../tab-child/tab-child.module').then(m => m.TabChildPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabChild2PageRoutingModule {}
