import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatchScoreComponent } from './match-score/match-score.component';
import { ScoreService } from './score.service';
import { RefreePanelComponent } from './refree-panel/refree-panel.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MatchScoreComponent, RefreePanelComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ScoreService]
})
export class AppModule { }
