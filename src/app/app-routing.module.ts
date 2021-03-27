import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DELETErequestComponent } from './deleterequest/deleterequest.component';
import { GETrequestComponent } from './getrequest/getrequest.component';
import { POSTrequestComponent } from './postrequest/postrequest.component';

const routes: Routes = [
  { path: 'get', component: GETrequestComponent },
  { path: 'post', component: POSTrequestComponent },
  { path: 'delete', component: DELETErequestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
