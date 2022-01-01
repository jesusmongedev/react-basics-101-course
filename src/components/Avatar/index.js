import React, { Component } from "react";

export class Avatar extends Component {
  constructor(props) {
    super(props);
  }
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
