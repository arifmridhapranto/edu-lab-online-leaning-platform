import React, { useEffect, useState } from "react";
import "./SomeDetail.css";

const SomeDetail = () => {
  const [someDetail, setSomeDetail] = useState([]);
  useEffect(() => {
    fetch("./Somedetail.JSON")
      .then((res) => res.json())
      .then((data) => setSomeDetail(data));
  }, []);
  return (
    <div className='some-detail container-fluid'>
      {someDetail.map((detail) => (
        <div className='detail'>
          <i className={detail.icon}></i>
          <h1>{detail.count}</h1>
          <h1>{detail.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default SomeDetail;
