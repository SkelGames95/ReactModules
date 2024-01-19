import { useEffect, useState, useRef } from "react"

const createData = () => {
    return {
        username: '',
        password: '',
        session: false,
        //other parameters
    }
}

export const Form = () => {
    const [data, setData] = useState(createData)

    const mountedRef = useRef(false);                               // giving a boolean value to mountedRef to make it switch every time it's renderized and then going to attach it to a useEffect
    
    const inputRef = useRef(null);                                  // initializing ref

    useEffect(() => {
        if (!mountedRef.current) {                                          // if mountedRef.current isn't false, then
            mountedRef.current == true
            console.log('Mounting the component for the first time');
        } else {                                                            // this particular useEffect is going to be useful and notable during the use of the Strict mode due to the debug control
            console.log('Mounting component again for debug purposes')
        }

        inputRef.current?.focus()                                   //  side eff: access the ref by accessing the current value (null). Putting a '?' to use the effect if the value is different from null or undefined and stating the focus on the element
    }, [])                                                          // the array is empty because the event is going to be fired only when the component mounts

    const handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        const checked = event.target.checked
        const type = event.target.type
    
        setData(currdata => {
            return {
                ...currdata,
                [name]: type === 'checkbox' ? checked : value,

            }
        })       
    }

    const handleResetForm = () => {
        setData(createData)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(data);
    }

    // console.log(inputRef)               // showing the creation of object {current: null} in console

    return (
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} name="username" value={data.username} onChange={handleInputChange} placeholder="Username"/>       {/* assigning ref as an attribute */}
            <input name="password" type="password" value={data.password} onChange={handleInputChange} placeholder="Password"/>
            <button name="Reset" onClick={handleResetForm}>Reset</button>
            <br/>
            <br/>
            <label><input name="session" type="checkbox" checked={data.session} onChange={handleInputChange}/>Remember me</label>
            <br/>
            <br/>
            <button type="submit" disabled={!data.username || !data.password}>Login</button>

            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </form>
    )
}