import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { PanelBoardComponent } from './panel-board/panel-board.component';

const routes: Routes = [
  {path:'',component:PanelBoardComponent},
  {path:'admin-page',component:AdminPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
