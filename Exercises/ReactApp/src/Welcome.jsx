export const Welcome = ({name, age}) => {
    return (<div>
        <p>Welcome to my App, <strong>{name}</strong>!</p>
        {age && <p>Your age is: {age}.</p>}
        {age > 18 && <p>You are an adult! Your age is: {age}.</p>}
        {age >= 18 && age <= 65 && <p>Your age is between 18 and 65.</p>}
        {age >= 18 && age <= 65 && name=="John" && <p>Your age is between 18 and 65 and your name is John.</p>}
        {!age && <p>Your age is unknown.</p>}
    </div>
)}


Welcome.defaultProps = {name: "guest"};

// domanda: come si fa a creare un caso in cui vengano loggati due utenti di cui uno si hanno i dati e uno no se la componente Age è inserita e specificata in Welcome?