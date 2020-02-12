import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { MoringComponent } from './components/moring/moring.component';
import { NightComponent } from './components/night/night.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    AboutComponent,
    ErrorComponent,
    DetailComponent,
    MoringComponent,
    NightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
