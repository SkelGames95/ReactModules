// Rendering an array of Objects

import { useState } from "react"

// export const ListOfObjects = ({objects}) => {             // this time passing an array of objects as prop pretending it's the result of an API

//     return (
//         <ul>
//             {objects.map((item) => (
//                 <li key={item.id}>{item.user}, {item.age}</li>      // using the id of the objects as key then listing the properties of each one
//             ))}
//         </ul>
//     )
// }


// Styling more the same thing

// export const ListOfObjects = ({objects}) => {

//     return (
//         <ul>
//             {objects.map((item) => (
//                 <li key={item.id}>
//                     <h4>{item.user}</h4>
//                     <p>He/She is {item.age} years old</p>
//                 </li>
//             ))}
//         </ul>
//     )
// }


// Using a co-located component to define how the object keys and values have to be rendered and then rendering it through another component calling the callback function map:

const MyListItem = ({ item }) => {              // 2. Passing the prop through the component that says how to render the object through their key-value pairs

    const [counter, setCounter] = useState(0);

    const handleIncrementButton = () => setCounter((c) => c + 1);

    const handleReset = () => {
        setCounter(0)
    }

    return (
        <li>
            <h4>{item.user}</h4>
            <p>He/She is {item.age} years old</p>
            <button onClick={handleIncrementButton}>{counter}</button>
            <button onClick={handleReset}>Reset</button>
        </li>
    )
}

export const ListOfObjects = ({ objects }) => {     // 3. Passing the object named "objects" as the prop to the exported main component

    return (
        <ul>
            {objects.map((item) => (                // 4. Saying "objects" passed as prop has to be mapped using the scheme stated in the previous component
                <MyListItem key={item.id} item={item} />      // 1. Setting the prop for MyListItem on "item" and passing the key to read the values of the object as a prop
            ))}
        </ul>
    )
}