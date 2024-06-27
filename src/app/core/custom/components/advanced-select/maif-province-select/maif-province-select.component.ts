import { Component, Input, Output, OnInit, TemplateRef, EventEmitter  } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProvinceService } from 'src/app/application/province/province'; 
import { Page } from 'src/app/core/pagination-table/pagination-table'; 
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-maif-province-select',
  templateUrl: './maif-province-select.component.html',
  styleUrls: ['./maif-province-select.component.scss']
})
export class MaifProvinceSelectComponent implements OnInit {

  @Output() public provinceSelectOutPut: EventEmitter<any> = new EventEmitter();

  public entitiesProvinceSelect = [];
  public pageProvinceSelect: Page;
  public form: FormGroup;
  
  
  modalRef: BsModalRef;

  constructor(
    private formBuilder: FormBuilder,
    protected provinceService: ProvinceService,
    private modalService: BsModalService,
    ) {}

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: ['', [Validators.maxLength(100)]]
    });

    this.search();

  }

  openModalWithClass(template: TemplateRef<any>) {
    this.resetDataForm();
    this.search();
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  closeModalWithClass() {
    this.resetDataForm();
     this.modalService.hide();
  }

  selectProvince(entity: any){
    this.provinceSelectOutPut.emit(entity)
    this.closeModalWithClass();
    
  }

  changePageSelect(event) {
    this.search(event.page);
  }

  search(paginator = 0) {
    this.provinceService.listPaginated(this.form.value, paginator)
    .subscribe(data => {
      this.pageProvinceSelect = data.page;
      if (data.page.totalElements > 0 && typeof data._embedded !== 'undefined') {
        this.entitiesProvinceSelect = data._embedded.provinces
      } else
        this.entitiesProvinceSelect = []
    });
      
  }

  resetDataForm() {
    this.form.patchValue({
      id: null,
      name: null,
      abbreviation: null,
      
    });
  }

  onEnter() {
    this.search();
  }


}


