import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserToken } from 'src/app/models/UserToken';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<UserToken>;
  public currentUser: Observable<UserToken>;

  private currentUserDataSubject: BehaviorSubject<any>;
  public currentUserData: Observable<any>;

  constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<UserToken>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();

      this.currentUserDataSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('loggedUser')));
      this.currentUserData = this.currentUserSubject.asObservable();
      
  }

  public get currentUserValue(): UserToken {
      return this.currentUserSubject.value;
  }

  public getcurrentUser(): Observable<any> {
      return this.currentUserSubject.asObservable();
  }

  public getToken() {
      return  JSON.parse(localStorage.getItem('currentUser'));
  }

  login(userToken: UserToken) {
      localStorage.setItem('currentUser', JSON.stringify(userToken));
      this.currentUserSubject.next(userToken);
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
      localStorage.removeItem('loggedUser');
      this.currentUserDataSubject.next(null);
  }

  storeUser(userData : any){
      //console.log(userData , 'userData')
      localStorage.setItem('loggedUser', JSON.stringify(userData));
      this.currentUserDataSubject.next(userData);
  }

  public getLoggedUser() {
      return  JSON.parse(localStorage.getItem('loggedUser'));
  }

  getLoggedUserRole(): any {
      try {
          //console.log(this.currentUserDataSubject.value, 'this.currentUserDataSubject.value')
          return (this.currentUserDataSubject.value.user_role_id);
      } catch (Error) {
          return null;
      }
  }


}
