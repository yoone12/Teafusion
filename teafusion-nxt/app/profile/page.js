import Navbar from "../navbar.js";
import Footer from "../footer.js";
import "public/styles/style.css";
import styles from "public/styles/profile.module.css";

export default function profile() {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Profile</title>
            <body className={styles.body}>
                <Navbar />
                <div className={styles.container}>
                    <div className={styles.section}>
                        <img className={styles.pfp} src="assets/images/profile/pfp-x.png" />
                        <div className={styles.right}>
                            <div className={styles.row1}>
                                <h1>My Account</h1>
                                <p>Tea Connoisseur since 2018</p>
                            </div>
                            <div className={styles.row2}>
                                <div className={styles.column1}>
                                    <h3>ACCOUNT INFO</h3>
                                    <h4>Name:</h4>
                                    <p>[Xenia Huang]</p>
                                    <h4>Email:</h4>
                                    <p>[xenia@huangdesign.co]</p>
                                    <h4>Country:</h4>
                                    <p>[United States]</p>
                                </div>
                                <div className={styles.column2}>
                                    <h3>ORDER HISTORY</h3>
                                    <h3 className={styles.orderH}>1 Box of Chamomile Tea</h3>
                                    <p className={styles.orderT}>Herbal | 10 Tea Bags</p>
                                    <h3 className={styles.orderH}>1 Rustic Teapot</h3>
                                    <p className={styles.orderT}>Teapot | Set of 1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Logout */}
                    <div className="log-out">
                        <button>Log out</button>
                    </div>
                </div>
                <Footer />
            </body >
        </>
    )
}