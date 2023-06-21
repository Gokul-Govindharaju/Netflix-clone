import { Link ,useNavigate} from 'react-router-dom';
import classes from './Signin.module.css'

import logo from "../../assets/images/logo.png" ;
import { useState } from 'react';
const Signin = () => {
  const navigate= useNavigate();
  const initialData = {
    email:"",
    password:""
  }
   const [data,setData] = useState(initialData);
   const [errors,setError] = useState({});

 
  const handleUser = (e) => {
    setData({...data,[e.target.name]:[e.target.value]})
  }


  const login= (e) => {
    e.preventDefault();
    setError(validation(data));
  }


  function validation(data){
    let error = {};
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    const regEx =/[a-zA-Z0-9.%+-]+@[a-z0-9.-][a-z]{2,8}(.[a-z{2,8}])?/g;

       
       if(!regEx.test(data.email)&& data.email===""){
         
         error.email="Invalid  email"
        
        }

      if(data.password === ""){
         error.password= "Enter a valid password"
        }
         else if (!password_pattern.test(data.password)){
      error.password ='Invalid password'
      }
      else{
        let users= JSON.parse(localStorage.getItem("userData"))
        console.log(users);
        console.log(data);

       const match = users.filter(item => (item.Email ==data.email && item.Password[0] == data.password[0]))

       console.log(match);
       console.log(typeof(match));
     
       if(match && match.length !== 0){
          navigate("/home")
        console.log('matched');
       }
       else if (match.length===0){

        console.log('unmatch');
        error.message="Email or password is not matched"
       }
      }

      return error;
  }
  return(
    <>
       <div className={classes.backgroun}>
            <div className={classes.log}>
               <Link to="/">
                  <img src={logo} alt="netflix logo"  />
               </Link> 
                
              </div>
          <div className={classes.login}>
              <h3>Sign In</h3>
               <form onSubmit={login}>
                 <input type="email" placeholder="Email address" onChange={handleUser} name='email'/>

                 {errors.email && <p>{errors.email}</p>}
                 <input type="password" placeholder='password' onChange={handleUser} name="password"/>

                 {errors.password && <p>{errors.password}</p>}
                 {errors.message && <p>{errors.message}</p>}
                 <button>Sign In</button>
                 </form>
               

                 <p>New to Netflix?<Link to="/">Sign up</Link></p>
                 
             
          </div>
      </div>

    </>  
  )
};
export  default Signin;