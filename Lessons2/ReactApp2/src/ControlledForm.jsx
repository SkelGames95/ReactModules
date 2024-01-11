import { useState } from "react"

// single input form case (basic)

// export const Form = () => {
//     const [username, setUsername] = useState('')

//     const handleInputUsernameChange = (event) => {
//         const value = event.target.value                // Stiamo definendo il nuovo valore dell'evento come variabile per poterla utilizzare in modo da alterare lo State della componente

//         setUsername(value.toUpperCase())                // Assegnando questa variabile alla funzione avremo modo di far cambiare il valore della component ri-renderizzando il componente in toto
//     }                                                   // Nel Controlled Form abbiamo il totale controllo del valore, possiamo anche attribuire ad esso la funzione "toUpperCase()" per scriverlo tutto maiuscolo

//     console.log(username)                               // Adding console.log to show how Controlled Form works

//     const handleResetForm = () => {
//         setUsername('')
//     }

//     return (
//         <div>
//             <input value={username} onChange={handleInputUsernameChange} placeholder="Username"/>       {/* Qui può essere usato anche onInput dal momento che in React agiscono allo stesso modo */}
//             <button name="Reset" onClick={handleResetForm}>Reset</button>
//         </div>
//     )
// }



// multiple input fields form case

// export const Form = () => {
//     const [data, setData] = useState({              // being a form with multiple fields we can provide an object as useState where the fields are empty
//         username: '',
//         password: ''
//     })

//     const handleInputChange = (event) => {          // a single handleInputChange will be the event handler providing the right answer to the fired event
//         const name = event.target.name              // Extracting the name and the value of the input that fired the event to dispose of them later               
//         const value = event.target.value                             
    
//         setData(d => {                              // the next value of the data object depends on the current one because I want to keep the other values until changed and change the one called with the same name of the attribute passed by (so using a callback)
//             const updated = { ...d }                // creating a new object and using the Spread Operator to copy the content of data obj within the new one
//             updated[name] = [value]                 // update cloned object with name = value

//             return updated                          // returning the updated attribute and value totally replacing the content
//         })       
//     }

//     const handleResetForm = () => {
//         setData({
//              username: '',
//              password: ''
//          })
//     }

//     return (
//         <div>
//             <input name="username" value={data.username} onChange={handleInputChange} placeholder="Username"/>                      {/* When using a single useState for more fields we are passing parent's attributes ("data" in this case) */}
//             <input name="password" type="password" value={data.password} onChange={handleInputChange} placeholder="Password"/>      {/* To be clear, I want the name of the input be the same of the data attribute */}
//             <button name="Reset" onClick={handleResetForm}>Reset</button>
//         </div>
//     )
// }


// multiple input fields form case but updating the data object with less code

export const Form = () => {
    const [data, setData] = useState({              // being a form with multiple fields we can provide an object as useState where the fields are empty
        username: '',
        password: ''
    })

    const handleInputChange = (event) => {          // a single handleInputChange will be the event handler providing the right answer to the fired event
        const name = event.target.name              // Extracting the name and the value of the input that fired the event to dispose of them later               
        const value = event.target.value                             
    
        setData(currdata => {
            return {
                ...currdata,                        // returning a created new object using the Spread Operator to copy the content of data obj within the new one - callback for new values
                [name]: value,                      // and replacing the changed values with the new ones
            }
        })       
    }

    const handleResetForm = () => {                 // changing the reset handler with a setData function returning an obj with keys having the corresponding empty strings - static values for reset
        setData({
            username: '',
            password: ''
        })
    }

    return (
        <div>
            <input name="username" value={data.username} onChange={handleInputChange} placeholder="Username"/>                      {/* When using a single useState for more fields we are passing parent's attributes ("data" in this case) */}
            <input name="password" type="password" value={data.password} onChange={handleInputChange} placeholder="Password"/>      {/* To be clear, I want the name of the input be the same of the data attribute */}
            <button name="Reset" onClick={handleResetForm}>Reset</button>
            <br/>
            <br/>
            <button disabled={!data.username || !data.password}>Login</button>          {/* adding a login button that will be disabled if not receiving both data from the user */}

            <pre>                                           {/* adding preformatted tag that will show everything we feed into it as if it was called here */}
                {JSON.stringify(data, null, 2)}             {/* using the JSON.stringify to convert the object into a string and calling data as the first parameter, the second one
                                                                is a transformer function that we can set to null and the third tells how we want to indent the data */}
            </pre>
        </div>
    )
}


// In controlled forms I can always control the behavior of the form and have always access to the data