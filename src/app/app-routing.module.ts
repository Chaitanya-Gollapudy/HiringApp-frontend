import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelBoardComponent } from './panel-board/panel-board.component';
import { SelCandidateComponent } from './sel-candidate/sel-candidate.component';
import { SelPanellistComponent } from './sel-panellist/sel-panellist.component';

const routes: Routes = [
  {path:'',component:PanelBoardComponent},
  {path:'sel-candidate',component:SelCandidateComponent},
  {path:'sel-panellist',component:SelPanellistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
