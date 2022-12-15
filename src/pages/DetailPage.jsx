import React, { useEffect, useState } from "react";
import { useMatch } from "react-router-dom";
import data from "../mock-data";
import styles from "../css/pages/details.module.css";

const DetailPage = () => {
  const match = useMatch("/:id");
  const [details, setDetails] = useState(null);
  useEffect(() => {
    if (match.params.id) {
      setDetails(data.filter((item) => item.id == match.params.id)[0]);
    }
  }, [match.params.id]);
  return (
    <div>
      {details && (
        <>
          <h1 className="text-center">
            Patient Inbasket Messaging - Refill Protocol Analysis and
            Recommendations
          </h1>
          <div className={`${styles.detailsContainer}`}>
            <div className="flex justify-between">
              <div className="flex align-center" style={{ gap: "6px" }}>
                <h3>Patient Name:</h3>
                <p>{details.PatientName}</p>
              </div>
              <div className="flex align-center" style={{ gap: "6px" }}>
                <h3>Primary Care Provider:</h3>
                <p>{details.ProviderId}</p>
              </div>
            </div>
            <div className="flex justify-between mt-md">
              <div className="flex align-center" style={{ gap: "6px" }}>
                <h3>Task Type:</h3>
                <p>{details.TaskType}</p>
              </div>
              <div className="flex align-center" style={{ gap: "6px" }}>
                <h3>Task ID:</h3>
                <p>{details.TaskId}</p>
              </div>
            </div>
            <div className="mt-xl">
              <h3>Original Request Text:</h3>
              <div className={`${styles.originalText}`}>{details.TaskDescription}</div>
            </div>
            <div className="flex align-center mt-xl" style={{ gap: "6px" }}>
              <h3>Is This A Request for Med Refill?:</h3>
              <p>{details.IsMedicineRefill ? 'Yes' : 'No'}</p>
            </div>
            <div className="flex align-center mt-md" style={{ gap: "6px" }}>
              <h3>Requested Medication Name:</h3>
              <p>{details.IsMedicineRefill ? details.MedicineEntities[0].MedicineName : 'NA'}</p>
            </div>
            <div className="flex align-center mt-md" style={{ gap: "6px" }}>
              <h3>Requested Medication Class:</h3>
              <p>{details.IsMedicineRefill ? details.MedicineEntities[0].IntentCategory : 'NA'}</p>
            </div>
            <br />
            <div className="flex align-center mt-md" style={{ gap: "6px" }}>
              <h3>Most Recent Visit:</h3>
              <p>NA</p>
            </div>
            <div className="flex align-center mt-md" style={{ gap: "6px" }}>
              <h3>Within 12 months</h3>
              <p>NA</p>
            </div>
            <div className="flex align-center mt-md" style={{ gap: "6px" }}>
              <h3>Most Recent Lab Procedure:</h3>
              <p>NA</p>
            </div>
            <div className="flex align-center mt-md" style={{ gap: "6px" }}>
              <h3>Within X months</h3>
              <p>NA</p>
            </div>
            {/*  */}
            <div className="mt-xl">
              <h3>Original Request Text:</h3>
              <div className={`flex justify-around ${styles.stepsContainer}`}>
                {details.Steps.map(step => <div className={`${styles.step}`}>
                    {step.CurrentStep}
                </div>)}
            </div>
            </div>
            
          </div>
        </>
      )}
    </div>
  );
};

export default DetailPage;
