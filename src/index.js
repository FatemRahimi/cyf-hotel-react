import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for createRoot
import "./index.css";
import App from "./App";

// Create a root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render your app
root.render(<App />);
