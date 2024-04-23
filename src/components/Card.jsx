const Card = () => {
	return (
		<div className='card'>
			<img className='card__image' src='' alt='Card image.' />
			<div className='card__stats'>
				<img className='card__stats__rating-star-icon' src='' alt='Rating star icon.' />
				<div className='card__stats__rating-score'>5.0</div>
				<div className='card__stats__rating-number'>(6)</div>
				<div className='card__stats__separator'>•</div>
				<div className='card__stats__location'>USA</div>
			</div>
			<div className='card__title'>Life lessons with Katie Zaferes</div>
			<div className='card__pricing'>From $136 / person</div>
		</div>
	);
};

export default Card;
