import React, { useState, useEffect } from 'react';
import './App.css';
import SearchResults from './SearchResults';
//import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
//import SkeletonResults from './SkeletonResults';


const fetchData = async ({query, setResults}) => {
  if (query !== '') {
  
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
    const data = await response.json();
    setResults(data.results);
   
  }

  };


const App = () => {
const [query, setQuery] = useState('');
const [results, setResults] = useState([]);   
  
useEffect(() => { 
  fetchData({query,setResults});
},[query]);

const handleInputChange = event => {
setQuery(event.target.value);
};

const handleSubmit = event => {
event.preventDefault();
};


//try {
  return (
   // <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <div className="search-site">
      <div className="search-container"><div>
        <a href="index.js"><img src="https://www.kindpng.com/picc/m/156-1567451_rick-and-morty-hd-png-download.png" alt="Google Logo" style={{ width: '100px', height: 'auto' }}/></a></div>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search characters..." value={query}  onChange={handleInputChange} />
      <button onClick={handleSubmit}>Search</button>
          
        </form>
      </div >
      
      {query !== '' && <SearchResults results={results}/> }
      
    </div >
   // </SkeletonTheme>
  );
}
//catch(){

//};}

export default App;
  

