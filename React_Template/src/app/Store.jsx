//! main store path : app/
import { configureStore } from '@reduxjs/toolkit';

import AdminStore from '@featuresA/AdminStore'

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    admin:AdminStore,
  },
});
