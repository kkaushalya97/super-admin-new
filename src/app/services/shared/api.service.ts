import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

import { ErrorMessageHandler } from '../../helpers/error-handler';
import { AuthenticationService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //private x_tenant_code = `${environment.x_tenant_code}`;
  constructor(
    private http: HttpClient,
    private errorHandler: ErrorMessageHandler,
    private authenticationService: AuthenticationService
  ) {
  }

  /**
   * Get default headers for a request
   */
  get headers() {
    if (this.authenticationService.currentUserValue) {
      let token = this.authenticationService.getToken();
      let user = this.authenticationService.getLoggedUser();
      let userRole = this.authenticationService.getLoggedUserRole();

      //console.log(token, 'user data', user, 'userRole -> ', userRole)
      return new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'aplication/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + token.token,
        //'x-tenant-code': this.x_tenant_code,
      })
    } else {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'aplication/json',
        'Access-Control-Allow-Origin': '*',
        //'x-tenant-code': this.x_tenant_code
      })
    }
  }

  getAutoLoginHeader(){
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'aplication/json',
      'Access-Control-Allow-Origin': '*',
      //'x-tenant-code': this.x_tenant_code
    })
  }

  getBaseUrl() {
    return `${environment.user.api_base_url}`;
    // if (service == 'user') {
    //   return `${environment.user.api_base_url}`;
    // } else if (service == 'system') {
    //   return `${environment.system.api_base_url}`;
    // } else if (service == 'timesheet') {
    //   return `${environment.timesheet.api_base_url}`;
    // } else if (service == 'email') {
    //   return `${environment.email.api_base_url}`;
    // } else if (service == 'auth') {
    //   return `${environment.auth.api_base_url}`;
    // } else if (service == 'report') {
    //   return `${environment.report.api_base_url}`;
    // }
  }

  private handleError(error: HttpErrorResponse, handler: ErrorMessageHandler) {
    console.log(error)
    if (error.error instanceof ProgressEvent) {
      handler.showErrorMessage("Couldn't connect to remote server.");
    } else {
      handler.showErrorMessage(error.error)
      return throwError(
        error.error
      );
    }
    //handler.showErrorMessage('Could not connect to remote server.')
    return throwError(
      'Could not connect to remote server.'
    );
  }

  get(path: string): Observable<any> {
    return this.http
      .get<any>(this.getBaseUrl() + `${path}`, { headers: this.headers })
      .pipe(
        catchError(err => this.handleError(err, this.errorHandler))
      );
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http
      .put<any>(this.getBaseUrl() + `${path}`, JSON.stringify(body), { headers: this.headers })
      .pipe(
        catchError(err => this.handleError(err, this.errorHandler))
      )
  }

  post(path: string, body: Object = {}): Observable<any> {
    //if (service !== 'auth') {
      return this.http
        .post<any>(this.getBaseUrl() + `${path}`, JSON.stringify(body), { headers: this.headers }
        )
        .pipe(
          catchError(err => this.handleError(err, this.errorHandler))
        );
    // } else {
    //   return this.http
    //     .post<any>(this.getBaseUrl() + `${path}`, JSON.stringify(body), { headers: this.getAutoLoginHeader() }
    //     )
    //     .pipe(
    //       catchError(err => this.handleError(err, this.errorHandler))
    //     );
    // }

  }


  delete(path: string): Observable<any> {
    return this.http
      .delete<any>(this.getBaseUrl() + `${path}`, { headers: this.headers })
      .pipe(
        catchError(err => this.handleError(err, this.errorHandler))
      );
  }


}

