// import { HelloWorld } from "./HelloWorld"
import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { MouseClicker } from "./MouseClicker";
import { Welcome } from "./Welcome"

export const App = () => {
    return(
    <div>
        <h1>My Awesome APP!</h1>
        <hr />
        <Welcome name="Marco" age={28} />
        <Welcome name="Gessica" />
        <Welcome />

        <AlertClock />

        <Counter initialValue={20}/>
        <br/>
        <br/>
        <Clock />
        <br/>
        <br/>
        <MouseClicker />
    </div>
)}

export default App;