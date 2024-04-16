import React from 'react';
import './Home.css'
import Navbar from '../../Component/Navbar/Navbar';
import Header from '../../Component/Header/Header';
import Featured from '../../Component/Featured/Featured';
import Property from '../../Component/Property/Property';
import FeaturedProperties from '../../Component/FeaturedProperties/FeaturedProperties';
import MailList from '../../Component/MailList/MailList';
import Foooter from '../../Component/Foooter/Foooter';
import Destination from '../../Component/Destination/Destination';
import Offers from '../../Component/Offers/Offers';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <div className="homeContainer">
        <Offers />
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <Property />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />

        <Destination />

      </div>



      <div className="homeContainer">
        <MailList />
        <Foooter />
      </div>
    </div>
  );
};

export default Home;