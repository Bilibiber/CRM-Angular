import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';


const routes: Routes = [
  {path:'', redirectTo:'auth', pathMatch:'full'},
  {path:'auth', component:UserAuthComponent},
  {path: 'terms', component:TermsComponent},
  {path: 'privacy', component:PrivacyComponent},
  {path:'parent', component:ParentComponent, children:[
    {path:'child', component:ChildComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
