import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AuthenticationService, CoreModule, HttpCacheService, MockAuthenticationService } from '@app/core';
import { ImageService } from './image.service';
import { ImageContext } from '@app/shared/interfaces';
import { of } from 'rxjs';

describe('ImageService', () => {
  let imageService: ImageService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CoreModule, HttpClientTestingModule ],
      providers: [ ImageService, HttpCacheService, HttpTestingController,
        { provide: AuthenticationService, useClass: MockAuthenticationService }
        ]
    });
  }));

  beforeEach(inject(
    [HttpCacheService, ImageService, HttpTestingController],
    (httpCacheService: HttpCacheService, _imageService: ImageService, _httpMock: HttpTestingController) => {
      imageService = _imageService;
      httpMock = _httpMock;
      httpCacheService.cleanCache();
    }
  ));

  // afterEach(() => {
  //   httpMock.verify();
  // });

  describe('getUserImages', () => {
    it('should return an list of ImageContexts', () => {
      // Arrange
      const mockContexts = [ new ImageContext(), new ImageContext() ];

      // Act
      const imageSubscription = imageService.getUserImages();

      // Assert
      imageSubscription.subscribe((imageContexts: ImageContext[]) => {
        expect(imageContexts).toEqual(mockContexts);
      });

      // httpMock.expectOne(`/api/v1/images`).flush(of(mockContexts));
    });

    it('should return an empty list in the case of an error', () => {
      // Act
      const imageSubscription = imageService.getUserImages();

      // Assert
      imageSubscription.subscribe((imageContexts: ImageContext[]) => {
        expect(imageContexts.length).toEqual(0);
      });

      // httpMock.expectOne('/api/v1/images').flush(null, {
      //   status: 500,
      //   statusText: 'error'
      // });
    });
  });
});
