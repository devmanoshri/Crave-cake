import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BannerSliderComponent } from './banner-slider/banner-slider.component';
import { CakeMyDayComponent } from './cake-my-day/cake-my-day.component';
import { InfoBlockComponent } from './info-block/info-block.component';
import { OurPeopleComponent } from './our-people/our-people.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BannerSliderComponent,
    InfoBlockComponent,
    OurPeopleComponent,
    CakeMyDayComponent,
    TestimonialsComponent,
    PhotoGalleryComponent,
    SocialMediaComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
