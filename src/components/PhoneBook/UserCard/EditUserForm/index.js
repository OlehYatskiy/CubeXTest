import React, { Component, Fragment } from 'react';
import { func, object } from "prop-types";
import { connect } from "react-redux";

import * as userActions from "../../../../modules/user/user.actions";

import { Image,
  Segment,
  Button,
  Input,
  Grid,
  Label,
  Container } from 'semantic-ui-react'
import classes from "./index.less";

class EditUserForm extends Component {

  constructor(props) {
    super(props);
    if (props.currentUser) {
      this.state = {
        ...props.currentUser,
        isActiveApplyButton: true,
      };
    } else {
      this.state = {
        firstName: '',
        lastName: '',
        avatarUrl: '',
        phone: '',
        email: '',
        company: '',
        isActiveApplyButton: false,
      }
    }
    this.state = {
      ...this.state,
      invalidFirstName: false,
      invalidLastName: false,
      invalidAvatarUrl: false,
      invalidPhone: false,
      invalidEmail: false,
      invalidCompany: false,
      disabledApllyButton: true,
      isEdit: false
    }
  }

  static propTypes = {
    currentUser: object,
    renderEditUserForm: func
	}

  componentDidMount() {
    this.inputRef.focus();
  }

  handleRef = (c) => {
    this.inputRef = c
  }

  isEnableApplyButton = () => {
    const { invalidFirstName,
      invalidLastName,
      invalidAvatarUrl,
      invalidPhone,
      invalidEmail,
      invalidCompany,
      disabledApllyButton,
      firstName,
      lastName,
      avatarUrl,
      phone,
      email,
      company
    } = this.state;

    this.setState( (state, props) => ({
        disabledApllyButton: state.invalidFirstName || state.invalidLastName ||
        state.invalidAvatarUrl || state.invalidAvatarUrl ||
        state.invalidPhone || state.invalidEmail || state.invalidCompany ||
        !state.firstName || !state.lastName || !state.avatarUrl || !state.phone ||
        !state.email || !state.company
      }));
  }

  onBlurHandler = (event) => {
    const name = event.target.name;
    const char = name.charAt(0);
    const invalidVal = 'invalid' + name.replace(char, char.toUpperCase());

    if (this.state[invalidVal] === false) {
      this.setState({
        [invalidVal]: event.target.value === '' ? true : false
      });
    }
    this.isEnableApplyButton();
  }

