import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicineReminderPage } from './medicine';

@NgModule({
  declarations: [
    MedicineReminderPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicineReminderPage),
  ],
})
export class MedicinePageModule {}
