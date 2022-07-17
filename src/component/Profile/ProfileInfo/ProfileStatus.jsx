import React from "react";

class ProfileStatus extends React.Component{
  state = {
    editMode: false,
    status: this.props.status,
  }

  onStatusChange = (e) =>  {
    this.setState({
      status: e.currentTarget.value,
    })
  }

  activateEditMode() {
    this.setState({
      editMode: true,
    })
  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      })
    }
  }

  render () {
    return (
      <div>
        {this.state.editMode
        ? <div>
          <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} 
          value={this.state.status} onChange={this.onStatusChange}/>
        </div>
        : <div>
          <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || '------'}</span>
        </div>
        }
      </div>
    )
  }
  
}

export default ProfileStatus;