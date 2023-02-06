import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [],
    data: { breadcrumb: 'Home' },
    children: [
      {
        path: 'about',
        canLoad: [],
        loadComponent: () =>
          import('./home/demo-page/demo-page.component').then((m) => m.DemoPageComponent),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
