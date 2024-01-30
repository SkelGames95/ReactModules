import { useEffect, useState } from "react"
import { Card } from "./Card30-01"
import './Esercitazione30-01.css'

export function Cards() {

    const [data, setData] = useState([])

    async function fetchData() {
        const response = await fetch("https://random-data-api.com/api/users/random_user?size=10")
        const responseJson = await response.json()
        console.log(responseJson)
        setData(responseJson)
    }

    useEffect(() => { fetchData() }, [])

    function handleFetchButton() {
        fetchData()
    }



    return (
        <div className="container">
            <button type="button" onClick={handleFetchButton}>Fetch Again</button>
            <div>
                <ul className="parentCards">
                    {data.map((singleUser, index) => (
                        <li key={index}>
                            <Card user={singleUser} />
                        </li>
                    )
                    )}
                </ul>
            </div>
        </div>
    )
}