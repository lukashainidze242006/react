import { useState, useMemo, useCallback } from 'react';

function Optimization() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [count, setCount] = useState(0);

  // 3.5.1 useMemo: გამოიყენება ლუწი რიცხვების გაფილტვრის შედეგის დასამახსოვრებლად
  const evenNumbers = useMemo(() => {
    return numbers.filter((num) => num % 2 === 0);
  }, [numbers]);

  // 3.5.2 useCallback: გამოიყენება რიცხვის დამატების ფუნქციის დასამახსოვრებლად
  const addNumber = useCallback(() => {
    setNumbers((prev) => [...prev, prev.length + 1]);
  }, []);

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', marginTop: '15px' }}>
      <h3>ოპტიმიზაცია (useMemo & useCallback)</h3>
      <p>ყველა რიცხვი: {numbers.join(', ')}</p>
      <p>ლუწი რიცხვები (useMemo): {evenNumbers.join(', ')}</p>
      <button onClick={addNumber}>რიცხვის დამატება (useCallback)</button>
    </div>
  );
}

export default Optimization;