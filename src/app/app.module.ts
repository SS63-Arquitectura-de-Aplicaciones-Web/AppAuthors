import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthorComponent } from './component/author/author.component';
import { AuthorListarComponent } from './component/author/author-listar/author-listar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatTableModule} from '@angular/material/table';
import { CreateEditComponent } from './component/author/create-edit/create-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    AuthorListarComponent,
    CreateEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
