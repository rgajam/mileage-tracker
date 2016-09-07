import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdCoreModule } from '@angular2-material/core';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdInputModule } from '@angular2-material/input';
import { MdIconModule } from '@angular2-material/icon';
import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCoreModule,
    MdToolbarModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
