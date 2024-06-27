import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaifStateSelectComponent } from './maif-state-select.component';
import { PaginationTableModule } from 'src/app/core/pagination-table/pagination-table.module';
import { SharedModule } from 'src/app/shared/shared.module'; 


@NgModule({
    imports: [ 
      CommonModule, 
      PaginationTableModule, 
      SharedModule,
    ],
    declarations: [ 
      MaifStateSelectComponent 
    ],
    exports: [
       MaifStateSelectComponent 
      ]
  })
export class MaifStateSelectModule { }