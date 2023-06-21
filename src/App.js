import Header from './components/Header/Header';
import './App.css';

import Home from './components/Home/Home';

import Signup from './components/Signup/Signup';
import Signin from './components/Signup/Signin';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {path:'/',element:<Header/>},
  {path:'/signup',element:<Signup/>},
  {path:'/signin',element:<Signin/>},
  {path:'/home',element:<Home/>},

])
function App() {
  return (
    <div className="App">
       <RouterProvider router={router}></RouterProvider>
       

      
       
    </div>
  );
}

export default App;
