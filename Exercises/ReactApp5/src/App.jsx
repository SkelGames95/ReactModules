import { useState } from "react"
import { Login } from "./Login"

export const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);        // isLoggedIn starts as false

    const handleLogin = () => {                                 // handling the onLogin we are going to apply isLoggedIn == true
        setIsLoggedIn(!isLoggedIn);

        console.log("Current login state:", !isLoggedIn);       // printing the new login state corresponding to the opposite of the state before
    }

    return (
        <div>
            <h1>My App</h1>
            <Login onLogin={handleLogin} isLoggedIn={isLoggedIn}/>      {/* applying the handling of login to the Login component as prop together with the value of isLoggedIn useful in it */}
        </div>
    )
}