import { createSelector } from 'reselect'
import { AppState } from '../rootReducer';
export const getAuthSelector = (state: AppState) => state.auth;
export const getToken = createSelector(getAuthSelector, (auth) => auth.token)
export const getUser = createSelector(getAuthSelector, auth => auth.user)