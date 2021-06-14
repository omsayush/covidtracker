import React, { useEffect, useState } from "react";
import "./statewise.css";

const Statewise = () => {

    const [data, setData] = useState([]);
    const getCovidData = async () =>{
      const res = await  fetch('https://api.covid19india.org/data.json');
      const actualData = await res.json();
      console.log(actualData.statewise);
      setData(actualData.statewise);
    }
    useEffect(() =>{
       getCovidData();
    },[]);
    return(
        <>
        <div className="container-fluid mt-5">
            <div className="main-heading">
                <h1 className="mb-5 text-center">Covid-19 Cases In <span> INDIA </span></h1>
            </div>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                            <th>Active</th>
                            <th>Updated</th>
                        </tr>
                    </thead>
                    
                    <tbody>

                      {
                        data.map((curlElem, ind)=>{
                            return(
                            <tr key={ind}>
                                <td>{curlElem.state}</td>
                                <td>{curlElem.confirmed}</td>
                                <td>{curlElem.recovered}</td>
                                <td>{curlElem.deaths}</td>
                                <td>{curlElem.active}</td>
                                <td>{curlElem.lastupdatedtime}</td>
                            </tr>
                            )
                        })
                      }
                     </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default Statewise;