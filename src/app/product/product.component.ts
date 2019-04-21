import { Component, OnInit } from '@angular/core';
import { Product } from './product';

declare let alertify: any

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  filterText = ''
  title = 'Ürün Listesi'
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 100, categoryId: 1, description: 'Asus', imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
    { id: 2, name: 'Mouse', price: 25, categoryId: 2, description: 'Logitech', imageUrl: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
    { id: 3, name: 'Laptop', price: 400, categoryId: 1, description: 'MacBook', imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
    { id: 4, name: 'Laptop', price: 200, categoryId: 1, description: 'Dell', imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
    { id: 5, name: 'Mouse', price: 20, categoryId: 2, description: 'A4 Tech', imageUrl: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  ]

  constructor() { }

  ngOnInit() { }

  addToCart(product: Product) {
    alertify.success('Added')
  }

}
