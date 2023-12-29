// accessing object property directly on result

// export const Welcome = (props) => <h2>Welcome, {props.name}!</h2>;

// // accessing object property using destructuring

// export const Welcome = (props) => {
//     const {name} = props                        // exploding props as the object and destructuring it to get the name property's value
//     return <h2>Welcome, {name}!</h2>            // accessing directly to the variable created before
// }

// accessing object property by expanding the object and taking only its name property as considerable parameter (we are still taking the whole object but bypassing the rest with destructuring)

// export const Welcome = ({name}) => <h2>Welcome, {name}!</h2>;       // identifying directly which props the component is taking

export const Welcome = ({name, age}) => {
    return <div>
        <h2>Welcome, {name}!</h2>
        <p>You are {age} years old.</p>
    </div>
}