const getState = ({ getStore, setStore }) => {
	return {
		store: {
		URL_BASE:"https://www.swapi.tech/api",
		endPoints: ["people","planets","vehicles"],
		people: JSON.parse(localStorage.getItem("people"))||[],
		planets: JSON.parse(localStorage.getItem("planets"))||[],
		vehicles: JSON.parse(localStorage.getItem("vehicles"))||[],
		},
		actions: {
			fetchItems: async () => {
				let store = getStore();
				if (!store.people.length){
					for(let endPoint of store.endPoints) {
						try {
							let response = await fetch (`${store.URL_BASE}/${endPoint}`);
							if (response.ok){
								let data = await response.json();
								data.results.map(async (item)=>{
									let responseTwo = await fetch (`${store.URL_BASE}/${endPoint}/${item.uid}`);
									let resultTwo = await responseTwo.json();
									setStore({
										...store,
										[endPoint]:[...store[endPoint],resultTwo.result]
									});
									localStorage.setItem(endPoint, JSON.stringify(store[endPoint]))
								})
							}
						}catch(error){
						console.log(error)
						}
					}
				}
			},
			
			addFavorites: (id, item) => {
				let store= getStore();
				console.log(id);
				console.log(item);
				let exist = store.favorites.find((item) =>{
				
					return(
						item._id == id
						)
				})
				if(!exist){
					for(let endPoint of store.endPoints){
						let favorite;
						favorite = store[endPoint].find((item) =>{
							return(
								item._id == id
							)
						})
						if(favorite){
							setStore({
								...store, favorites: [...store.favorites, favorite]
							})
						}
					}
				}else {
					let newFavorite = store.favorites.filter((item) =>{
						return(
							item._id != id
						)
					})
					setStore({
						...store, favorites: newFavorite
					})
				}
			}
		}
	};
};

export default getState;
