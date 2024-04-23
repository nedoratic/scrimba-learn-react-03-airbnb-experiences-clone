import star from '../assets/star.svg';
import test from '../images/card-img-1.svg';

const Card = () => {
	return (
		<div className='card'>
			<img className='card__image' src={test} alt='Card image.' />
			<div className='card__stats'>
				<img className='card__stats__rating-star-icon' src={star} alt='Rating star icon.' />
				<div className='card__stats__rating-score'>5.0</div>
				<div className='card__stats__rating-number'>
					<span className='gray'>(6)</span>
				</div>
				<div className='card__stats__separator'>
					<span className='gray'>•</span>
				</div>
				<div className='card__stats__location'>
					<span className='gray'>USA</span>
				</div>
			</div>
			<div className='card__title'>Life lessons with Katie Zaferes</div>
			<div className='card__pricing'>
				<span className='bold'>From $136</span> / person
			</div>
		</div>
	);
};

export default Card;
