import "./index.css";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { FacebookProvider } from "./context/facebookContext.jsx";

import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <FacebookProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FacebookProvider>
);
