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

  handleResetAllToDefaults = () => {
    this.setState({
      ...defaults
    });
  };

  render() {
    const {
      spmpMentorSpreadsheetId,
      spmpMentorRange,
      spmpMentorName,
      spmpMentorEmail,
      spmpMentorCollege,
      spmpMentorMajor,
      matchByMajors,
      matchByColleges,
      spmpMenteeSpreadsheetId,
      spmpMenteeRange,
      spmpMenteeName,
      spmpMenteeEmail,
      spmpMenteeCollege,
      spmpMenteeMajor
    } = this.state;
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
                      value={spmpMentorSpreadsheetId}
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
                      value={spmpMentorRange}
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
                      value={spmpMentorName}
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
                      value={spmpMentorEmail}
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
                      required
                      value={spmpMentorCollege}
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
                      required
                      value={spmpMentorMajor}
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
                      name="spmpMenteeSpreadsheetId"
                      class="uk-input uk-form-width-small"
                      type="text"
                      required
                      value={spmpMenteeSpreadsheetId}
                    />
                  </div>
                </div>
                <div class="uk-margin">
                  <label class="uk-form-label" for="form-stacked-text">
                    spreadsheet range
                  </label>
                  <div class="uk-form-controls">
                    <input
                      name="spmpMenteeRange"
                      class="uk-input uk-form-width-small"
                      type="text"
                      required
                      value={spmpMenteeRange}
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
                      name="spmpMenteeName"
                      class="uk-input uk-form-width-small"
                      type="text"
                      required
                      value={spmpMenteeName}
                    />
                  </div>
                </div>
                <div class="uk-margin">
                  <label class="uk-form-label" for="form-stacked-text">
                    email
                  </label>
                  <div class="uk-form-controls">
                    <input
                      name="spmpMenteeEmail"
                      class="uk-input uk-form-width-small"
                      type="email"
                      required
                      value={spmpMenteeEmail}
                    />
                  </div>
                </div>
                <div class="uk-margin">
                  <label class="uk-form-label" for="form-stacked-text">
                    college
                  </label>
                  <div class="uk-form-controls">
                    <input
                      name="spmpMenteeCollege"
                      class="uk-input uk-form-width-small"
                      type="text"
                      required
                      value={spmpMenteeCollege}
                    />
                  </div>
                </div>
                <div class="uk-margin">
                  <label class="uk-form-label" for="form-stacked-text">
                    major
                  </label>
                  <div class="uk-form-controls">
                    <input
                      name="spmpMenteeMajor"
                      class="uk-input uk-form-width-small"
                      type="text"
                      required
                      value={spmpMenteeMajor}
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
                  class="uk-checkbox uk-margin-small-right"
                  type="checkbox"
                  checked
                  value={matchByMajors}
                />
                match by majors
              </label>
            </div>
            <div class="uk-margin">
              <label>
                <input
                  name="matchByColleges"
                  class="uk-checkbox uk-margin-small-right"
                  type="checkbox"
                  checked
                  value={matchByColleges}
                />
                match by colleges
              </label>
            </div>
            {/* <div class="uk-margin">
              <label>
                <input
                  name="random"
                  class="uk-checkbox"
                  type="checkbox"
                  checked
                />
                randomly match all unmatched
              </label>
            </div> */}
          </fieldset>

          <div class="uk-margin">
            <button
              class="uk-button uk-button-default"
              onClick={this.handleResetAllToDefaults}
            >
              reset all to defaults
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Options;
