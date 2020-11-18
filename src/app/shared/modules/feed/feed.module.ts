import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './components/feed/feed.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { GetFeedEffect } from './store/effects/getFeed.effect';



@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
      EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers)
  ],
  exports: [FeedComponent]
})
export class FeedModule { }
