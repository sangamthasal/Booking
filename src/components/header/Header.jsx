import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns';
import { useNavigate } from 'react-router-dom';

const Header = ({type}) => {
  
  const [openDate,setOpenDate]= useState(false);
  const [destination,setDestination]= useState("");
  const [date,setDate]=useState([
    {
      startDate:new Date(),
      endDate:new Date(),
      key:'selection'
    }
  ]);

  const [OpenOption,setOpenOption]=useState(false);
  const [Option,setOption]=useState(
    {
      adult:3,
      children:4,
      room:3
    }
  );

const handleClick=(name,operation)=>{
        setOption(prev=>{
          return{
          ...prev,
          [name]: operation === 'i'? Option[name]+1 : Option[name]-1
          };
        });
  };

  const navigate= useNavigate();

  const handleSearch=()=>{
      navigate("/hotels",{state:{destination,date,Option}})
  }
  
  return (
    <div className='header'> 

    <div className={type==="list"? "headerContainer listMode" : "headerContainer" }>
       <div className="headerList">
           <div className="headerItems Active">
           <FontAwesomeIcon icon={faBed} />
           <span>Stays</span>
           </div>

           <div className="headerItems">
           <FontAwesomeIcon icon={faPlane} />
           <span>Flight</span>
           </div>

           <div className="headerItems">
           <FontAwesomeIcon icon={faCar} />
           <span>Car rentals</span>
           </div>

           <div className="headerItems">
           <FontAwesomeIcon icon={faBed} />
           <span>Attraction</span>
           </div>

           <div className="headerItems">
           <FontAwesomeIcon icon={faTaxi} />
           <span>Airport taxis</span>
           </div>
       </div>
{   
    type === "list" ? "" :<>
      
      <h1 className="headerTitle">A lifetimes of discounts? It's Genius.</h1>

       <p className="headerDescription">
           Get rewarded for your travel - unlock instant savings of 10% or more with a free Lambookng account
       </p>

        <button className="headerButton">Sign in / Register</button>

          <div className='headerSearch'>

            <div className='headerSearchItem'>
              <FontAwesomeIcon icon={faBed} className="headerIcon"/>
              <input 
              type="text"
              placeholder='Where are you going' 
              className='headerSearchInput'
              onChange={(e)=> setDestination(e.target.value)}
              />
            </div>

            <div className='headerSearchItem'>
              <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
              <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'> 
              {`${format( date[0].startDate , "dd/MM/yyyy")} 
                to
                ${format(date[0].endDate , "dd/MM/yyyy") } `} 
               </span>
             { openDate && <DateRange
               editableDateInputs={true}
               onChange={item=> setDate([item.selection])}
               moveRangeOnFirstSelection={false}
               ranges={date}
               minDate={new Date()}
               className="date"
               />}

             
              
            </div>

            <div className='headerSearchItem'>
              <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
              <span  onClick={()=>setOpenOption(!OpenOption)} className='headerSearchText'> {`${Option.adult} adult, ${Option.children} children, ${Option.room} room`}</span>
           {   OpenOption === true  &&        
              <div className="options">
                <div className="optionItems">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button disabled={Option.adult <1} onClick={()=>handleClick("adult","d")} className='optionCounterButton'> - </button>
                    <span  className="optionCounterNumber">{`${Option.adult}`}</span>
                    <button onClick={()=>handleClick("adult","i")} className='optionCounterButton'> + </button>
                  </div>
                </div>

                <div className="optionItems">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button disabled={Option.children <1} onClick={()=>handleClick("children","d")} className='optionCounterButton'> - </button>
                    <span className="optionCounterNumber">{`${Option.children}`}</span>
                    <button onClick={()=>handleClick("children","i")} className='optionCounterButton'> + </button>
                  </div>
                </div>

                <div className="optionItems">
                  <span className="optionText">Room</span>
                  <div className="optionCounter">
                    <button disabled={Option.room <1} onClick={()=>handleClick("room","d")} className='optionCounterButton'> - </button>
                    <span className="optionCounterNumber">{`${Option.room}`}</span>
                    <button onClick={()=>handleClick("room","i")} className='optionCounterButton'> + </button>
                  </div>
                </div>

              </div>  }

            </div>

            <div className='headerSearchItem'>
              <button onClick={handleSearch} className="headerSearchButton">Search</button>
              
            </div>

          </div>  </>}
     </div>
    </div>
  );
}

export default Header;
