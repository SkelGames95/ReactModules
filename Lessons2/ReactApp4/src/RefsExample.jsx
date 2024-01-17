import { useState } from "react"

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

    return (
        <div>
            <input name="username" value={data.username} onChange={handleInputChange} placeholder="Username"/>
            <input name="password" type="password" value={data.password} onChange={handleInputChange} placeholder="Password"/>
            <button name="Reset" onClick={handleResetForm}>Reset</button>
            <br/>
            <br/>
            <label><input name="session" type="checkbox" checked={data.session} onChange={handleInputChange}/>Remember me</label>
            <br/>
            <br/>
            <button disabled={!data.username || !data.password}>Login</button>

            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    )
}