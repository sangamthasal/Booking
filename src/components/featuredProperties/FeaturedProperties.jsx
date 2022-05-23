import React from 'react';
import './featuredProperties.css';

const FeaturedProperties = () => {
  return (
    <div>
      <div className="fp">
          <div className="fpItem">
              <img src="https://cf.bstatic.com/xdata/images/hotel/max500/39615603.jpg?k=ffa7f14b1c5235c8883662876734f832a596de617cd8380ce1025fb21bc92df9&amp;o=" className='fpImage' alt="" />
              <span className="fpName">Aparthotel Stare Miasto</span>
              <span className="fpCity">Krakow</span>
              <span className="fpPrice">Starting from ₹ 6,329</span>
               <div className="fpRating">
                    <button>9.2</button>
                    <span>Excellent</span>    
               </div>  
          </div>

          <div className="fpItem">
              <img src="https://cf.bstatic.com/xdata/images/hotel/max500/106393405.jpg?k=237d0a65974505ec4d34765c230ad8c6198e0cc4f807e4f8c542ef95c89a38ab&o=)" className='fpImage' alt="" />
              <span className="fpName">The Patio Barcelona</span>
              <span className="fpCity">Barcelona</span>
              <span className="fpPrice">Starting from ₹ 34,617</span>
               <div className="fpRating">
                    <button>7.9</button>
                    <span>Excellent</span>    
               </div>  
          </div>

          <div className="fpItem">
              <img src="https://cf.bstatic.com/xdata/images/hotel/max500/62261541.jpg?k=3ef9943ed49b4959b2cb9fbbb4f75ee2a7a6c9460bbfd7634b6fcd23674863f3&o=)" className='fpImage' alt="" />
              <span className="fpName">Hyde Park Residence</span>
              <span className="fpCity">London</span>
              <span className="fpPrice">Starting from ₹ 563,671
</span>
               <div className="fpRating">
                    <button>9.7</button>
                    <span>Excellent</span>    
               </div>  
          </div>

          <div className="fpItem">
              <img src="https://cf.bstatic.com/xdata/images/hotel/max500/74594395.jpg?k=d5a71c0578774c302d2b8854482beaa8785077c616f956aac74766124023a319&o=" className='fpImage' alt="" />
              <span className="fpName">Sun Spalato Views</span>
              <span className="fpCity">Split</span>
              <span className="fpPrice">Starting from ₹ 28,981</span>
               <div className="fpRating">
                    <button>9.3</button>
                    <span>Wonderful</span>    
               </div>  
          </div>
      </div>
    </div>
  );
}

export default FeaturedProperties;
