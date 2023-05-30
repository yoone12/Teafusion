import "public/styles/navbar.css";


/* Navbar component */
export default function Navbar(){
    return(
        <>
            <div className="nav-spacer"></div>
            <div className="top-bar"></div>
            <div className="navbar">
                <img className="logo" src="assets/images/home/TeaFusion-logo.png" alt="TeaFusion logo"/>
                <ul className="nav">
                    <li><a href='/'>Home</a></li>
                    <li><a href="about">About Us</a></li>
                    <li><a href="teas">Tea</a></li>
                    <li><a href="teaware">Teaware</a></li>
                </ul>
                <div className="nav-icons">
                    <img src="assets/images/home/icon-search.png" alt="" />
                    <a href='profile'><img src="assets/images/home/icon-profile.png" alt="" /></a>
                    <img src="assets/images/home/icon-bag.png" alt="" />
                </div>
            </div>
        </>
    )
}