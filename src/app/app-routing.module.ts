import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { BusinessComponent } from './business/business.component';
import { HomeComponent } from './home/home.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { StocksComponent } from './stocks/stocks.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'realEstate', component:RealEstateComponent},
  {path: 'business', component:BusinessComponent},
  {path: 'stocks', component:StocksComponent},
  {path: 'knowledge', component:KnowledgeComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
