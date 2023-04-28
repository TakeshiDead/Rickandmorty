import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './SearchResults.css';


const SkeletonResults = ({ cards }) => {
  return (

    Array(cards).fill(0).map((_, i) =>

      <div className='search-results' key={i} >
        <div className="search-result">
          <Skeleton square width={206.67} height={206.67} />
          <h3><Skeleton /></h3>
          <p><Skeleton count={3} /></p>


        </div>
      </div>
    ))
}

export default SkeletonResults