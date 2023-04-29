import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    isSubmited: false,
    firstName: '',
    lastName: '',
    firstnameErrMsg: '',
    lastNameErrMsg: '',
  }

  onChangeFirstName = e => {
    if (e.target.value.trim() === '') {
      this.setState({firstnameErrMsg: 'Required'})
    } else {
      this.setState({firstnameErrMsg: ''})
    }

    this.setState({firstName: e.target.value})
  }

  onChangeLastName = e => {
    if (e.target.value.trim() === '') {
      this.setState({lastNameErrMsg: 'Rewuired'})
    } else {
      this.setState({lastNameErrMsg: ''})
    }

    this.setState({lastName: e.target.value})
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName.trim() === '') {
      this.setState({firstnameErrMsg: 'Required'})
    } else {
      this.setState({firstnameErrMsg: ''})
    }
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    if (lastName.trim() === '') {
      this.setState({lastNameErrMsg: 'Required'})
    } else {
      this.setState({lastNameErrMsg: ''})
    }
  }

  onSubmitForm = e => {
    e.preventDefault()
    let {firstName, lastName} = this.state
    firstName = firstName.trim()
    lastName = lastName.trim()
    if (lastName === '' && firstName === '') {
      this.setState({
        firstnameErrMsg: 'Required',
        lastNameErrMsg: 'Required',
      })
    } else if (firstName === '') {
      this.setState({firstnameErrMsg: 'Required', lastNameErrMsg: ''})
    } else if (lastName === '') {
      this.setState({firstnameErrMsg: '', lastNameErrMsg: 'Required'})
    } else {
      this.setState({
        firstnameErrMsg: '',
        lastNameErrMsg: '',
        firstName: '',
        lastName: '',
        isSubmited: true,
      })
    }
  }

  onClickSubmitAnotherResponse = () => {
    this.setState({isSubmited: false})
  }

  renderForm = () => {
    const {firstnameErrMsg, lastNameErrMsg, firstName, lastName} = this.state
    return (
      <>
        <form onSubmit={this.onSubmitForm}>
          <div className="input-container">
            <label htmlFor="firstName" className="registration-label">
              FIRST NAME
            </label>
            <input
              type="text"
              className="input-field"
              id="firstName"
              placeholder="First name"
              onChange={this.onChangeFirstName}
              onBlur={this.onBlurFirstName}
              value={firstName}
            />
            <p className="error-msg">{firstnameErrMsg}</p>
          </div>
          <div className="input-container">
            <label htmlFor="lastName" className="registration-label">
              LAST NAME
            </label>
            <input
              type="text"
              className="input-field"
              id="lastName"
              placeholder="Last name"
              onChange={this.onChangeLastName}
              onBlur={this.onBlurLastName}
              value={lastName}
            />
            <p className="error-msg">{lastNameErrMsg}</p>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </>
    )
  }

  renderSuccessContent = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p className="on-success-msg">Submitted Successfully</p>
      <button
        type="button"
        className="submit-another-response-btn"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isSubmited} = this.state
    return (
      <div className="registration-form-container">
        <h1 className="main-heading">Registration</h1>
        <div className="content-container">
          {isSubmited ? this.renderSuccessContent() : this.renderForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
