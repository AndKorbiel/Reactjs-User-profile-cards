import React, { Component } from 'react';
import './form.css';

class AddElementForm extends Component {

	render() {
		return (
			<div className="card">
				<h1> Add new user card </h1>
				<input placeholder="User name" name="newName" onChange={this.props.uptadeName} /> 
				<input placeholder="Change profile photo (valid link is required)" name="newProfileImg" onChange={this.props.updateProfile} /> 
				<input placeholder="User job" name="newJob" onChange={this.props.updateJob} /> 	
				<textarea rows="4" cols="50" placeholder="User description" name="newDesc" onChange={this.props.updateDesc} /> 			

			</div>


		)
	}
}

export default AddElementForm;