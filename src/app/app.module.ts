import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule }    from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';
import { NewCyclingComponent } from './new-cycling/new-cycling.component';
import { NewWeightliftingComponent } from './new-weightlifting/new-weightlifting.component';
import { WeightliftingComponent } from './weightlifting/weightlifting.component';
import { CyclingComponent } from './cycling/cycling.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewCyclingComponent,
    NewWeightliftingComponent,
    WeightliftingComponent,
    CyclingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
