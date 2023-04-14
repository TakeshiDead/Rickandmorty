import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonResults = () =>{
    <div className='search-results'>
    <div  className="search-result">
        
        <h3><Skeleton/></h3>
        <p><Skeleton/></p>
        <p><Skeleton/></p>
        <p><Skeleton/></p>
      </div>
      </div>
}

export default SkeletonResults