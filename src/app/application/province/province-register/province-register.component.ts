import { CrudRegisterImpl } from 'src/app/core/crud-generic/crud-register-impl';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ProvinceService } from '../province.service';
import { MessageToastService } from '../../../core/message-toast/message.toast.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-province-register',
  templateUrl: './province-register.component.html',
  styleUrls: ['./province-register.component.scss']
})
export class ProvinceRegisterComponent extends CrudRegisterImpl implements OnInit {

  titleProvince: string;

  constructor(
    protected translate: TranslateService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    protected provinceService: ProvinceService,
    protected toastService: MessageToastService) {
    super(translate, provinceService, toastService);
    this.createForm();
  }

  ngOnInit() {

    const id = this.route.snapshot.params['id'];

    if (id) {
      this.translate.get('PROVINCE.TITLE_EDIT').subscribe((text: string) => {
        this.titleProvince = text;
      });
      this.findEntity(id);
    } else {
      this.translate.get('PROVINCE.TITLE_NEW').subscribe((text: string) => {
        this.titleProvince = text
      });
    }

  }

  createForm() {
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      abbreviation: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(5)]]
    });
  }

  redirectAfterAdd(entity: any) {
    this.router.navigate(['/app/province', entity.id]);
  }

  backToSearch() {
    this.router.navigate(['/province']);
  }

}
