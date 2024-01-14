import { useState } from "react"
import { Username } from "./Username"
import { Password } from "./Password"
import { RememberMe } from "./RememberMe"

export const Login = ({onClick}) => {
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
            <Username value={data.username} onChange={handleInputChange} />
            <Password value={data.password} onChange={handleInputChange} />
            <br/>
            <br/>
            <RememberMe checked={data.session} onChange={handleInputChange} />
            <br/>
            <br/>
            <button onClick={onClick} disabled={!data.username || !data.password}>Login</button>
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    )
}