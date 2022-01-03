import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import "./Edit.css";

function EditUser() {
  const param = useParams().id;
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });
  // function to get Userdata
  const getUser = async () => {
    const { data } = await axios.get(
      `https://612dbcede579e1001791dd21.mockapi.io/users/${param}`
    );
    // console.log(data);
    setUser({
      name: data.name,
      email: data.email,
      company: data.company,
      phone: data.phone,
    });
  };

  // function to get Post Userdata
  const postUser = async () => {
    const { data } = await axios.put(
      `https://612dbcede579e1001791dd21.mockapi.io/users/${param}`,
      {
        name: user.name,
        email: user.email,
        company: user.company,
        phone: user.phone,
      }
    );
    console.log(data);
    history.goBack();
  };

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    getUser();
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name": {
        setUser({ ...user, name: value });
        break;
      }
      case "email": {
        setUser({ ...user, email: value });
        break;
      }
      case "phone": {
        setUser({ ...user, phone: value });
        break;
      }

      case "company": {
        setUser({ ...user, company: value });
        break;
      }
      default: {
      }
    }
  };

  // function to submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    postUser();
  };

  return (
    <>
      <div className="container">
        {/* Edit-User-details */}
        <h2 className="text-center mt-5">EDIT USER</h2>
        <form className="user-data d-flex justify-content-center flex-wrap flex-column align-items-center">
          {/* Name */}
          <div className="col-6 p-2">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              name="name"
              className="form-control border-0"
              value={user.name}
              placeholder="Enter name"
              onChange={(event) => {
                handleChange(event);
              }}
            />
          </div>
          {/* Email */}
          <div className="col-6 p-2">
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              name="email"
              className="form-control border-0"
              value={user.email}
              placeholder="Enter Email"
              onChange={(event) => {
                handleChange(event);
              }}
            />
          </div>
          {/* Phone */}
          <div className="col-6 p-2">
            <label htmlFor="phone">Phone :</label>
            <input
              type="text"
              name="phone"
              className="form-control border-0"
              value={user.phone}
              placeholder="Enter Phone Number"
              onChange={(event) => {
                handleChange(event);
              }}
            />
          </div>

          {/* Company */}
          <div className="col-6 p-2">
            <label htmlFor="company">Company :</label>
            <input
              type="text"
              name="company"
              className="form-control border-0"
              value={user.company}
              placeholder="Enter Company"
              onChange={(event) => {
                handleChange(event);
              }}
            />
          </div>

          {/* Submit-button */}
          <button
            type="submit"
            className="btn btn-success"
            onClick={(event) => handleSubmit(event)}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
}

export default EditUser;
