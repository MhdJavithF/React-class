import { useState } from 'react';
import './../index.css'

export const Counter = ({label,mode}) => {
    const className = `wrapper ${mode}`;
    const [count,setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count+1);
        console.log(count);
    }

    const handleDecrease = () => {
        setCount(count-1);
        console.log(count);
    }

    const handleText = (e) => {
        const val = Number(e.target.value);
        setCount(val);
    }

    return (
        <div className={className}>
            <h3>Counter {label}</h3>
            <button onClick={handleDecrease}>-</button>
            {count}
            <input type='number' value={count} onChange={handleText} placeholder='Enter number' />
            <button onClick={handleIncrease}>+</button>
        </div>
    );
}