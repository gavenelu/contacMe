import './App.css';
import profileImg from './images/profile.jpg';
import emailLogo from './images/Mail.png';
import linkedInLogo from './images/linkedin.png';
import TwitterIcon from './images/Twitter-Icon.png';
import FacebookIcon from './images/Facebook-Icon.png';
import GitHubIcon from './images/GitHub-Icon.png';
import InstagramIcon from './images/Instagram-Icon.png';


function App() {
  return (
    <div>
      <div className='card'>
        <img className='profileImg' src={profileImg} alt="" />
      </div>

      <div className='mainContent'>
        <h1>Gavene Lu</h1>
        <h3 className='jobTitle'>Frontend Developer</h3>
        <h4 className='personalWebsite'>Gavene.website</h4>

        <div className="personalLink">
          <button className='emailButton' onClick={() => window.location = 'mailto:gaavene@gmail.com'}>
            <img className="emailButton_logo" src={emailLogo} alt='' />
            <p className="emailButton_text" >Email</p>
          </button>
          <button className='linkedInButton' onClick={() => window.open("https://www.linkedin.com/in/gavenelu/", "_blank")}>
            <img className="linkedInButton_logo" src={linkedInLogo} alt='' />
            <p className="linkedInButton_text" >LinkedIn</p>
          </button>
        </div>

        <div className="contentDetail_1">
          <h3 className='contentTitle'>About</h3>
          <p className='contentDescript'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
        <div className="contentDetail_2">
          <h3 className='contentTitle'>Interests</h3>
          <p className='contentDescript'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
      </div>

      <div className='footer'>
        <td className="socialIcon" onClick={() => window.open("https://twitter.com/GavinLu5", "_blank")}>
          <img src={TwitterIcon} alt='' />
        </td>
        <td className="socialIcon" onClick={() => window.open("https://www.facebook.com/gaavvenelu", "_blank")}>
          <img src={FacebookIcon} alt='' />
        </td>
        <td className="socialIcon" onClick={() => window.open("https://github.com/gavenelu?tab=repositories", "_blank")}>
          <img src={GitHubIcon} alt='' />
        </td>
        <td className="socialIcon" onClick={() => window.open("https://www.instagram.com/gavene.lu/", "_blank")}>
          <img src={InstagramIcon} alt='' />
        </td>
      </div>

    </div>
  )

}

export default App;
