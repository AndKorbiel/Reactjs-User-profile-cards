import React, { Component } from 'react';
import './ProfileCard.css';

class ProfileCard extends Component {
	render() {
		return (
			<div className="card">

			    <img className="profile" src="https://api.adorable.io/avatars/55/typeofweb3.png"  />
			    <div className="content">
			        <h2 className="name">Name</h2>
			        <p className="job">Job name</p>
			        <img className="cover" src="https://picsum.photos/450/150?random" />
			        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ex ut sapien ultricies porttitor eu et sapien. Donec tincidunt quam arcu, a luctus nibh vehicula a. Nulla lacinia fringilla ligula, non faucibus odio vestibulum quis. Vivamus at lacus purus. </p>
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