import './FormsControl.scss';

export const Textarea = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error

  return (
    <div className={`formControl ${hasError ? 'error' : ''}`}>
      <div>
        <textarea {...input} {...props}/>
      </div>

      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const Input = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error

  return (
    <div className={`formControl ${hasError ? 'error' : ''}`}>
      <div>
        <input {...input} {...props}/>
      </div>

      {hasError && <span>{meta.error}</span>}
    </div>
  )
}