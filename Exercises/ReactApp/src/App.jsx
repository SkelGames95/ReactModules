import { Counter } from "./Counter"

export const App = () => {

    return (
        <div>
            <h1>My Counter</h1>
            <Counter initialValue={0} incrementAmount={1}/>
        </div>
    )
}

// when calling the setter function the parameter should be a function because calling it more times the function will act
// for all the times getting the value "c" (current value) as the value to increment