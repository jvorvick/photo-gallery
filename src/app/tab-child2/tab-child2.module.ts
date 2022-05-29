import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabChild2PageRoutingModule } from './tab-child2-routing.module';

import { TabChild2Page } from './tab-child2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabChild2PageRoutingModule
  ],
  declarations: [TabChild2Page]
})
export class TabChild2PageModule {}
