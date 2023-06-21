import React, { useState } from "react";
import classes from './Faq.module.css';
const Faq = ({items}) => {
    const [activeIndex,SetactiveIndex]=useState(-1);
    const handleclick = (index) => {
        SetactiveIndex(index === activeIndex ? -1:index);
    };
    return (
        <>
       
          <div className={classes.faq}>
            <h3>Frequently Asked Questions</h3>
             {items.map((item,index) => (
               <div key={item.question} >
                   <button onClick={()=>handleclick(index)}>{item.question}</button>
                   {index === activeIndex &&  <p>{item.answer}</p> }
              </div>
             ))}
          </div>

          </>  
    )      
    
};

export default Faq;