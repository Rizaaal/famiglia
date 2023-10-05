import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FiglioComponent } from './componenti/figlio/figlio.component';
import { PadreComponent } from './componenti/padre/padre.component';

@NgModule({
  declarations: [
    AppComponent,
    FiglioComponent,
    PadreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
