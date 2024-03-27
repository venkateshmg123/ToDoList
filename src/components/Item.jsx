import { useState } from "react";
import Popup from "reactjs-popup";


export default function Item({element,index,handledelete,editdata,user}){
    const [colorstate,setcolorstate]=useState(false);
    const [color,changecolor]=useState("#009688");
    const [state,setstate]=useState(false);
    const [edit,setedit]=useState(false);
    const [edittext,setedittext]=useState(element);

    function handlechange(event){
      setedittext(event.target.value);
    }

    return <>
    {user==="all"&&!edit&&<div className="item" key={index+1} style={colorstate?{backgroundColor:color}:{backgroundColor:"#009688"}}>
                <p style={state?{textDecoration:"line-through"}:{textDecoration :"none"}}>{element}</p>
                <div className="buttons">
                <button type="button" onClick={()=>{
                    setstate(!state);
                }}>
                    {!state&&<img src="src/assets/unchecked.png" alt="" />}
                    {state&&<img src="src/assets/icons8-vote-80.png" alt="" />}
                </button>
                <button type="button" onClick={()=>{
                    setedit(!edit);
                }}>
                    <img src="src/assets/icons8-edit-24.png" alt="" />
                </button>
                <button type="button" onClick={()=>{
                  setcolorstate(false);
                  handledelete(index);
                  setstate(false);
                }}>
                    <img src="src/assets/icons8-delete-16.png" alt="" />
                </button>
                <Popup
          trigger={
            <button type="button" className="button">
                    
            <img src="src/assets/icons8-paint-50.png" alt="" />
        </button>
          }
          position={["bottom left"]}
          closeOnDocumentClick
          arrowStyle={{ color: "#2a2e2d" }}
        >
          <div className="popover-content"><div className="grid-container">
      <div className="grid-item red" onClick={()=>{
        setcolorstate(true);
        changecolor("#EB1412")
      }}></div>
      <div className="grid-item pink" onClick={()=>{
        setcolorstate(true);
        changecolor("#E91E62")
      }}></div>
      <div className="grid-item purple" onClick={()=>{
        setcolorstate(true);
        changecolor("#673AB6")
      }}></div>  
      <div className="grid-item dark-green" onClick={()=>{
        setcolorstate(true);
        changecolor("#009688")
      }}></div>
      <div className="grid-item green" onClick={()=>{
        setcolorstate(true);
        changecolor("#4CAF4F")
      }}></div>
      <div className="grid-item blue" onClick={()=>{
        setcolorstate(true);
        changecolor("#00BCD4")
      }}></div>  
      <div className="grid-item orange" onClick={()=>{
        setcolorstate(true);
        changecolor("#FF5721")
      }}></div>
      <div className="grid-item grey" onClick={()=>{
        setcolorstate(true);
        changecolor("#607D8A")
      }}></div>
      <div className="grid-item brown" onClick={()=>{
        setcolorstate(true);
        changecolor("#795548")
      }}></div>  
    </div>
    </div>
        </Popup>
               
                </div>
               </div>}

    {user==="completed"&&state&&!edit&&<div className="item" key={index} style={colorstate?{backgroundColor:color}:{backgroundColor:"#009688"}}>
                <p style={state?{textDecoration:"line-through"}:{textDecoration :"none"}}>{element}</p>
                <div className="buttons">
                <button type="button" onClick={()=>{
                    setstate(!state);
                }}>
                    {!state&&<img src="src/assets/unchecked.png" alt="" />}
                    {state&&<img src="src/assets/icons8-vote-80.png" alt="" />}
                </button>
                <button type="button" onClick={()=>{
                    setedit(!edit);
                }}>
                    <img src="src/assets/icons8-edit-24.png" alt="" />
                </button>
                <button type="button" onClick={()=>{
                  setcolorstate(false);
                  handledelete(index);
                  setstate(false);
                }}>
                    <img src="src/assets/icons8-delete-16.png" alt="" />
                </button>
                <Popup
          trigger={
            <button type="button" className="button">
                    
            <img src="src/assets/icons8-paint-50.png" alt="" />
        </button>
          }
          position={["bottom left"]}
          closeOnDocumentClick
          arrowStyle={{ color: "#2a2e2d" }}
        >
          <div className="popover-content"><div className="grid-container">
      <div className="grid-item red" onClick={()=>{
        setcolorstate(true);
        changecolor("#EB1412")
      }}></div>
      <div className="grid-item pink" onClick={()=>{
        setcolorstate(true);
        changecolor("#E91E62")
      }}></div>
      <div className="grid-item purple" onClick={()=>{
        setcolorstate(true);
        changecolor("#673AB6")
      }}></div>  
      <div className="grid-item dark-green" onClick={()=>{
        setcolorstate(true);
        changecolor("#009688")
      }}></div>
      <div className="grid-item green" onClick={()=>{
        setcolorstate(true);
        changecolor("#4CAF4F")
      }}></div>
      <div className="grid-item blue" onClick={()=>{
        setcolorstate(true);
        changecolor("#00BCD4")
      }}></div>  
      <div className="grid-item orange" onClick={()=>{
        setcolorstate(true);
        changecolor("#FF5721")
      }}></div>
      <div className="grid-item grey" onClick={()=>{
        setcolorstate(true);
        changecolor("#607D8A")
      }}></div>
      <div className="grid-item brown" onClick={()=>{
        setcolorstate(true);
        changecolor("#795548")
      }}></div>  
    </div>
    </div>
        </Popup>
               
                </div>
               </div>}        

     {user==="uncompleted"&&!state&&!edit&&<div className="item" key={index} style={colorstate?{backgroundColor:color}:{backgroundColor:"#009688"}}>
                <p style={state?{textDecoration:"line-through"}:{textDecoration :"none"}}>{element}</p>
                <div className="buttons">
                <button type="button" onClick={()=>{
                    setstate(!state);
                }}>
                    {!state&&<img src="src/assets/unchecked.png" alt="" />}
                    {state&&<img src="src/assets/icons8-vote-80.png" alt="" />}
                </button>
                <button type="button" onClick={()=>{
                    setedit(!edit);
                }}>
                    <img src="src/assets/icons8-edit-24.png" alt="" />
                </button>
                <button type="button" onClick={()=>{
                  setcolorstate(false);
                  handledelete(index);
                  setstate(false);
                }}>
                    <img src="src/assets/icons8-delete-16.png" alt="" />
                </button>
                <Popup
          trigger={
            <button type="button" className="button">
                    
            <img src="src/assets/icons8-paint-50.png" alt="" />
        </button>
          }
          position={["bottom left"]}
          closeOnDocumentClick
          arrowStyle={{ color: "#2a2e2d" }}
        >
          <div className="popover-content"><div className="grid-container">
      <div className="grid-item red" onClick={()=>{
        setcolorstate(true);
        changecolor("#EB1412")
      }}></div>
      <div className="grid-item pink" onClick={()=>{
        setcolorstate(true);
        changecolor("#E91E62")
      }}></div>
      <div className="grid-item purple" onClick={()=>{
        setcolorstate(true);
        changecolor("#673AB6")
      }}></div>  
      <div className="grid-item dark-green" onClick={()=>{
        setcolorstate(true);
        changecolor("#009688")
      }}></div>
      <div className="grid-item green" onClick={()=>{
        setcolorstate(true);
        changecolor("#4CAF4F")
      }}></div>
      <div className="grid-item blue" onClick={()=>{
        setcolorstate(true);
        changecolor("#00BCD4")
      }}></div>  
      <div className="grid-item orange" onClick={()=>{
        setcolorstate(true);
        changecolor("#FF5721")
      }}></div>
      <div className="grid-item grey" onClick={()=>{
        setcolorstate(true);
        changecolor("#607D8A")
      }}></div>
      <div className="grid-item brown" onClick={()=>{
        setcolorstate(true);
        changecolor("#795548")
      }}></div>  
    </div>
    </div>
        </Popup>
               
                </div>
               </div>}            
    

     {edit&&<div className="edit"><input value={edittext} onChange={handlechange} type="text"/><button type="button" onClick={()=>{
      setedit(!edit);
      editdata(edittext,index);
     }}>Edit</button></div>}          
     
    </>
}