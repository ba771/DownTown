import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  product = new Product;
  
  constructor() { }

  ngOnInit(): void {
    this.product.image_url = "../assets/images/doughnut.jpeg";
    this.product.title = "Delicious Dozens";
  }

}
