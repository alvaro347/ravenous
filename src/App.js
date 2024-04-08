import React, { useState } from "react";
import "./App.css";
import "./index.css";
import BusinessList from "./Components/BusinessList";
import SearchBar from "./Components/SearchBar";
import YelpGet from "./utils/YelpGet";

function App() {
	const [businesses, setBusinesses] = useState([]);

	const searchYelp = async (term, location, sortBy) => {
		const businesses = await YelpGet(term, location, sortBy);
		setBusinesses(businesses)
	};

	return (
		<div>
			<h1>Ravenous</h1>
			<SearchBar businessData={ searchYelp } />
			<BusinessList businessArray={ businesses } />
		</div>
	);
}

export default App;
