import React, { PureComponent } from 'react';
import defaults from './defaults';

class Options extends PureComponent {
  state = defaults;

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [target.name]: value
    });
  };
  render() {
    const {} = this.state;
    return (
      <div>
        <h2 class="uk-text-capitalize">options</h2>
        <h4>Be careful, what you modify here will affect the matches</h4>
        <hr class="uk-divider-icon" />
        <form class="uk-text-left uk-form-horizontal">
          <div class="uk-grid-small" uk-grid="">
            <div class="uk-width-1-2@s">
              <fieldset class="uk-fieldset">
                <legend class="uk-legend uk-text-capitalize">
                  mentor spreadsheet
                </legend>
                <div class="uk-margin">
                  <label class="uk-form-label" for="form-stacked-text">
                    spreadsheet id
                  </label>
                  <div class="uk-form-controls">
                    <input
                      name="spmpMentorSpreadsheetId"
                      class="uk-input uk-form-width-small"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div class="uk-margin">
                  <label class="uk-form-label" for="form-stacked-text">
                    spreadsheet range
                  </label>
                  <div class="uk-form-controls">
                    <input
                      name="spmpMentorRange"
                      class="uk-input uk-form-width-small"
                      type="text"
                      required
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset class="uk-fieldset">
                <legend class="uk-legend uk-text-capitalize">
                  mentor data index
                </legend>

                <div class="uk-margin">
                  <label class="uk-form-label" for="form-stacked-text">
                    name
                  </label>
                  <div class="uk-form-controls">
                    <input
                      name="spmpMentorName"
                      class="uk-input uk-form-width-small"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div class="uk-margin">
                  <label class="uk-form-label" for="form-stacked-text">
                    email
                  </label>
                  <div class="uk-form-controls">
                    <input
                      name="spmpMentorEmail"
                      class="uk-input uk-form-width-small"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div class="uk-margin">
                  <label class="uk-form-label" for="form-stacked-text">
                    college
                  </label>
                  <div class="uk-form-controls">
                    <input
                      name="spmpMentorCollege"
                      class="uk-input uk-form-width-small"
                      type="text"
                    />
                  </div>
                </div>
                <div class="uk-margin">
                  <label class="uk-form-label" for="form-stacked-text">
                    major
                  </label>
                  <div class="uk-form-controls">
                    <input
                      name="spmpMentorMajor"
                      class="uk-input uk-form-width-small"
                      type="text"
                    />
                  </div>
                </div>
              </fieldset>
            </div>
            <div class="uk-width-1-2@s">
              <fieldset class="uk-fieldset">
                <legend class="uk-legend uk-text-capitalize">
                  mentee spreadsheet
                </legend>
                <div class="uk-margin">
                  <label class="uk-form-label" for="form-stacked-text">
                    spreadsheet id
                  </label>
                  <div class="uk-form-controls">
                    <input
                      name="miMenteeSpreadsheetId"
                      class="uk-input uk-form-width-small"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div class="uk-margin">
                  <label class="uk-form-label" for="form-stacked-text">
                    spreadsheet range
                  </label>
                  <div class="uk-form-controls">
                    <input
                      name="miMenteeRange"
                      class="uk-input uk-form-width-small"
                      type="text"
                      required
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset class="uk-fieldset">
                <legend class="uk-legend uk-text-capitalize">
                  mentee data index
                </legend>

                <div class="uk-margin">
                  <label class="uk-form-label" for="form-stacked-text">
                    name
                  </label>
                  <div class="uk-form-controls">
                    <input
                      name="miMenteeName"
                      class="uk-input uk-form-width-small"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div class="uk-margin">
                  <label class="uk-form-label" for="form-stacked-text">
                    email
                  </label>
                  <div class="uk-form-controls">
                    <input
                      name="miMenteeEmail"
                      class="uk-input uk-form-width-small"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div class="uk-margin">
                  <label class="uk-form-label" for="form-stacked-text">
                    college
                  </label>
                  <div class="uk-form-controls">
                    <input
                      name="miMenteeCollege"
                      class="uk-input uk-form-width-small"
                      type="text"
                    />
                  </div>
                </div>
                <div class="uk-margin">
                  <label class="uk-form-label" for="form-stacked-text">
                    major
                  </label>
                  <div class="uk-form-controls">
                    <input
                      name="miMenteeMajor"
                      class="uk-input uk-form-width-small"
                      type="text"
                    />
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <fieldset class="uk-fieldset">
            <legend class="uk-legend uk-text-capitalize">match criteria</legend>
            <div class="uk-margin">
              <label>
                <input
                  name="matchByMajors"
                  class="uk-checkbox"
                  type="checkbox"
                  checked
                />
                match by majors
              </label>
            </div>
            <div class="uk-margin">
              <label>
                <input
                  name="matchByColleges"
                  class="uk-checkbox"
                  type="checkbox"
                  checked
                />
                match by colleges
              </label>
            </div>
            <div class="uk-margin" hidden>
              <label>
                <input
                  name="reselAll"
                  class="uk-checkbox"
                  type="checkbox"
                  checked
                />
                randomly match all unmatched
              </label>
            </div>
          </fieldset>

          <div class="uk-margin">
            <button class="uk-button uk-button-default">
              reset all to defaults
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Options;
