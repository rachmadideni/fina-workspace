import { combineReducers } from '@reduxjs/toolkit'
import auth from './auth';
import { authService } from '../services/auth.service';

const rootReducer = combineReducers({
    auth,
    [authService.reducerPath]: authService.reducer 
});
export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;