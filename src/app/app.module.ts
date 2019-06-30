import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SingleItemPageComponent } from './single-item-page/single-item-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    SearchResultsComponent,
    SingleItemPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TypeaheadModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
