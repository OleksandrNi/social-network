import { Field } from 'redux-form';
import './FormsControl.scss';

export const Textarea = ({input, meta: {touched, error}, ...props}) => {
  const hasError = touched && error

  return (
    <div className={`formControl ${hasError ? 'error' : ''}`}>
      <div>
        <textarea {...input} {...props}/>
      </div>

      {hasError && <span>{error}</span>}
    </div>
  )
}

export const Input = ({input, meta: {touched, error}, ...props}) => {
  const hasError = touched && error

  return (
    <div className={`formControl ${hasError ? 'error' : ''}`}>
      <div>
        <input {...input} {...props}/>
      </div>

      {hasError && <span>{error}</span>}
    </div>
  )
}

export const createField = (placeholder, name, validators, component, type) => 
<Field placeholder={placeholder} name={name} component={component} validate={validators} type={type}/>
