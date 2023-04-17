import React, { useState, useEffect } from 'react';
import './App.css';
import SearchResults from './SearchResults';
import { SkeletonTheme } from 'react-loading-skeleton';
import SkeletonResults from './SkeletonResults';


const fetchData = async ({ query, }) => {
  try {

    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
    const data = await response.json();
    return (data.results);

  }
  catch (e) {
    console.log(e)
    return e
  }

};


const App = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);



  useEffect(() => {
    const onSearch = async () => {
      try {
        setIsLoading(true)
        const response = await fetchData({ query })
        if (response && response.length) {
          setResults(response)
        }
        else {
          setHasError(true)
        }
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        setHasError(true)
      }
    }
    if (query) {
      onSearch()
    }
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
  };



  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="search-site">
        <div className="search-container"><div>
          <a href="index.js"><img src="https://www.kindpng.com/picc/m/156-1567451_rick-and-morty-hd-png-download.png" alt="Google Logo" style={{ width: '100px', height: 'auto' }} /></a></div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search characters..." value={query} onChange={handleInputChange} />
            <button onClick={handleSubmit}>Search</button>

          </form>
        </div >

        {!isLoading && <SearchResults results={results} error={hasError} />}
        {isLoading && <SkeletonResults cards={20} />}
      </div >
    </SkeletonTheme>
  );
}




export default App;


