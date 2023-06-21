
import  classes from './Home.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import {useDispatch,useSelector} from 'react-redux';
import { useEffect } from "react";
import { fetchNetflixOriginals, fetchUpcoming, fetchpopular, fetchtoprated } from "../../store/Movieslice";
import MoviesCards from "./Moveiscards";
import Slider from 'react-slick';
import { Settings } from '../../assets/Setting';


const Home = () => {
     const Popular = useSelector((state) => state.netflix.movies)
     console.log(Popular);
     const movie = Popular[Math.floor(Math.random()* Popular.length)]
     

     const upcoming = useSelector((state) => state.netflix.upmovie)
    console.log(upcoming);

    let renderupcoming=(upcoming.map((movie,index) =>(
   
      <MoviesCards key={index} data={movie}/>
   
    )));
     const top = useSelector((state) => state.netflix.topmovie)
    

    let rendertop=(top.map((movie,index) =>(
   
      <MoviesCards key={index} data={movie}/>
   
    )));
     const origin = useSelector((state) => state.netflix.original)
    

    let renderoriginal=(origin.map((movie,index) =>(
   
      <MoviesCards key={index} data={movie}/>
   
    )));
   
    

      const dispatch = useDispatch();



      useEffect(() => {
        //  dispatch(fetchGenres());
         dispatch(fetchpopular());
         dispatch(fetchUpcoming());
         dispatch(fetchtoprated());
         dispatch(fetchNetflixOriginals())
      },[dispatch])
    return (
        
    <>
      
    <div className={classes.hero} >
     <Link to="/" className={classes.logout}>logout</Link>
        <div className={classes.home}>
       
        </div>
        
       <div className={classes.heroimg}>
       
         <div className={classes.bgimg}></div>
         
          <img className={classes.mainimg} src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
       </div>

      <div className={classes.details}>
     
         <h1 className={classes.movietitle}>{movie?.title}</h1>
       <div className={classes.but}>
        <button className={classes.playbutton}><span><FontAwesomeIcon icon={faPlay} /></span>Play</button>
        <button className={classes.watchbutton}>Watch Later</button>
        
      </div>
      <p className={classes.releasedate}>ReleaseDate:{movie?.release_date}</p>
    </div> 

 
    <div className={classes.up}>

     <h3>Upcoming movies</h3> 
   {
      <Slider {...Settings}>{renderupcoming}</Slider>
   
   }
       
  
    
</div>
    <div className={classes.up}>

     <h3>Top_rated movies</h3> 
   {
      <Slider {...Settings}>{rendertop}</Slider>
   
   }
       
  
    
</div>
    <div className={classes.up}>

     <h3>Action-movies</h3> 
   {
      <Slider {...Settings}>{renderoriginal}</Slider>
   
   }
       
  
    
</div>
    
 </div>



 
    </>
    )
};

export default Home;