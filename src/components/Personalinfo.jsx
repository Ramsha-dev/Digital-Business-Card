import profilePicture from '../assets/profile_picture.jpg'

export default function Personalinfo() {
    return (
        <div className="personal-section">

            <img className="profile-picture" src={profilePicture} alt="profilePicture" />

            <h1>Ramsha Afaq</h1>
            <p className='designation'>Software Engineer</p>
            <p>websitecomingsoon.com</p>

            <div className="contact-btns">
                <a href="#" className="btn btn-email">
                    <i className="fas fa-envelope"></i> Email
                </a>
                <a href="#" className="btn btn-linkedin">
                    <i className="fab fa-linkedin"></i> LinkedIn
                </a>
            </div>
        </div>
    )
}