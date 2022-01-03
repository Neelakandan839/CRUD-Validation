import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Edit.css";

function CreateUser() {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    company: "",
    job: "",
    email: "",
    phone: "",
    country: "",
  });

  // Function to create Profile
  const createProfile = async () => {
    try {
      const { data } = await axios.post(
        `https://612dbcede579e1001791dd21.mockapi.io/users/`,
        {
          name: user.name,
          company: user.company,
          job: user.job,
          email: user.email,
          phone: user.phone,
          country: user.country,
        }
      );

      console.log(data);
    } catch (err) {
      window.alert("Unable to post data to server");
    }
    history.goBack();
  };
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
      case "job": {
        setUser({ ...user, job: value });
        break;
      }
      case "company": {
        setUser({ ...user, company: value });
        break;
      }
      case "country": {
        setUser({ ...user, country: value });
        break;
      }
      default: {
      }
    }
  };

  // function to submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    createProfile();
  };
  return (
    <div>
      <div className="container mb-5">
        {/* Create Profile */}
        <h2 className="text-center mt-5">CREATE USER</h2>
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
              className="form-control border-0 "
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

          {/* Job */}
          <div className="col-6 p-2">
            <label htmlFor="job">Job :</label>
            <input
              type="text"
              name="job"
              className="form-control border-0"
              value={user.job}
              placeholder="Enter Job"
              onChange={(event) => {
                handleChange(event);
              }}
            />
          </div>

          {/* Country */}
          <div className="col-6">
            <div className="row">
              <div className="col p-2">
                <label htmlFor="country">Country :</label>
                <input
                  type="text"
                  name="country"
                  className="form-control border-0"
                  value={user.country}
                  placeholder="Enter Country"
                  onChange={(event) => {
                    handleChange(event);
                  }}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-success"
            onClick={(event) => handleSubmit(event)}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
