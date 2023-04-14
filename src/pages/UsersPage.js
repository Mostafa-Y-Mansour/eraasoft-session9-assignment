import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { getApi } from "../services/api";
import Loading from "../components/Loading";
import Search from "../components/Search";

export default function Users(props) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllUsers = async () => {
    try {
      const data = await getApi("https://dummyjson.com", "", "users");
      setUsers(data.users);
    } catch (err) {
      console.error("Error", err);
    }
  };

  useEffect(() => {
    setLoading(false);
    getAllUsers();
  }, []);

  if (!loading) console.log(users);

  const usersList = users.map((user) => (
    <div key={user.id} className="col">
      <UserCard user={user} />
    </div>
  ));

  return (
    <div className="card mb-3 mt-3 container" style={{ maxWidth: 990 }}>
      <Search />
      {loading ? <Loading /> : usersList}
    </div>
  );
}
