import Navbar from "./navbar.js";
import Footer from "./footer.js";
import "public/styles/style.css";

export default function Home() {
  return (
    <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home</title>
    <div className="top-bar" />
    <div className="container">
      {/* Navbar */}
{/*       <div className="navbar">
        <img
          className="logo"
          src="assets/images/home/TeaFusion-logo.png"
          alt="Teafusion Logo"
        />
        <ul className="nav">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="about">About Us</a>
          </li>
          <li>
            <a href="teas">Tea</a>
          </li>
          <li>
            <a href="teaware">Teaware</a>
          </li>
        </ul>
        <div className="nav-icons">
          <img src="assets/images/home/icon-search.png" alt="" />
          <img src="assets/images/home/icon-profile.png" alt="" />
          <img src="assets/images/home/icon-bag.png" alt="" />
        </div>
      </div> */}
      <Navbar />
      {/* Landing content */}
      <div className="landing">
        <div className="landing-image">
          <img src="assets/images/home/home-full-1.png" alt="" />
          <button>Discover our teas</button>
        </div>
      </div>
      {/* Menu images */}
      <div className="menu">
        <div className="menuitem">
          <a href="">
            {/* <h1>Teas</h1> */}
            <img src="assets/images/home/hover-teas.png" alt="" />
          </a>
        </div>
        <div className="menuitem">
          <a href="">
            {/* <h1>Spices</h1> */}
            <img src="assets/images/home/hover-spices.png" alt="" />
          </a>
        </div>
        <div className="menuitem">
          <a href="">
            {/* <h1>Wares</h1> */}
            <img src="assets/images/home/hover-wares.png" alt="" />
          </a>
        </div>
      </div>
      {/* Image, Parallax(?) */}
      <img src="assets/images/home/home-full-2.png" alt="" />
      {/* About us block */}
      <div className="block">
        <div className="left">
          <img src="assets/images/about/about-us-half.png" alt="" />
          <h1>About Us</h1>
        </div>
        <div className="right">
          <p>
            Teafusion is a quality tea brand specializing in organic herbal tea.
            Targeting celebrated tea lovers and health-conscious individuals, our
            goal is to share a warm, hearty cup of tea with the world.
          </p>
          <button>Learn more</button>
          <img src="assets/images/home/usda-organic.png" alt="" />
          <img src="assets/images/home/non-gmo.png" alt="" />
        </div>
      </div>
      {/* Join us block */}
      <div className="block">
        <div className="left">
          <h1>Join us</h1>
          <p>
            Join our email list to get 10% off and be the first to know about new
            products and special offers.
          </p>
          <h1>TEMP: Your email address (field)</h1>
          <button>Sign up</button>
        </div>
        <div className="right">
          <img src="assets/images/home/join-us.png" alt="" />
        </div>
      </div>
    </div>
    {/* Footer */}
    <Footer />
  </>
  )
}
