
export const UncontrolledForm = () => {
    const handleFormSubmit = (event) => {
        event.preventDefault()

        const username = event.target.elements.namedItem('username').value;         // the event.target this time is the form. Referring to the elements we are referring to the 
        const password = event.target.elements.namedItem('password').value;         // elements within the form and then using a method to extract them by one of their attributes
        const session = event.target.elements.namedItem('session').checked;

        const data = {
            username,
            password,
            session
        }

        console.log(data);
    }
    
    return (
        <form onSubmit={handleFormSubmit}>
            <label>Username:<input name="username" placeholder="Username"/></label><br/><br/>
            <label>Password:<input name="password" type="password" placeholder="Password"/><br/></label>
            <label for="password">*1 to 8 alphanumeric characters and symbols with at least one for each of them</label><br/><br/>
            <label><input name="session" type="checkbox"/>Remember me</label><br/><br/>
            <button name='login' type="submit">Login</button><hr/>
            <button name='reset' type="reset">Reset</button>
        </form>
    )
}
