import React from 'react';
import './Offer.css'

const Offers = () => {
    return (
        <div>
            <div className="offers">
                <h1>Offers <br /><span style={{fontSize: ".9rem", color: "gray" }}> Promotions, deals, and special offers for you</span></h1>


                <div className="offersFlex">

                    <div className="offersbanner">
                        <div className="offerborder">
                            <small style={{fontWeight:"bolder",fontSize:"1.2rem"}}>Planning a trip to the 2024 Summer Games?</small>
                            <br />
                            <small>Brussels is a quick train ride from all the action</small>
                            <br />
                            <button className='offerbuton'>Explore Brussels</button>
                        </div>
                        <img src="https://q-xx.bstatic.com/xdata/images/xphoto/500x500/320647664.png?k=698a838d781fe6952e506a3856a7fa5c22056d98e571eb3cf9e448afa98eba81&o=" alt="" />
                    </div>


                    <div className="offersbanner" style={{
                        backgroundImage: 'url("https://r-xx.bstatic.com/xdata/images/xphoto/714x300/316455553.jpeg?k=33c0362560b6aa7ff9ba2afc3ef8d120728107cf56cd1c006fcf0da8c1821735&o=")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                         <div className="offerborder" style={{color:"white"}}>
                            <small style={{fontWeight:"bolder",fontSize:"1.2rem"}}>Seize the moment!</small>
                            <br />
                            <small>Save 15% or more when you book and stay before October 1, 2024</small>
                            <br />
                            <button className='offerbuton'>Explore Brussels</button>
                        </div>
                       
                    </div>



                </div>

            </div>
        </div>
    );
};

export default Offers;