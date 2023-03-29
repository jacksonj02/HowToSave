import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { BusinessComponent } from './business/business.component';
import { StocksComponent } from './stocks/stocks.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    RealEstateComponent,
    BusinessComponent,
    StocksComponent,
    KnowledgeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
