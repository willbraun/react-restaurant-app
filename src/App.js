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
		const newList = state.selection;

		item.id = newId;
		newList.push(item);
		setState({selection: newList, uid: newId})
	};
	
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
				<Order state={state}/>
        	</aside>
    	</div>
  	);
}

export default App;
