import { useState } from 'react';
import DATA from './data.js'; 
import MenuList from './components/MenuList';
import Order from './components/Order';
import './App.css';

function App() {
	const [state, setState] = useState({
        selection: [],
        uid: DATA.length,
    });

	const addItem = (item) => {
		const newId = state.uid + 1;
		item.id = newId;

		const newList = state.selection;

		if (!newList.map(existing => existing.name).includes(item.name)) {
			item.quantity = 1;
			newList.push(item);
		}
		else {
			const index = newList.findIndex(existing => existing.name === item.name);
			newList[index].quantity++;
		}

		setState({selection: newList, uid: newId})
	};

	const removeItem = (id) => {
		const newList = state.selection;
		const index = newList.findIndex(item => item.id === id);
		newList.splice(index, 1);
		setState({...state, selection: newList});
	}

	const increaseQuantity = (id) => {
		const newList = state.selection;
		const index = newList.findIndex(item => item.id === id);
		newList[index].quantity++;
		setState({...state, selection: newList});
	}

	const decreaseQuantity = (id) => {
		const newList = state.selection;
		const index = newList.findIndex(item => item.id === id);
		newList[index].quantity === 1 ? removeItem(id) : newList[index].quantity--;
		setState({...state, selection: newList});
	}
	
	return (
    	<div className="App">
			<header>
				<h1>Love-All Ice Cream</h1>
			</header>
			<main className="menu-list-box">
            	<h2>Menu</h2>
            	<MenuList addItem={addItem}/>
        	</main>
			<aside className="order-box">
            	<h2>Order</h2>
				<Order state={state} removeItem={removeItem} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
        	</aside>
    	</div>
  	);
}

export default App;
