import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { Routes, RouterModule} from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabChildPageRoutingModule } from './tab-child-routing.module';

import { TabChildPage } from './tab-child.page';


// const routes: Routes = [
//   {
//     path: '',
//     component: TabChildPage,
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabChildPageRoutingModule,
    // RouterModule.forChild(routes)
  ],
  declarations: [TabChildPage]
})
export class TabChildPageModule {}
