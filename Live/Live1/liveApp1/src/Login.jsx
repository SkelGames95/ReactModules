import { useState } from "react";

export const Login = () => {

    const [toggle, setToggle] = useState(false);

    const handleOnClickButton = () => {
        setToggle ((toggle) => !toggle)
    }

    return (
        <div>
            { toggle ? <p>Please Log In</p> : <p>Welcome, User</p>}
            <button onClick={handleOnClickButton}>{ toggle ? "Log In" : "Log Out" }</button>
        </div>
    )
}

