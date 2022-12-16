import React, { useRef, useState } from "react";
import data from "../mock-data";
import styles from "../css/pages/home.module.css";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  const redirectToDetail = (id) => {
    navigate(`${id}`)
  };
  return (
    <div>
      {data.map(
        ({
          id,
          TaskId,
          PatientId,
          PatientName,
          TaskSub,
          TaskDescription,
          TaskType,
          DateTime,
          ProviderId,
          Steps,
          MedicineEntities,
          IsMedicineRefill,
        }) => (
          <div className={`flex justify-between ${styles.listItem}`} key={id}>
            <div className={styles.itemLeft}>
              <h3 className={`pointer ${styles.messageHeading}`} onClick={() => redirectToDetail(id)}>
                {TaskDescription}
              </h3>
              <div className={`flex mt-sm ${styles.greenBoxList}`}>
                {Steps.map((step) => (
                  <div key={step.CurrentStep} className={styles.greenBox}>{step.CurrentStep}</div>
                ))}
              </div>
            </div>
            <p>{PatientName}</p>
          </div>
        )
      )}
    </div>
  );
};

export default Home;
