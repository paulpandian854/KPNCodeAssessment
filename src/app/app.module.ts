import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { addProductReducer } from './ngrx/product.reducer';
import { ChuckContainerComponent } from './components/chuck-container/chuck-container.component';
import { ChuckTableComponent } from './components/chuck-table/chuck-table.component';
import { ChuckFavoritesComponent } from './components/chuck-favorites-table/chuck-favorites.component';
import { AppService } from './service/app.service';
import { HttpModule } from '@angular/http';
import { localStorageSync } from 'ngrx-store-localstorage';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['chuckNorrisStore'], rehydrate: true})(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    ChuckContainerComponent,
    ChuckTableComponent,
    ChuckFavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    StoreModule.forRoot({chuckNorrisStore: addProductReducer}, {metaReducers})
  ],
  providers: [ AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
