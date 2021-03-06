import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LandingComponent } from './components/landing/landing.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsResolverService } from './modules/products/services/products-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: LandingComponent, resolve: { productsInfo: ProductsResolverService } },
      { path: 'about', loadChildren: () => import('./modules/about/about.module').then(mod => mod.AboutModule), data: { breadcrumb: 'Nosotros' } },
      { path: 'products', loadChildren: () => import('./modules/products/products.module').then(mod => mod.ProductsModule), data: { breadcrumb: 'Productos' } },
      { path: 'info', loadChildren: () => import('./modules/info/info.module').then(mod => mod.InfoModule) },
      { path: 'faq', loadChildren: () => import('./modules/faq/faq.module').then(mod => mod.FaqModule), data: { breadcrumb: 'FAQ' } },
      { path: 'blog', loadChildren: () => import('./modules/blog/blog.module').then(mod => mod.BlogModule) },
      { path: 'articles', loadChildren: () => import('./modules/articles/articles.module').then(mod => mod.ArticlesModule) },
    ],
  },
  // Wildcard route.
  // It matches every URL and should be selected only if no other routes are matched first.
  // This wildcard route should be the last route declared in the hole application.
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
