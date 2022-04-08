import React from 'react'

 const Card = ({nature,item}) => {
return  (
<>

{nature == "people"?
    (<h1>{item.properties.name}</h1>):
    nature == "vehicles"?
    (<h1>soy vehicles</h1>):
    nature == "planets"?
    (<h1>soy planets</h1>):null
}

</>  

);
};

export default Card