import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { PageNotFoundComponent } from './main_components/page-not-found/page-not-found.component';


const routes: Routes = [
  //{path: 'User', loadChildren: './modules/user/user.module#UserModule'},
  {path: 'LogIn', loadChildren: './modules/login/login.module#LoginModule'},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing : true})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}