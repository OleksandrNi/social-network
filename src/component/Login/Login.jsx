import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { login, logout } from "../../redux/authReducer";
import { required } from "../../utils/validators/validators";
import { createField, Input } from "../common/FormsControl/FormsControl";
import {Navigate} from 'react-router-dom';

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return <div>
    <form onSubmit={handleSubmit}>
      <div>
        {createField("Email", "email", [required], Input)}
      </div>
      <div>
        {createField("Password", "password", [required], Input, "text")}
      </div>
      <div>
        {createField(null, "rememberMe", null, Input, "checkbox")}
      </div>
      {captchaUrl && <img alt="captchaUrl" src={captchaUrl} />} 
      {captchaUrl && <div>{createField('input symbols', "captcha", [required], Input, null)}</div>} 
      {error && <div className="form-summary-error">
        {error}
      </div>}
      <div>
        <button>login</button>
      </div>
    </form>
  </div>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = ({ login, isAuth, captchaUrl }) => {
  const onSubmit = (formData) => {
    login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  };

  if (isAuth) {
    return <Navigate to='/profile' />
  };

  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
  </div>
}

const mapStateToProps = (state) => ({
  captchaUrl: state.authReducer.captchaUrl,
  isAuth: state.authReducer.isAuth,
})

export default connect(mapStateToProps, {login, logout})(Login);
