import { useState, useEffect } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { IoIosBasket } from 'react-icons/io'
import { IoLocation } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import jobsData from '../../public/jobs.json';
import './JobsPage.css'

const employmentTypesList = [
  { label: 'Full Time', employmentTypeId: 'FULLTIME' },
  { label: 'Part Time', employmentTypeId: 'PARTTIME' },
  { label: 'Freelance', employmentTypeId: 'FREELANCE' },
  { label: 'Internship', employmentTypeId: 'INTERNSHIP' },
]

const salaryRangesList = [
  { salaryRangeId: '1000000', label: '10 LPA and above' },
  { salaryRangeId: '2000000', label: '20 LPA and above' },
  { salaryRangeId: '3000000', label: '30 LPA and above' },
  { salaryRangeId: '4000000', label: '40 LPA and above' },
]

const JobsPage = ({baseUrl}) => {
  const [jobs, setJobs] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [employmentFilters, setEmploymentFilters] = useState([])
  const [salaryFilter, setSalaryFilter] = useState('')
  const [filteredJobs, setFilteredJobs] = useState([])

  const navigate = useNavigate()

   const fetchJobs = () => {
  const rawJobs = Array.isArray(jobsData) ? jobsData : jobsData.jobs

  if (Array.isArray(rawJobs)) {
    setJobs(rawJobs)
    setFilteredJobs(rawJobs)
  } else {
    console.error('Invalid jobs format:', jobsData)
  }
   }



  useEffect(() => {
    fetchJobs()
  }, [])

  useEffect(() => {
    applyFilters()
  }, [jobs, employmentFilters, salaryFilter, searchInput])

  const applyFilters = () => {
    let result = jobs

    if (employmentFilters.length > 0) {
      result = result.filter(job =>
        employmentFilters.includes(job.employment_type.toUpperCase())
      )
    }

    if (salaryFilter !== '') {
      const salaryNumber = parseInt(salaryFilter)
      result = result.filter(job => {
        const rating = parseFloat(job.rating)
        return rating * 1000000 >= salaryNumber
      })
    }

    if (searchInput.trim() !== '') {
      result = result.filter(job =>
        job.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    }

    setFilteredJobs(result)
  }

  const toggleEmploymentType = id => {
    setEmploymentFilters(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const handleSalaryChange = id => setSalaryFilter(id)
  const handleSearch = () => applyFilters()

  const onClickJobItem = id => {
    navigate(`/jobs/${id}`)
  }

  return (
    <div className="job-container">
      <div className="job-left-container">
        <h1 className="employment-text">Type of Employment</h1>
        <ul>
          {employmentTypesList.map(type => (
            <li key={type.employmentTypeId} className="employment-list">
              <input
                type="checkbox"
                id={type.employmentTypeId}
                onChange={() => toggleEmploymentType(type.employmentTypeId)}
              />
              <label htmlFor={type.employmentTypeId}>{type.label}</label>
            </li>
          ))}
        </ul>

        <hr />
        <h1 className="salary-text">Salary Range</h1>
        <ul>
          {salaryRangesList.map(range => (
            <li key={range.salaryRangeId} className="salary-list">
              <input
                type="radio"
                id={range.salaryRangeId}
                name="salaryRange"
                onChange={() => handleSalaryChange(range.salaryRangeId)}
              />
              <label htmlFor={range.salaryRangeId}>{range.label}</label>
            </li>
          ))}
        </ul>
      </div>

      <div className="job-right-container">
        <div className="search-box">
          <input
            type="search"
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
          />
          <button type="button" onClick={handleSearch}>
            <IoSearchOutline />
          </button>
        </div>

        {filteredJobs.length === 0 ? (
          <div>
            <h1>No Jobs Found</h1>
            <p>Try different filters or search terms.</p>
          </div>
        ) : (
          <ul>
            {filteredJobs.map(job => (
              <li
                key={job.id}
                onClick={() => onClickJobItem(job.id)}
                className="jobs-list"
              >
                <img src={job.company_logo_url} alt="company logo" className='company-logo'/>
                <h3>{job.title}</h3>
                <p>⭐ {job.rating}</p>
                <p>
                  <IoLocation /> {job.location}
                </p>
                <p>
                  <IoIosBasket /> {job.employment_type}
                </p>
                <h4>Description</h4>
                <p>{job.job_description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default JobsPage
