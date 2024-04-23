import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Card from './components/Card.jsx';
import './App.css';

function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<div className='cards'>
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
}

export default App;
