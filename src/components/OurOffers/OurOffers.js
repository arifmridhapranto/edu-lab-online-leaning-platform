import React, { useEffect, useState } from "react";
import Offer from "../Offer/Offer";
import "./OurOffers.css";

const OurOffers = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    fetch("./OurOffers.JSON")
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);
  return (
    <div className='container'>
      <h1 className='text-center mt-5 title-OurOffers'>
        What We Offer For <br />
        Growth Your Study
      </h1>
      <div className='d-flex align-items-center justify-content-center mt-5'>
        {offers.map((offer) => (
          <Offer key={offer.id} offer={offer}></Offer>
        ))}
      </div>
    </div>
  );
};

export default OurOffers;
