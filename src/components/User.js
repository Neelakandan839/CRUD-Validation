import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./User.css";

const API_URL = "https://612dbcede579e1001791dd21.mockapi.io/users";
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  // Function to get Userdata
  getUsers = async () => {
    try {
      const { data } = await axios.get(API_URL);
      this.setState({ users: data });
    } catch (err) {
      console.error("Error Fetching data from server", err);
    }
  };

  // Function to delete Userdata
  deleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      let users = [...this.state.users];
      users = users.filter((user) => user.id !== id);
      this.setState({ users });
    } catch (err) {
      console.error(err);
    }
  };

  componentDidMount() {
    this.getUsers(); //API call
  }
  render() {
    return (
      <>
        <h1 className="m-2 pt-5 text-center">USER LIST</h1>
        <div className=" d-flex flex-wrap justify-conent-center main">
          {this.state.users.map((user) => {
            return (
              <>
                {/* User-profile */}
                <div key={user.id} className="p-3 user-profile m-2 ">
                  <div className="d-flex flex-wrap mb-2 justify-conent-center align-items-center user-info">
                    {/* User-Image */}
                    <img src={user.avatar} alt="" />
                    <ul className="list-unstyled ml-2 user-info">
                      <li>Name : {user.name}</li>
                      <li>Email : {user.email}</li>
                      <li>Phone : {user.phone}</li>
                      <li>Company : {user.company}</li>
                    </ul>
                  </div>
                  <div>
                    {/* Edit-user-button */}
                    <Link to={`edituser/${user.id}`}>
                      <button className="btn btn-success mt-2 ml-2">
                        {" "}
                        Edit {" "}
                      </button>
                    </Link>

                    {/* Delete-user-button */}
                    <button
                      className="btn ml-2 mt-2 btn-danger"
                      onClick={() => {this.deleteUser(user.id)}}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default User;
