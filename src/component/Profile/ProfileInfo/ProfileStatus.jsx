import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status)
  }, [props.status]);

  const onStatusChange = (e) =>  {
    setStatus(e.currentTarget.value)
  }

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status);
  }

  return (
    <div>
      {editMode
      ? <div>
        <input autoFocus={true} onBlur={deactivateEditMode} 
        value={status} onChange={onStatusChange}/>
      </div>
      : <div>
        <span onDoubleClick={activateEditMode}>{props.status || '------'}</span>
      </div>
      }
    </div>
  )
}

export default ProfileStatus;