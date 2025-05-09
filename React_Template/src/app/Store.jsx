//! main store path : app/
import { configureStore } from '@reduxjs/toolkit';

import AdminStore from '../features/adminx/AdminStore'

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    admin:AdminStore,
  },
});
