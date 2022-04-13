import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import starWarsLogo from '../../img/Star-Wars-Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const iconTrash = <FontAwesomeIcon icon={faTrash} />



export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid d-flex justify-content-between">
        <Link className="navbar-brand" to="/"> <img src={starWarsLogo} alt="logo" width="10%" heigh="auto"  /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown ">
              <a className="nav-link dropdown-toggle bg-primary text-light rounded" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Favorites <span className="favorite-text bg-secondary">({store.favorites.length})</span>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                {store.favorites.length <= 0 ? "empty" :

                  store.favorites.map((item) => {

                    return (


                      <li key={item.uid} className="ms-2 d-flex">  <Link  onClick={() => window.location.href=`/details/${item.nature}/${item.uid}`} className="dropdown-item" to={`/details/${item.nature}/${item.uid}`}>  {item.properties.name} </Link> <span onClick={() => actions.addFavorites(item._id)} >{iconTrash}</span> </li>
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
