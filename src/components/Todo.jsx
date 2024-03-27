import { useState } from "react";
import Draggable from "react-draggable";
import Item from "./Item";

export default function Todo(){
    const [data,setdata]=useState([]);
    const [input,setinput]=useState("");
    const [user,setuser]=useState("all");
    
    


function handleinput(event){
    setinput(event.target.value);
}

function handledelete(index){
    const newdata=data.filter((elem,ind)=>{
        return ind!==index;
    })
    setdata(newdata);
}

function editdata(item,ind){
    setdata(()=>{
        return data.map((element,index)=>{
            if(ind===index){
                return item;
            }
            else{
                return element;
            }
        })
    })
}

    return (
        <Draggable>
        <div className="box">
           <div className="inputhandle">
            <input type="text" placeholder="New task" value={input} onChange={handleinput}/>
            <button type="button" onClick={()=>{
                if(input===""){
                    return;
                }
                setdata((prev)=>{
                return [...prev,input];
            })
            setinput("");
            }}>Add</button>
           </div>
           <div className="userreq">
            <button type="button" style={user==="all"?{backgroundColor:"black"}:{height:"7vh"}} onClick={()=>{
                setuser("all")
            }}>
                All
            </button>
            <button type="button" style={user==="completed"?{backgroundColor:"black"}:{height:"7vh"}} onClick={()=>{
                setuser("completed")
            }}>
               Completed
            </button>
            <button type="button" style={user==="uncompleted"?{backgroundColor:"black"}:{height:"7vh"}} onClick={()=>{
                setuser("uncompleted")
            }}>
                Uncompleted
            </button>
           </div>
           <div className="list">
           
            {data.map((element,index)=>{
                
                return <>
                 <Item element={element} index={index} handledelete={handledelete} editdata={editdata} user={user}/>
               </>
            })}
           
           </div>

           {data.length>2&&<button type="button" className="close" onClick={()=>{setdata([])}} style={{backgroundColor:"red"}}>Delete all</button>}
           
        </div>
        </Draggable>
    )
}