import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function App() {

  const [data , setData] = useState({});
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");

  const getCountries = async ()=>
  {
    const data = await fetch("https://corona.lmao.ninja/v2/countries?yesterday&sort");
    const json = await data.json();
    setCountries(json);
  }

  const getSelectValue = (e)=>
 {
  setCountry(e.target.value);
  getData(); 
 }

  const getData = async ()=>
  {
    const data = await fetch(`https://corona.lmao.ninja/v2/countries/${country}?yesterday=true&strict=true&query`);
    const json = await data.json();
    setData(json);
  }

  useEffect(()=>
  {
    getCountries();
  },[]);

  return (
 
    <>
      <div className="container">
        <h1 className="text-center my-3 font-weight-bold">Country Wise Covid Data</h1>
        <div className="row">
            <div className="col-12 col-sm-10 col-md-8 m-auto text-center">
              <select className="form-select p-2" aria-label="Default select example" onChange={getSelectValue}>
              <option value="" selected>Select Country</option>
                {
                  countries.map((c)=>{
                    return(
                      <>
                    
                       <option value={c.country}>{c.country}</option>
                      </>
                    )
                  })
                }
              </select>
            </div>
            
            <div className="col-12 col-sm-12 col-md-12 m-auto text-center">
              <div className="row my-4">
            <div className="col-12 col-sm-10 col-md-9 mx-auto my-3 text-center">
                <div className="card">
                      <div className="card-body">
                         <h1>{data.country}</h1>
                         
                      </div>
                </div>
            </div>   

           <div className="col-12 col-sm-6 col-md-4 mx-auto my-3 text-center">
                <div className="card">
                      <div className="card-body">
                         <h1> Total Cases</h1>
                         <hr/>
                         <h2>{data.cases}</h2>
                      </div>
                </div>
            </div> 

            <div className="col-12 col-sm-6 col-md-4 mx-auto my-3 text-center">
                <div className="card">
                      <div className="card-body">
                         <h1> Today's Cases</h1>
                         <hr/>
                         <h2>{data.todayCases}</h2>
                      </div>
                </div>
            </div> 

            <div className="col-12 col-sm-6 col-md-4 mx-auto my-3 text-center">
                <div className="card">
                      <div className="card-body">
                         <h1> Today's Deaths</h1>
                         <hr/>
                         <h2>{data.todayDeaths}</h2>
                      </div>
                </div>
            </div> 

            <div className="col-12 col-sm-6 col-md-4 mx-auto my-3 text-center">
                <div className="card">
                      <div className="card-body">
                         <h1> Active Cases</h1>
                         <hr/>
                         <h2>{data.active}</h2>
                      </div>
                </div>
            </div> 

            <div className="col-12 col-sm-6 col-md-4 mx-auto my-3 text-center">
                <div className="card">
                      <div className="card-body">
                         <h1>Recovered Today</h1>
                         <hr/>
                         <h2>{data.todayRecovered}</h2>
                      </div>
                </div>
            </div> 
            <div className="col-12 col-sm-6 col-md-4 mx-auto my-3 text-center">
                <div className="card">
                      <div className="card-body">
                         <h1> Recovered</h1>
                         <hr/>
                         <h2>{data.recovered}</h2>
                      </div>
                </div>
            </div> 

              </div>
            </div>
        </div>
      </div>
    </>
   
  );
}
