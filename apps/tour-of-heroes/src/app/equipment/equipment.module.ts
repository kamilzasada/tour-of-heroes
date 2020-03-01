import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EquipmentComponent } from './equipment.component';
import { EquipmentTextComponent } from './equipment-text.component';
import { EquipmentRoutingModule } from './equipment-routing.module';

@NgModule({
  declarations: [EquipmentComponent, EquipmentTextComponent],
  imports: [CommonModule, EquipmentRoutingModule]
})
export class EquipmentModule {
  constructor() {
    console.log('EquipmentModule');
  }
}
