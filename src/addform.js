import React, { Component } from 'react';

class AddElementForm extends Component {
	render() {

		const {newName, updateProfile, updateJob, updateDesc, setNewValue, addNewCard} = this.props;

		return (
			<div className="inputForm">
				<h1>Add new user card </h1>
				<button className="add-button" onClick={addNewCard}>+</button>
				<input name="newName" placeholder="User name" value={newName} onChange={setNewValue} />
				<input placeholder="Change profile photo (valid link is required)" name="newProfileImg" value={updateProfile} onChange={setNewValue} />
				<input placeholder="User job" name="newJob" value={updateJob} onChange={setNewValue} />
				<textarea rows="4" cols="50" placeholder="User description" name="newDesc" value={updateDesc} onChange={setNewValue} />
			</div>
		)
	}
}

export default AddElementForm;
