import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext"

export const Details = () => {
    const params = useParams();
    const { store } = useContext(Context);
    const [detailLocal, setDetailLocal] = useState({});

    const { nature, id } = params;
    const getDetails = () => {
        
        const detail = store[nature].find(item => item.id === store[nature][id].id-1);
        console.log(detail)
        if (detail) {
            
            setDetailLocal(detail);

        }

    }
    useEffect(() => {
        getDetails()
    }, []);



    return (

        <>
            {nature == "people" ?
                (

                    <div className="container ">
                        <div className="row">
                            <div className="card mb-3 border-0 pt-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={`https://via.placeholder.com/400x200`} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body ">
                                            <h1 className="card-title d-flex justify-content-center">{detailLocal.name}</h1>
                                            <p className="card-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut auctor turpis, dapibus egestas nunc. Nunc non diam euismod, pharetra lectus sed, blandit massa. Aliquam non tincidunt velit. Cras lacinia molestie ligula et consequat. Morbi odio turpis, egestas at porttitor eget, lobortis eu mi. Nulla consequat odio quis risus egestas, sed lobortis urna finibus. Morbi semper euismod dui, et interdum massa auctor quis.  </p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row line "></div>
                        <div className="row row-cols-6 ">
                            <div className="col col-text text-center"><p> Birth Year</p><p>{detailLocal.birth_year}</p> </div>
                            <div className="col col-text text-center"> <p>Gender</p> <p>{detailLocal.gender}</p></div>
                            <div className="col col-text text-center"><p>Hair Color</p><p>{detailLocal.hair_color}</p></div>
                            <div className="col col-text text-center"><p>Eye Color </p><p>{detailLocal.eye_color}</p></div>
                            <div className="col col-text text-center"><p>Height</p> <p>{detailLocal.height}</p></div>
                            <div className="col col-text text-center"><p>Mass</p> <p>{detailLocal.mass}</p></div>
                        </div>


                    </div>




                ) :
                nature == "vehicles" ?
                    (


                        <div className="container">
                            <div className="row">
                                <div className="card mb-3 border-0 pt-3">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={`https://via.placeholder.com/400x200`} className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h1 className="card-title d-flex justify-content-center">{detailLocal.name}</h1>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut auctor turpis, dapibus egestas nunc. Nunc non diam euismod, pharetra lectus sed, blandit massa. Aliquam non tincidunt velit. Cras lacinia molestie ligula et consequat. Morbi odio turpis, egestas at porttitor eget, lobortis eu mi. Nulla consequat odio quis risus egestas, sed lobortis urna finibus. Morbi semper euismod dui, et interdum massa auctor quis.</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="row line"></div>
                            <div className="row row-cols-6">
                                <div className="col col-text text-center"><p>Model</p> <p>{detailLocal.model}</p></div>
                                <div className="col col-text text-center"><p>Manufacturer</p> <p>{detailLocal.manufacturer}</p></div>
                                <div className="col col-text text-center"><p>Class</p> <p>{detailLocal.vehicle_class}</p></div>
                                <div className="col col-text text-center"><p>Cost In Credits</p> <p>{detailLocal.cost_in_credits}</p></div>
                                <div className="col col-text text-center"><p>Max Atmosphering Speed</p> <p>{detailLocal.max_atmosphering_speed}</p></div>
                                <div className="col col-text text-center"><p>Length</p> <p>{detailLocal.length}</p></div>
                            </div>


                        </div>


                    ) :
                    nature == "planets" ?
                        (

                            <div className="container">
                                <div className="row">
                                    <div className="card mb-3 border-0 pt-3">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={`https://via.placeholder.com/400x200`} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h1 className="card-title d-flex justify-content-center">{detailLocal.name}</h1>
                                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut auctor turpis, dapibus egestas nunc. Nunc non diam euismod, pharetra lectus sed, blandit massa. Aliquam non tincidunt velit. Cras lacinia molestie ligula et consequat. Morbi odio turpis, egestas at porttitor eget, lobortis eu mi. Nulla consequat odio quis risus egestas, sed lobortis urna finibus. Morbi semper euismod dui, et interdum massa auctor quis.</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="row line"></div>
                                <div className="row row-cols-6 ">
                                    <div className="col col-text text-center"><p>Climate</p> <p>{detailLocal.climate}</p></div>
                                    <div className="col col-text text-center"><p>Gravity</p> <p>{detailLocal.gravity}</p></div>
                                    <div className="col col-text text-center"><p>Population</p> <p>{detailLocal.population}</p></div>
                                    <div className="col col-text text-center"><p>Rotation Period</p> <p>{detailLocal.rotation_period}</p></div>
                                    <div className="col col-text text-center"><p>Terrain</p> <p>{detailLocal.terrain}</p></div>
                                    <div className="col col-text text-center"><p>Surface of Water</p><p>{detailLocal.surface_water}</p></div>
                                </div>


                            </div>

                        ) : null
            }







        </>

    );


}