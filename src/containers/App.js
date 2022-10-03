import React, { Component } from 'react';
import Card from '../components/Card';
import '../containers/App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			jokes: []
		}
	}

	generateJoke = () => {
		fetch('https://api.chucknorris.io/jokes/random')
		.then(res => res.json())
		.then(data => this.setState({ jokes: data }));		
	}

	componentDidMount() {
		this.generateJoke();
	}

	render() {
		return(
			<div className="container">
				<Card jokes={this.state.jokes} nextJoke={this.generateJoke}/>
			</div>
			)
	}
}

export default App;