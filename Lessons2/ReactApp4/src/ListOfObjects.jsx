// Rendering an array of Objects

// export const ListOfObjects = ({objects}) => {             // this time passing an array of objects as prop pretending it's the result of an API

//     return (
//         <ul>
//             {objects.map((item) => (
//                 <li key={item.id}>{item.user}, {item.age}</li>      // using the id of the objects as key then listing the properties of each one
//             ))}
//         </ul>
//     )
// }


// Styling more the same thing

export const ListOfObjects = ({objects}) => {

    return (
        <ul>
            {objects.map((item) => (
                <li key={item.id}>
                    <h4>{item.user}</h4>
                    <p>He/She is {item.age} years old</p>
                </li>
            ))}
        </ul>
    )
}