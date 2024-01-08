import { useEffect, useState } from 'react';

export const Counter = ({ initialValue, incrementAmount }) => {
    const [counter, counterUpdate] = useState(initialValue);

    useEffect(() => {
        console.log(`current count: ${counter}`)
    }, [counter])

    const handleIncrement = () => {
        counterUpdate((c) => c + incrementAmount);
    };

    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={handleIncrement}>Increment</button>
        </div>
)}
