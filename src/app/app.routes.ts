import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { PrivateservicesComponent } from './paginas/privateservices/privateservices.component';
import { PrivatetoursComponent } from './paginas/privatetours/privatetours.component';
import { GetquoteComponent } from './paginas/getquote/getquote.component';
import { SharedshuttleComponent } from './paginas/sharedshuttle/sharedshuttle.component';
import { AboutComponent } from './paginas/about/about.component';
import { CorporateComponent} from './paginas/corporate/corporate.component';

import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'privateservices', component: PrivateservicesComponent},
    {path: 'privatetours', component: PrivatetoursComponent},
    {path: 'getquote', component: GetquoteComponent},
    {path: 'sharedshuttle', component: SharedshuttleComponent},
    {path: 'about', component: AboutComponent},
    {path: 'corporate', component: CorporateComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }