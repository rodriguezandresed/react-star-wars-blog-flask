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
                        <h5 className="card-title text-center pt-2">{item.properties.name}</h5>
                        <div className="card-description text-center">
                            <p className="card-text">Gender: {item.properties.gender}</p>
                            <p className="card-text">Hair color: {item.properties.hair_color}</p>
                            <p className="card-text">Eyes color: {item.properties.eye_color}</p>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <Link type="button" className="btn btn-outline-primary " to={`/details/people/${item.uid}`}>Learn More! </Link>

            
                            <button type="button" className={`btn btn-outline-warning text-favorite ${color === "favorited" ? "active" : ""} `} onClick={() => {actions.addFavorites(item._id); setColor("favorited");} }>{iconHeart}</button>
                           
                        </div>
                    </div>


                ) :
                nature == "vehicles" ?
                    (


                        <div className="card-single" >
                            <div><img src={`https://via.placeholder.com/400x200`} className="card-img-top" alt="..." /></div>
                            <h5 className="card-title text-center pt-2 ">{item.properties.name}</h5>
                            <div className="card-description text-center">
                                <p className="card-text">Model: {item.properties.model}</p>
                                <p className="card-text">Manufacturer: {item.properties.manufacturer}</p>
                                <p className="card-text">Cost in Credits: {item.properties.cost_in_credits}</p>
                            </div>
                            <div className="card-footer d-flex justify-content-between">

                                <Link type="button" className="btn btn-outline-primary" to={`/details/vehicles/${item.uid}`}> Learn More!</Link>
                                <button type="button" className="btn btn-outline-warning text-favorite" onClick={() => actions.addFavorites(item._id, nature)}>{iconHeart}</button>
                            </div>
                        </div>


                    ) :
                    nature == "planets" ?
                        (

                            <div className="card-single" >
                                <div><img src={`https://via.placeholder.com/400x200`} className="card-img-top" alt="..." /></div>
                                <h5 className="card-title text-center pt-2">{item.properties.name}</h5>
                                <div className="card-description text-center">
                                    <p className="card-text">Climate: {item.properties.climate}</p>
                                    <p className="card-text">Gravity: {item.properties.gravity}</p>
                                    <p className="card-text">Population: {item.properties.population}</p>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <Link type="button" className="btn btn-outline-primary" to={`/details/planets/${item.uid}`}> Learn More!</Link>
                                    <button type="button" className="btn btn-outline-warning text-favorite" onClick={() => actions.addFavorites(item._id)}>{iconHeart}</button>
                                </div>
                            </div>

                        ) : null
            }

        </>

    );
};

export default Card