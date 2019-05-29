import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CoreModule, HttpCacheService } from '@app/core';
import { AuthenticationService, Credentials } from '@app/core';
import { ImageService } from '@app/core/image.service';
import { ImageContext } from '@app/shared/interfaces';

describe('ImageService', () => {
  let imageService: ImageService;
  let authService: AuthenticationService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, HttpClientTestingModule],
      providers: [HttpCacheService, ImageService, AuthenticationService]
    });
  }));

  beforeEach(inject(
    [HttpCacheService, ImageService, HttpTestingController, AuthenticationService],
    (httpCacheService: HttpCacheService,
     _imageService: ImageService,
     _httpMock: HttpTestingController,
     _authService: AuthenticationService) => {
      imageService = _imageService;
      httpMock = _httpMock;
      authService = _authService;
      httpCacheService.cleanCache();
    }
  ));

  afterEach(() => {
    httpMock.verify();
  });

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
      httpMock.expectOne({}).flush(mockContexts);
    });

    it('should return an empty list in the case of an error', () => {
      // Act
      const imageSubscription = imageService.getUserImages();

      // Assert
      imageSubscription.subscribe((imageContexts: ImageContext[]) => {
        expect(imageContexts.length).toEqual(0);
      });
      httpMock.expectOne({}).flush(null, {
        status: 500,
        statusText: 'error'
      });
    });
  });
});
