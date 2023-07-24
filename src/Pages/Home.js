import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/userslice';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    phoneno: '',
    Aadharno: '',
    address: '',
    date: '',
    stay: '',
  });
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setUser((previtems) => {
      return {
        ...previtems,
        [name]: value,
      };
    });
  };

  const handleuser = (event) => {
    event.preventDefault();
    dispatch(addUser(user));

    setUser({
      fullName: '',
      email: '',
      phoneno: '',
      Aadharno: '',
      address: '',
      date: '',
      stay: '',
    });
  };
  return (
    <div className="home">
      <form className="home_container">
        <h1>Add User</h1>
        <input
          name="fullName"
          placeholder="Enter Full Name"
          onChange={inputHandler}
          value={user.fullName}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Enter Email address"
          onChange={inputHandler}
          value={user.email}
          required
        />
        <input
          name="phoneno"
          type="number"
          placeholder="Enter Phone Number"
          onChange={inputHandler}
          value={user.phoneno}
          required
        />
        <input
          name="Aadharno"
          type="number"
          placeholder="Enter Aadhar Number"
          onChange={inputHandler}
          value={user.Aadharno}
          required
        />
        <textarea
          name="address"
          value={user.address}
          cols="30"
          rows="10"
          placeholder="Enter Address"
          onChange={inputHandler}
          required
        ></textarea>
        <input
          name="date"
          type="date"
          placeholder="Date of Check in"
          onChange={inputHandler}
          value={user.date}
          required
        />
        <input
          name="stay"
          type="number"
          placeholder="Number of days to stay"
          onChange={inputHandler}
          value={user.stay}
          required
        />
        <button type="submit" onClick={handleuser}>
          Add User
        </button>
      </form>

      <br />
    </div>
  );
};

export default Home;
