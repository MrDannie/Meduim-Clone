import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
import { HttpClientModule } from '@angular/common/http'
import { EffectsModule } from '@ngrx/effects'
import { TopBarModule } from './shared/modules/top-bar/top-bar.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TopBarModule,
    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
