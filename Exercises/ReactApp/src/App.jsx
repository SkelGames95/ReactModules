import { AlertClock } from "./AlertClock"

export const App = () => {
    const handleButtonOnClick = () => {
        alert(`Current time is: ${new Date().toLocaleTimeString()}`)
    }


    return (
        <div>
            <AlertClock handleButtonOnClick={handleButtonOnClick}/>
        </div>
    )
}