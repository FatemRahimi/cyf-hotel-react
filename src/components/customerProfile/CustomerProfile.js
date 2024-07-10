import React, { useEffect, useState } from "react";
import "./CustomerProfile.css";

function CustomerProfile(props) {
  const [profile, setProfile] = useState();
  useEffect(() => {
    fetch(`https://hotel-react.glitch.me/${props.id}`)
      .then(res => res.json())
      .then(data => {
        setProfile(data);
      });
  }, [props.id]);

  return (
    <>
      <p>Customer {props.id} Profile</p>
      {profile ? (
        <ul>
          <li>ID: {profile.id}</li>
          <li>Email: {profile.email}</li>
          <li>Contact: {profile.phoneNumber}</li>
          {profile.vip === true && <li>Vip</li>}
        </ul>
      ) : (
        <></>
      )}
    </>
  );
}

export default CustomerProfile;
