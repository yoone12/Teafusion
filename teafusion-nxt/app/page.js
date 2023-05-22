import Navbar from "./navbar.js";
import Footer from "./footer.js";
import "../public/styles/style.css";

export default function Home() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Teafusion</title>
      <div className="top-bar" />
      <Navbar />
      <div className="container">
        {/* Landing content */}
        <div className="landing">
          <div className="landing-image">
            <img src="../assets/images/home/home-full-1.png" alt="" />
            <a href="/teas">
              <button>Discover our teas</button>
            </a>
          </div>
        </div>
        {/* Menu images */}
        <div className="menu">
          <div className="menuitem">
            <a href="/teas">
              <img src="../assets/images/home/hover-teas.png" alt="" />
            </a>
          </div>
          <div className="menuitem">
            <a href="">
              <img src="../assets/images/home/hover-spices.png" alt="" />
            </a>
          </div>
          <div className="menuitem">
            <a href="">
              <img src="../assets/images/home/hover-wares.png" alt="" />
            </a>
          </div>
        </div>
        {/* Image, Parallax(?) */}
        <img src="../assets/images/home/home-full-2.png" className="img-full-width" alt="" />
        {/* About us block */}
        <div className="block">
          <div className="left">
            <img src="../assets/images/about/about-us-half.png" alt="" />
          </div>
          <div className="right">
            <h1>About Us</h1>
            <p>
              Teafusion is a quality tea brand specializing in organic herbal tea.
              Targeting celebrated tea lovers and health-conscious individuals, our
              goal is to share a warm, hearty cup of tea with the world.
            </p>
            <div className="right-flex">
              <img src="../assets/images/home/usda-organic.png" alt="" />
              <img src="../assets/images/home/non-gmo.png" alt="" />
              <a href="/about">
                <button>Learn more</button>
              </a>
            </div>
          </div>
        </div>
        {/* Join us block */}
        <div className="ab-block join-us-block">
          <div className="ab-left">
            <h1>Join us</h1>
            <p>
              Join our email list to get 10% off and be the first to know about new
              products and special offers.
            </p>
            <form>
              <label htmlFor="email"></label>
              <input type="email" id="email" name="email" placeholder="Your email address" />
              <button type="submit">Sign up</button>
            </form>
          </div>
          <div className="join-right">
            <img src="../assets/images/home/join-us.png" alt="" />
          </div>
        </div>
        {/* Footer */}
      </div>
      <Footer />
    </>
  );
}
