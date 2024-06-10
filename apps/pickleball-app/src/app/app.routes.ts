import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'guest',
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
  {
    path: 'owner',
    loadComponent: () =>
      import('@org/owner').then((m) => m.OwnerComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('@org/login').then((m) => m.LoginComponent),
  },
];
