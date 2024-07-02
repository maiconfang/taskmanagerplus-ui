import { CrudRegisterImpl } from 'src/app/core/crud-generic/crud-register-impl';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TaskService } from '../task.service';
import { MessageToastService } from '../../../core/message-toast/message.toast.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-task-register',
  templateUrl: './task-register.component.html',
  styleUrls: ['./task-register.component.scss']
})
export class TaskRegisterComponent extends CrudRegisterImpl implements OnInit {

  titleTask: string;

  constructor(
    protected translate: TranslateService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    protected taskService: TaskService,
    protected toastService: MessageToastService) {
    super(translate, taskService, toastService);
    this.createForm();
  }

  ngOnInit() {

    const id = this.route.snapshot.params['id'];

    if (id) {
      this.translate.get('TASK.TITLE_EDIT').subscribe((text: string) => {
        this.titleTask = text;
      });
      this.findEntity(id);
    } else {
      this.translate.get('TASK.TITLE_NEW').subscribe((text: string) => {
        this.titleTask = text
      });
    }

  }

  createForm() {
    this.form = this.formBuilder.group({
      id: [''],
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      description: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2000)]],
      dueDate: ['', [Validators.required]],
      completed: [false, [Validators.required]]
    });
  }

  redirectAfterAdd(entity: any) {
    this.router.navigate(['/app/task', entity.id]);
  }

  backToSearch() {
    this.router.navigate(['/task']);
  }

}
