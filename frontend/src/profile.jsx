import { useEffect, useState } from "react";
import { getProfile } from "./api";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getProfile();
      if (response.message) {
        setMessage(response.message);
      } else {
        setUser(response);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
};

export default Profile;
