//! admin store path: features/adminx
import { combineReducers } from 'redux';
import CounterSlice from '@featuresA/counter/CounterSlice'

 const AdminStore = combineReducers({
    counter: CounterSlice,
  });

  export default AdminStore;