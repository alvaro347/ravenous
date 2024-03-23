import React from "react";

const sortByOptions = {
	"Best Match": "best_match",
	"Highest Rated": "rating",
	"Most Reviewed": "review_count",
};

function SearchBar() {
  
	function SearchOptions() {
		return <li>Search1</li>;
	}

	return (
		<div className="">
			<div>
				<p>Search Options.</p>
				<ul>{SearchOptions()}</ul>
			</div>
			<div>
				<input placeholder="Search Businesses" />
				<input placeholder="Where?" />
				<button type="button">Search</button>
			</div>
		</div>
	);
}

export default SearchBar;
