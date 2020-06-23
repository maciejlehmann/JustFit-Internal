import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PawelComponent } from './pawel.component';
import { Shell } from '@app/shell/shell.service';
import { extract } from '@app/i18n';


const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/worker', pathMatch: 'full' },
    { path: 'worker', component: PawelComponent, data: { title: extract('Pracownicy') } },
  ]),
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PawelRoutingModule { }
