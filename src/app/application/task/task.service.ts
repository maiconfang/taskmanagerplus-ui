import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { CrudServiceImpl } from 'src/app/core/crud-generic/crud-service-impl';
import { TaskFilter } from './task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends CrudServiceImpl {

  taskUrl: string;

  constructor(protected http: HttpClient) {
    super(http);
    this.taskUrl = `${environment.apiUrl}/v1/tasks`;
  }

  getUrlResource(): string {
    return this.taskUrl
  }

  listPaginated(filter: TaskFilter, page: number, parameters = new HttpParams()): Observable<any> {

    if (filter.title) {
      parameters = parameters.set('title', filter.title);
    }

    if (filter.description) {
      parameters = parameters.set('description', filter.description);
    }


    if (filter.dueDate) {
      const dateObject = new Date(filter.dueDate);
      const formattedDueDate = dateObject.toISOString().split('T')[0]; // Gets only the date part (yyyy-MM-dd).
      parameters = parameters.set('dueDate', formattedDueDate);
    }

    if (filter.completed !== undefined && filter.completed !== null) {
      parameters = parameters.set('completed', filter.completed.toString());
    }
    

    return super.listPaginated(filter, page, parameters);
  }

  listAllNoPagination(): Promise<any> {
    return this.http.get<any>(this.taskUrl + "/noPagination")
      .toPromise()
      .then(response => response);
  }

}
