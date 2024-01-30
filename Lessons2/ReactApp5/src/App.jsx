import { Welcome } from "./Welcome"                     // created a Welcome component with different conditions
import { AlertClock } from "./AlertClock";              // created an alert that shows the current time within it
import { Counter } from "./Counter";                    // created a counter with increment, decrement and reset functions
import { Clock } from "./Clock";                        // created an ongoing clock
import { MouseClicker } from "./MouseClicker";          // created two mouseclickers to print a message in the console and show how to handle an event
import { ListOfObjects } from "./ListOfObjects";        // created an array of objects to show how to map it
import { Container } from "./Container";                // created a container to show how to use Containers and give them some specific conditions
import { LanguageContext } from "./LanguageContext";

export const App = () => {
    return(
        <Container title={<h1>My Awesome APP!</h1>}>                      {/* We can also pass an entire jsx expression as prop */}
        {/* <Container title='My APP'>                      
            <h1>My Awesome APP!</h1> */}
            <LanguageContext.Provider >
                <hr />
                <Welcome name="Marco" age={28} />
                <Welcome name="Gessica" />
                <Welcome />

                <AlertClock />

                <Counter initialValue={20}/>
                <br/><br/>

                <Clock />
                <br/><br/>

                <MouseClicker />
                <br/><br/>

                <ListOfObjects objects={[
                    { id: 1, user: 'George', age: 43},
                    { id: 2, user: 'Mary', age: 39},
                    { id: 3, user: 'Georgie', age: 17},
                    { id: 4, user: 'Sheldon', age: 11},
                    { id: 5, user: 'Missy', age: 11},
                ]}/>
            </LanguageContext.Provider>
        </Container>
)}

export default App;