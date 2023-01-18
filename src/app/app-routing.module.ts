import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ResultComponent } from './components/result/result.component';
import { UploadComponent } from './components/upload/upload.component';

const routes: Routes = [
  {
    path : '',
    pathMatch : 'full',
    redirectTo : 'upload'
  },
  {
    path : 'home',
    pathMatch : 'full',
    component : HomeComponent
  },
  {
    path : 'upload',
    pathMatch : 'full',
    component : UploadComponent
  },
  {
    path : 'result',
    pathMatch : 'full',
    component : ResultComponent
  },
  {
    path : '**',
    component : NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
