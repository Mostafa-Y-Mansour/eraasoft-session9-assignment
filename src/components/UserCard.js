import React from "react";
import { Link } from "react-router-dom";

export default function UserCard(props) {
  const { user } = props;

  return (
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
          <Link to={`${user.id}`} className="btn btn-primary">
            MORE
          </Link>
        </div>
      </div>
    </div>
  );
}
