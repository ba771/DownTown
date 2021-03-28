import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  product = new Product;
  @ViewChild('product_details') product_details;

  
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.product.banner = "../assets/images/doughnut.jpeg";
    this.product.title = "Delicious Dozens";
    this.product.rating = 4;
    this.product.images = ['../assets/images/d1.jpg', '../assets/images/d2.jpg', '../assets/images/d3.jpg'];
  }

  viewDetails() {
    this.product_details.openModal()
  }

}
