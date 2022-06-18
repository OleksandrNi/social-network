import React from "react";
import './DialogsItem.scss';
import {NavLink} from 'react-router-dom'

const DialogsItem = (props) => {
  let path = '/dialogs/' + (props.id);

  return (
    <div className="dialogs__item-name">
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

export default DialogsItem;
