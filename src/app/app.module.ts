import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { StocksService } from './services/stocks.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClient,
    AppRoutingModule
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
