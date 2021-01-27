import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqRootComponent } from './components/faq-root/faq-root.component';


const routes: Routes = [
  { path: '',
    data: { breadcrumb: null },
    children: [
      {
        path: '',
        component: FaqRootComponent,
        data: {
          breadcrumb: null
        },
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqRoutingModule { }
