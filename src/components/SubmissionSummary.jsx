import React from "react";

const SubmissionSummary = ({ data }) => (
  <div className="mt-8 p-4 bg-gray-100 rounded">
    <h2 className="text-xl font-bold mb-4">Submission Summary</h2>
    <p>Full Name: {data.fullName}</p>
    <p>Email: {data.email}</p>
    <p>Phone Number: {data.phoneNumber}</p>
    <p>Applying for Position: {data.position}</p>
    {(data.position === "Developer" || data.position === "Designer") && (
      <p>Relevant Experience: {data.relevantExperience} years</p>
    )}
    {data.position === "Designer" && <p>Portfolio URL: {data.portfolioURL}</p>}
    {data.position === "Manager" && (
      <p>Management Experience: {data.managementExperience}</p>
    )}
    <p>Additional Skills: {data.additionalSkills.join(", ")}</p>
    <p>Preferred Interview Time: {data.preferredInterviewTime}</p>
  </div>
);

export default SubmissionSummary;
