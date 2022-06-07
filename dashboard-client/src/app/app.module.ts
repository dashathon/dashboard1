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
import { MentoringWidgetComponent } from './mentoring-widget/mentoring-widget.component';
import { LongAnswersListComponent } from './long-answers-list/long-answers-list.component';
import { ProgrammingExperienceWidgetComponent } from './programming-experience-widget/programming-experience-widget.component';
import { ComparisonAverageSdListComponent } from './comparison-average-sd-list/comparison-average-sd-list.component';
import { ChartMarginRemovalDirective } from './directives/chart-margin-removal.directive';
import { DemographicsWidgetComponent } from './demographics-widget/demographics-widget.component';
import { GenderDistributionComponent } from './demographics-widget/gender-distribution/gender-distribution.component';
import { EventMeasuresWidgetComponent } from './event-measures-widget/event-measures-widget.component';

ClarityIcons.addIcons(cogIcon, resizeIcon, infoCircleIcon);

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    BasicWidgetComponent,
    BasicScoreDisplayComponent,
    MotivationWidgetComponent,
    OpenAnswerListComponent,
    MentoringWidgetComponent,
    LongAnswersListComponent,
    ProgrammingExperienceWidgetComponent,
    ComparisonAverageSdListComponent,
    ChartMarginRemovalDirective,
    DemographicsWidgetComponent,
    GenderDistributionComponent,
    EventMeasuresWidgetComponent
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
