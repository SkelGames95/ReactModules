// EVENT HANDLERS:

// export const MouseClicker = () => {
//     function handleButtonClick(event) {
//         console.log(event)                      // using the event handler to read the information that events carry
//     }

//     return (
//         <div>
//             <button onClick={handleButtonClick}>Click me</button>
//         </div>
//     )
// }



// export const MouseClicker = () => {
//     function handleButtonClick(event) {
//         console.log(event.target, event.currentTarget)
//     }

//     return (
//         <div>
//              <button onClick={handleButtonClick}>           {/*adding something within the button to show how bubbling works */}
//                 <img width={24} height={24}/>
//                 Click me
//             </button>
//         </div>
//     )
// }



// How to interact with the events:

export const MouseClicker = () => {
    function handleButtonClick(event) {
        const elementName = event.currentTarget.name;
        console.log(elementName);
    }

    return (
        <div>
            <button name="buttonOne" onClick={handleButtonClick}>Click me</button>       {/* disposing 2 buttons to see which of them is the target event */}
            <button name="buttonTwo" onClick={handleButtonClick}>Click me</button>
        </div>
    )
}
