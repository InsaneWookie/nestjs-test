import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  isLoggedIn() {
    const token = localStorage.getItem('id_token');
    const expiresAt = parseInt(localStorage.getItem('expires_at'), 10);
    const hasExpired = (!!expiresAt) ? moment().diff(moment(expiresAt)) > 0 : true;
    return !!token && !hasExpired;
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }
}
