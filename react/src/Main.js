import React from 'react';

const Main = ({ matches }) => (
  <div>
    <div class="uk-margin">
      <button class="uk-button uk-button-danger uk-button-large">Match</button>
    </div>
    <hr class="uk-divider-icon" />
    <div class="uk-child-width-1-3@s uk-grid-small uk-grid-match" uk-grid="">
      <div>
        <h2 class="uk-text-capitalize">mentor</h2>
      </div>
      <div>
        <h2 class="uk-text-capitalize">mentees</h2>
      </div>
      <div>
        <h2 class="uk-text-capitalize">reason</h2>
      </div>
    </div>
    <div>
      {matches.map(({ mentor, mentees, matchReason }) => (
        <div
          key={mentor}
          class="uk-child-width-1-3@s uk-grid-small uk-grid-match uk-card uk-card-default uk-card-hover"
          uk-grid=""
        >
          <ul class="uk-list">
            <li>{mentor}</li>
          </ul>
          <ul class="uk-list uk-list-striped">
            {mentees.split(',').map(mentee => (
              <li>
                {mentee}
                <button uk-icon="copy" />
              </li>
            ))}
          </ul>

          <ul class="uk-list uk-list-striped">
            {matchReason.split(',').map(reason => (
              <li>{reason}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default Main;
