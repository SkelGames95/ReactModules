import { useState } from "react"

export const Login = () => {
    const [data, setData] = useState({
            username: '',
            password: '',
            session: false
    })

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

    return (
        <div>
            <input name="username" value={data.username} onChange={handleInputChange} placeholder="Username"/>
            <input name="password" type="password" value={data.password} onChange={handleInputChange} placeholder="Password"/>
            <br/>
            <br/>
            <label><input name="session" type="checkbox" checked={data.session} onChange={handleInputChange}/>Remember me</label>
        </div>
    )
}