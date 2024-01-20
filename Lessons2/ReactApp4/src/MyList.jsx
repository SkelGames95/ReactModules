// Rendering an array of strings

// export const MyList = () => {
//     const names = ['Jane', 'Will', 'Kate', 'John'];             // having an array corresponding to a const
//     const items = names.map((name) => <li> {name} </li>)        // using the map method to convert the elements of the array into <li></li> for a list of items

//     return (
//         <ul> {items} </ul>
//     )
// }


// // Same thing with a more correct synthax

// export const MyList = ({ items }) => {                              // receiving the array as a prop

//     return (
//         <ul>
//             {items.map((name) => (                                  // defining the use of map method directly inside the ul element
//                 <li> {name} </li>
//             ))} 
//         </ul>
//     )
// } 


// Giving a key to the elements in the array and including it within the expression. The key must be unique and stable per elements

// export const MyList = ({ items }) => {

//     return (
//         <ul>
//             {items.map((name) => (                                      // we can do it by using the values themselves when we know there aren't two identical values or...
//                 <li key={name}> {name} </li>
//             ))} 
//         </ul>
//     )
// } 


// Giving a key to the elements in the array and including it within the expression 2

export const MyList = ({ items }) => {

    return (
        <ul>
            {items.map((name, index) => (                                      // ... using the index if we know the items will not exchange their position 
                <li key={index}> {name} </li>
            ))} 
        </ul>
    )
} 