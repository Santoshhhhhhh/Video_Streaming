import React from "react";
import ReactDOMClient from "react-dom/client";
import { AfterLoginHome } from "./screens/AfterLoginHome";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);

root.render(<AfterLoginHome />);