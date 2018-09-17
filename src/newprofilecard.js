import React, { Component } from 'react';
import './ProfileCard.css';
import AddElementForm from './addform';

class NewProfileCard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			newName: 'New user',
			newJob: 'Default job',
			newProfileImg: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c3/c35031740bf06663cc17dc8210fa51109353ede2_full.jpg',
			newCoverImg: 'https://loremflickr.com/500/200/tiger',
			newDesc: 'Some boring default description...',
			visible: false
		}
	}

	setNewValue =(e) => {
		this.setState({ 
			[e.target.name] : e.target.value,
		})
		this.setState({visible: true})
	}


	render() {
		
		let newCardClass = ["muted"];
		if(this.state.visible) { newCardClass.push('not-muted'); }
		
		return (
			<div className="inside-cont">
				<div className={newCardClass.join(' ')}>

				    <img className="profile" src={this.state.newProfileImg} alt="profile"  />
				    <div className="content">
				        <h2 className="name">{this.state.newName}</h2>
				        <p className="job">{this.state.newJob}</p>
				        <img className="cover" src={this.state.newCoverImg} alt="cover" />
				        <p className="desc">{this.state.newDesc}</p>
				        <hr />
				    </div>
				    <div className="footer">
				    <i className="fa fa-heart" aria-hidden="true"></i>
				    <i className="fa fa-comment-o" aria-hidden="true"></i>
				    <i className="fa fa-retweet" aria-hidden="true"></i>
				    <i className="fa fa-envelope-o" aria-hidden="true"></i>
				    </div>

				</div>

				<AddElementForm 
				uptadeName={this.setNewValue}
				updateProfile={this.setNewValue} 
				updateJob={this.setNewValue}
				updateDesc={this.setNewValue} />

			</div>
		)
	}
}

export default NewProfileCard;