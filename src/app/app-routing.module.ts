import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'garminConnect',
    redirectTo: 'GarminConnect'
  },
  {
    path: 'GarminConnect',
    loadChildren: () => import('./garmin-connect/garmin-connect.module').then(m => m.GarminConnectModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
