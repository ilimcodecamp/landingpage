import React from 'react';

// import clock
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
// clock css
import '@leenguyen/react-flip-clock-countdown/dist/index.css'

// import video
import VideoBg from '../src/assets/video.mp4';
import Logo from '../src/assets/logo_small_v1.png';

// import css
import './styles.css'

const externalLink = 'https://forms.gle/cKsH6Tn7D7PJUbXW8';

const App = () => {
  return <section className='page'>
    <div className='overlay'></div>

    <video src={VideoBg} autoPlay loop muted></video>

    <div className='page__content'>
      <img src={Logo} alt="Logo" className="logo-image" />
      <h1>Launching Soon</h1>
      <h3>Fill out the form and We'll notify you when the site goes live.</h3>
      <FlipClockCountdown className='flip-clock' to={'2024-01-01T12:00:00.000Z'} />
      <a href={externalLink} target="_blank" rel="noopener noreferrer"><button className='btn'>Notify Me</button></a>
    </div>
  </section>;
};

export default App;
