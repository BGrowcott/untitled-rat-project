import React from "react";
import './cartoon.css';
import cartoon from "../../images/cartoons/cartoon.png";

function Cartoon() {
    return (
        
        <div className="cartoon">
           
            <div className="testingMore">
  <h1> Search the Trash Can</h1>

</div>

            
            <img src={cartoon} className="cartoon" alt="" />
            <button className="btn btn-secondary">search</button>
           
  </div>
  // working on this page 

             
    );
}

export default Cartoon ;