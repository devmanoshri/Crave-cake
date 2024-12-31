import { Component } from '@angular/core';
import { HeroImageComponent } from "../../components/common/hero-image/hero-image.component";
import { Cart } from '../../models/cart.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [HeroImageComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  //cartItems = [{}] as Cart[] 

  cartItems: Cart[] = [
    {
      id: 1,
      product_id: 1,
      product_name: 'Coconut Tart',
      product_price: 5.99,
      quantity: 2,
    },
    {
      id: 2,
      product_id: 4,
      product_name: 'Red Velvet Cake',
      product_price: 15.99,
      quantity: 3,
    },
    {
      id: 3,
      product_id: 6,
      product_name: 'Chocolate Cupcake',
      product_price: 3.99,
      quantity: 1,
    },
  ];

}
