import {useNavigate} from 'react-router-dom'

const Job=({baseUrl})=>{
    const navigate = useNavigate()

    return(
        <div>
            <div className="home-bg-container">
                <h1>Find The Job That Fits Your Life</h1>
                <p>Millions of people are searching for jobs</p>
                <button data-testid="findJobs" onClick={()=>navigate('/jobs/:id')}>
                    Find Jobs
                </button>
                </div>
        </div>
    )
}
export default Job