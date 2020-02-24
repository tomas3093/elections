import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ComparisonComponent } from './components/comparison/comparison.component';
import { OverviewComponent } from './components/overview/overview.component';
import { PageComponent } from './components/page/page.component';
import { PartyComponent } from './components/party/party.component';
import { TwoDigitPercentagePipe } from './pipes/two-digit-percentage.pipe';
import { TwoDigitPipe } from './pipes/two-digit.pipe';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    PartyComponent,
    OverviewComponent,
    AboutComponent,
    ComparisonComponent,
    TwoDigitPipe,
    TwoDigitPercentagePipe
  ],
  imports: [BrowserModule],
  providers: [DataService, TwoDigitPercentagePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
