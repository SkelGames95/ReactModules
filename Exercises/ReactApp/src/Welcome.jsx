export const Welcome = ({name, age}) => {
    return (<div>
        <p>Welcome to my App, <strong>{name}</strong>!</p>
        <p>Your age is: {age}.</p>
    </div>
)}



Welcome.defaultProps = {name: "guest", age: "undefined"};

