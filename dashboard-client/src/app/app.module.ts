import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShellComponent } from './shell/shell.component';
import { ClarityIcons,
          cogIcon,
          resizeIcon,
          infoCircleIcon
} from '@cds/core/icon';
import { BasicWidgetComponent } from './basic-widget/basic-widget.component';
import { BasicScoreDisplayComponent } from './basic-score-display/basic-score-display.component';
import { HttpClientModule } from '@angular/common/http';
import { MotivationWidgetComponent } from './motivation-widget/motivation-widget.component';
import { OpenAnswerListComponent } from './open-answer-list/open-answer-list.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

ClarityIcons.addIcons(cogIcon, resizeIcon, infoCircleIcon);

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    BasicWidgetComponent,
    BasicScoreDisplayComponent,
    MotivationWidgetComponent,
    OpenAnswerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
