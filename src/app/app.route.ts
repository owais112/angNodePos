import { Routes } from '@angular/router';
import { FormValidationComponent } from 'libs/form-validation/src/public-api';
import { MainComponent } from 'libs/main/src/public-api';
import { AppComponent } from './app.component';

export const AppRoutes: Routes = [
  { path: '**', component: AppComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: MainComponent },
  { path: 'form-validation',        component: FormValidationComponent },
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
];