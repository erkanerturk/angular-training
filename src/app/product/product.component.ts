import { Component, OnInit } from '@angular/core';
import { Product } from './product';

import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  filterText: string = ''
  title: string = 'Ürün Listesi'
  products: Product[]

  constructor(private alertifyService: AlertifyService, private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => this.products = data)
  }

  addToCart(product: Product) {
    this.alertifyService.success(product.name + ' added')
  }

}
