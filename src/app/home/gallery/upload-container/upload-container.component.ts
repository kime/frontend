import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-container',
  templateUrl: './upload-container.component.html',
  styleUrls: ['./upload-container.component.scss']
})
export class UploadContainerComponent implements OnInit {
  isLoading = false;
  url = 'assets/images/cloud-upload-icon.png';

  constructor() {}

  ngOnInit() {}
}
