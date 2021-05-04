import React from 'react';
import PropTypes from 'prop-types';
import { FriendListStyled } from './FriendListStyled';


const FriendList = ({ friends }) => (
  <FriendListStyled>
    {friends.map(friend => (
      <li className="item" key={friend.id}>
        <span
          className={
             friend.isOnline ? "statusOnline" : "statusOffline"
          }
        ></span>
        <img className="avatar" src={friend.avatar} alt="" width="48" />
        <p className="name">{friend.name}</p>
      </li>
    ))}
  </FriendListStyled>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendList;