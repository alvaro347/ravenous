import React from "react";

function Business({ business }) {
	return (
		<div className="business-card">
			<img alt="business" src={business.imageSrc} className="business-img"></img>
			<div className="business-info">
				<h3 className="business-title">{business.name}</h3>
				<div className="business-text-grid">
					<div className="business-grid-1">
						<p>{business.address}</p>
						<p>{business.city}</p>
						<p>{business.state}, {business.zipCode}</p>
					</div>
					<div className="business-grid-2">
						<p className="business-category">{business.category}</p>
						<p>{business.rating} Stars</p>
						<p>Review</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Business;
