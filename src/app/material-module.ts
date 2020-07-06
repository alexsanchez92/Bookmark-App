import {NgModule} from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import  {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTableModule} from '@angular/material/table';
import  {MatDialogModule} from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatInputModule} from '@angular/material/input';

@NgModule({
    exports: [
      MatButtonModule,
      MatButtonToggleModule,
      MatDialogModule,
      MatSortModule,
      MatTableModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
    ]
  })
  export class MaterialModule {}