import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext"

export const Register =() =>{

    const { actions,store } = useContext(Context);

    const [register,setRegister] = useState({
        email:"",
        password:""
    });


return (

    <div>
        <input type="text" name="email" onChange={(event)=> setRegister({...register, [event.target.name]: event.target.value})}></input>
        <input type="text" name="password" onChange={(event)=> setRegister({...register, [event.target.name]: event.target.value})}></input>
        <button type="button" onClick={()=> actions.handleRegister(register)}>Register User</button>
    </div>



    );
};

export default Register;