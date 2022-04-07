const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
		URL_BASE:"https://www.swapi.tech/api",
		endPoints: ["people","planets","vehicles"],
		people: JSON.parse(localStorage.setItem("people"))||[],
		planets: JSON.parse(localStorage.setItem("planets"))||[],
		vehicles:JSON.parse(localStorage.setItem("vehicles"))||[],
		},
		actions: {
			fetchItems: async () => {
				let store = getStore();
				if (!store.people.lenght){
					for(let endPoint of store.endPoints) {
						try {
							let response = await fetch (`${store.URL_BASE}/${endPoint}`);
							if (response.ok){
								let data = await response.json();
								data.result.map(async (item)=>{
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
			}
		}
	};
};

export default getState;
