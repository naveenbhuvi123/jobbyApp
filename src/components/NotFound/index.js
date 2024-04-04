import './index.css'

const NotFound = () => (
  <div className="notFound-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
      className="not-found-img"
      alt="not found"
    />
    <h1 className="not-found-heading">Not Found</h1>
    <p className="not-found-description">
      we are sorry, the page your are requested could not be found
    </p>
  </div>
)

export default NotFound
