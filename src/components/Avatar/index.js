import React, { Component } from "react";
class Avatar extends Component {
  render() {
    return (
      <img
        className="avatar"
        src={this.props.user.avatarUrl}
        alt={this.props.name}
      />
    );
  }
}

export default Avatar;
