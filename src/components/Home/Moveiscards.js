import React from "react";
import classes from"./Moviescards.module.css";
const MoviesCards = (props) =>{
   console.log(props);
//    console.log(props);
   const love=props;
   console.log(love);
   const k = love.data;
   console.log(k);
//    console.log(typeof love);
//   console.log("kjhgfd");

//  const l= k.map((m)=>{
//    console.log(m.original_title);
//   })

  
    return(
       <>
          <div className={classes.dat}>
         
      
             
                    <img src={`https://image.tmdb.org/t/p/original/${k?.backdrop_path}`} alt="movie " />
                  <div className={classes.name}> <h4>{k.original_title}</h4> </div> 
                    
             
               
   
            
           
                
          </div>
       </>
    )
}

export default MoviesCards;