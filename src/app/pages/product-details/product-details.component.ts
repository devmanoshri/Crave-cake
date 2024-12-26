import { Component } from '@angular/core';
import { HeroImageComponent } from '../../components/common/hero-image/hero-image.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [HeroImageComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {}
