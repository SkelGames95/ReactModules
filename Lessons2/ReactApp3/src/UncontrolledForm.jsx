// export const UncontrolledForm = () => {
//     const handleFormSubmit = (event) => {
//         event.preventDefault()

//         const username = event.target.elements.namedItem('username').value;         // the event.target this time is the form. Referring to the elements we are referring to the 
//         const password = event.target.elements.namedItem('password').value;         // elements within the form and then using a method to extract them by one of their attributes
//         const session = event.target.elements.namedItem('session').checked;

//         const data = {
//             username,
//             password,
//             session
//         }

//         console.log(data);
//     }
    
//     return (
//         <form onSubmit={handleFormSubmit}>
//             <label>Username:<input name="username" placeholder="Username"/></label><br/><br/>
//             <label>Password:<input name="password" type="password" placeholder="Password"/><br/></label>
//             <label>*1 to 8 alphanumeric characters and symbols with at least one for each of them</label><br/><br/>
//             <label><input name="session" type="checkbox"/>Remember me</label><br/><br/>
//             <button name='login' type="submit">Login</button><hr/>
//             <button name='reset' type="reset">Reset</button>
//         </form>
//     )
// }


// Example of Form with different access to data:

export const UncontrolledForm = () => {
    const handleFormSubmit = (event) => {
        event.preventDefault()

        const formData = new formData(event.target);        // in questo caso stiamo identificando tutto il form come riferimento, utilizzando un built-in di js, per poi andare a estrapolare l'event.target

        const data = {
            username: formData.get('username'),             // in relazione a ciascun elemento stiamo dicendo a formData di ottenerne il valore e inserirlo nell'oggetto creato in corrispondenza della sua key
            password: formData.get('password'),
            session: formData.get('session') === 'on' ? true : false        // negli uncontrolled form, con questo metodo, la risposta di un checked è on o null, stiamo quindi convertendo il risultato
        }

        console.log(data);
    }
    
    return (
        <form onSubmit={handleFormSubmit}>
            <label>Username:<input name="username" placeholder="Username"/></label><br/><br/>
            <label>Password:<input name="password" type="password" placeholder="Password"/><br/></label>
            <label>*1 to 8 alphanumeric characters and symbols with at least one for each of them</label><br/><br/>
            <label><input name="session" type="checkbox"/>Remember me</label><br/><br/>
            <button name='login' type="submit">Login</button><hr/>
            <button name='reset' type="reset">Reset</button>
        </form>
    )
}