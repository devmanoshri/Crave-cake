import { Component } from '@angular/core';
import { HeroImageComponent } from '../../components/common/hero-image/hero-image.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [HeroImageComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {}
