import { useState } from 'react';
import {  Link, useNavigate } from 'react-router-dom';
import classes from "./Entry.module.css"
const Entry = () => {
     
     const  [email,Setemail]=useState("");
     const [message,Setmessage]  = useState('');
    
     const navigate=useNavigate();
      const emailhandler =(e)=> {
       Setemail(e.target.value) ;
    
    
      } 

    

      const emailValidation = (e) =>{
        e.preventDefault();
        const regEx =/[a-zA-Z0-9.%+-]+@[a-z0-9.-][a-z]{2,8}(.[a-z{2,8}])?/g;

        let users= JSON.parse(localStorage.getItem("userData"))
        console.log(users);

        if(!users){
              if(regEx.test(email) ){
         
       
         navigate("/signup",{state:email});

        }else if(!regEx.test(email)&& email===""){
         
         Setmessage("Please enter a valid email")
        
        }else{
         Setmessage("")
        }
        }else{

          const match = users.map(item => item.Email );
          console.log(match);
           const  existingEmail = match.includes(email);
  
            console.log(existingEmail);
          if(regEx.test(email) && existingEmail){
              Setmessage(`Email is already registered.`)
             }
           else{
            navigate("/signup",{state:email});
           }

        }
  
       
         
         
        
        Setemail("")  
      


      }
    
    
    return (
       
        <>
        <div className={classes.header}>
            <div className={classes.heading}>
               <h1>Unlimited movies, TV shows and more. </h1>
               
               
            </div>
            <div className={classes.subhead}>
                <p>Watch anywhere.Cancel anytime.</p>
            </div>

            <div className={classes.signup}>
                 <p>Ready to watch? Enter your mail to create or restart your membership.</p> 
                 <form  >
                    <input type='email' value={email} placeholder='Email address' name='email' onChange={emailhandler}/>
                    
                       <button onClick={emailValidation} >Get Started</button>
                    
                   
                
                 </form>

                 <p>{message}</p> 
            </div>
        </div>
          
        </>
    )
};

export default Entry;