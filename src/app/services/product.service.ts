import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ResponseWrapper } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // private _productList$ = new BehaviorSubject<ResponseWrapper<Product[]>>(
  //   {} as ResponseWrapper<Product[]>
  // );

  constructor(
    private httpClient: HttpClient,
    @Inject('API_URL') private apiUrl: string
  ) {}

  // get productList$(): Observable<ResponseWrapper<Product[]>> {
  //   return this._productList$.asObservable();
  // }

  // getProductList(forceFetch = false): Observable<ResponseWrapper<Product[]>> {
  //   if (!forceFetch && Object.keys(this._productList$.value).length) {
  //     return of(this._productList$.value);
  //   }
  //   return this.httpClient
  //     .get<ResponseWrapper<Product[]>>(`${this.apiUrl}/product-list`)
  //     .pipe(
  //       tap((response) => {
  //         this._productList$.next(response);
  //       })
  //     );
  // }
  getProductList(): Observable<ResponseWrapper<Product[]>> {
    return this.httpClient.get<ResponseWrapper<Product[]>>(
      `${this.apiUrl}/product-list`
    );
  }

  getProductDetails(id: string): Observable<ResponseWrapper<Product>> {
    return this.httpClient.get<ResponseWrapper<Product>>(
      `${this.apiUrl}/product/${id}`
    );
  }
}
