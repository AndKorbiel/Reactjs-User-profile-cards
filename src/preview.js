import React, { Component } from 'react';
import './css/ProfileCard.css';

class Preview extends Component {

    render() {
        const {newName, newDesc, newCoverImg, newProfileImg, newJob} = this.props;

        return (
            <div className="preview">
                <div className="content">
                    <img className="profile" src={newProfileImg} alt="profile"/>
                    <h2 className="name">{newName}</h2>
                    <p className="job">{newJob}</p>
                    <img className="cover" src={newCoverImg} alt="cover"/>
                    <p className="desc">{newDesc}</p>
                    <hr/>
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

export default Preview;
