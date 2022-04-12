import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"

const Card = ({ nature, item }) => {
    const { actions } = useContext(Context);
    return (
        <>

            {nature == "people" ?
                (

                    <div className="card-single" >
                        <div><img src={`https://via.placeholder.com/400x200`} className="card-img-top" alt="..." /></div>
                        <h5 className="card-title">{item.properties.name}</h5>
                        <div className="card-description">
                            <p className="card-text">Gender: {item.properties.gender}</p>
                            <p className="card-text">Hair color: {item.properties.hair_color}</p>
                            <p className="card-text">Eyes color: {item.properties.eye_color}</p>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-primary">Learn more!</button>
                            <button type="button" className="btn btn-primary" onClick={() => actions.addFavorites(item._id)}>favorito</button>
                        </div>
                    </div>




                ) :
                nature == "vehicles" ?
                    (


                        <div className="card-single" >
                            <div><img src={`https://via.placeholder.com/400x200`} className="card-img-top" alt="..." /></div>
                            <h5 className="card-title">{item.properties.name}</h5>
                            <div className="card-description">
                                <p className="card-text">Model: {item.properties.model}</p>
                                <p className="card-text">Manufacturer: {item.properties.manufacturer}</p>
                                <p className="card-text">Cost in Credits: {item.properties.cost_in_credits}</p>
                            </div>
                            <div className="card-footer">
                                <button type="button" className="btn btn-primary">Learn more!</button>
                                <button type="button" className="btn btn-primary" onClick={() => actions.addFavorites(item._id, nature)}>favorito</button>
                            </div>
                        </div>


                    ) :
                    nature == "planets" ?
                        (

                            <div className="card-single" >
                                <div><img src={`https://via.placeholder.com/400x200`} className="card-img-top" alt="..." /></div>
                                <h5 className="card-title">{item.properties.name}</h5>
                                <div className="card-description">
                                    <p className="card-text">Climate: {item.properties.climate}</p>
                                    <p className="card-text">Gravity: {item.properties.gravity}</p>
                                    <p className="card-text">Population: {item.properties.population}</p>
                                </div>
                                <div className="card-footer">
                                    <button type="button" className="btn btn-primary">Learn more!</button>
                                    <button type="button" className="btn btn-primary" onClick={() => actions.addFavorites(item._id)}>favorito</button>
                                </div>
                            </div>

                        ) : null
            }

        </>

    );
};

export default Card