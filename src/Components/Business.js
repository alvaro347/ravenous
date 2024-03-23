const business1 = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
};

function Business() {
    return (
        <div>
            <img alt="business" src={business1.imageSrc}></img>
            <p>{business1.name}</p>
            <p>{business1.address}</p>
            <p>{business1.city}</p>
            <p>{business1.state}</p>
            <p>{business1.zipCode}</p>
            <p>{business1.category}</p>
            <p>{business1.rating}</p>
            <p>Review</p>
        </div>
    )
}


export default Business;