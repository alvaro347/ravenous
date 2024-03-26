import './App.css';
import './index.css';
import BusinessList from './Components/BusinessList';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <div>
      <h1>Ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
};

export default App;
