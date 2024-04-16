import React from 'react';
import './FeaturedProperties.css'

const FeaturedProperties = () => {
    return (
        <div className="fp">

            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Aparthotel Stare Miasto</span>
                <span className="fpCity">Madrid</span>
                <span className="fpPrice">Starting from $120</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>

            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Comfort Suites Airport</span>
                <span className="fpCity">Austin</span>
                <span className="fpPrice">Starting from $140</span>
                <div className="fpRating">
                    <button>9.3</button>
                    <span>Exceptional</span>
                </div>
            </div>

            <div className="fpItem">
                <img
                    src="https://i.pinimg.com/736x/e8/59/f4/e859f45f765568b6e6aacabb98dafb5b.jpg"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Four Seasons Hotel</span>
                <span className="fpCity">Lisbon</span>
                <span className="fpPrice">Starting from $99</span>
                <div className="fpRating">
                    <button>8.8</button>
                    <span>Excellent</span>
                </div>
            </div>

            <div className="fpItem">
                <img
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBj-fvmCLAnEDnZvnoPTODsFhIcsn9VMAmptGRgKc-JlNm1PiLDOqLZN872P-xupjVLJu4PsHJkFLQlb4SBVDBw35NMxmmhM8joMb-zvNYzW2mgPorS4mGu0sv5AFKyCIWW1-5fbq95VVTHijF4W0Fru33Qo8iGnkWHT2NSp2Hu9cjJdy5ERu6BtOi/s1024/99368054.jpg"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Hilton Garden Inn</span>
                <span className="fpCity">Berlin</span>
                <span className="fpPrice">Starting from $105</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>

        </div>
    );
};

export default FeaturedProperties;