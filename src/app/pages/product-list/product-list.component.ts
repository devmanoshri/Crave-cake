import { Component } from '@angular/core';
import { HeroImageComponent } from '../../components/common/hero-image/hero-image.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [HeroImageComponent,RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {}
