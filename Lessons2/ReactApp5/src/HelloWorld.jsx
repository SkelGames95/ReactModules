import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export const HelloWorld = () => {
    const language = useContext(LanguageContext)                                // Setting up useContext to use LanguageContext created in App.jsx

    return <h2>{language === 'en' ? 'Hello World!' : 'Ciao, Mondo!'}</h2>       // Using language context value to change the message with conditional rendering and ternary operator
}