import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

export const productResolver: ResolveFn<Product> = (route, state) => {
  return inject(ProductService).getProductDetails(
    +(route.paramMap.get('id') || '0')
  );
};
