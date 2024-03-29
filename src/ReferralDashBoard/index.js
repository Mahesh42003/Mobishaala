import {FaCopy} from 'react-icons/fa'
import {IoLogoLinkedin, IoLogoFacebook, IoLogoInstagram} from 'react-icons/io5'
import GoBusineesLogo from '../img/Group 2183@Logo.png'
import Notifications from '../img/Notifications@notifications.png'
import user from '../img/Rectangle 1393@user.png'
import scrolling from '../img/Group 21861@scrolling.png'
import cash from '../img/002-cash.png@cash.png'
import credit from '../img/003-credit-card.png@credit.png'
import Donation from '../img/001-donation.png@donation.png'
import HourGlass from '../img/004-hourglass.png@hourglass.png'
import Commission from '../img/005-percentage.png@commission.png'
import Wage from '../img/006-wage.png@waage.png'
import Referral from '../img/007-referral.png@referral.png'
import Transfer from '../img/008-transfer.png@transfer.png'
import './index.css'

const ReferralDashBoard = () => (
  <div>
    <div className="combination-of-logo-nava-items">
      <img src={GoBusineesLogo} className="Logo-styling" alt="Website Logo" />{' '}
      {/* Website Logo */}
      <nav className="top-nav-items-flexing">
        {' '}
        {/* nav items */}
        <p className="each-nav-item-flexing">Home</p>
        <p className="each-nav-item-flexing">About Us</p>
        <p className="each-nav-item-flexing">Courses</p>
        <p className="each-nav-item-flexing">Projects</p>
        <p className="each-nav-item-flexing">Contact</p>
      </nav>
      <button type="button" className="Try-for-free-button-styling">
        Try for free
      </button>
    </div>
    <div className="second-part">
      <h1 className="Referral-Dashboard-Heading">Referral Dashboard</h1>
      {/* Dashboard */}
      <input
        type="search"
        className="search-styling"
        placeholder="Search here..."
      />
      {/* Search any element */}
      <button className="search-button">Search</button>
      <img
        src={Notifications}
        alt="Notifications"
        className="Notifications"
      />{' '}
      {/* Notification bar */}
      <img src={user} alt="user" className="user-styling" />
      <div>
        <h3>Name</h3>
        <h3 className="admin-heading">Admin</h3>
      </div>
      <img src={scrolling} alt="scroll" className="scroll-styling" />
    </div>
    <div className="flexing-items">
      <div className="background-image flexing-box-items">
        <img src={cash} alt="cash" className="cash-styling" />

        <div>
          <h3 className="inside-cash-styling">$9,568.00</h3>
          <p className="total-balance-styling">Total Balance</p>
        </div>
      </div>
      <div className="background-image flexing-box-items">
        <img src={credit} alt="cash" className="cash-styling" />

        <div>
          <h3 className="inside-cash-styling">60%</h3>
          <p className="total-balance-styling">Discount</p>
        </div>
      </div>
      <div className="background-image flexing-box-items">
        <img src={Donation} alt="cash" className="cash-styling" />

        <div>
          <h3 className="inside-cash-styling">300</h3>
          <p className="total-balance-styling">Total Referral</p>
        </div>
      </div>
      <div className="background-image flexing-box-items">
        <img src={HourGlass} alt="cash" className="cash-styling" />

        <div>
          <h3 className="inside-cash-styling">$ 300</h3>
          <p className="discount-styling">Discount Amount</p>
        </div>
      </div>
    </div>
    <div className="flexing-items">
      <div className="background-image flexing-box-items">
        <img src={Commission} alt="cash" className="cash-styling" />

        <div>
          <h3 className="inside-cash-styling">$465.00</h3>
          <p className="commission-amount">Commission Amount</p>
        </div>
      </div>
      <div className="background-image flexing-box-items">
        <img src={Wage} alt="cash" className="cash-styling" />

        <div>
          <h3 className="inside-cash-styling">$158.00</h3>
          <p className="total-balance-styling">Total Earning</p>
        </div>
      </div>
      <div className="background-image flexing-box-items">
        <img src={Referral} alt="cash" className="cash-styling" />

        <div>
          <h3 className="inside-cash-styling">40%</h3>
          <p className="commission-amount">Commission Discount</p>
        </div>
      </div>
      <div className="background-image flexing-box-items">
        <img src={Transfer} alt="cash" className="cash-styling" />

        <div>
          <h3 className="inside-cash-styling">$534.00</h3>
          <p className="commission-amount">Total Bank Transfer</p>
        </div>
      </div>
    </div>
    <div className="styling-frame">
      <div>
        <h1 className="service-heading">Service</h1>
        <p className="some-service-heading">some service</p>
      </div>
      <div>
        <h1 className="total-referrals">Your Referrals</h1>
        <p className="some-service-heading">0 + 0</p>
      </div>
      <div>
        <h1 className="total-referrals">Active Referrals</h1>
        <p className="some-service-heading">0 + 0</p>
      </div>
      <div>
        <h1 className="total-referrals">Total Ref. Earnings</h1>
        <p className="some-service-heading">$0.00</p>
      </div>
    </div>
    <h1 className="Heading-3">Refer Friends And Earn More !!</h1>
    <div className="flexing-reference-link">
      <div className="margin-bottom">
        <h1 className="referral-link">Your Referral Link</h1>
        <input
          type="text"
          className="input-element"
          placeholder="https://gobusiness.com/?refferal=ABCXYZ"
        />
        <button className="copy-button">
          <FaCopy alt="copy" /> Copy {/* copy button */}
        </button>
      </div>
      <div>
        <h1 className="Heading-3">Your Referral Code</h1>
        <input
          type="text"
          placeholder="ABCXYZ"
          className="your-referral-code"
        />
        <button className="copy-button">
          <FaCopy alt="copy" /> Copy
        </button>
      </div>
    </div>
    <div className="combination-of-show-entires">
      <div className="combination-of-show-entires">
        <h1 className="show-styling">Show</h1>
        <p className="options-heading">10</p>
        <h2 className="entires-heading">Entires</h2>
      </div>
      <div className="combination-of-show-entires1">
        <label htmlFor="search" className="search-styling-entire">
          Search:{' '}
        </label>
        <input
          type="search"
          id="search"
          className="size-of-input-search-element"
        />
      </div>
    </div>
    <div className="Header">
      <h3 className="Name-heading">Name</h3>
      <h3 className="service-name-heading">Service Name</h3>
      <h3 className="Date-heading">Date</h3>
      <h3 className="Date-heading">Profit</h3>
      {/* List of names working in the company */}
    </div>
    <div className="width-row">
      <p className="prajal-heading">Pranjal</p>
      <p className="PM-heading">PM</p>
      <p className="date-heading">2011/11/28</p>
      <p className="dollars-heading">$162,700</p>
    </div>
    <hr className="horizontal-heading" />
    <div className="width-row">
      <p className="prajal-heading">paritosh</p>
      <p className="PM-heading">PM</p>
      <p className="date-heading">2007/10/09</p>
      <p className="dollars-heading">$1,200,000</p>
    </div>
    <hr className="horizontal-heading" />
    <div className="width-row">
      <p className="prajal-heading">palav</p>
      <p className="B2b-heading">B2b</p>
      <p className="date-heading">2009/01/12</p>
      <p className="dollars-heading">$86,000</p>
    </div>
    <hr className="horizontal-heading" />
    <div className="width-row">
      <p className="prajal-heading">Moumita</p>
      <p className="PM-heading">HR</p>
      <p className="date-heading">2012/10/13</p>
      <p className="dollars-heading">$132,000</p>
    </div>
    <hr className="horizontal-heading" />
    <div className="width-row">
      <p className="prajal-heading">Mitesh</p>
      <p className="Graphics-heading">Graphics</p>
      <p className="date-heading">2011/06/07</p>
      <p className="dollars-heading">$206,850</p>
    </div>
    <hr className="horizontal-heading" />
    <div className="width-row">
      <p className="prajal-heading">Srinivas</p>
      <p className="Graphics-heading">Frontend</p>
      <p className="date-heading">2012/12/02</p>
      <p className="dollars-heading">$372,000</p>
    </div>
    <hr className="horizontal-heading" />
    <div className="width-row">
      <p className="prajal-heading">hritik</p>
      <p className="Graphics1-heading">Graphics</p>
      <p className="date-heading">2011/05/03</p>
      <p className="dollars-heading">$163,500</p>
    </div>
    <hr className="horizontal-heading" />
    <div className="width-row">
      <p className="prajal-heading">abc</p>
      <p className="HR-heading">HR</p>
      <p className="date-heading">2011/05/03</p>
      <p className="dollars-heading">$106,450</p>
    </div>
    <hr className="horizontal-heading" />
    <div className="width-row">
      <p className="prajal-heading">xyz</p>
      <p className="HR-heading">B2b</p>
      <p className="date-heading">2011/12/06</p>
      <p className="dollars-heading">$145,600</p>
    </div>
    <hr className="horizontal-heading" />
    <div className="width-row">
      <p className="prajal-heading">bcd</p>
      <p className="HR-heading">B2b</p>
      <p className="date-heading">2012/03/29</p>
      <p className="dollars-heading">$433,060</p>
    </div>
    <hr className="horizontal-heading" />
    <div className="scrolling-buttons-bottom">
      <h3 className="showing">Showing 1 to 10 of 57 entries</h3>
      <div>
        <button className="previous-button-styling">Previous</button>
        <button className="one-button">1</button>
        <button className="two-button">2</button>
        <button className="two-button">3</button>
        <button className="two-button">4</button>
        <button className="two-button">5</button>
        <button className="two-button">6</button>
        <button className="two-button">Next</button>
      </div>
    </div>
    <div className="bottom-page">
      <div>
        <h1 className="company-heading">Company</h1>
        <p>About</p>
        <p>Premium</p>
        <p>Blog</p>
        <p>Referral Program</p>
      </div>
      <div>
        <h1 className="company-heading">Help And Support</h1>
        <p>Contact Us</p>
        <p>Knowledge Center</p>
        <p>Premium Support</p>
      </div>
      <div>
        <h1 className="company-heading">Learning</h1>
        <p>Learn Hub</p>
        <p>Tutorials</p>
        <p>Communities</p>
      </div>
      <div>
        <h1 className="company-heading">Resources</h1>
        <p>Third-Party Tools</p>
        <p>Illustrations</p>
        <p>Stock Photos</p>
      </div>
      <div>
        <h1 className="company-heading">Legal</h1>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        <p>EULA</p>
      </div>
    </div>
    <div>
      <img
        src={GoBusineesLogo}
        className="Logo-styling additional-logo-styling"
        alt="Website Logo"
      />
      <p className="copy-right-styling">
        © 2024 Go Business, Inc. All rights reserved.
      </p>
    </div>
    <div className="icons-aligning">
      <IoLogoLinkedin className="icon-width" /> {/* Linkedin Logo */}
      <IoLogoFacebook className="icon-width" /> {/* Facebook Logo */}
      <IoLogoInstagram className="icon-width" /> {/* Instagram Logo */}
    </div>
  </div>
)
export default ReferralDashBoard
