import { Welcome } from "./Welcome"


export const App = () => {
    return ( <div>
        <h1>My App!</h1>
        <Welcome name="Marco"/>
        <Welcome name="Whisky" age={4}/>
        <Welcome age={75}/>
        <Welcome name="John" age={43}/>
    </div>
)}

export default App;