import React, { Component } from 'react';
import './css/ProfileCard.css';

class NewProfileCard extends Component {

	render() {

		const {cardList} = this.props;

		return (
			<div>
				{cardList.map((card, index) =>{
					return (
                        <div className="card" index={index}>
                                <img className="profile" src={card.profilePhoto} alt="profile"  />
                                <div className="content">
                                    <h2 className="name">{card.name}</h2>
                                    <p className="job">{card.job}</p>
                                    <img className="cover" src={card.coverPhoto} alt="cover" />
                                    <p className="desc">{card.desc}</p>
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
				})}
			</div>
		)
	}
}

export default NewProfileCard;
