// import React from "react";
// import "./TouristInfoCards.css";

// function TouristInfoCards() {
//   return (
//     <div className="card-container text-center">
//       <div className="card text-center">
//         <img
//           src="https://www.itpr.co.uk/hubfs/Manchester-skyline-.jpg"
//           alt=""
//           className="card-img-top"
//         />
//         <div className="card-body">
//           <p>
//             Known throughout the world as the birthplace of the industrial
//             revolution, Manchester has a proud history in science, politics,
//             music, arts and sport.
//           </p>
//           <a href="http://visitmanchester.com" className="btn btn-info">
//             Manchester
//           </a>
//         </div>
//       </div>

//       <div className="card text-center">
//         <img
//           src="https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/United%20Kingdom/London/london-aerial-thames-guide-xlarge.jpg?imwidth=700"
//           alt=""
//           className="card-img-top"
//         />
//         <div className="card-body">
//           <p>
//             Welcome to London! Visit London, from iconic sightseeing spots and
//             fun-filled days out to top restaurants, theatre and unmissable
//             London events.
//           </p>
//           <a href="http://visitlondon.com" className="btn btn-info">
//             London
//           </a>
//         </div>
//       </div>

//       <div className="card text-center">
//         <div>
//           <img
//             src="https://cdn.getyourguide.com/img/location/5d0a6b6c59a42.jpeg/88.jpg"
//             alt=""
//             className="card-img-top"
//           />
//         </div>

//         <div className="card-body">
//           <p>
//             Welcome to London! Visit London, from iconic sightseeing spots and
//             fun-filled days out to top restaurants, theatre and unmissable
//             London events.
//           </p>
//           <a
//             href="https://www.visitbritain.com/gb/en/england/south-west/bristol"
//             className="btn btn-info"
//           >
//             Bristol
//           </a>
//         </div>
//       </div>

//       <div className="card text-center">
//         <img
//           src="https://www.nottingham.ac.uk/Careers/Images-Multimedia/1-Students/International-students/WorkingUK-714x335.jpg"
//           alt=""
//           className="card-img-top"
//         />
//         <div className="card-body">
//           <p>
//             Welcome to London! Visit London, from iconic sightseeing spots and
//             fun-filled days out to top restaurants, theatre and unmissable
//             London events.
//           </p>
//           <a
//             href="https://www.visit-nottinghamshire.co.uk/"
//             className="btn btn-info"
//           >
//             Nottingham
//           </a>
//         </div>
//       </div>

//       <div className="card text-center">
//         <img
//           src="https://www.dwh.co.uk/-/media/group/location-pages/kent.ashx?w=420&hash=1DFD9457C48F11399F6935CFEEBD5FBA"
//           alt="Wolverhampton"
//           className="card-img-top"
//         />
//         <div className="card-body">
//           <p>
//             Welcome to London! Visit London, from iconic sightseeing spots and
//             fun-filled days out to top restaurants, theatre and unmissable
//             London events.
//           </p>
//           <a
//             href="https://visitbirmingham.com/inspire-me/explore-the-west-midlands/wolverhampton"
//             className="btn btn-info"
//           >
//             Wolverhampton
//           </a>
//         </div>
//       </div>

//       <div className="card text-center">
//         <img
//           src="https://a.cdn-hotels.com/gdcs/production131/d1170/e7199a50-080e-4dab-87d5-6d15ddada00d.jpg"
//           alt=""
//           className="card-img-top"
//         />
//         <div className="card-body">
//           <p>
//             Welcome to London! Visit London, from iconic sightseeing spots and
//             fun-filled days out to top restaurants, theatre and unmissable
//             London events.
//           </p>
//           <a href="https://visitbirmingham.com/" className="btn btn-info">
//             Birmingham
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TouristInfoCards;

import React from "react";
import "./TouristInfoCards.css";

const cardsData = [
  {
    imgSrc: "https://www.itpr.co.uk/hubfs/Manchester-skyline-.jpg",
    altText: "Manchester skyline",
    description:
      "Known throughout the world as the birthplace of the industrial revolution, Manchester has a proud history in science, politics, music, arts and sport.",
    link: "http://visitmanchester.com",
    city: "Manchester"
  },
  {
    imgSrc:
      "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/United%20Kingdom/London/london-aerial-thames-guide-xlarge.jpg?imwidth=700",
    altText: "London aerial view",
    description:
      "Welcome to London! Visit London, from iconic sightseeing spots and fun-filled days out to top restaurants, theatre and unmissable London events.",
    link: "http://visitlondon.com",
    city: "London"
  },
  {
    imgSrc:
      "https://cdn.getyourguide.com/img/location/5d0a6b6c59a42.jpeg/88.jpg",
    altText: "Bristol view",
    description:
      "Welcome to Bristol! Discover Bristol's rich history and vibrant culture, from historic landmarks to modern attractions.",
    link: "https://www.visitbritain.com/gb/en/england/south-west/bristol",
    city: "Bristol"
  },
  {
    imgSrc:
      "https://www.nottingham.ac.uk/Careers/Images-Multimedia/1-Students/International-students/WorkingUK-714x335.jpg",
    altText: "Nottingham view",
    description:
      "Discover Nottingham, from its historic sites to modern attractions and vibrant culture.",
    link: "https://www.visit-nottinghamshire.co.uk/",
    city: "Nottingham"
  },
  {
    imgSrc:
      "https://www.dwh.co.uk/-/media/group/location-pages/kent.ashx?w=420&hash=1DFD9457C48F11399F6935CFEEBD5FBA",
    altText: "Wolverhampton view",
    description:
      "Explore Wolverhampton, from its historic landmarks to its modern attractions and events.",
    link:
      "https://visitbirmingham.com/inspire-me/explore-the-west-midlands/wolverhampton",
    city: "Wolverhampton"
  },
  {
    imgSrc:
      "https://a.cdn-hotels.com/gdcs/production131/d1170/e7199a50-080e-4dab-87d5-6d15ddada00d.jpg",
    altText: "Birmingham view",
    description:
      "Discover Birmingham's rich culture, historic sites, and vibrant attractions.",
    link: "https://visitbirmingham.com/",
    city: "Birmingham"
  }
];

function TouristInfoCards() {
  return (
    <div className="card-container text-center">
      {cardsData.map((card, index) => (
        <div className="card text-center" key={index}>
          <img src={card.imgSrc} alt={card.altText} className="card-img-top" />
          <div className="card-body">
            <p>{card.description}</p>
            <a href={card.link} className="btn btn-info">
              {card.city}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TouristInfoCards;
