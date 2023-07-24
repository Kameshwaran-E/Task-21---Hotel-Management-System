import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, editUser } from '../features/userslice';

import './Users.css';

const Users = () => {
  const users = useSelector((state) => {
    return state.user.users;
  });

  const dispatch = useDispatch();

  return (
    <div className="user">
      {users.length !== 0 ? (
        users.map((user, index) => {
          return (
            <div key={index} className="user_container">
              <h1>{user.fullName}</h1>
              <p>{`Email Id :${user.email}`}</p>
              <p>{`Phone Number :${user.phoneno}`}</p>
              <p>{`Aadhar Number :${user.Aadharno}`}</p>
              <p>{`address :${user.address}`}</p>
              <p>{`Date of Check in : ${user.date}`}</p>
              <p>{`Number of Days to stay: ${user.stay}`}</p>

              <br />

              <button onClick={() => dispatch(deleteUser(index))}>
                Delete
              </button>
            </div>
          );
        })
      ) : (
        <h1 className="user_container">No user found ❌❌❌</h1>
      )}
    </div>
  );
};

export default Users;
