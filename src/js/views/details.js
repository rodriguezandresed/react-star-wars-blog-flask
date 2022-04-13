import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext"

export const Details = () => {
const params = useParams();
const {store} = useContext(Context);
const [detailLocal, setDetailLocal] = useState({});

const {nature, uid} = params;
const getDetails = () => {
    const detail = store[nature].find(item => item.uid === uid);
    
    if (detail){
        setDetailLocal(detail.properties);   
      
    }

}
useEffect(()=>{
    getDetails()
}, []);



return (

<div className="container">
<div className="row">
<div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`https://via.placeholder.com/400x200`} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{detailLocal.name}</h5>
        <p className="card-text">Gender: {detailLocal.gender}</p>
        <p className="card-text">Hair color: {detailLocal.hair_color}</p>
        <p className="card-text">Eyes color: {detailLocal.eye_color}</p> 
      </div>
    </div>
  </div>
</div> 

</div>

<div className="row line"></div>
<div className="row row-cols-6">
    <div className="col">Column</div>
    <div className="col">Column</div>
    <div className="col">Column</div>
    <div className="col">Column</div>
    <div className="col">Column</div>
    <div className="col">Column</div>
  </div>


</div>



    
);


}