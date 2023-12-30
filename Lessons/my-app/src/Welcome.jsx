import { HelloWorld } from "./HelloWorld"

// FIRST LESSONS ON JSX AND PROPS

// accessing object property directly on result

// export const Welcome = (props) => <h2>Welcome, {props.name}!</h2>;


// // accessing object property using destructuring

// export const Welcome = (props) => {
//     const {name} = props                        // exploding props as the object and destructuring it to get the name property's value
//     return <h2>Welcome, {name}!</h2>            // accessing directly to the variable created before
// }


// accessing object property by expanding the object and taking only its name property as considerable parameter (we are still taking the whole object but bypassing the rest with destructuring)

// export const Welcome = ({name}) => <h2>Welcome, {name}!</h2>;       // identifying directly which props the component is taking



// using multiple props to see how they appear and are being used by JSX

// export const Welcome = ({name, age}) => {
//     return <div>
//         <h2>Welcome, {name}!</h2>
//         <p>You are {age} years old.</p>
//     </div>
// }



// CONDITIONAL RENDERING

// let's see how the conditional rendering works:

// export const Welcome = ({name, age}) => {
//     return (<div>
//         <p>Welcome, <strong>{name}</strong>!</p>
//         {age && <p>Your age is decleared.</p>}
//         {!!age && <p>Your age isn't decleared.</p>}
//         {age > 18 && <p>Your age is: {age}.</p>}
//         {age < 18 && <p>You are too young to go further!</p> }
//     </div>    
// )}

// Welcome.defaultProps = {name: "guest", /*age: "undefined"*/};

/* embedding a portion of a component expression with {} means to be able to use it for conditional rendering depending on the condition assigned 
in this case, if age is true = render the paragraph "your age is" */
/* if a default prop being truthy is set, that value will be rendered substituting the lack of data */
/* made some examples to show how to use Conditional Rendering */


// Conditional Rendering with Ternary Operator "?" in "Welcome"

export const Welcome = ({name, age}) => {
    return (<div>
        {name ? <p>Welcome, <strong>{name}</strong>!</p> : <HelloWorld />}
        {age > 18 && <p>Your age is: {age}.</p>}
        {age < 18 && <p>You are too young to go further!</p> }
    </div>    
)}