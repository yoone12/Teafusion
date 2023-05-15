import Navbar from "../navbar.js";
import Footer from "../footer.js";

export default function profile(){
    return(
        <>
            <Navbar />
            <div className="container">
                <div className="">
                    <img src="" />
                    <div className="right">
                        <div className="column1">
                            <h1>My Account</h1>
                            <p>Tea Connoisseur since 2018</p>
                            <h2>Account Info</h2>
                            <h3>Name:</h3>
                            <p>NAME</p>
                            <h3>Email:</h3>
                            <p>EMAIL</p>
                            <h3>Country:</h3>
                            <p>COUNTRY</p>
                        </div>
                        <div className="column2">
                            <h1>Order History</h1>
                            <h2>ORDER COLUMN 1</h2>
                            <p>ORDER COLUMN 2+3</p>
                            <h2>ORDER COLUMN 1</h2>
                            <p>ORDER COLUMN 2+3</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}