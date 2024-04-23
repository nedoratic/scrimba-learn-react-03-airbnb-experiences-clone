import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Card from './components/Card.jsx';
import './App.css';
import data from './data.jsx';

function App() {
	const cards = data.map((card) => {
		return <Card key={card.id} {...card} />;
	});

	return (
		<div>
			<Navbar />
			<Hero />
			<div className='cards'>{cards}</div>
		</div>
	);
}

export default App;
