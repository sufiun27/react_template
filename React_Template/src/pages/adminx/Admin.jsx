import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '@featuresA/counter/CounterSlice';

export default function Admin() {
  const count = useSelector((state) => state.admin.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
