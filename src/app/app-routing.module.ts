import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'try',
    loadChildren: () => import('./page/try/try.module').then( m => m.TryPageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./page/category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'tag',
    loadChildren: () => import('./page/tag/tag.module').then( m => m.TagPageModule)
  },
  {
    path: 'timeline',
    loadChildren: () => import('./page/timeline/timeline.module').then( m => m.TimelinePageModule)
  },
  {
    path: 'about-me',
    loadChildren: () => import('./page/about-me/about-me.module').then( m => m.AboutMePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
