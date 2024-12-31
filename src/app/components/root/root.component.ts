import { Component } from '@angular/core';
import {
  ActivatedRoute,
  RouteConfigLoadEnd,
  RouterModule,
} from '@angular/router';
import { PageFooterComponent } from '../common/page-footer/page-footer.component';
import { PageHeaderComponent } from '../common/page-header/page-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, PageHeaderComponent, PageFooterComponent],
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss',
})
export class RootComponent {
  hideFooter = false;
  showScrollButton = false;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data) => {
      this.hideFooter = data['showFooter'] === false;
    });
    window.addEventListener('scroll', () => {
      this.showScrollButton = window.scrollY >= 500;
    });
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
