'use client';

import useSWR from "swr";
import {useEffect, useState} from "react";

// const fetcher = () => fetch('/api/users').then(res => res.json());

export default function call(){
    // const data = useSWR(fetcher);
    // console.log(data.user);
    const [dataResponse, setDataResponse] = useState([]);
    const fetchUsers = async () => {
        const response = await fetch ("/api/users");
        const data = await response.json();
        setDataResponse(data);
    }
    fetchUsers();
    // console.log(dataResponse);
/*     useEffect(() => {
        async function getPageData(){
            const apiEndpoint = '/api/users';
            const response = await fetch(apiEndpoint, {method: "GET"});
            const res = await response.json;
            console.log(res);
            // setDataResponse(res);
        }
        getPageData();
    }, []); */
    return(
        <ul>
            {dataResponse.map((data) =>{
                return(
                    <>
                        <li>
                            {data.name}
                        </li>
                        <li>
                            {data.email}
                        </li>
                        <li>
                            {data.country}
                        </li>
                        <li>
                            {data.order1}
                        </li>
                        <li>
                            {data.product1}
                        </li>
                        <li>
                            {data.order2}
                        </li>
                        <li>
                            {data.product2}
                        </li>
                    </>

                )
            })
            }
        </ul>
    );
}