import { Injectable } from '@angular/core';
//import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AUTH_CONFIG } from './auth0-variables';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Router } from "@angular/router";
import { tokenNotExpired } from 'angular2-jwt';
import * as auth0 from 'auth0-js';

declare var auth0: any;
//auth0 = require('auth0-lock').default;
@Injectable()
export class AuthService {
    auth0 = new auth0.WebAuth({
        clientID: AUTH_CONFIG.CLIENT_ID,
        domain: AUTH_CONFIG.CLIENT_DOMAIN
    });

    loggedIn : boolean;
    loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);

    constructor(private router: Router) { 
        if(this.authenticated){
            this.setLoggedIn(true);
        }
    }
    
setLoggedIn(value: boolean) {
    // Update login status subject
    this.loggedIn$.next(value);
    this.loggedIn = value;
  }

  login() {
    // Auth0 authorize request
    // Note: nonce is automatically generated: https://auth0.com/docs/libraries/auth0js/v8#using-nonce
    this.auth0.authorize({
      responseType: 'token id_token',
      redirectUri: AUTH_CONFIG.REDIRECT,
      audience: AUTH_CONFIG.AUDIENCE,
      scope: AUTH_CONFIG.SCOPE
    });
  }

  handleAuth() {
    // When Auth0 hash parsed, get profile
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this._getProfile(authResult);
        this.router.navigate(['/']);
      } else if (err) {
        this.router.navigate(['/']);
        console.error(`Error: ${err.error}`);
      }
    });
  }

  private _getProfile(authResult) {
    // Use access token to retrieve user's profile and set session
    this.auth0.client.userInfo(authResult.accessToken, (err, profile) => {
      this._setSession(authResult, profile);
    });
  }

  private _setSession(authResult, profile) {
    // Save session data and update login status subject
    localStorage.setItem('token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('profile', JSON.stringify(profile));
    this.setLoggedIn(true);
  }

  logout() {
    // Remove tokens and profile and update login status subject
    localStorage.removeItem('token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.router.navigate(['/']);
    this.setLoggedIn(false);
  }

  get authenticated() {
    // Check if there's an unexpired access token
    return tokenNotExpired('token');
  }

}