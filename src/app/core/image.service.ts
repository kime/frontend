import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService, Credentials } from '@app/core/authentication/authentication.service';
import { ImageContext } from '../shared/interfaces';

const routes = {
  images: () => `v1/images`
};

@Injectable()
export class ImageService {
  constructor(
    private httpClient: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  getUserImages(): Observable<ImageContext[]> {
    const credentials: Credentials = this.authenticationService.credentials;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa(`${credentials.token}:${''}`)
      })
    };

    return this.httpClient
      .get<ImageContext[]>(routes.images(), httpOptions)
      .pipe(
        catchError(() => {
          console.log('Error: Cannot fetch user images from the API');
          return of([]);
        })
      );
  }
}
