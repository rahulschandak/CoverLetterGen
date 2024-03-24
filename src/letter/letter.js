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
  let { letterContent, companyName, jobRole, date } = location.state || {};

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
        <h1>RAHUL SATISH CHANDAK</h1>
        <p className="subheading">
          Currently a Computer Science graduate student at Northeastern
          University, Boston, USA.
        </p>
        <hr />
        <p>
          <FontAwesomeIcon icon={faPhoneVolume} style={{ color: "#000000" }} />
          &nbsp; +1 857 313 1986
        </p>
        <p>
          <FontAwesomeIcon
            icon={faEnvelopeOpenText}
            style={{ color: "#000000" }}
          />
          &nbsp;&nbsp;&nbsp;
          <a href="mailto:chandak.r@northeastern.edu">
            chandak.r@northeastern.edu
          </a>{" "}
          /{" "}
          <a href="mailto:rahulschandak2@gmail.com">rahulschandak2@gmail.com</a>
        </p>
        <hr />
        <div
          dangerouslySetInnerHTML={{
            __html: letterContent
              .replaceAll("{jobRole}", jobRole)
              .replaceAll("{companyName}", companyName)
              .replaceAll("{date}", date),
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
