import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"



export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
               
                {store.favorites.lenght <= 0 ? "empty" :

                  store.favorites.map((item) => {

                    return (

                     
                     <li key={item.uid} className="ms-2"> <Link className="dropdown-item" to={`/details/${item.nature}/${item.uid}`}> {item.properties.name}</Link> </li>
                    )
                  })

                }



              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
