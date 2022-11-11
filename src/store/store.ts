import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import catalogReducer from '../features/Catalog/catalogSlice';
import authReducer from '../features/Auth/authSlice';
import registerReducer from '../features/Registration/registrationSlice';

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    auth: authReducer,
    register: registerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
