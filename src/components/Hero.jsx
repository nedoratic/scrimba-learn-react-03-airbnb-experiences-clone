import HeroGrid from '../assets/hero.svg';

const Hero = () => {
	return (
		<div className='hero'>
			<img className='hero__logo' src={HeroGrid} alt='Hero Grid' />
			<div className='hero__content'>
				<h1 className='hero__title'>Online Experiences</h1>
				<p className='hero__description'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
			</div>
		</div>
	);
};

export default Hero;