  onFirstNameInputChange = (event) => {
    const { firstName, invalidFirstName } = this.state;
    const namesRegExp = /[^a-zA-ZА-Яа-яіІїЇєЄ'ёЁ]/;
    const inputVal = event.target.value;

    this.setState({
      [event.target.name]: inputVal,
      invalidFirstName: (namesRegExp.test(inputVal) ||
        (inputVal.length > 20 )) ||
        !inputVal ? true : false
    });
    this.isEnableApplyButton();
  }

  onLastNameInputChange = (event) => {
    const { lastName, invalidLastName } = this.state;
    const namesRegExp = /[^a-zA-ZА-Яа-яіІїЇєЄ'ёЁ]/;
    const inputVal = event.target.value;

    this.setState({
      lastName: inputVal,
      invalidLastName: (namesRegExp.test(inputVal) ||
        (inputVal.length > 20 )) ||
        !inputVal ? true : false
    });
    this.isEnableApplyButton();
  }

  onAvatarUrlInputChange = (event) => {
    const { avatarUrl, invalidAvatarUrl } = this.state;
    const avatarRegExp = /\.(jpg|png|svg|ico)\b/i;
    const inputVal = event.target.value;

    this.setState({
      avatarUrl: inputVal,
      invalidAvatarUrl: avatarRegExp.test(inputVal) ? false : true
    });
    this.isEnableApplyButton();
  }

  onPhoneInputChange = (event) => {
    const { phone, invalidPhone } = this.state;
    const phoneRegExp = /\D/;
    const inputVal = event.target.value;

    this.setState({
      phone: inputVal,
      invalidPhone: (phoneRegExp.test(inputVal) ||
        (inputVal.length > 12 )) ||
        !inputVal ? true : false
    });
    this.isEnableApplyButton();
  }

  onEmailInputChange = (event) => {
    const { email, invalidEmail } = this.state;
    const emailRegExp = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/;
    const inputVal = event.target.value;

    this.setState({
      email: inputVal,
      invalidEmail: (emailRegExp.test(inputVal) ||
        (inputVal.length > 20 )) ? false : true
    });
    this.isEnableApplyButton();
  }

  onCompanyInputChange = (event) => {
    const { company, invalidCompany } = this.state;
    const namesRegExp = /[^\wА-Яа-яіІїЇєЄ'ёЁ ]/;
    const inputVal = event.target.value;

    this.setState({
      company: inputVal,
      invalidCompany: (namesRegExp.test(inputVal) ||
        (inputVal.length > 20 )) ||
        !inputVal ? true : false
    });
    this.isEnableApplyButton();
  }

  onApplyButtonClick = () => {
    const {
      id,
      firstName,
      lastName,
      avatarUrl,
      phone,
      email,
      company
    } = this.state;

    const userData = {
      firstName: firstName,
  		lastName: lastName,
  		avatarUrl: avatarUrl,
      phone: phone,
      email: email,
      company: company
    }

    if (!id) {
      this.props.addNewUser(userData);
    } else {
      this.props.updateUser(userData, id);
    }

    this.props.renderEditUserForm();
  }

    render() {
      const { renderEditUserForm } = this.props;
      const {
        firstName,
        lastName,
        avatarUrl,
        phone,
        email,
        company,
        isActiveApplyButton,
        invalidFirstName,
        invalidLastName,
        invalidAvatarUrl,
        invalidPhone,
        invalidEmail,
        invalidCompany,
        disabledApllyButton
      } = this.state;

      return (
        <Fragment>
          <Grid stackable columns={2}>
            <Grid.Column textAlign="right">
              <Segment.Group >
                <Segment basic>
                  <Label
                    content={"Firstname:"}
                    className={classes.inputLabel}
                    basic
                    attached='top'
                    />
                  <Input onChange={this.onFirstNameInputChange}
                    onBlur={this.onBlurHandler}
                    ref={this.handleRef}
                    name='firstName'
                    defaultValue={firstName}
                    error={invalidFirstName}
                    />
                </Segment>
                <Segment basic>
                  <Label
                    content={"Lastname:"}
                    className={classes.inputLabel}
                    basic
                    attached='top'
                    />
                  <Input onChange={this.onLastNameInputChange}
                    onBlur={this.onBlurHandler}
                    name='lastName'
                    defaultValue={lastName}
                    error={invalidLastName}
                    />
                </Segment>
                <Segment basic>
                  <Label
                    content={"AvatarUrl:"}
                    className={classes.inputLabel}
                    basic
                    attached='top'
                    />
                  <Input onChange={this.onAvatarUrlInputChange}
                    onBlur={this.onBlurHandler}
                    name='avatarUrl'
                    defaultValue={avatarUrl}
                    error={invalidAvatarUrl}
                    />
                </Segment>
              </Segment.Group>
            </Grid.Column>
            <Grid.Column textAlign="right">
              <Segment.Group>
                <Segment basic>
                  <Container textAlign="left">
                    Phone number:
                  </Container>
                  <Input onChange={this.onPhoneInputChange}
                    onBlur={this.onBlurHandler}
                    name='phone'
                    defaultValue={phone}
                    error={invalidPhone}
                    />
                </Segment>
                <Segment basic>
                  <Container textAlign="left">
                    Email:
                  </Container>
                  <Input onChange={this.onEmailInputChange}
                    onBlur={this.onBlurHandler}
                    name='email'
                    defaultValue={email}
                    error={invalidEmail}
                    />
                </Segment>
                <Segment basic>
                  <Container textAlign="left">
                    Company:
                  </Container>
                  <Input onChange={this.onCompanyInputChange}
                    onBlur={this.onBlurHandler}
                    name='company'
                    defaultValue={company}
                    error={invalidCompany}
                    />
                </Segment>
              </Segment.Group>
            </Grid.Column>
          </Grid>
          <Segment basic floated='right'>
            <Button onClick={renderEditUserForm}
              basic
              floated='left'
              content='Cancel'
              />
            <Button onClick={this.onApplyButtonClick}
              disabled={disabledApllyButton}
              content='Apply'
              color='green'
              />
          </Segment>
      </Fragment>
      )}
}


export default connect(null, { ...userActions })(EditUserForm);
