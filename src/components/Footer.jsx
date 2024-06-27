import facebookIcon from '../assets/FacebookIcon.png'
import twitterIcon from '../assets/TwitterIcon.png'
import gitHubIcon from '../assets/GitHubIcon.png'
import instagramIcon from '../assets/InstagramIcon.png'

export default function Footer() {
    return (
        <div className="footer">
            <div className='icons'>
                <img src={twitterIcon} />
                <img src={facebookIcon} />
                <img src={gitHubIcon} />
                <img src={instagramIcon} />
            </div>
        </div>
    )
}