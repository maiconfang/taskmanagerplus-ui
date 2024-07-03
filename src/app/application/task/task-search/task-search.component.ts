import { CrudSearchImpl } from 'src/app/core/crud-generic/crud-search-impl';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';

import { TaskService } from '../task.service';
import { MessageToastService } from 'src/app/core/message-toast/message.toast.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-task-search',
  templateUrl: './task-search.component.html',
  styleUrls: ['./task-search.component.scss'],
})
export class TaskSearchComponent extends CrudSearchImpl implements OnInit {

  constructor(
    protected translate: TranslateService,
    private formBuilder: FormBuilder,
    private router: Router,
    protected taskService: TaskService,
    protected toastService: MessageToastService,
    protected modalService: BsModalService) {
    super(translate, taskService, toastService, modalService);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.maxLength(100)]],
      description: ['', [Validators.maxLength(200)]],
      dueDate: [''],
      completed: ['']
    });

    this.search();
  }

  new() {
    this.router.navigate(['/task/new']);
  }

  confirmRemoval(entity: any, identification = '') {
    super.confirmRemoval(entity, entity.title);
  }

  search(paginator = 0) {

    console.log('Search method called with paginator:', paginator);
    console.log('Form value:', this.form.value); // Log the form value
    
    this.service.listPaginated(this.form.value, paginator)
      .subscribe(data => {
        this.page = data.page;
        if (data.page.totalElements > 0 && typeof data._embedded !== 'undefined') {
          this.entities = data._embedded.tasks
        } else
          this.entities = [{}]
      });
  }


}
