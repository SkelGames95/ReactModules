
// Using a new component container to pass the children prop and render the content of "App" inside the container

// export const Container = ({ children }) => {

//     return(
//         <div className="app">
//             {children}
//             <p>Children Rendered from App</p>
//         </div>
//     )
// }


// I can also create other divs inside the Container and render more things such as a title prop

// import { useState } from "react";

// export const Container = ({ title, children }) => {

//     const [collapsed, setCollapsed] = useState(true);      // setting the boolean default value for collapsed

//     const handleToggleCollapse = () => {                    // setting a the handling of the toggle by changing collapsed default value
//         setCollapsed(t => !t)
//     }

//     return(
//         <div>
//             <div className="app-title">
//                 {title}
//                 <button onClick={handleToggleCollapse}>{collapsed == true ? 'Show' : 'Collapse'}</button>     {/* Setting button label with ternary operator based on the visibility condition */}
//             </div>
//             {!collapsed && <div className="app-content">{children}</div>}        { /* setting the collapse property as conditional rendering stating how it should be rendered at first */ }
//         </div>
//     )
// }

// NOTE: BEHAVIOR OF THE COLLAPSING FEATURE:

// The collapsing feature is designed by the three values for "collapsed" within all its three contexts:
// the initial value defined within useState, the collapsed value inside the button to set up which label would appear in which condition, and
// the third value that works as condition for the conditional rendering of the children components inside the Container.
// Generally, defining the Collapsed as false in the use state, this has to be translated to "Collapse" as label for the button while maintaining
// the state of collapsed as false. In this case, the conditional rendering will appear in the right way if the condition is the opposite of what
// it should logically be: 
// !collapsed = not collapsed but we are saying to the system that the value for collapsed is true.

// Changing the State to "true" the system will work at the same way but starting from the content being collapsed, so the problems about the
// logical functioning of the system is to be determined in the interaction between the conditional rendering and the value of the ternary operator.



// We can also decide to not remove content from the app but to hide it only creating one hidden class and using it inside the conditional rendering with ternary operator

import { useState } from "react";

export const Container = ({ title, children }) => {

    const [collapsed, setCollapsed] = useState(false);

    const handleToggleCollapse = () => {
        setCollapsed(t => !t)
    }

    return(
        <div>
            <div className="app-title">
                {title}
                <button onClick={handleToggleCollapse}>{collapsed == true ? 'Show' : 'Collapse'}</button>  
            </div>
            {!collapsed ? <div className="app-content">{children}</div> : <div className="app-content-collapsed">{children}</div>}      {/* using the ternary operator and a hidden class for the conditional rendering */}
        </div>
    )
}