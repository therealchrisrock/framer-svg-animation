import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import { Example } from "./Example";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(<Example />);
