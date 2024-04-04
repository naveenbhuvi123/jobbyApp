import React from 'react'
import Cookies from 'js-cookie'
import './index.css'

class ProfileDetails extends React.Component {
  state = {
    profile: {},
  }

  componentDidMount() {
    this.getProfileDetails()
  }

  getProfileDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/profile'
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()

      const formattedData = {
        name: data.profile_details.name,
        profileImageUrl: data.profile_details.profile_image_url,
        shortBio: data.profile_details.short_bio,
      }
      console.log(formattedData)
      this.setState({profile: formattedData})
    }
  }

  render() {
    const {profile} = this.state
    return (
      <div className="profile-card">
        <img src={profile.profileImageUrl} alt="Profile" />
        <h1>{profile.name}</h1>
        <p>{profile.shortBio}</p>
      </div>
    )
  }
}

export default ProfileDetails
