import React,{useEffect,useState} from 'react'
import "./Chat.css"
import {useParams} from "react-router-dom"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ChatInput from "./ChatInput.js"
import Message  from "./Message.js"
import db from "../firebase"
function Chat() {
    const {roomId}=useParams();
    const [roomDetails,setRoomDetails] = useState(null)
    const [roomMessages,setRoomMessages] = useState([])
    useEffect(() =>{
        if(roomId) {
            db.collection("rooms").doc(roomId)
            .onSnapshot((snapshot) => (
                setRoomDetails(snapshot.data())
            ))

        }
        db.collection("rooms")
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp','asc')
        .onSnapshot((snapshot) => (
            setRoomMessages(snapshot.docs.map(doc =>doc.data()))
        ))       
    },[roomId]);
      return (
    <div className="chat">
        <div className="chat__header">
            <div className="chat__headerLeft" >
                <h4 className="chat__ChannelName">
                    <strong># {roomDetails?.name}</strong> 
                    <StarBorderIcon/>
                </h4>
            </div>
            <div className="chat__headerRight">
                <p>
                    <InfoOutlinedIcon/> Details
                </p>
            </div>
        </div>
        <div className="chat__messages">
            {roomMessages.map(({message,timestamp,user})=>(
                <Message 
                    message={message}
                    timestamp={timestamp}
                    user={user}
                    // userimage={userImage}
                />
            ))}
        </div>
        <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  )
}

export default Chat