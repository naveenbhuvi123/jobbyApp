import {Link, withRouter} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
import Cookies from 'js-cookie'
import {FiLogOut} from 'react-icons/fi'
import {IoMdMailOpen} from 'react-icons/io'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <div className="nav-container">
      <Link to="/" className="nav-link">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          className="site-logo"
          alt="website logo"
        />
      </Link>

      <div className="menu-names">
        <Link to="/" className="nav-link">
          <h1 className="heading">Home</h1>
        </Link>
        <Link to="/jobs" className="nav-link">
          <h1 className="heading">Jobs</h1>
        </Link>
      </div>
      <button type="button" className="button" onClick={onClickLogout}>
        Logout
      </button>
      <div className="menu">
        <Link to="/" className="nav-link">
          <FaHome className="heading-1" />
        </Link>
        <Link to="/jobs" className="nav-link">
          <IoMdMailOpen className="heading-1" />
        </Link>
        <FiLogOut className="heading-1" onClick={onClickLogout} />
      </div>
    </div>
  )
}

export default withRouter(Header)
