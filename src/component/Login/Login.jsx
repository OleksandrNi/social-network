import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { login, logout } from "../../redux/authReducer";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { Input } from "../common/FormsControl/FormsControl";
import {Navigate} from 'react-router-dom'

const LoginForm = (props) => {
  return <div>
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder="Email" name="email" 
        component={Input} validate={[required]}/>
      </div>
      <div>
        <Field placeholder="Password" name="password" 
        component={Input} validate={[required]} type="password"/>
      </div>
      <div>
        <Field component={'input'} name="rememberMe" type="checkbox" /> remember me
      </div>
      <div>
        <button>login</button>
      </div>
    </form>
  </div>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }
  console.log(props)

  if (props.isAuth) {
    return <Navigate to='/profile' />
  }
  

  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
})

export default connect(mapStateToProps, {login, logout})(Login);
