import React from 'react';
import '../css/ProfileCard.css';

export const ProfileCard = ({ profileImg, userName, job, coverImg, desc }) => {
  return (
    <div className="card">
      <div className="content">
        <img className="profile" src={profileImg} alt="profile" />
        <h2 className="name">{userName}</h2>
        <p className="job">{job}</p>
        <img className="cover" src={coverImg} alt="cover" />
        <p className="desc">{desc}</p>
        <hr />
      </div>

      <div className="footer">
        <i className="fa fa-heart" aria-hidden="true"></i>
        <i className="fa fa-comment-o" aria-hidden="true"></i>
        <i className="fa fa-retweet" aria-hidden="true"></i>
        <i className="fa fa-envelope-o" aria-hidden="true"></i>
      </div>
    </div>
  );
};
