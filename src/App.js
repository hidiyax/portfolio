
import './App.css';
import FrontBox from "./Components/Homepage/FrontBox"; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from "./Components/Homepage/pages/Root"

import Portfolio from './Components/Homepage/pages/Portfolio';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children : [
        {index:true, element:<FrontBox></FrontBox>},
        {path: "projects", element:<Portfolio></Portfolio>}
        
      ]
    }
    
  ])

 

  return (
   
       <div>
       <RouterProvider router={router} />
        
        
       </div> 
  );
}

export default App;
