import React from "react";

function Business({ business }) {
	return (
		<div className="business-card">
			<div>
				<img alt="business" src={ business.imageSrc } className="business-img"></img>
			</div>
			<h3 className="business-title">{ business.name }</h3>
			<div>
				<p>{ business.address }</p>
				<p>{ business.city }</p>
				<p>{ business.state }</p>
				<p>{ business.zipCode }</p>
				<p>{ business.category }</p>
				<p>{ business.rating }</p>
			</div>
			<div>
				<p>Review</p>
			</div>
		</div>
	);
}

export default Business;
