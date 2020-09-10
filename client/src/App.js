import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Route } from "react-router-dom";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import logo from "./logo.png";
import "./App.css";

const client = new ApolloClient({
	uri: "http://localhost:5000/graphql",
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<div className="container">
					<img
						src={logo}
						alt="SpaceX logo"
						style={{ width: 300, display: "block", margin: "auto" }}
					/>
					<Route exact path="/" component={Launches}></Route>
					<Route exact path="/launch/:flight_number" component={Launch}></Route>
				</div>
			</BrowserRouter>
		</ApolloProvider>
	);
}

export default App;
