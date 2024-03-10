// Card.js

import PropTypes from 'prop-types';

function Card({ name, chocolate, movie }) {
	return (
		<div className='card'>
			<h1>{name}</h1>
			<h4>Favourite chocolate bar</h4>
			<p>{chocolate}</p>
			<h4>Favourite movie</h4>
			<p>{movie}</p>
		</div>
	);
}
Card.propTypes = {
	name: PropTypes.string.isRequired,
	chocolate: PropTypes.string.isRequired,
	movie: PropTypes.string.isRequired,
};
export default Card;
