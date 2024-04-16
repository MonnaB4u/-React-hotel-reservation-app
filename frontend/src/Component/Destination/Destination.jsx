import React, { useState } from 'react';
import './Destination.css'
import Region from './destiComponent/Region';
import Cities from './destiComponent/Cities';
import Place from './destiComponent/Place';
const Destination = () => {

    const [active, setActive] = useState("Region")


    return (
        <div className="">
            <div className="Destination">
            <h1 className="homeTitle">Destinations we love</h1>
            <div className="destiList">
                <p style={{ fontSize: "1.2rem", fontWeight: "bolder" }} onClick={()=>setActive("Region")} className={active === "Region" && "destiListactive"}>Region</p>
                <p style={{ fontSize: "1.2rem", fontWeight: "bolder" }} onClick={()=> setActive("Cities")} className={active === "Cities" && "destiListactive"}>Cities</p>
                <p style={{ fontSize: "1.2rem", fontWeight: "bolder" }} onClick={()=> setActive("Place")} className={active === "Place" && "destiListactive"}>Place of interest</p>
            </div>
           
        </div>
                {
                    active === "Region" && <Region/>
                }
                  {
                    active === "Cities" && <Cities/>
                }
                  {
                    active === "Place" && <Place/>
                }
       
        </div>


    );
};

export default Destination;