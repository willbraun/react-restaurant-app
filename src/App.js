import MenuList from './components/MenuList';
import Order from './components/Order';
import './App.css';

function App() {
  	return (
    	<div className="App">
			<header>
				<h1>Mojo's Ice Cream</h1>
			</header>
			<MenuList />
			<Order />
    	</div>
  	);
}

export default App;
