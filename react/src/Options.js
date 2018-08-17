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
        <h2 className="uk-text-capitalize">options</h2>
        <h4>Be careful, what you modify here will affect the matches</h4>
        <hr className="uk-divider-icon" />
        <form className="uk-text-left uk-form-horizontal">
          <div className="uk-grid-small" uk-grid="">
            <div className="uk-width-1-2@s">
              <fieldset className="uk-fieldset">
                <legend className="uk-legend uk-text-capitalize">
                  mentor spreadsheet
                </legend>
                <div className="uk-margin">
                  <label className="uk-form-label" htmlFor="form-stacked-text">
                    spreadsheet id
                  </label>
                  <div className="uk-form-controls">
                    <input
                      name="spmpMentorSpreadsheetId"
                      className="uk-input uk-form-width-small"
                      type="text"
                      required
                      value={spmpMentorSpreadsheetId}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="uk-margin">
                  <label className="uk-form-label" htmlFor="form-stacked-text">
                    spreadsheet range
                  </label>
                  <div className="uk-form-controls">
                    <input
                      name="spmpMentorRange"
                      className="uk-input uk-form-width-small"
                      type="text"
                      required
                      value={spmpMentorRange}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset className="uk-fieldset">
                <legend className="uk-legend uk-text-capitalize">
                  mentor data index
                </legend>

                <div className="uk-margin">
                  <label className="uk-form-label" htmlFor="form-stacked-text">
                    name
                  </label>
                  <div className="uk-form-controls">
                    <input
                      name="spmpMentorName"
                      className="uk-input uk-form-width-small"
                      type="text"
                      required
                      value={spmpMentorName}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="uk-margin">
                  <label className="uk-form-label" htmlFor="form-stacked-text">
                    email
                  </label>
                  <div className="uk-form-controls">
                    <input
                      name="spmpMentorEmail"
                      className="uk-input uk-form-width-small"
                      type="email"
                      required
                      value={spmpMentorEmail}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="uk-margin">
                  <label className="uk-form-label" htmlFor="form-stacked-text">
                    college
                  </label>
                  <div className="uk-form-controls">
                    <input
                      name="spmpMentorCollege"
                      className="uk-input uk-form-width-small"
                      type="text"
                      required
                      value={spmpMentorCollege}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="uk-margin">
                  <label className="uk-form-label" htmlFor="form-stacked-text">
                    major
                  </label>
                  <div className="uk-form-controls">
                    <input
                      name="spmpMentorMajor"
                      className="uk-input uk-form-width-small"
                      type="text"
                      required
                      value={spmpMentorMajor}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </fieldset>
            </div>
            <div className="uk-width-1-2@s">
              <fieldset className="uk-fieldset">
                <legend className="uk-legend uk-text-capitalize">
                  mentee spreadsheet
                </legend>
                <div className="uk-margin">
                  <label className="uk-form-label" htmlFor="form-stacked-text">
                    spreadsheet id
                  </label>
                  <div className="uk-form-controls">
                    <input
                      name="spmpMenteeSpreadsheetId"
                      className="uk-input uk-form-width-small"
                      type="text"
                      required
                      value={spmpMenteeSpreadsheetId}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="uk-margin">
                  <label className="uk-form-label" htmlFor="form-stacked-text">
                    spreadsheet range
                  </label>
                  <div className="uk-form-controls">
                    <input
                      name="spmpMenteeRange"
                      className="uk-input uk-form-width-small"
                      type="text"
                      required
                      value={spmpMenteeRange}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset className="uk-fieldset">
                <legend className="uk-legend uk-text-capitalize">
                  mentee data index
                </legend>

                <div className="uk-margin">
                  <label className="uk-form-label" htmlFor="form-stacked-text">
                    name
                  </label>
                  <div className="uk-form-controls">
                    <input
                      name="spmpMenteeName"
                      className="uk-input uk-form-width-small"
                      type="text"
                      required
                      value={spmpMenteeName}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="uk-margin">
                  <label className="uk-form-label" htmlFor="form-stacked-text">
                    email
                  </label>
                  <div className="uk-form-controls">
                    <input
                      name="spmpMenteeEmail"
                      className="uk-input uk-form-width-small"
                      type="email"
                      required
                      value={spmpMenteeEmail}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="uk-margin">
                  <label className="uk-form-label" htmlFor="form-stacked-text">
                    college
                  </label>
                  <div className="uk-form-controls">
                    <input
                      name="spmpMenteeCollege"
                      className="uk-input uk-form-width-small"
                      type="text"
                      required
                      value={spmpMenteeCollege}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="uk-margin">
                  <label className="uk-form-label" htmlFor="form-stacked-text">
                    major
                  </label>
                  <div className="uk-form-controls">
                    <input
                      name="spmpMenteeMajor"
                      className="uk-input uk-form-width-small"
                      type="text"
                      required
                      value={spmpMenteeMajor}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <fieldset className="uk-fieldset">
            <legend className="uk-legend uk-text-capitalize">
              match criteria
            </legend>
            <div className="uk-margin">
              <label>
                <input
                  name="matchByMajors"
                  className="uk-checkbox uk-margin-small-right"
                  type="checkbox"
                  checked
                  value={matchByMajors}
                  onChange={this.handleChange}
                />
                match by majors
              </label>
            </div>
            <div className="uk-margin">
              <label>
                <input
                  name="matchByColleges"
                  className="uk-checkbox uk-margin-small-right"
                  type="checkbox"
                  checked
                  value={matchByColleges}
                  onChange={this.handleChange}
                />
                match by colleges
              </label>
            </div>
            {/* <div className="uk-margin">
              <label>
                <input
                  name="random"
                  className="uk-checkbox"
                  type="checkbox"
                  checked
                />
                randomly match all unmatched
              </label>
            </div> */}
          </fieldset>

          <div className="uk-margin">
            <button
              className="uk-button uk-button-default"
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
