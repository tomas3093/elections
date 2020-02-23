import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GraphBoxComponent } from './graph-box/graph-box.component';
import { OverviewComponent } from './overview/overview.component';
import { PageComponent } from './page/page.component';
import { PartyComponent } from './party/party.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    PartyComponent,
    OverviewComponent,
    GraphBoxComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
