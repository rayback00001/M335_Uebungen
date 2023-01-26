import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// Auth-Guards imports hinzufügen
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';

// Standardverhalten festlegen
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToRoot = () => redirectLoggedInTo(['']);

const routes: Routes = [
  {
    path: '',
    redirectTo: '/navigation',
    pathMatch: 'full'
  },
  {
    path: 'navigation',
    loadChildren: () => import('./navigation/navigation.module').then( m => m.NavigationPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'navigation-detail',
    loadChildren: () => import('./navigation-detail/navigation-detail.module').then( m => m.NavigationDetailPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'zahlen',
    loadChildren: () => import('./zahlen/zahlen.module').then( m => m.ZahlenPageModule)
  },
  {
    path: 'string',
    loadChildren: () => import('./string/string.module').then( m => m.StringPageModule)
  },
  {
    path: 'objekte',
    loadChildren: () => import('./objekte/objekte.module').then( m => m.ObjektePageModule)
  },
  {
    path: 'array',
    loadChildren: () => import('./array/array.module').then( m => m.ArrayPageModule)
  },
  {
    path: 'data-binding',
    loadChildren: () => import('./data-binding/data-binding.module').then( m => m.DataBindingPageModule)
  },
  {
    path: 'rechner',
    loadChildren: () => import('./rechner/rechner.module').then( m => m.RechnerPageModule)
  },
  {
    path: 'alerts',
    loadChildren: () => import('./alerts/alerts.module').then( m => m.AlertsPageModule)
  },
  {
    path: 'newsletter',
    loadChildren: () => import('./newsletter/newsletter.module').then( m => m.NewsletterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToRoot }
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToRoot }
  },
  {
    path: 'storage',
    loadChildren: () => import('./storage/storage.module').then( m => m.StoragePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
