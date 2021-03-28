import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-iwfb',
  templateUrl: './img-w-fallback.component.html',
  styleUrls: ['./img-w-fallback.component.scss']
})
export class ImgWFallbackComponent implements OnInit {
  @Input() _src = '';
  @Input() _alt = '';
  @Input() _class = '';
  constructor() { }

  ngOnInit(): void {
  }

}
