import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getApi } from "../services/api";

export default function UserPage(props) {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  const [item, setItem] = useState(params.id);

  const getUsers = async () => {
    try {
      let data = await getApi("https://dummyjson.com/", item, "users");
      setUser(data);
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  useEffect(() => {
    getUsers();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [item]);

  function deleteUser() {
    fetch(`https://dummyjson.com/users/${user.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return loading ? (
    <p>loading</p>
  ) : (
    <div className="row g-0">
      <div className="col-md-3">
        <img
          className="img-fluid rounded-start"
          src={user.image}
          alt={user.firstName}
        />
      </div>
      <div className="col-md-6">
        <div className="card-body">
          <h5 className="card-title">{`${user.firstName} ${user.lastName} (${user.maidenName}) `}</h5>
          <p className="card-text">
            <small className="text-body-secondary">{user.email}</small>
          </p>
          <p className="card-text">Age: {user.age}</p>
          <p className="card-text">Blood: {user.bloodGroup}</p>
          <p className="card-text">
            Jop: <span>{user.company.title}</span>
          </p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card-body">
          <button
            onClick={() => {
              deleteUser();
            }}
            className="btn btn-danger"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
