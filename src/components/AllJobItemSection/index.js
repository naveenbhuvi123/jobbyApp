import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaSearch} from 'react-icons/fa'
import JobsCard from '../JobsCard'
import './index.css'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}
class AllJobItemSection extends Component {
  state = {
    jobDetails: [],
    apiStatus: apiStatusConstant.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.getJobDetails()
  }

  getJobDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstant.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/jobs'
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const responseData = await response.json()
      const formattedData = responseData.jobs.map(job => ({
        companyLogoUrl: job.company_logo_url,
        employmentType: job.employment_type,
        id: job.id,
        jobDescription: job.job_description,
        location: job.location,
        packagePerAnnum: job.package_per_annum,
        rating: job.rating,
        title: job.title,
      }))
      console.log(formattedData)
      this.setState({
        jobDetails: formattedData,
        apiStatus: apiStatusConstant.success,
      })
    } else if (response.status === 404) {
      this.setState({
        apiStatus: apiStatusConstant.failure,
      })
    }
  }

  renderJobDetailsView = () => {
    const {jobDetails, searchInput} = this.props
    return (
      <>
        <div className="searchContainer">
          <input
            type="text"
            value={searchInput}
            onChange={this.handleSearchChange}
            placeholder="Search"
          />
          <FaSearch />
        </div>
        {jobDetails.map(eachJob => (
          <JobsCard key={eachJob.id} jobDetailSection={eachJob} />
        ))}
      </>
    )
  }

  render() {
    return <div className="jobs-section">{this.renderJobDetailsView}</div>
  }
}

export default AllJobItemSection
