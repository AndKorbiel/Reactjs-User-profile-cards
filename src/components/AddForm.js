import React from 'react';
import { ProfileCard } from './ProfileCard';

export const AddForm = ({
  newDesc,
  newName,
  newCoverImg,
  newJob,
  newProfileImg,
  updateProfile,
  updateJob,
  updateDesc,
  setNewValue,
  addNewCard,
}) => {
  return (
    <div className="addForm">
      <div className="inputForm">
        <h1>Add new user card </h1>

        <button className="add-button" onClick={addNewCard}>
          +
        </button>

        <input
          name="newName"
          placeholder="User name"
          value={newName}
          onChange={setNewValue}
        />

        <input
          placeholder="Change profile photo (valid link is required)"
          name="newProfileImg"
          value={updateProfile}
          onChange={setNewValue}
        />

        <input
          placeholder="User job"
          name="newJob"
          value={updateJob}
          onChange={setNewValue}
        />

        <textarea
          rows="4"
          cols="50"
          placeholder="User description"
          name="newDesc"
          value={updateDesc}
          onChange={setNewValue}
        />
      </div>

      <ProfileCard
        profileImg={newProfileImg}
        userName={newName}
        job={newJob}
        coverImg={newCoverImg}
        desc={newDesc}
      />
    </div>
  );
};
