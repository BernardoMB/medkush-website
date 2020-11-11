import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoRootComponent } from './components/info-root/info-root.component';


const routes: Routes = [
  { path: '', component: InfoRootComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
