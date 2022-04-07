import React, {useContext} from "react";
import Card from "../component/Card.jsx"
import "../../styles/home.css";
import {Context} from "../store/appContext"

export const Home = () => {
	const {store} = useContext(Context)
	return (
		<>
		{store.demo.map((item) =>(
			<Card key={item} nature="people">

			</Card>
		))}

		</>
	);
		};

