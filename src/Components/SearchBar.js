import React, { useState } from "react";

const sortByOptions = {
	"Best Match": "best_match",
	"Highest Rated": "rating",
	"Most Reviewed": "review_count",
};

function SearchBar({businessData}) {
	const [searchTerm, setSearchTerm] = useState("");
	const [location, setLocation] = useState("");
	const [sortBy, setSortBy] = useState("best_match");

	function sortByActive(value) {
		if (sortBy === value) {
			return "search-option active";
		} else {
			return "btn";
		}
	}

	function handleSorting(value) {
		setSortBy(value);
	}

	function handleSearchTerm(e) {
		setSearchTerm(e.target.value);
	}

	function handleLocation(e) {
		setLocation(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		businessData(searchTerm, location, sortBy);
	}

	function SearchOptions() {
		const sortByOptionsList = Object.entries(sortByOptions).map(([key, value]) => {
			return (
				<li
					className={sortByActive(value)}
					key={value}
					onClick={() => {
						handleSorting(value);
					}}
				>
					{key}
				</li>
			);
		});
		return sortByOptionsList;
	}

	return (
		<div id="searchBar">
			<div id="searchBar-text">
				<p>Search Options.</p>
				<ul>{SearchOptions()}</ul>
			</div>
			<form id="searchBar-inputs" onSubmit={handleSubmit}>
				<input placeholder="Search Businesses" className="search-input" onChange={handleSearchTerm} />
				<input placeholder="Where?" className="search-input" onChange={handleLocation} />
				<button type="submit" className="search-button">
					Search
				</button>
			</form>
		</div>
	);
}

export default SearchBar;
