import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useLocation } from "react-router";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Letter = () => {
  const location = useLocation();
  let {
    name,
    subHeading,
    email,
    phone,
    website,
    date,
    companyName,
    jobRole,
    designation,
    letterContent,
  } = location.state || {};

//   email = "mailto:".concat(email);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "CoverLetter_".concat(companyName),
    onAfterPrint: () => console.log("Printed PDF successfully!"),
  });

  const navigate = useNavigate();
  const handleBack = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <div ref={componentRef} className="letter-container">
        <h1 className="heading">{name}</h1>
        <p className="subheading">{subHeading}</p>
        <hr />
        <p>
          <FontAwesomeIcon icon={faPhoneVolume} style={{ color: "#000000" }} />
          &nbsp; {phone}
        </p>
        <p>
          <FontAwesomeIcon
            icon={faEnvelopeOpenText}
            style={{ color: "#000000" }}
          />
          &nbsp;&nbsp;&nbsp;
          <a href={"mailto:".concat(email)}>{email}</a>
        </p>
        <hr />
        <div className="date-company-container">
          <p>{companyName}</p>
          <p>{date}</p>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: letterContent
              .replaceAll("{jobRole}", jobRole)
              .replaceAll("{companyName}", companyName)
              .replaceAll("{date}", date)
              .replaceAll("{name}", name)
              .replaceAll("{website}", website)
              .replaceAll("{designation}", designation),
          }}
        />
      </div>
      <div className="button-container">
        <button onClick={handleBack}>Back</button>
        <button onClick={handlePrint}>Download as PDF</button>
      </div>
    </>
  );
};

export default Letter;
