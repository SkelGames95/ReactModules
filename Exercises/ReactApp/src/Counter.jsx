import { useState } from 'react';

export const Counter = ({ initialValue, incrementAmount }) => {
    const [counter, counterUpdate] = useState(initialValue);

    const handleIncrement = () => {
        counterUpdate((c) => c + incrementAmount);
    };

    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={handleIncrement}>Increment</button>
        </div>
)}
