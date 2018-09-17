import React, { Component } from 'react';
import './ProfileCard.css';

class ProfileCard extends Component {
	
	render() {
		return (
			<div className="card">

			    <img className="profile" src={this.props.profileImg} alt="profile"  />
			    <div className="content">
			        <h2 className="name">{this.props.userName}</h2>
			        <p className="job">{this.props.job}</p>
			        <img className="cover" src={this.props.coverImg} alt="cover" />
			        <p className="desc">{this.props.desc}</p>
			        <hr />
			    </div>
			    <div className="footer">
			    <i className="fa fa-heart" aria-hidden="true"></i>
			    <i className="fa fa-comment-o" aria-hidden="true"></i>
			    <i className="fa fa-retweet" aria-hidden="true"></i>
			    <i className="fa fa-envelope-o" aria-hidden="true"></i>
			    </div>

			</div>
		)
	}
}

export default ProfileCard;