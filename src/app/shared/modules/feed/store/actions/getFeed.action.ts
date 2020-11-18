import { createAction, props } from '@ngrx/store';
import { IGetFeedResponse } from '../../types/getFeedResponse.interface';
import { ActionTypes } from '../actionTypes';

export const getFeedAction = createAction(
	ActionTypes.GET_FEED_ACTION,
	props<{url: string}>()
)

export const getFeedSuccessAction = createAction(
	ActionTypes.GET_FEED_ACTION_SUCCESS,
	props<{feed: IGetFeedResponse}>()
)

export const getFeedFailureAction = createAction(
	ActionTypes.GET_FEED_ACTION_FAILURE,
)
