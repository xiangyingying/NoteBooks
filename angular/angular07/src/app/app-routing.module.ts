import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:"home",
    loadChildren:()=>import('./views/home/home.module').then(m=>m.HomeModule)
  },{
    path:"about",
    loadChildren:()=>import('./views/about/about.module').then(m=>m.AboutModule)
  },{
    path:"file",
    loadChildren:()=>import('./views/file/file.module').then(m=>m.FileModule)
  },
  {
    path:"test",
    loadChildren:()=>import('./views/test/test.module').then(m=>m.TestModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
