import tv from "../../assets/images/feature-1.png";
import download from "../../assets/images/feature-2.png";
import phone from "../../assets/images/feature-3.png";
import children from "../../assets/images/feature-4.png";
import classes from './Features.module.css';
const Features = () => {

    return(
        <>
        <div className={classes.features}>
           <div>
              <h2>Enjoy on your TV.</h2>
              <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,Blu-ray players and more.</p>
           </div>
           <div>
            <img src={tv} alt="Enjoy on your tv"/>
           </div>

           <div>
            <img src={phone} alt="Chidren profile"/>
           </div>

           <div>
              <h2>Watch everywhere.</h2>
              <p>Stream unlimited movies and TV shows on your phone, tablet, laptop and TV</p>
           </div>
          
           <div>
              <h2>Create profiles for children.</h2>
              <p>Send children on adventures with their favourite characters in a space made just for them-free with your membership.</p>
           </div>
           <div>
            <img src={children} alt="Enjoy on your tv"/>
            </div>
          <div>
            <img src={download} alt="Watch everywhere"/>
           </div>
           <div>
              <h2>Download your shows to watch offline</h2>
              <p>save your favourites easily and always have something to watch.</p>
           </div>
          
         </div>
           
        </>
    )
};
export default Features;