import React, {useContext} from "react";
import Card from "../component/Card.jsx"
import "../../styles/home.css";
import {Context} from "../store/appContext"

export const Home = () => {
	const {store} = useContext(Context)
	return (
		<>
	<Card nature="planets">

</Card>
		</>
	);
		};

