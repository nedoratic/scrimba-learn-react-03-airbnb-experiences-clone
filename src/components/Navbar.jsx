import Airbnb from '../assets/airbnb.svg';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<a href='#'>
				<img className='navbar__logo' src={Airbnb} alt='Airbnb' />
			</a>
		</nav>
	);
};

export default Navbar;
