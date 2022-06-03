import MenuList from './components/MenuList';
import Order from './components/Order';
import './App.css';

function App() {
  	return (
    	<div className="App">
			<header>
				<h1>Love-All Ice Cream</h1>
			</header>
			<main className="menu-list-box">
            	<h2>Menu</h2>
            	<MenuList />
        	</main>
			<aside className="order-box">
            	<h2>Order</h2>
				<Order />
        	</aside>
    	</div>
  	);
}

export default App;
