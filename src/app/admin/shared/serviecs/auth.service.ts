import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../../shared/interfaces';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  get token(): string {
    return '';
  }

  // tslint:disable-next-line:typedef
  login(user: User): Observable<any> {
    return this.http.post('', user);
  }

  logout(): any {

  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(): any {

  }

}
