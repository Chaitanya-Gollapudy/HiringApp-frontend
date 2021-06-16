<<<<<<< HEAD

=======
>>>>>>> origin/master
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelBoardComponent } from './panel-board/panel-board.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
<<<<<<< HEAD
import { SelCandidateComponent } from './sel-candidate/sel-candidate.component';
import { SelPanellistComponent } from './sel-panellist/sel-panellist.component';
=======
>>>>>>> origin/master
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PanelBoardComponent,
<<<<<<< HEAD
    AdminPageComponent,
    SelCandidateComponent,
    SelPanellistComponent
=======
    AdminPageComponent
>>>>>>> origin/master
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
