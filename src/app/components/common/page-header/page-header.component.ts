import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss',
})
export class PageHeaderComponent {
  showDropdown = false;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.document.addEventListener('click', (event) => {
      let isTargetInMenu = false;
      this.document.querySelectorAll('.menu ul, .menu ul *, .hamburger-menu').forEach((el) => {
        if (el === event.target) {
          isTargetInMenu = true;
        }
      });
      isTargetInMenu ? (this.showDropdown = true) : (this.showDropdown = false);
    });
  }
}
