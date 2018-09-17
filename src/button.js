import React, { Component } from 'react';
import './button.css';

class MyButton extends Component {
	constructor(props) {
		super(props);
		this.state = {TimesDone: 0}
		this.openModal = this.openModal.bind(this);
	}
	openModal() {
		console.log('Button was clicked: ', this.state.TimesDone);
		this.setState({
			TimesDone: this.state.TimesDone +1
		});
	}
	render() {
		return (
			<button className="MyButton" onClick={this.openModal}> + </button>
		);
	}
}

export default MyButton;