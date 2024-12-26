import { Routes } from '@angular/router';
import { RootComponent } from './components/root/root.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products/list',
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: RootComponent,
    children: [
      {
        path: 'list',
        loadComponent: () =>
          import('./pages/product-list/product-list.component').then(
            (c) => c.ProductListComponent
          ),
      },
      {
        path: 'details/:id',
        loadComponent: () =>
          import('./pages/product-details/product-details.component').then(
            (c) => c.ProductDetailsComponent
          ),
      },
    ],
  },
  {
    path: 'about',
    component: RootComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/about/about.component').then((c) => c.AboutComponent),
      },
    ],
  },
  {
    path: 'contact-us',
    component: RootComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/contact-us/contact-us.component').then(
            (c) => c.ContactUsComponent
          ),
      },
    ],
  },
  {
    path: 'cart',
    component: RootComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/cart/cart.component').then((c) => c.CartComponent),
      },
    ],
  },
];
