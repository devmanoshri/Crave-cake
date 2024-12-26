import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '../common/page-header/page-header.component';
import { PageFooterComponent } from "../common/page-footer/page-footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, PageHeaderComponent, PageFooterComponent],
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss',
})
export class RootComponent {}
