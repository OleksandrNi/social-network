import { reduxForm } from "redux-form"
import { createField, Input, Textarea } from "../../common/FormsControl/FormsControl"


const ProfileDataForm = ({handleSubmit, profile, error}) => {
  
    console.log('errOut', error)
  return <form onSubmit={handleSubmit}>
    {console.log('errIns', error)}
  <div><button>Save</button></div>
  {error && <div>
    {error}
  </div>}
  <div>Full name:{createField('Full name', 'fullName', [], Input, 'text')}</div>
  <div>Looking for a JOB: {createField('', 'lookingForAJob', [], Input, 'checkbox')}</div>
  <div>About me: {createField('About me', 'aboutMe', [], Textarea, 'text')}</div>
  <div>Professional skills:{createField('Skills', 'lookingForAJobDescription', [], Textarea, 'text')}</div>
  <div>
    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
      return <div key={key}>
        <b>{key}:{createField(key, 'contacts.' + key.toLocaleLowerCase(), [], Input, 'text')}</b>
      </div>
    })}
  </div>
</form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;