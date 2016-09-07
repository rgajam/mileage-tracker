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
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

// Must export the config
export const firebaseConfig = {
  apiKey: "<your-key>",
  authDomain: "<your-project-authdomain>",
  databaseURL: "<your-database-URL>",
  storageBucket: "<your-storage-bucket>"
};

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
    MdIconModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
