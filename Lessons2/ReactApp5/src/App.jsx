import { Welcome } from "./Welcome"                     // created a Welcome component with different conditions
import { AlertClock } from "./AlertClock";              // created an alert that shows the current time within it
import { Counter } from "./Counter";                    // created a counter with increment, decrement and reset functions
import { Clock } from "./Clock";                        // created an ongoing clock
import { MouseClicker } from "./MouseClicker";          // created two mouseclickers to print a message in the console and show how to handle an event
import { ListOfObjects } from "./ListOfObjects";        // created an array of objects to show how to map it
import { Container } from "./Container";                // created a container to show how to use Containers and give them some specific conditions
import { LanguageContext } from "./LanguageContext";
import { useState } from "react";
import { GithubUser } from "./GithubUser";

export const App = () => {
    const [language, setLanguage] = useState('en')      // creating a useState initialyzing it to 'en'.

    const handleSetLanguage = (language) => {           // setting the handler to attach to a button to select the language giving language as parameter to substitute it with specific values in the callback
        setLanguage(language)
    }
    
    return(
        <div>
            <button className="languageButtons" onClick={() => handleSetLanguage('it')}>IT</button>     {/* defining an empty callback inside the onclick to call handleSetLanguage with a specific value */}
            <button className="languageButtons" onClick={() => handleSetLanguage('en')}>EN</button>
            <br/>
            <Container title={<h1>My Awesome APP!</h1>}>            {/* We can also pass an entire jsx expression as prop */}
            {/* <Container title='My APP'>                      
            <h1>My Awesome APP!</h1> */}
                <LanguageContext.Provider value={language}>                         {/* Added Language context provider + value */}
                    <hr />
                    <Welcome name="Marco" age={28} />
                    <Welcome name="Gessica" />
                    <Welcome />
                    <GithubUser username='SkelGames95'/>

                    <AlertClock />

                    <Counter initialValue={0}/>
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
        </div>
)}

export default App;