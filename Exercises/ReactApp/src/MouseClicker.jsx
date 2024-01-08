export const MouseClicker = () => {

    const handleButtonOnClick = (event) => {
        console.log(event.target.name)
    }

    return (
        <div>
            <button name="one" onClick={handleButtonOnClick}>Click me!</button>
        </div>
    )
}