// Creation of a component with a button and an event to be triggered on click

// export const AlertClock = () => {
//     function handleButtonClick() {
//         const now = new Date();                                         // Date object is a built-in constructor 
//         alert(`The current time is ${now.toLocaleTimeString()}`)        // alert is a global function that receives a string that we can show within an alert that appears in browser
//                                                                         // toLocaleTimeString is also a built-in function that extract the time in the local format
//     }
    
//     return(
//         <div>
//             <p>Click the button below to show the current time</p>
//             <button onClick={handleButtonClick}>Show time!</button>
//         </div>
//     )
// }


// substituting the button in the component with the other component generated

import { Button } from "./Button";

export const AlertClock = () => {
    function handleShowTime() {
        const now = new Date();                                         // Date object is a built-in constructor 
        alert(`The current time is ${now.toLocaleTimeString()}`)        // alert is a global function that receives a string that we can show within an alert that appears in browser
                                                                        // toLocaleTimeString is also a built-in function that extract the time in the local format
    }
    
    return(
        <div>
            <p>Click the button below to show the current time</p>
            <Button onClick={handleShowTime} label="Show time!"/>
        </div>
    )
}