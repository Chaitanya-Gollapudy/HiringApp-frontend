<<<<<<< HEAD

=======
>>>>>>> origin/master
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { PanelBoardComponent } from './panel-board/panel-board.component';
<<<<<<< HEAD
import { SelCandidateComponent } from './sel-candidate/sel-candidate.component';
import { SelPanellistComponent } from './sel-panellist/sel-panellist.component';

const routes: Routes = [
  {path:'',component:PanelBoardComponent},
  {path:'admin-page',component:AdminPageComponent},
  {path:'sel-candidate',component:SelCandidateComponent},
  {path:'sel-panellist',component:SelPanellistComponent}
=======

const routes: Routes = [
  {path:'',component:PanelBoardComponent},
  {path:'admin-page',component:AdminPageComponent}
>>>>>>> origin/master
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
