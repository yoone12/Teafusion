'use client';
import {useState} from "react";
import Navbar from "../navbar.js";
import Footer from "../footer.js";
import "public/styles/style.css";
import styles from "public/styles/profile.module.css";

export default function profile() {
    /* Give this component state */
    const [dataResponse, setDataResponse] = useState([]);

    /* Fetch data from json file via api route */
    const fetchUsers = async () => {
        const response = await fetch ("/api/users");
        const data = await response.json();
        /* Put retrieved json data into state */
        setDataResponse(data);
    }

    fetchUsers();
    
    return (
        <>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Profile</title>
            <body className={styles.body} onLoad={fetchUsers}>
                <Navbar />
                <div className={styles.container}>
                    <div className={styles.section}>
                        {dataResponse.map((data) =>{
                            return(
                                <img className={styles.pfp} src={data.image} />
                            )
                        })}
                            <div className={styles.right}>
                            <div className={styles.row1} >
                                <h1>My Account</h1>
                                <p>Tea Connoisseur since 2018</p>
                            </div>
                            <div className={styles.row2}>
                                <div className={styles.column1}>
                                    {dataResponse.map((data) =>{
                                        return(
                                            <>
                                                <h3>ACCOUNT INFO</h3>
                                                <h4>Name:</h4>
                                                <p>{data.name}</p>
                                                <h4>Email:</h4>
                                                <p>{data.email}</p>
                                                <h4>Country:</h4>
                                                <p>{data.country}</p>
                                            </>
                                        )
                                    })}
                                </div>
                                <div className={styles.column2}>
                                    {dataResponse.map((data) =>{
                                        return(
                                            <>
                                                <h3>ORDER HISTORY</h3>
                                                <h3 className={styles.orderH}>{data.order1}</h3>
                                                <p className={styles.orderT}>{data.product1}</p>
                                                <h3 className={styles.orderH}>{data.order2}</h3>
                                                <p className={styles.orderT}>{data.product2}</p>
                                            </>
                                        )
                                    })}
                                    <div className="log-out">
                                        <button>Log Out</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </body >
        </>
    )
}