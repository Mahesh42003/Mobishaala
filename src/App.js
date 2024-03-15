import {FaWhatsapp} from 'react-icons/fa'
import ReactPlayer from 'react-player'
import './App.css'

const App = () => (
  <div>
    <div className="laptop-view">
      <div className="dividing-two-parts">
        <div className="aligning-first-part">
          <h1 className="Mobishaala-heading">MobiShaala</h1>
          <h3 className="content">
            Create your <span className="special-color">Digital Classroom</span>{' '}
            in 5 mins for <span className="special-color">Free</span> and
            connect to 1+ million Students.
          </h3>
          <ul className="list-of-items">
            <li>No technical Knowledge required.</li>
            <li>Quickly setup live class,notes,ebooks and more.</li>
            <li>Reach out to million of students anywhere,anytime.</li>
          </ul>
          <h4 className="Institute-teacher-heading">Institute/Teacher</h4>
          <button className="Get-started-button">Get Started</button>
          <h4 className="Institute-teacher-heading">Student</h4>
          <button className="download-app-button">Download App</button>
          <button className="talk-to-us-button">
            <FaWhatsapp className="whatsapp-icon" />
            Talk to Us
          </button>
        </div>
        <div className="React-player-margin-top">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=jg5d59ligW4"
            controls="true"
          />
          <button className="buy-button">Buy</button>
        </div>
      </div>
    </div>
    <div className="mobile-view">
      <h3 className="content">
        Create your <span className="special-color">Digital Classroom</span> in
        5 mins for <span className="special-color">Free</span> and connect to 1+
        million Students.
      </h3>
      <div className="react-player-aligning">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=jg5d59ligW4"
          controls="true"
          width="300px"
          height="150px"
        />
      </div>
      <button className="buy-button">Buy</button>

      <h4 className="Institute-teacher-heading">Institute/Teacher</h4>
      <button className="Get-started-button">Get Started</button>
      <h4 className="student-heading">Student</h4>
      <div>
        <button className="download-app-button">Download App</button>
      </div>
      <button className="talk-to-us-button">
        <FaWhatsapp className="whatsapp-icon" />
        Talk to Us
      </button>
      <div className="bottom-background-color">
        <h1 className="Mobishaala-heading">MobiShaala</h1>
        <h3 className="vision-color">Vision</h3>
        <p className="vision-color">
          Empower Institutions & Teachers with state of the art digital
          classroom technology.
        </p>
        <h3 className="vision-color">Address</h3>
        <p className="vision-color">
          <span className="font-weight">Registered Office :</span> 804,5th
          Cross,9th main,4th Block Koramangala,Banglore,Karnataka 560034
        </p>
        <p className="vision-color">
          <span className="font-weight">Corporate Office :</span> 293,Westernd
          Marg,near Saket, Saidulujab,Saket,New Delhi,110030
        </p>
        <h3 className="vision-color">Quick Links</h3>
        <h4 className="vision-color">Blog</h4>
        <h4 className="vision-color">Android App</h4>
        <h4 className="vision-color">IOS App</h4>
      </div>
    </div>
  </div>
)
export default App
