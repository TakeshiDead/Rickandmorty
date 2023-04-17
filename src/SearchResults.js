import React from 'react';
import './SearchResults.css';
import './SkeletonResults';
import './App.js';



const SearchResults = ({ results, error}) => {
  if(results && results.length) {
  return (
    <div className="search-results">
      
      
      {results.map(result => (
        <div key={result.id} className="search-result">
          <img src={result.image} alt={result.name} />
          <h3>{result.name }</h3>
          <p>{result.species}</p>
          <p>{result.gender}</p>
          <p>{result.status}</p>
        </div>
      ))}
    </div>
  );
}
if(error){
  return <div>
    <div className='container_404 container_gif'><img src="https://media.tenor.com/AtKPpo2MXFEAAAAd/dog-burning.gif" alt="Rick And Morty, HD Png Download@kindpng.com" style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}></img></div>
  <div> <h1 className='container_404'>404</h1></div>
  <div className='container_404'><h2>characters not founds.</h2></div></div>
}
return<div>
  <p>Write in the searchbar to start searching</p>
</div>
};

export default SearchResults;
