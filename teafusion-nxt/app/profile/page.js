

/* Navbar component */
export default function Profile(){
    return(
        <>
            <div className="nav-spacer"></div>
            <div className="top-bar"></div>
            <div className="container">
                <div className="navbar">
                    <img src="assets/images/home/TeaFusion-logo.png" alt="TeaFusion logo"/>
                    <ul className="nav">
                        <li><a href='/'>Home</a></li>
                        <li><a href="about">About Us</a></li>
                        <li><a href="teas">Tea</a></li>
                        <li><a href="teaware">Teaware</a></li>
                    </ul>
                    <div class="nav-icons">
                        <img src="assets/images/home/icon-search.png" alt="" />
                        <img src="assets/images/home/icon-profile.png" alt="" />
                        <img src="assets/images/home/icon-bag.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

/* export default function profile(){
    return(
        <>

        </>
    )
} */