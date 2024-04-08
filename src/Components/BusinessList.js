import React from "react";
import Business from "./Business";

function BusinessList({businessArray}) {
	return (
		<div id="business-container">
			{ businessArray.map(
				(business, index) => { return <Business key={ index } business= { business } /> }
				) 
			}
		</div>
	);
}

export default BusinessList;
