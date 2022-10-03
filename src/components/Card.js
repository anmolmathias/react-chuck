import React from 'react';
import chuck from '../chuck.png'
import '../components/Card.css';

const Card = ({ jokes, nextJoke }) => {
	return(
		<div className="tc blockdiv">
			<img src={chuck} alt=""/>
			<p className="f3 ba bw2 br3 b--lightest-blue">{jokes.value}</p>
			<button className="grow" onClick={nextJoke}>next</button>
		</div>
		)
}

export default Card;