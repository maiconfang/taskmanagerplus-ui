import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { CrudServiceImpl } from 'src/app/core/crud-generic/crud-service-impl';
import { ProvinceFilter } from './province';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService extends CrudServiceImpl {

  provinceUrl: string;

  constructor(protected http: HttpClient) {
    super(http);
    this.provinceUrl = `${environment.apiUrl}/v1/provinces`;
  }

  getUrlResource(): string {
    return this.provinceUrl
  }

  listPaginated(filter: ProvinceFilter, page: number, parameters = new HttpParams()): Observable<any> {

    if (filter.name) {
      parameters = parameters.set('name', filter.name);
    }

    return super.listPaginated(filter, page, parameters);
  }

  listAllNoPagination(): Promise<any> {
    return this.http.get<any>(this.provinceUrl + "/noPagination")
      .toPromise()
      .then(response => response);
  }

}
