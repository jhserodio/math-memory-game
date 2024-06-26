import React from "react";

const Attempts = ({ currentAttempt, maxAttempt }) => {
  let width = `${Math.round((currentAttempt / maxAttempt) * 100).toString()} %`;

  if (width === "0%") {
    width = "5%";
  }

  return (
    <div className="row game-attempt">
      <div className="col-md-4">
        <p className="attemp-description" style={{ color: "var(--white)" }}>
          {maxAttempt} tentativas restantes.
        </p>
      </div>
      <div className="col-md-2">{}</div>
      <div className="col-md-6">
        <div className="attemp-progress-text" style={{ color: "var(--white)" }}>
          <span>Tentativas </span>
          <span className="float-right">
            {currentAttempt}/{maxAttempt}
          </span>
        </div>
        <div className="attempt-progressbar">
          <div
            className="attempt-progressbar-improvement"
            style={{ width: width }}
          >
            {}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attempts;
