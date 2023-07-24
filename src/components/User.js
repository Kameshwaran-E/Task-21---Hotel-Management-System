import React from 'react';

const User = ({ fullName, email, phoneno, Aadharno, address, date, stay }) => {
  return (
    <ul>
      <li>
        <h3>{fullName}</h3>
        <p>{email}</p>
        <p>{phoneno}</p>
        <p>{Aadharno}</p>
        <p>{address}</p>
        <p>{date}</p>
        <p>{stay}</p>
      </li>
      <hr />
    </ul>
  );
};

export default User;
