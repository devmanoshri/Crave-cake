export interface ResponseWrapper<T> {
  data: T;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  max_quantities: number;
  product_category: string;
  price: number;
  tags: string[];
  rating: number;
  no_of_customer_reviewed: number;
  SKU: string;
  weight: string;
  dimensions: string;
}
