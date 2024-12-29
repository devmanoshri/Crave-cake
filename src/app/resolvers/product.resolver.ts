import { ResolveFn } from '@angular/router';
import { ProductService } from '../services/product.service';
import { inject } from '@angular/core';
import { Product, ResponseWrapper } from '../models/product.model';

export const productResolver: ResolveFn<Product> = (route, state) => {
  return inject(ProductService).getProductDetails(
    +(route.paramMap.get('id') || '0')
  );
};
