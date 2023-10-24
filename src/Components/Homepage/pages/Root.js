//conatins Header navigation, applied to all pages
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Root =()=>{
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet> 
            
        </div>
        // outlet should be rednered in parent comp
        //seen as the placeholder for the nested childre nroutes 
    )
}

export default Root;