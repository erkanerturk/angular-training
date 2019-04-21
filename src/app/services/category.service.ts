import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { Category } from '../category/category';

@Injectable()
export class CategoryService {
  path: string = 'http://localhost:3000/categories'

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.path).pipe(
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
