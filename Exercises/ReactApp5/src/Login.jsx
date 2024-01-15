import { useState } from "react"
import { Username } from "./Username"
import { Password } from "./Password"
import { RememberMe } from "./RememberMe"

const createData = () => {                              // setting the default data when the form first opens
    return {
        username: '',
        password: '',
        session: false,
    }
}

export const Login = ({onLogin, isLoggedIn}) => {       // receiving props from parent
    const [data, setData] = useState(createData)

    const handleInputChange = (event) => {              // stating the values to search when inputChange event is triggered
        const name = event.target.name;
        const value = event.target.value;
        const checked = event.target.checked;
        const type = event.target.type;
    
        setData(currdata => {                           // setting the setData coming from the currentdata and adding them the ones that changed depending on their type
            return {
                ...currdata,
                [name]: type === 'checkbox' ? checked : value,

            };
        });
    };

    const handleResetForm = () => {                     // handling the reset to return default values from the function created before
        setData(createData);
    };

    const handleSubmit = (event) => {                   // handling the submit event that will be triggered inside the form by clicking the button which type is "submit"
        event.preventDefault();                         // THIS IS THE ANSWER: preventing the normal behavior of the forms after submitting
        onLogin();                                      // applying onLogin stated before instead of submit default behavior
    };

    return (
        <form onSubmit={handleSubmit}>
            <Username value={data.username} onChange={handleInputChange} />
            <Password value={data.password} onChange={handleInputChange} />
            <button type="button" name="Reset" onClick={handleResetForm}>Reset</button>
            <br/>
            <br/>
            <RememberMe checked={data.session} onChange={handleInputChange} />
            <br/>
            <br/>
            <button type="submit" onSubmit={handleSubmit} disabled={!isLoggedIn && (!data.username || !data.password)}>{isLoggedIn ? "Logout" : "Login"}</button>   {/* Applying the handleSubmit behavior here to prevent errors and stating disabled conditions */}
            <pre>
                {JSON.stringify(data, null, 2)}         {/* verifying the gathering of data from completing the form */}
            </pre>
        </form>
    )
}