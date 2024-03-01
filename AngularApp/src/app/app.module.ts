import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterviewComponent } from './Components/masterview/masterview.component';
import { MasteraddComponent } from './Components/masteradd/masteradd.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MastereditComponent } from './Components/masteredit/masteredit.component';


@NgModule({
  declarations: [
    AppComponent,
    MasterviewComponent,
    MasteraddComponent,
    MastereditComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
