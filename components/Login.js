import React from 'react'
import "./Login.css"
import {Button} from "@material-ui/core";
import {auth,provider} from "../firebase.js"
import {useStateValue} from "./StateProvider.js"
import {actionTypes} from "./reducer.js"
function Login() {
    const[state,dispatch]=useStateValue()
    const signIn=()=>{
            auth
                .signInWithPopup(provider)
                .then((result) =>{
                    console.log(result)
                    dispatch({
                        type:actionTypes.SET_USER,
                        user:result.user
                    })
                })
                .catch(error =>{
                    alert(error.message)
                })
    }
  return (
    <div className="login">
        <div className="login__container">
            <img src="https://images-platform.99static.com//Iu3_S2uU_rMffo4gBCEukpd6yQE=/500x185:1203x888/fit-in/500x500/99designs-contests-attachments/79/79995/attachment_79995130" alt="" />
       
        <h1>Sign in to Vault</h1>
        <p>By Vault</p>
        <Button onClick={signIn}>Sign in with Google</Button>
        </div>
    </div>
  )
}

export default Login