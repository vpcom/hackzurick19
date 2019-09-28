import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ParametersComponent } from './parameters/parameters.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ParametersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MainComponent]
})
export class AppModule { }
