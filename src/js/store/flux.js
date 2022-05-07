const getState = ({ getStore, setStore }) => {
	return {
		store: {
			URL_BASE: "http://127.0.0.1:3000",
			token: localStorage.getItem("token") || "",
			endPoints: ["people", "planets"],
			people: JSON.parse(localStorage.getItem("people")) || [],
			planets: JSON.parse(localStorage.getItem("planets")) || [],
			// vehicles: JSON.parse(localStorage.getItem("vehicles")) || [],
			favorites: JSON.parse(localStorage.getItem("favorites")) || []
		},
		actions: {
			fetchItems: async () => {
				let store = getStore();
				if (!store.people.length | !store.planets.length) {
					try {
						let response = await fetch(`${store.URL_BASE}/people`)
						let data = await response.json()
						let response2 = await fetch(`${store.URL_BASE}/planets`)
						let data2 = await response2.json()
						if (response.ok) {

							for (let sentinel = 0; sentinel < data.length; sentinel++) {



								setStore({
									...store,
									["people"]: [...store["people"], { ...data[sentinel], status: false, nature: "people" }]
								});

							}
							localStorage.setItem("people", JSON.stringify(store["people"]));


						}
						if (response2.ok) {

							for (let sentinel = 0; sentinel < data2.length; sentinel++) {



								setStore({
									...store,
									["planets"]: [...store["planets"], { ...data2[sentinel], status: false, nature: "planets" }]
								});

							}
							localStorage.setItem("planets", JSON.stringify(store["planets"]));

						}
					} catch (error) {
						console.log("These aren't the droids you're looking for", error)
					}
				}
			},

			// 	if (!store.people.length) {
			// 		for (let endPoint of store.endPoints) {
			// 			try {
			// 				let response = await fetch(`${store.URL_BASE}/${endPoint}`);
			// 				if (response.ok) {
			// 					let data = await response.json();
			// 					data.results.map(async (item) => {
			// 						let responseTwo = await fetch(`${store.URL_BASE}/${endPoint}/${item.uid}`);
			// 						let resultTwo = await responseTwo.json();
			// 						setStore({
			// 							...store,
			// 							[endPoint]: [...store[endPoint], {...resultTwo.result, status:false}]
			// 						});
			// 						localStorage.setItem(endPoint, JSON.stringify(store[endPoint]))
			// 					})
			// 				}
			// 			} catch (error) {
			// 				console.log(error)
			// 			}
			// 		}
			// 	}
			// },									

			addFavorites: (id, nature, name) => {
				let store = getStore();
				let exist = store.favorites.find((item) => item.id == id && item.nature == nature && item.name == name);
				console.log(name)
				if (!exist) {
					for (let endPoint of store.endPoints) {
						let newArr = [];
						for (let item of store[endPoint]) {
							if (item.id == id && item.nature == nature && item.name == name) {
								item.status = true;
								setStore({
									...store, favorites: [...store.favorites, { ...item, nature: endPoint }]
								});
							}
							newArr.push(item);
						}
						setStore({ ...store, [endPoint]: newArr, });
						localStorage.setItem("favorites", JSON.stringify(getStore().favorites));
						localStorage.setItem(endPoint, JSON.stringify(store[endPoint]));
						newArr = [];
					}
				} else {
					let newFavorite = store.favorites.filter((item) => item.name != name);
					for (let endPoint of store.endPoints) {
						let newArr = [];

						for (let item of store[endPoint]) {
							if (item.id == id && item.nature == nature && item.name == name) {
								item.status = false;
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
			},

			handleRegister: async (register) => {
				const response = await fetch ("http://127.0.0.1:3000/user", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(register)
				})
				let data = await response.json()
				let store = getStore();
				
				if (response.ok){
					
					setStore({
						...store,token:data.token
					})
					localStorage.setItem("token",data.token)
				}
			},

			handleLogOut: () =>{
				const store = getStore();
				setStore({
					favorites:[]
				})
				localStorage.setItem(
					"favorites",
					JSON.stringify(getStore().favorites)
				);
				setStore({
					...store,
					token:""
				})
				localStorage.setItem("token",JSON.stringify(""))
			},

			handleLogIn: async (login) => {
				const response = await fetch ("http://127.0.0.1:3000/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(login)
				})
				let data = await response.json()
				let store = getStore();
				if (response.ok){
					
					setStore({
						...store,token:data.token
					})
					localStorage.setItem("token",data.token)
				}


			},
			handleFavoriteRemote: async (item) => {
				let store = getStore();
				let fav = {"favorite_name":item.name, "favorite_id":item.nature, "favorite_nature":item.nature, "user_id":2}
				const response = await fetch (`http://127.0.0.1:3000/favorites/${item.nature}/${item.id}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${store.token}`
				},
				body: JSON.stringify(fav)
				
				})
				console.log(fav)
				let data = await response.json()
				if (response.ok){
					console.log("Se agrego favorito")
				}
			},
			handleFavoriteRemoteRemove: async (item) => {
				let store = getStore();
				let fav = {"favorite_name":item.name, "favorite_id":item.nature, "favorite_nature":item.nature, "user_id":2}
				const response = await fetch (`http://127.0.0.1:3000/favorites/${item.nature}/${item.id}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${store.token}`
				},
				body: JSON.stringify(fav)
				
				})
				console.log(fav)
				let data = await response.json()
				if (response.ok){
					console.log("Se elimino favorito")
				}
			},
			handleGetRemoteFavorites: async () => {
				let store = getStore();
				const response = await fetch ("http://127.0.0.1:3000/favorites", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${store.token}`
					}
					})
					let data = await response.json()
					console.log(data)
					
					if (response.ok){
						setStore({
							...store, favorites:data 
						});
						localStorage.setItem("favorites", JSON.stringify(getStore().favorites));
					}
			}
		}
	};
};

export default getState;
