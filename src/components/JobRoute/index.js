import Header from '../Header'
import ProfileDetails from '../ProfileDetails'
import FilteredData from '../FilteredData'
import AllJobItemSection from '../AllJobItemSection'
import './index.css'

const JobRoute = props => {
  const {employmentTypesList, salaryRangesList} = props
  return (
    <>
      <Header />
      <div className="job-route-container">
        <div className="filter-container">
          <ProfileDetails />
          <hr className="line" />
          <FilteredData
            employmentTypesList={employmentTypesList}
            salaryRangesList={salaryRangesList}
          />
        </div>
        <div>
          <AllJobItemSection />
        </div>
      </div>
    </>
  )
}

export default JobRoute
