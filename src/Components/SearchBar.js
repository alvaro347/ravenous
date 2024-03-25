import React from "react";

const sortByOptions = {
	"Best Match": "best_match",
	"Highest Rated": "rating",
	"Most Reviewed": "review_count",
};

function SearchBar() {
  
	function SearchOptions() {
		const sortByOptionsList = Object.entries(sortByOptions).map(([key, value]) => {
			return <li key={value}>{key}</li>;
		})
		return sortByOptionsList;
	}

	return (
		<div id="searchBar">
			<div id="searchBar-text">
				<p>Search Options.</p>
				<ul>{SearchOptions()}</ul>
			</div>
			<div id="searchBar-inputs">
				<input placeholder="Search Businesses" className="search-input"/>
				<input placeholder="Where?" className="search-input"/>
				<button type="button" className="search-button">Search</button>
			</div>
		</div>
	);
}

export default SearchBar;
