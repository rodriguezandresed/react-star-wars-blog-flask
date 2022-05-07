import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const iconHeart = <FontAwesomeIcon icon={faHeart} />


const Card = ({ nature, item }) => {
    const { actions,store } = useContext(Context);
    const [color, setColor] = useState("");
    return (
        <>

            {nature == "people" ?
                (

                    <div className="card-single" >
                        <div><img src={`https://via.placeholder.com/400x200`} className="card-img-top" alt="..." /></div>
                        <h5 className="card-title text-center pt-2">{item.name}</h5>
                        <div className="card-description text-center">
                            <p className="card-text">Gender: {item.gender}</p>
                            <p className="card-text">Hair color: {item.hair_color}</p>
                            <p className="card-text">Eyes color: {item.eye_color}</p>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <Link type="button" className="btn btn-outline-primary " to={`/details/people/${item.id}`}>Learn More! </Link>

            
                            <button type="button" className={`btn btn-outline-warning text-favorite ${item.status === true ? "active" : ""} `} onClick={() => {actions.addFavorites(item.id, item.nature, item.name); setColor("favorited"), actions.handleFavoriteRemote(item);} }>{iconHeart}</button>
                           
                        </div>
                    </div>


                ) :
                nature == "vehicles" ?
                    (

                        <h1>hola</h1>
                        // <div className="card-single" >
                        //     <div><img src={`https://via.placeholder.com/400x200`} className="card-img-top" alt="..." /></div>
                        //     <h5 className="card-title text-center pt-2 ">{item.name}</h5>
                        //     <div className="card-description text-center">
                        //         <p className="card-text">Model: {item.model}</p>
                        //         <p className="card-text">Manufacturer: {item.manufacturer}</p>
                        //         <p className="card-text">Cost in Credits: {item.cost_in_credits}</p>
                        //     </div>
                        //     <div className="card-footer d-flex justify-content-between">

                        //         <Link type="button" className="btn btn-outline-primary" to={`/details/vehicles/${item.id}`}> Learn More!</Link>
                        //         <button type="button" className={`btn btn-outline-warning text-favorite ${item.status === true ? "active" : ""} `} onClick={() => actions.addFavorites(item._id, nature)}>{iconHeart}</button>
                        //     </div>
                        // </div>


                    ) :
                    nature == "planets" ?
                        (

                            <div className="card-single" >
                                <div><img src={`https://via.placeholder.com/400x200`} className="card-img-top" alt="..." /></div>
                                <h5 className="card-title text-center pt-2">{item.name}</h5>
                                <div className="card-description text-center">
                                    <p className="card-text">Climate: {item.climate}</p>
                                    <p className="card-text">Gravity: {item.gravity}</p>
                                    <p className="card-text">Population: {item.population}</p>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <Link type="button" className="btn btn-outline-primary" to={`/details/planets/${item.id}`}> Learn More!</Link>
                                    <button type="button" className={`btn btn-outline-warning text-favorite ${item.status === true ? "active" : ""} `} onClick={() => {actions.addFavorites(item.id, item.nature, item.name); setColor("favorited"), actions.handleFavoriteRemote(item);} }>{iconHeart}</button>
                                </div>
                            </div>

                        ) : null
            }

        </>

    );
};

export default Card