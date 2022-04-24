import React from 'react';
import './Profile.scss';

const Profile = ({ profileInfo }) => {
  return (
    <div className="profile">
      <div className="profile-left">
        <img src={profileInfo.url} alt="" className="profile-picture" />
        <span className="profile-id">{profileInfo.userName}</span>
      </div>
      <i className="fas fa-ellipsis-h" />
    </div>
  );
};
export default Profile;
