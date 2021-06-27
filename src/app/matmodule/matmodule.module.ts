import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';






const MaterialComponent =[MatCardModule,CommonModule,MatFormFieldModule,
  MatSelectModule,MatInputModule,MatRadioModule,MatButtonModule,MatMenuModule,MatExpansionModule]

@NgModule({
  imports: [MaterialComponent ],
  exports: [MaterialComponent]
})
export class MatmoduleModule { }
