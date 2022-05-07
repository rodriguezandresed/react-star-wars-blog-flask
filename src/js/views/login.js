import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext"

export const LogIn =() =>{

    const { actions,store } = useContext(Context);
    const [login,setLogin] = useState({
        email:"",
        password:""
    });


return (

    <div>
        <input type="text" name="email" onChange={(event)=> setLogin({...login, [event.target.name]: event.target.value})}></input>
        <input type="text" name="password" onChange={(event)=> setLogin({...login, [event.target.name]: event.target.value})}></input>
        <button type="button" onClick={()=> actions.handleLogIn(login)}>Log In</button>
    </div>



    );
};

export default LogIn;