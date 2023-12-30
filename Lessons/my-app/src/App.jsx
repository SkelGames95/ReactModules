// import { HelloWorld } from "./HelloWorld"
import { Welcome } from "./Welcome"

export const App = () => {
    return(
    <div>
        <h1>My Awesome APP!</h1>
        <hr />
        <Welcome name="Marco" age={28} />
        <Welcome name="Gessica" />
        <Welcome />
    </div>
)}

export default App;