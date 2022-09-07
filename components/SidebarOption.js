import React from 'react'
import "./SidebarOption.css"
import {useNavigate} from "react-router-dom"
import db from "../firebase.js"

function SidebarOption({Icon,title,id,addChannelOption}) {
   const navigate = useNavigate();
  const selectChannel=()=>
  {

    if(id){
        navigate(`/room/${id}`)
    }
    else {
      navigate(title)
    }
    // window.location.reload(true);

  }

  const addChannel=()=>{
    const channelName = prompt('enter a channel name');
    if(channelName){
      db.collection('rooms').add({
        name:channelName
      })
    }
  }
  return (
    <div className="sidebarOption" onClick={addChannelOption ? addChannel :selectChannel}>
        {Icon && <Icon className="sidebarOption__icon"/>}
        {Icon ?(
            <h3>{title}</h3>
        ):(
            <h3 className="sidebarOption__channel">
                <span className="sidebarOption__hash">#</span>{title}
            </h3>
        )}
    </div>
  );
}

export default SidebarOption