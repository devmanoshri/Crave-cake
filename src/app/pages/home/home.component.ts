import { Component } from '@angular/core';
import { HeroImageComponent } from "../../components/common/hero-image/hero-image.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroImageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
