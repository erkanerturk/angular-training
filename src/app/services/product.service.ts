import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'

import { Product } from '../product/product';

@Injectable()
export class ProductService {
  path: string = 'http://localhost:3000/products'

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.path).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError),
    )
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = ''

    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Hata ' + err.message
    } else {
      errorMessage = 'Sistemsel bir hata'
    }
    return throwError(errorMessage)
  }
}
