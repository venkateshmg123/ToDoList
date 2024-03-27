import Logo from "./Logo";
import { useState } from "react";

export default function Navbar(){
    const [state,setstate]=useState(true);

    function callfunction(){

        
        if(state){
            document.body.id="dark-theme";
        }
        else{
            document.body.id="light-theme";
            
        }

        setstate(!state);
    }


    return (
        <div className="nav">
            <div>
                <Logo/>
            </div>
            <ul>
                <li>To-Do-List</li>
                <li>Name Note</li>
                
                <label className="switch">
            <input type="checkbox" className="input__check" onClick={callfunction}/>
            <span className="slider"></span>
            </label>
            
               
                

            </ul>
        </div>
    )
}