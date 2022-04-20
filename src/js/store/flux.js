const getState = ({ getStore, setStore }) => {
	return {
		store: {
			URL_BASE: "https://www.swapi.tech/api",
			endPoints: ["people", "planets", "vehicles"],
			people: JSON.parse(localStorage.getItem("people")) || [],
			planets: JSON.parse(localStorage.getItem("planets")) || [],
			vehicles: JSON.parse(localStorage.getItem("vehicles")) || [],
			favorites: JSON.parse(localStorage.getItem("favorites")) || []
		},
		actions: {
			fetchItems: async () => {
				let store = getStore();
				if (!store.people.length) {
					for (let endPoint of store.endPoints) {
						try {
							let response = await fetch(`${store.URL_BASE}/${endPoint}`);
							if (response.ok) {
								let data = await response.json();
								data.results.map(async (item) => {
									let responseTwo = await fetch(`${store.URL_BASE}/${endPoint}/${item.uid}`);
									let resultTwo = await responseTwo.json();
									setStore({
										...store,
										[endPoint]: [...store[endPoint], {...resultTwo.result, status:false}]
									});
									localStorage.setItem(endPoint, JSON.stringify(store[endPoint]))
								})
							}
						} catch (error) {
							console.log(error)
						}
					}
				}
			},									

			addFavorites: (id) => {
				let store = getStore();
				let exist = store.favorites.find((item) => item._id == id);
				if (!exist) {
					for (let endPoint of store.endPoints) {
						let newArr =[];
						for (let item of store[endPoint]){
							if (item._id == id){
								item.status = true;
							setStore({
								...store, favorites: [...store.favorites, { ...item, nature: endPoint}]
							});
							}
							newArr.push(item);
						}
							setStore({...store,[endPoint]: newArr,});
							localStorage.setItem("favorites",JSON.stringify(getStore().favorites));
							localStorage.setItem(endPoint, JSON.stringify(store[endPoint]));
							newArr=[];
					}
				} else {
					let newFavorite = store.favorites.filter((item) => item._id != id);
					for (let endPoint of store.endPoints){
						let newArr = [];
						for (let item of store[endPoint]){
							if (item._id == id) {
								item.status=false;
								setStore({
									...store, favorites: newFavorite
								});
							}
							newArr.push(item);
						}
						setStore({
							...store, [endPoint]: newArr,
						});
						localStorage.setItem(
							"favorites",
							JSON.stringify(getStore().favorites)
						);
						localStorage.setItem(endPoint, JSON.stringify(store[endPoint]));
						newArr = [];
					}

				}
			}
		}
	};
};

export default getState;
