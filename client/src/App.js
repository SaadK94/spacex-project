import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Launches from "./components/Launches";
import logo from "./logo.png";
import "./App.css";

const client = new ApolloClient({
	uri: "http://localhost:5000/graphql",
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="container">
				<img
					src={logo}
					alt="SpaceX logo"
					style={{ width: 300, display: "block", margin: "auto" }}
				/>
				<Launches></Launches>
			</div>
		</ApolloProvider>
	);
}

export default App;