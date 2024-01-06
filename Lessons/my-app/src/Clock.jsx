import { useEffect, useState } from "react"

export const Clock = () => {
    
    const [date, setDate] = useState(new Date())        // Remember that newDate obj always contain the current date and the current time

    useEffect(() => {
console.log("Setting up clock interval");               // Setting a message to make it clearer in strict mode or using ctrl+s while running

        const intervalId = setInterval(() => {
            console.log("Updating date...");

            setDate(new Date());                        // Implementing newDate() within an interval that starts when the component mounts, updating the Date every second
        }, 1000)

        return() => {                                   // Implementing cleanup function
            console.log("Clearing clock interval");     // Setting a message to make it clearer in strict mode or using ctrl+s while running
            
            clearInterval(intervalId);
        }
    }, [])

    return(
        <div>
            <p>Current time: {date.toLocaleTimeString()}</p>        {/* using built-in functions to add date and time and let the effect update time every second*/}
            <p>Current date: {date.toLocaleDateString()}</p>
        </div>
    )
}