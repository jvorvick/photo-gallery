import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabChildPage } from './tab-child.page';

const routes: Routes = [
  {
    path: '',
    component: TabChildPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabChildPageRoutingModule {}
