import { NgModule } from '@angular/core';
import {
  MatDialogModule,
  MatTabsModule,MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatRadioModule
} from '@angular/material';



@NgModule({
  imports:[
    MatDialogModule,
    MatTabsModule,MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  exports:[
    MatDialogModule,
    MatTabsModule,MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule
  ]
})

export class MaterialModule {}
