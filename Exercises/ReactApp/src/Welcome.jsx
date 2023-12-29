import { Age } from "./Age";

export const Welcome = ({name}) => {
    return (<div>
        <p>Welcome to my App, <strong>{name}</strong>!</p>
        <Age age={28}/>
    </div>
)}


Welcome.defaultProps = {name: "guest"};

// domanda: come si fa a creare un caso in cui vengano loggati due utenti di cui uno si hanno i dati e uno no se la componente Age è inserita e specificata in Welcome?