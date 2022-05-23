import React from 'react';
import "./SearchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img 
        src="https://t-cf.bstatic.com/xdata/images/hotel/square200/340360623.webp?k=c165777d1b723c422bdd1d0c26b8af0c87ccb932ce7d8f0f5365ca908f91ef6f&o=&s=1" 
        alt=""
        className='siImg' 
        />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className='siDistance'>500 from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubTitle">
                Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
               Entire bungalow • 1 bedroom • 1 bathroom • 15m²
            </span>
            <span className="siCancelOp">Free Cancellation</span>
            <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
           <div className="siDetailTexts">
             <span className="siPrice">$123</span>
             <span className="siTaxOp">Include taxes and fees</span>
             <button className="siCheckButton">See availability</button>
           </div>
        </div>
    </div>
  );
}

export default SearchItem;
