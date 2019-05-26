import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.scss']
})
export class ImageContainerComponent implements OnInit {
  url: string = "https://upload.wikimedia.org/wikipedia/commons/4/48/Panchavati_Ramakrishna.jpg";
  isLoading: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
