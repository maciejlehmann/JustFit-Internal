import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RemekComponent } from './remek.component';
import { Shell } from '@app/shell/shell.service';
import { extract } from '@app/i18n';


const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'remek', component: RemekComponent, data: { title: extract('Produkty') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemekRoutingModule { }
