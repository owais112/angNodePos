import { Routes } from '@angular/router';
import { MainComponent } from 'libs/main/src/public-api';
import { AppComponent } from './app.component';


export const AppRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'heroes',        component: AppComponent },
  // { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: AppComponent },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'maintest',
        loadChildren: () => import('../../libs/main/src/lib/main.module').then(m => m.MainModule)
      }
    ]
  }
  // {
  //    path: '',
  //    component: BlankComponent,
  //    children: [
  //     {
  //       path: '',
  //       loadChildren:
  //         () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  //     }
  //   ]
  // },
  // {
  //   path: '**',
  //   redirectTo: '/404'
  // }
];