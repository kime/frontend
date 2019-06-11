import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '@app/core/authentication/authentication.service';
import { Credentials, EnhanceRequestContext, ImageContext } from '../shared/interfaces';
import { Router } from '@angular/router';

const routes = {
  image: (id: number) => `https://api.kime.me/api/v1/images/${id}`,
  images: () => `https://api.kime.me/api/v1/images`,
  upload: () => `https://api.kime.me/api/v1/images/upload`,
  enhance: () => `https://api.kime.me/api/v1/images/enhance`
};

@Injectable()
export class ImageService {
  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  getAuthHeader(): string {
    return 'Basic ' + btoa(`${this.authenticationService.credentials.token}:${''}`);
  }

  getImages(): Observable<ImageContext[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.getAuthHeader()
      })
    };

    return this.httpClient.get<ImageContext[]>(routes.images(), httpOptions).pipe(
      catchError(error => {
        console.log(`Error ${error.status}: Cannot fetch user images from the API`);
        if (error.status === 401) {
          console.log('Logging out and redirecting user to login page');
          this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
        }
        return of([]);
      })
    );
  }

  deleteImage(imageContext: ImageContext): Observable<{}> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.getAuthHeader()
      })
    };

    return this.httpClient.delete(routes.image(imageContext.id), httpOptions).pipe(
      catchError(error => {
        console.log(`Error ${error.status}: Cannot delete specified image using the API`);
        if (error.status === 401) {
          console.log('Logging out and redirecting user to login page');
          this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
        }
        return of();
      })
    );
  }

  uploadImage(imageFile: File): Observable<ImageContext> {
    const httpOptions = {
      params: new HttpParams().set('name', imageFile.name),
      headers: new HttpHeaders({
        Authorization: this.getAuthHeader()
      })
    };

    const formData = new FormData();
    formData.append('image', imageFile);

    return this.httpClient.post<ImageContext>(routes.upload(), formData, httpOptions).pipe(
      catchError(error => {
        console.log(`Error ${error.status} Cannot upload image to the API`);
        if (error.status === 401) {
          console.log('Logging out and redirecting user to login page');
          this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
        }
        return of(new ImageContext());
      })
    );
  }

  enhanceImage(requestContext: EnhanceRequestContext): Observable<ImageContext> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.getAuthHeader()
      })
    };

    return this.httpClient.post<ImageContext>(routes.enhance(), requestContext, httpOptions).pipe(
      catchError(error => {
        console.log(`Error ${error.status} Cannot enhance image using the API`);
        if (error.status === 401) {
          console.log('Logging out and redirecting user to login page');
          this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
        }
        return of(new ImageContext());
      })
    );
  }
}
