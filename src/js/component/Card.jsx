import React from 'react'

 const Card = ({properties}) => {
return  (
<>
{nature === "people" ?(
    <h1>card de personas</h1>
): nature === "planets" ? ( 
    <h1>soy planet</h1> ): nature === "vehicules" ? (<h1>soy vehiculos</h1>): null}

// {condicion ? sentence : condicion ? } //

{properties.gender}

</>  

);
};

export default Card