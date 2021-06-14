import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelBoardComponent } from './panel-board/panel-board.component';

const routes: Routes = [
  {path:'',component:PanelBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
