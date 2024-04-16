import React, { useState } from 'react';
import data from './../../../FakeData/Destination/Destination';

const Place = () => {
    const [regionData, setData] = useState(data)
    return (
        <div className="">
            <div className='regionGrid'>
            {
                regionData.map((each, i) =>
                    <div className="df">
                        <p className='' style={{ fontSize: "1rem", fontWeight: "bolder" }}>{each.name} <br />  <small style={{color:"gray"}}>{each.properties} properties</small></p>
                       
                    </div>

                )
            }
        </div>
        </div>
    );
};

export default Place;