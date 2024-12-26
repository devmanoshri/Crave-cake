import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-image.component.html',
  styleUrl: './hero-image.component.scss',
})
export class HeroImageComponent {
  @Input() pageTitle = '';
  @Input() imageName = 'cake-bg-2.jpg';
}
