import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Counter კომპონენტი ჩაიტვირთა!');
  }, []);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0' }}>
      <h3>მრიცხველი: {count}</h3>
      <button onClick={handleIncrement}>გაზრდა (+)</button>
      <button onClick={handleDecrement} style={{ marginLeft: '10px' }}>
        შემცირება (-)
      </button>
    </div>
  );
}

export default Counter;