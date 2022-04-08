import React, {useContext} from "react";
import Card from "../component/Card.jsx"
import "../../styles/home.css";
import {Context} from "../store/appContext"

export const Home = () => {
	const {store} = useContext(Context);
	return (
		<>
		{store.people.map((person) =>{
			return(<Card key={person.uid} item={person} nature="people">

			</Card>)
		})}
			
		</>
	);
		};

