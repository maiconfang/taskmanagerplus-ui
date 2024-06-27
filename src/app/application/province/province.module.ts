
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvinceRegisterComponent } from './province-register/province-register.component';
import { ProvinceSearchComponent } from './province-search/province-search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaginationTableModule } from 'src/app/core/pagination-table/pagination-table.module';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  declarations: [ProvinceRegisterComponent, ProvinceSearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    PaginationTableModule,
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    AccordionModule.forRoot()
  ],
  exports: [ProvinceRegisterComponent, ProvinceSearchComponent]
})
export class ProvinceModule { }
