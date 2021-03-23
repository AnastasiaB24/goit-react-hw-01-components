import React from "react";

import PropTypes from "prop-types";

import s from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className="section">
      <div className={s.description}>
        <img src={avatar} alt={name} width="150" className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}> {followers}</span>
        </li>

        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}> {views}</span>
        </li>

        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}> {likes}</span>
        </li>
      </ul>
    </div>
  );
};

// Можно добавить`isRequired` к любому приведённому выше типу,
// чтобы показывать предупреждение,
// если проп не передан

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
export default Profile;
