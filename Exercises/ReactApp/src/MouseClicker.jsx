export const MouseClicker = () => {

    const handleButtonOnClick = (event) => {
        console.log(event.target.name)
    }

    const handleImgOnClick = (event) => {
        console.log(event.target.src)
    }

    return (
        <div>
            <button name="one" onClick={handleButtonOnClick}>
                <img src="https://cdn.icon-icons.com/icons2/562/PNG/512/on-off-power-button_icon-icons.com_53938.png" width={25} height={25} onClick={handleImgOnClick}/>
                Click me!
            </button>
        </div>
    )
}

// The name of the button would appear if I would use the same event handler for both the elements because of bubbling
// or using event.currentTarget.name as the parameter for the button event handler. In this way it will not appear by clicking the image.