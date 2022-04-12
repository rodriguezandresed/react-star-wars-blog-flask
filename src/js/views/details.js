import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext"

export const Details = () => {
const params = useParams();
const {store} = useContext(Context);

const {nature, uid} = params;
console.log(params);
const getDetails = () => {
    const detail = store[nature].find(item => item.uid === uid);
    if (detail){
        console.log(detail);
    }

}

useEffect(()=>{
    getDetails()
}, []);

// const character = store.people.find(c => c.uid === id);
return (

<h1>soy details  </h1>


    
);


}