import React from "react";

const business = {
	imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
	name: "MarginOtto Pizzeria",
	address: "1010 Paddington Way",
	city: "Flavortown",
	state: "NY",
	zipCode: "10101",
	category: "Italian",
	rating: 4.5,
	reviewCount: 90,
};

function Business() {
	return (
		<div className="business-card">
			<div>
				<img alt="business" src={business.imageSrc} className="business-img"></img>
			</div>
			<h3 className="business-title">{business.name}</h3>
			<div>
				<p>{business.address}</p>
				<p>{business.city}</p>
				<p>{business.state}</p>
				<p>{business.zipCode}</p>
				<p>{business.category}</p>
				<p>{business.rating}</p>
			</div>
			<div>
				<p>Review</p>
			</div>
		</div>
	);
}

export default Business;
