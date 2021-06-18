import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelBoardComponent } from './panel-board/panel-board.component';
import { SelCandidateComponent } from './sel-candidate/sel-candidate.component';
import { SelPanellistComponent } from './sel-panellist/sel-panellist.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WebViewerComponent } from './web-viewer/web-viewer.component';
import { AdminComponent } from './admin/admin.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelBoardComponent,
    SelCandidateComponent,
    SelPanellistComponent,
    WebViewerComponent,
    AdminComponent,
    ViewDetailComponent
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
