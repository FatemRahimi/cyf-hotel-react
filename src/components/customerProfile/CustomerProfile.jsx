// import React, { useEffect, useState } from "react";
// import "./CustomerProfile.css";

// function CustomerProfile(props) {
//   const [profile, setProfile] = useState();
//   useEffect(() => {
//     fetch(`https://teniolao-cyf-hotel-server.glitch.me/bookings/${props.id}`)
//       .then(res => res.json())
//       .then(data => {
//         setProfile(data);
//       });
//   }, [props.id]);

//   return (
//     <>
//       <p>Customer {props.id} Profile</p>
//       {profile ? (
//         <ul>
//           <li>ID: {profile.id}</li>
//           <li>Email: {profile.email}</li>
//           <li>Contact: {profile.phoneNumber}</li>
//           {profile.vip === true && <li>Vip</li>}
//         </ul>
//       ) : (
//         <></>
//       )}
//     </>
//   );
// }

// export default CustomerProfile;
import React, { useEffect, useState } from "react";
import "./CustomerProfile.css";

function CustomerProfile({ id }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(`https://teniolao-cyf-hotel-server.glitch.me/bookings/${id}`)
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => console.error("Error fetching profile:", err));
  }, [id]);

  return (
    <div className="customer-profile">
      <p>Customer {id} Profile</p>
      {profile ? (
        <ul>
          <li>ID: {profile.id}</li>
          <li>Email: {profile.email}</li>
          <li>Contact: {profile.phoneNumber}</li>
          {profile.vip && <li>VIP</li>}
        </ul>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}

export default CustomerProfile;
