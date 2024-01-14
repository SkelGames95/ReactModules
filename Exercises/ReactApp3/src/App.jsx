import { useState } from "react"
import { Login } from "./Login"

export const App = () => {
    const [login, setLogin] = useState(true)

    const onLogin = () => {
        setLogin(!login);

        console.log("Current login state:", login);
    }

    return (
        <div>
            <h1>My App</h1>
            <Login onClick={onLogin}/>
        </div>
    )
}