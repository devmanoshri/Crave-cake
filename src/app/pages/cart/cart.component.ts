import { Component } from '@angular/core';
import { HeroImageComponent } from "../../components/common/hero-image/hero-image.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [HeroImageComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

}
