import { Welcome } from "./Welcome"


export const App = () => {
    return ( <div>
        <h1>My App!</h1>
        <Welcome name="Marco" age={28}/>
        <Welcome />
    </div>
)}