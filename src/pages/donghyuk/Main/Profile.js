import React from 'react';
import './Profile.scss';

const Profile = props => {
  return (
    <div className="profile">
      <div className="profile-left">
        <img
          src="images/donghyuk/덕순1.jpg"
          alt=""
          className="profile-picture"
        />
        <span className="profile-id">gel_fos</span>
      </div>
      <i className="fas fa-ellipsis-h" />
    </div>
  );
};
export default Profile;
