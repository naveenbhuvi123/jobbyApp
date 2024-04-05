import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = props => {
  const onRedirectToJobs = () => {
    const {history} = props
    history.replace('/jobs')
  }
  return (
    <>
      <Header />
      <div className="home-section-container">
        <div className="text-container">
          <h1 className="m-heading">
            Find The Job That <br /> Fits Your Life
          </h1>
          <p className="home-page-description">
            Millions of people are searching for jobs, salary information,
            company reviews.Find the job that fits your abilities and potential.
          </p>
          <Link to="/jobs">
            <button
              className="button-1"
              type="button"
              onClick={onRedirectToJobs}
            >
              Find Jobs
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
