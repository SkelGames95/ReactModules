// Going to create a component with counter applying hooks for the firts time, specifically using the useState hook

import { useState } from "react"

// export const Counter = () => {
//     const [ counter, counterUpdate ] = useState(10);        // using the destructuring to assign variables to useState values

//     function handleCounterIncrement () {
//         counterUpdate((c) => c + 1);                        // setting the stateUpdate considering the current value (c) of the State value to bypass the latency in updates and run the update more times
//         counterUpdate((c) => c + 1);
//         counterUpdate((c) => c + 1);
//     }

//     function handleCounterDecrement () {
//         counterUpdate(counter - 1)
//     }

//     function handleResetCounter () {
//         counterUpdate(10)
//     }

//     return (
//         <div>
//             <p>I have counted to {counter}</p>              {/*substituting the placeholder with the counter variable */}
//             <button onClick={handleCounterIncrement}>Increment</button>
//             <br/>
//             <br/>
//             <button onClick={handleCounterDecrement}>Decrement</button>
//             <br/>
//             <br/>
//             <button onClick={handleResetCounter}>Reset</button>
//         </div>
//     )
// }

// fact: to put a placeholder in this code we can conventionally write it like _THIS_


export const Counter = ({initialValue = 0}) => {                                        // passing initialValue with default value = 0 as a prop 
    const [ counter, counterUpdate ] = useState(initialValue);                          // passing the initialValue as basic counter value

    function handleCounterIncrement () {
        counterUpdate((c) => c + 1);
        counterUpdate((c) => c + 1);
        counterUpdate((c) => c + 1);
    }

    function handleCounterDecrement () {
        counterUpdate(counter - 1)
    }

    function handleResetCounter () {
        counterUpdate(initialValue)                                                     // passing initialValue as the reset value
    }

    return (
        <div>
            <p>I have counted to {counter}</p>
            <button onClick={handleCounterIncrement}>Increment</button>
            <br/>
            <br/>
            <button onClick={handleCounterDecrement}>Decrement</button>
            <br/>
            <br/>
            <button onClick={handleResetCounter}>Reset</button>
        </div>
    )
}