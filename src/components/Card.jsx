import star from '../assets/star.svg';

const Card = (props) => {
	let badgeText;
	if (props.openSpots === 0) {
		badgeText = 'SOLD OUT';
	} else if (props.location === 'Online') {
		badgeText = 'ONLINE';
	}

	return (
		<div className='card'>
			{badgeText && <div className='card__badge'>{badgeText}</div>}
			<img className='card__image' src={`public/images/${props.img}`} alt='Card image.' />
			<div className='card__stats'>
				<img className='card__stats__rating-star-icon' src={star} alt='Rating star icon.' />
				<div className='card__stats__rating-score'>{props.stats.rating.toFixed(1)}</div>
				<div className='card__stats__rating-number'>
					<span className='gray'>({props.stats.reviewCount})</span>
				</div>
				<div className='card__stats__separator'>
					<span className='gray'>•</span>
				</div>
				<div className='card__stats__location'>
					<span className='gray'>{props.location}</span>
				</div>
			</div>
			<div className='card__title'>{props.title}</div>
			<div className='card__pricing'>
				<span className='bold'>From ${props.price}</span> / person
			</div>
		</div>
	);
};

export default Card;
