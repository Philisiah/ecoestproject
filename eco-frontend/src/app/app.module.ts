import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppHeaderComponent } from './app-header/app-header.component';

// ng-zorro imports
import {NzLayoutModule} from "ng-zorro-antd/layout";
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzMenuModule} from "ng-zorro-antd/menu";
import { MapComponent } from './map/map.component';
import { RealTimeDashboardComponent } from './real-time-dashboard/real-time-dashboard.component';
import { CommunityProjectsComponent } from './community-projects/community-projects.component';
import { FooterComponent } from './footer/footer.component';

registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    MapComponent,
    RealTimeDashboardComponent,
    CommunityProjectsComponent,
    FooterComponent,
  //   ng-zorro modules
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzButtonModule,
    NzMenuModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
