import { useState } from "react"
import { Welcome } from "./Welcome"

export const InteractiveWelcome = () => {
    const [username, setUsername] = useState('');

    const handleOnChange = (event) => {
        const value = event.target.value
        setUsername(value)
    }

    return (
        <div>
            <input name="username" value={username} onChange={handleOnChange} placeholder="Username"/>
            <Welcome name={username}/>
        </div>
    )
}