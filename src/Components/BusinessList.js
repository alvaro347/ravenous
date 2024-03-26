import React from "react";
import Business from "./Business";

function BusinessList(props) {
	return (
		<div id="business-container">
			{ props.businessArray.map(
				(business, index) => { return <Business key={ index } business= { business } /> }
				) 
			}
		</div>
	);
}

export default BusinessList;
