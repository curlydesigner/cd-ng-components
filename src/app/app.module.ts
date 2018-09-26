import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './app.material.module';
import { appRoutes } from './app.routes';
import { FilterModule } from '../filter/filter.module';
import { SearchSelectModule } from '../search-select/search-select.module';
import { SearchInputModule } from '../search-input/search-input.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppMaterialModule,

    FilterModule,
    SearchSelectModule,
    SearchInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

