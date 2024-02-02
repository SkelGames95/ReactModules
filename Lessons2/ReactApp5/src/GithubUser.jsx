// // Applying the fetch funcions to extract data from github user API

import { useEffect, useState } from "react";

// export const GithubUser = ({ username }) => {                   // passing username as the prop
//     const [data, setData] = useState(null)                      // setting the state as an explicit empty state (equivalent to leaving it empty) to be filled from the values extracted from fetching data
    
//     useEffect (() => {
//         fetch(`https://api.github.com/users/${username}`)       // bonding the fetch function to the useEffect to prevent the triggering every time the component renders
//         .then(response => {
//             return response.json()                              // getting the json from the response as usual
//         })
//         .then(json => {
//             console.log(json)
            
//             setData(json)                                       // using the json to set the data subsituting null
//         })
//     }, [username])                                              // the dependency array receives username as the parameter to define it will be triggered every time the username changes

//     return (
//         <div>
//             {data && <h3>{data.login}</h3>}                     {/* using the data object to render the login username obtained from github */}
//         </div>
//     )
// }



// Adding async/await, handling errors and loading state:

export const GithubUser = ({ username }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchGithubUser(username) {
        setLoading(true);

        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const json = await response.json();

            setData(json);
            setError(null);

        } catch (error) {
            setError(error);
            setData(null);

        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchGithubUser(username);
    }, [username]);

    return (
        <div>
            {loading && <h3>Loading...</h3>}
            {error && <h3>{error.message}</h3>}
            {data && <h3>{data.login}</h3>}
        </div>
    );
};