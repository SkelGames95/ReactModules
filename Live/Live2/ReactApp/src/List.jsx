import { useState } from "react";

export const List = () => {
    const [data, setData] = useState('');
    const [arr, setArr] = useState([]);

    const handleOnChange = (event) => {
        const {value} = event.target;

        setData(value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        setArr((arr) => [...arr, data]);             // spreading array to insert data
        setData('')
    }
    
    const handleResetButton = () => {
        setArr([])
    }


    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input value={data} type="text" name="inputText" onChange={handleOnChange} placeholder="text here"/>
                <button type="submit" name="add">Add</button>
                <button type="button" name="reset" onClick={handleResetButton}>Reset</button>
            </form>
            {arr.map((par, index) => <p key={index}>{par}</p>)}       
            {/* using an arrayMap function in the "js section" where the par is the parameter for value found in the input and transferred in the array with a corresponding index */}
        </div>
    )
}

