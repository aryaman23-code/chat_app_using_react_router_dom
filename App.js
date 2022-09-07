import React,{useState} from "react"
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import Login from './components/Login'
import { useStateValue } from "./components/StateProvider"
import './App.css';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

function App() {
  
  const [{user},dispatch] = useStateValue();

  return (
    <div className="app">
    <Router>
    {!user ? (
      <Login>No user logged in</Login>
    ):(
      <>
      <Header />
      <div className="app__body">
         {/* Sidebar */}
         <Sidebar />
              <Routes>
                <Route path="/room/:roomId" element={<Chat />} />
                
                <Route path="/" />
               
              </Routes>
              {/* React router => chat screen */}
      </div>
      </>
    )}
    
    </Router>
    </div>
  );
}

export default App;
