
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRegisterComponent } from './task-register/task-register.component';
import { TaskSearchComponent } from './task-search/task-search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaginationTableModule } from 'src/app/core/pagination-table/pagination-table.module';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [TaskRegisterComponent, TaskSearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    PaginationTableModule,
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    AccordionModule.forRoot(),
    NgSelectModule,
  ],
  exports: [TaskRegisterComponent, TaskSearchComponent]
})
export class TaskModule { }
