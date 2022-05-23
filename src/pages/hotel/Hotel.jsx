import React ,{useState}from 'react';
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import "./hotel.css";
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
const Hotel = () => {

  const [SliderNumber,setSliderNumber]=useState(0);
  const [openSlider,setOpenSlider]=useState(false);


  const photos=[

    {
      src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/195950720.jpg?k=236d70a70bf2b162425542c214b3a4ae26a532c4e27c7d757c2e7648f9871c9b&o=&hp=1"
    },
    {
      src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/218436830.jpg?k=0de182ba053a7482b6024f2700a41fa1581b218c3d4c92a1fa8da00b55b12463&o=&hp=1"
    },
    {
      src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/218436801.jpg?k=9aedbe483d861ca6dff8d9ce4ebc96a0a1f3d57512a0e79fac37099ab98349e3&o=&hp=1"
    },
    {
      src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/218436823.jpg?k=bb1f278a6dd3b1a627875469419d2600d0a3b15f267cba0f1c9c0318dfc6516c&o=&hp=1"
    },
    {
      src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/218436849.jpg?k=f12291da7d1c7ffc9b526bb59d45ca1a6eed373e9717d5f93e1de82cac49cb99&o=&hp=1"
    },
    {
      src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/218436788.jpg?k=176fc809d5a2ac3ddeb46ade0f88a7c9ce221270e4e17e0f4b1e701a2ca5ee95&o=&hp=1"
    }


  ];

  const handleSlider = (i)=>{
      setSliderNumber(i);
      setOpenSlider(true);
  }

  const handleMove=(dir)=>{
       
    let newSliderNumber;

    if(dir==='l')
        {
          newSliderNumber= SliderNumber === 0 ? 5 : SliderNumber - 1;
        }
        else{
          newSliderNumber= SliderNumber === 5 ? 0 : SliderNumber + 1 ;
        }
        handleSlider(newSliderNumber);
  }



  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
       {openSlider && <div className="imgSlider">
         <FontAwesomeIcon icon={faCircleXmark} className="cancel"  onClick={()=>setOpenSlider(false)}/>
         <FontAwesomeIcon icon={faCircleArrowLeft} className="larrow"  onClick={()=>handleMove("l")}  />
         <div className='SliderWrapper'>
           <img src={photos[SliderNumber].src} alt=""  className='sliderImg'/>
         </div>
         <FontAwesomeIcon icon={faCircleArrowRight} className="rarrow" onClick={()=>handleMove("r")} />

        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton st 123 new york</span>
          </div>
          <span className="hotelDistance">
            Excellent location 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over s114 at this property and get a free airport taxi
          </span>
            <div className="hotelImages">
              {photos.map((photo,i)=>(
                <div className="hotelImgWrapper">
                <img onClick={()=>handleSlider(i)} src={photo.src} alt=""  className='hotelImg'/>
              </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsText">
                <h1 className="hotelTitle">Stay in the  heart of Krakow</h1>
                <p className="hotelDesc">
                Set in Morjim, La Papa Resort has an outdoor swimming pool and a garden. The property is around 37 km from Se Cathedral and 38 km from Church of St Francis of Assisi. The resort offers a hot tub and room service.
                All the rooms at La Papa Resort have stunning views of the Arabian Sea and come fitted with all modern amenities including an extra large spa bath in every room.
                Guests can enjoy food prepared by the chef along with a variety of cocktails.
                Viceroy's Arch is 38 km from La Papa Resort. Goa International Airport is 55 km away.
                La Papa Resort has been welcoming Booking.com guests since 10 Dec 2018.
                </p>
  
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for 5-week stay</h1>
                <span>
                  	Top location: Highly rated by recent guests (8.8)
              </span>
              <h2>
                <b>$2024</b> (5 weeks)
              </h2>
              <button>Reserve or Book now!</button>
              </div>
            </div>
        </div>
        <MailList/>
      <Footer/>
      </div>
     
    </div>
  );
}

export default Hotel;
