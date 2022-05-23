import React from 'react';
import './Featured.css';

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/689526.webp?k=af8b07da995db6f6bbf4ff4aca9d7d9af1d92441c9c8af80b2b0c91a284a57d3&o=" alt="" className='featureImg'/>
            <div className="featuredTitle">
                <h1>Dublin</h1>
                <h2>123 properties</h2>

            </div>
        </div>

        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/689617.webp?k=edf88994b0c6b4c060300b942efdc1242289d1a695fcea13493e20596edc7daa&o=" alt="" className='featureImg'/>
            <div className="featuredTitle">
                <h1>Beach</h1>
                <h2>123 properties</h2>

            </div>
        </div>

        <div className="featuredItem">
            <img src=" https://cf.bstatic.com/xdata/images/city/square250/620103.webp?k=c07eb50383bfb4bedd11308fb59876bff7ef522dc379f4d96a48812cecaf45eb&o=" alt="" className='featureImg'/>
            <div className="featuredTitle">
                <h1>Orlando</h1>
                <h2>123 properties</h2>
            </div>
        </div>
       
    </div>
  );
}

export default Featured;
