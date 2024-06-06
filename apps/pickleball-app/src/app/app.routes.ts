import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('@org/home').then((m) => m.HomeComponent),
  },
  {
    path: 'guest',
    loadComponent: () => import('@org/home-page').then((m) => m.HomePageComponent),
  },
];
