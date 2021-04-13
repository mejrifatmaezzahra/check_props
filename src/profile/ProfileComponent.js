import React from 'react';

import PropTypes from "prop-types";

function  Profilec (props) {
    return(
        <div  style={{margin:'auto', textAlign:'center'}}>
        {props.handleName(props.FullName)}
        <h1 style={{color:'blueviolet'}}>I'am  {props.FullName}</h1>
        <h2 style={{color:'blue'}}>i love {props.Bio}</h2>
        <h3 style={{color:'pink'}}> i am {props.Profession}  </h3>
        <div>{props.children}</div>
        
        
    </div>
    )
   }

   export default Profilec;

   Profilec.propTypes = {
    user: PropTypes.shape({
      FullName: PropTypes.string,
      Bio: PropTypes.string,
      Profession: PropTypes.string,
      src: PropTypes.string,
    }),
    handleName: PropTypes.func,
  };
  
  Profilec.defaultProps = {
    FullName: "Undifiend",
    Bio: "Lorem Ipsem ???",
    Profession: "N/A",
  };
  