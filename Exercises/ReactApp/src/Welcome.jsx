import { Age } from "./Age";

export const Welcome = ({name}) => {
    return (<div>
        <p>Welcome to my App, <strong>{name}</strong>!</p>
        <Age age={28}/>
        <Age age={4}/>
    </div>
)}


Welcome.defaultProps = {name: "guest"};

// domanda: come si fa a creare un caso in cui vengano loggati due utenti di cui uno si hanno i dati e uno no se la componente Age è inserita e specificata in Welcome?
// In questo caso ad esempio vorrei renderizzare le componenti attribuendo a ciascun utente la propria età. C'è modo di farlo diversamente da richiamare direttamente il componente Age in App?