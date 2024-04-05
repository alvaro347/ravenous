import './App.css';
import './index.css';
import BusinessList from './Components/BusinessList';
import SearchBar from './Components/SearchBar';

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

const businesses = [business, business, business, business, business];

function App() {
	function businessData(searchTerm, location, sortBy) {
		console.log(`Searching Yelp with ${searchTerm}, ${location}, ${sortBy}`);
	}

  return (
    <div>
      <h1>Ravenous</h1>
      <SearchBar businessData={businessData} />
      <BusinessList businessArray={ businesses } />
    </div>
  );
};

export default App;
