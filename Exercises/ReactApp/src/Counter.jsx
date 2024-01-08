import { useState } from 'react';
import { CounterDisplay } from './CounterDisplay';

export const Counter = ({ initialValue, UpdateAmount }) => {
    const [counter, counterUpdate] = useState(initialValue);

    const handleIncrement = () => {
        counterUpdate((c) => c + UpdateAmount);
    };

    const handleDecrement = () => {
        counterUpdate((c) => c - UpdateAmount);
    };

    const handleReset = () => {
        counterUpdate(initialValue);
    };

    return (
        <div>
            <CounterDisplay countState={counter} />
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
)}
