import "./index.css";

import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App.tsx";
//import React from "react";
import ReactDOM from "react-dom/client";
const client = new QueryClient();

const rootElement = document.getElementById("root");

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		//<React.StrictMode>
		<QueryClientProvider client={client}>
			<App />
		</QueryClientProvider>,
		//</React.StrictMode>
	);
}
