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
import { HttpClientModule } from '@angular/common/http';

ClarityIcons.addIcons(cogIcon, resizeIcon, infoCircleIcon);

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    BasicWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
