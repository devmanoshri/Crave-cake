import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-slider.component.html',
  styleUrl: './banner-slider.component.scss',
})
export class BannerSliderComponent {
  getImageName(index: number): string {
    return `./assets/images/home/home-slider-${index}.jpg`;
  }
}
