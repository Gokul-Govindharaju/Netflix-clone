import { useState } from "react";
import logo from "../../assets/images/logo.png" ;
import classes from "./signup.module.css";
import { useLocation ,useNavigate,Link} from "react-router-dom";


const Signup = () => {
 

  const location = useLocation();
  const data=location.state;
  // console.log(data);
  // console.log(typeof(data));

  const navigate=useNavigate();
  const initialValues = {email:data,password:'',
confirm_password:'',};


  const [values,setValues] = useState(initialValues);
  const [errors,setErrors]  = useState({});

 

  console.log(typeof(values.password));
// values.email=data
// handle password values
  const handlepassword = (e) =>{
     setValues({...values,[e.target.name]: [e.target.value]})
  };


  // submit function
  const handlesubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
  

  };


  // password validation 
  function  Validation(values){
     let error = {};
     const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

     if(values.password === ""){
      error.password= "Enter a valid password"
     }
     else if (!password_pattern.test(values.password)){
       error.password ='Invalid password'
     }
     if( values.confirm_password === "" || String(values.confirm_password )!== String( values.password)){
      error.confirm_password ="password not matched"
     }else{
      
      const userDetails = {
         Email: values.email,
         Password:values.password
      }

      // console.log(userDetails);
      
      let user = JSON.parse(localStorage.getItem("userData"))

      if(!user){
        const userData = [];
        userData.push(userDetails);
        localStorage.setItem("userData",JSON.stringify(userData))
      }
      else{
        user.push(userDetails);
        localStorage.setItem("userData",JSON.stringify(user))
      }
      
      navigate("/signin")
     }
       
    
     return error;
     
  };


    return (
        <>
         <div className={classes.container}>
           <div className={classes.navbar}>
              <div>
                <img src={logo} alt="netflix logo"  />
              </div>
              <div>
                <Link to="/signin">Sign In</Link>
              </div>
            </div>


            <div className={classes.password}>
                <p>Next Step</p>
                <h3>Create a password to start your membership</h3>
                <p>just a few steps and you are done! </p>

                <p>{data}</p>
                <form onSubmit={handlesubmit}>
                    <input type="password" placeholder="create password" onChange={handlepassword} name="password"/>
        
                    {errors.password && <p>{errors.password}</p>}

                    <input type="  password" placeholder="confirm password"  onChange={handlepassword} name="confirm_password"/>

                    {errors.confirm_password && <p>{errors.confirm_password}</p>}
                    <button >Sign up</button>
                </form>
            </div>
        </div>   
        </>
    )
}

export default Signup;