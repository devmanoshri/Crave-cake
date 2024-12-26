import { Component } from '@angular/core';
import { HeroImageComponent } from '../../components/common/hero-image/hero-image.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeroImageComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
