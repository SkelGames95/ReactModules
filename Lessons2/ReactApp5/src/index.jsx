// import { HelloWorld } from "./HelloWorld";
// import { createRoot } from "react-dom/client";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(HelloWorld)

// Short Method:

import { App } from "./App";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById('root')).render(<App />);