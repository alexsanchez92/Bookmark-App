import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment

import { bookmarkReducer } from '../store/bookmark/bookmark.reducer';
import { BookmarkEffects } from '../store/bookmark/bookmark.effects';

import {MaterialModule} from './material-module';

/***********************/
/* CUSTOM COMPONENTS */
/***********************/
import { BookmarkDialogComponent } from './bookmark-dialog/bookmark-dialog.component';
import { BookmarkTableComponent } from './bookmark-table/bookmark-table.component';
import { BookmarkTableNgrxComponent } from './bookmark-table-ngrx/bookmark-table-ngrx.component';
import { NoNgrxComponent } from './no-ngrx/no-ngrx.component';
import { WithNgrxComponent } from './with-ngrx/with-ngrx.component';

@NgModule({
  declarations: [
    AppComponent,
    BookmarkDialogComponent,
    BookmarkTableComponent,
    BookmarkTableNgrxComponent,
    NoNgrxComponent,
    WithNgrxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    StoreModule.forRoot({ bookmarks: bookmarkReducer }),
    EffectsModule.forRoot([BookmarkEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }