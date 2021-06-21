import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { PanelBoardComponent } from './panel-board/panel-board.component';
import { PanelLoginComponent } from './panel-login/panel-login.component';
import { PastInterviewsComponent } from './past-interviews/past-interviews.component';
import { SelCandidateComponent } from './sel-candidate/sel-candidate.component';
import { SelPanellistComponent } from './sel-panellist/sel-panellist.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { WebViewerComponent } from './web-viewer/web-viewer.component';

const routes: Routes = [
  {path:'',component:PanelBoardComponent},
  {path:'sel-candidate',component:SelCandidateComponent},
  {path:'sel-panellist',component:SelPanellistComponent},
  {path: 'web-viewer',component:WebViewerComponent},
  {path: 'admin',component:AdminComponent},
  {path: 'view-detail',component:ViewDetailComponent},
  {path: 'panel-login',component:PanelLoginComponent},
  {path: 'past-interview',component:PastInterviewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
