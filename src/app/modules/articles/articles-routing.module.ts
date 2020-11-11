import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesRootComponent } from './components/articles-root/articles-root.component';


const routes: Routes = [
  { path: '', component: ArticlesRootComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
