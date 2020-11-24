import { Injectable } from '@angular/core';
import { ApiService } from './shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  constructor(private api: ApiService) { }

  public addTenant(data): Promise<any> {
    console.log(data, 'data')
    return this.api.post(`/tenants`, data ).toPromise();
  }

  public getTenants(): Promise<any> {
    return this.api.get(`/tenants`).toPromise();
  }

  public editTenant(id: number, data): Promise<any> {
    console.log(data, 'data')
    return this.api.put(`/tenants/${id}`, data ).toPromise();
  }

  public getTenantDetails(id: number): Promise<any> {
    return this.api.get(`/tenants/${id}`).toPromise();
  }

  public deleteTenant(id: number): Promise<any> {
    return this.api.delete(`/tenants/${id}`).toPromise();
  }

}

