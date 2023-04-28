import React from 'react';
import './SearchResults.css';
import './SkeletonResults';
import './App.js';



const SearchResults = ({ results, error }) => {
  if (results && results.length) {
    return (
      <div className="search-results">


        {results.map(result => (
          <div key={result.id} className="search-result">
            <img src={result.image} alt={result.name} />
            <h3>{result.name}</h3>
            <p>{result.species}</p>
            <p>{result.gender}</p>
            <p>{result.status}</p>
          </div>
        ))}
      </div>
    );
  }

  return <div>
    <p>Write in the searchbar to start searching</p>
  </div>
};

export default SearchResults;
