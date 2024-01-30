import { useEffect, useState } from "react"

export const MessageButton = () => {

    const [toggle, setToggle] = useState(true)
    
    // useEffect(() => {                                // want to implement
    //     console.log("... Now you can't!");
    // }, [toggle])

    return (
        <div>
            <h1>Vanishing Text</h1>
            {toggle && <p>Now you can see me...</p>}
            <button onClick={ () => setToggle(!toggle)}>Tap Here</button>
        </div>
    )
}