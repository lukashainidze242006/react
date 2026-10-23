import { useSelector, useDispatch } from 'react';
import { increment, decrement, reset } from '../redux/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ border: '1px solid #aaa', padding: '15px', marginTop: '10px' }}>
      <h3>Redux მრიცხველი: {count}</h3>
      <button onClick={() => dispatch(increment())}>გაზრდა (+)</button>
      <button onClick={() => dispatch(decrement())} style={{ marginLeft: '10px' }}>შემცირება (-)</button>
      <button onClick={() => dispatch(reset())} style={{ marginLeft: '10px' }}>განულება</button>
    </div>
  );
}

export default Counter;