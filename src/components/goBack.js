
import * as React from "react"
import styled from "styled-components";
import { Link } from 'gatsby'
import { BiLeftArrow } from "react-icons/bi"
import { navigate } from "gatsby";

// import { FaLock } from 'react-icons/fa';
// import { FaTimesCircle } from 'react-icons/fa';
// import Newsletter from '../components/Newsletter'
// import ScrollAnimation from 'react-animate-on-scroll'
import {  RiArrowRightSLine } from "react-icons/ri"

const CustomBox = styled.div`

.themed{margin-top:20px;}





.themed{margin-top:10px;}

  .themed .button {
    --padding: 15px;
    --margin: 20px;
    display: flex;
    // align-items: flex-start;
    padding: var(--padding) calc(var(--padding) * 1);
    border-radius: 12px;
    text-decoration: none;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    font-size: 16px;
    line-height: 1;
    transition: background 0.3s linear;
    }


  .fullarchive .button {
    --padding: 15px;
    --margin: 10px;
    display: flex;
    // align-items: flex-start;
    padding: var(--padding) calc(var(--padding) * 1);
    border-radius: 12px;
    // width:20px;
    // padding:14px;
    text-decoration: none;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    font-size: 16px;
    text-align:left;
    line-height: 1;
    transition: background 0.3s linear;
    }
  


`



   
const GoBack = () => (

<CustomBox style={{}}>

<button className="back" onClick={()=>navigate(-1)}>
        <span className="icon -left" style={{paddingRight:'1rem'}}>
                <BiLeftArrow />
              </span> {" "} Go Back 
              </button>

</CustomBox>
  
)

export default GoBack