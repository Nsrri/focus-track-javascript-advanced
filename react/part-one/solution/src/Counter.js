import { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [value, setValue] = useState(0);

  const countUp = () => {
    setValue(value + 1);
  };

  const countDown = () => {
    setValue(value - 1);
  };

  const counterClass = value > 10 ? 'red' : undefined;

  return (
    <div className="yellow">
      {value > 0 && <button onClick={countDown}>Count down</button>}
      <p className={counterClass}>Value is: {value}</p>
      <button onClick={countUp}>Count up</button>
    </div>
  );
};

export default Counter;
