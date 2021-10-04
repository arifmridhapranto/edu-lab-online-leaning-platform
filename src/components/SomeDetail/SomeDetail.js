import React, { useEffect, useState } from "react";
import "./SomeDetail.css";
import Detail from "../Detail/Detail";

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
        <Detail key={detail.id} detail={detail}></Detail>
      ))}
    </div>
  );
};

export default SomeDetail;
