import React from 'react';

const Main = ({ matches }) => (
  <div>
    <div className="uk-margin uk-text-center">
      <button className="uk-button uk-button-danger uk-button-large uk-text-large">
        Match!
      </button>
    </div>
    <hr className="uk-divider-icon" />
    <div
      className="uk-child-width-1-3@s uk-grid-small uk-grid-match"
      uk-grid=""
    >
      <div>
        <h2 className="uk-text-capitalize">mentor</h2>
      </div>
      <div>
        <h2 className="uk-text-capitalize">mentees</h2>
      </div>
      <div>
        <h2 className="uk-text-capitalize">reason</h2>
      </div>
    </div>
    <div>
      {matches.map(({ mentor, mentees, reason }) => (
        <div
          key={mentor}
          className="uk-child-width-1-3@s uk-grid-small uk-grid-match uk-card uk-card-default uk-card-small uk-card-body uk-card-hover"
          uk-grid=""
        >
          <ul className="uk-list uk-list-divider">
            <li>{mentor}</li>
          </ul>
          <ul className="uk-list uk-list-divider">
            {mentees.map((mentee, idx) => (
              <li key={idx}>
                {mentee}
                <button uk-icon="copy" />
              </li>
            ))}
          </ul>

          <ul className="uk-list uk-list-divider">
            {reason.map((reason, idx) => (
              <li key={idx}>{reason}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default Main;
