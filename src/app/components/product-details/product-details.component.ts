import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product;

  curr_slide: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  setCurrSlide(index) {
    this.curr_slide = index;
  }

}
