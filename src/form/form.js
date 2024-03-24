import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Form = () => {
  const [companyName, setCompanyName] = useState("Google");
  const [jobRole, setJobRole] = useState("Software Engineer");
  const [letterContent, setLetterContent] = useState(`    
    <p>RE: {jobRole}</p>
    <p>Dear Hiring Manager,</p>
    <p>
      I am writing to express my interest in the {jobRole} position at ‘{companyName}’. With a master’s in computer science degree in
      progress, a 4-year bachelor’s degree, and with 2 years of professional experience as a full stack developer at Tata Consultancy Services Pvt.
      Ltd., I am confident that my skills and experience make me a strong candidate for the role.
    </p>
    <p>
      I am particularly excited about the opportunity to work with ‘{companyName}’, as the company's use of the latest technology and
      emphasis on innovation aligns with my own interests and passion for the field. As a highly motivated and results-driven individual, I am
      eager to learn and work with experienced professionals. I would love to be part of a team that is pushing the boundaries of the tech
      industry.
    </p>
    <p>
      To name a few, I can code in multiple languages like Java, JavaScript, Python, can design/handle databases with MySQL and MongoDB, and have
      experience with web technologies like React.js, Node.js, and HTML CSS. I am also very aware of AWS technologies like EC2, S3, RDS, and
      frontend HCI design principles & prototyping using AxureRP.
    </p>
    <p>
      Working in an organization like TCS instilled in me the value of time and discipline. Being part of an Agile team taught me the art of
      collaboration and teamwork. Adhering to tight schedules became a habit, and I thrived under pressure, delivering exceptional results
      time and again. Building lasting relationships with clients became my forte, as I nurtured open lines of communication and ensured their
      vision transformed into reality.
    </p>
    <p>
      I have also designed my own portfolio website from scratch using Node.js, React.js, Bootstrap etc. (<a href="https://rahulschandak.netlify.app"
      >https://rahulschandak.netlify.app</a>). I would appreciate speaking with you further about my qualifications and how I can contribute to your 
      company. Please find my resume attached for your review. Thank you for being so considerate.
    </p>
    <p>
      Sincerely, <br />
      Rahul Satish Chandak <br />
      (MS in Computer Science student at Northeastern University)
    </p>`);
  const [date, setDate] = useState(
    new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    })
  );
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/cover-letter", {
      state: {
        letterContent,
        companyName,
        jobRole,
        date,
      },
    });
  };

  return (
    <div className="form-container">
      <div className="heading">COVER LETTER GENERATOR</div>

      <form onSubmit={handleSubmit}>
        <div>
          <label>DATE</label>
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label>COMPANY NAME</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div>
          <label>JOB ROLE</label>
          <input
            type="text"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
          />
        </div>
        <div>
        <label>LETTER CONTENT</label>
          <textarea
            value={letterContent}
            onChange={(e) => setLetterContent(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;