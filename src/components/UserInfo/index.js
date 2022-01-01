import React, { Component } from "react";
import Avatar from "../Avatar";

class UserInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="userInfo">
        <Avatar user={this.props.user} />
        <div className="userInfo-name">
          <h1>{this.props.name}</h1>
        </div>
      </div>
    );
  }
}

export default UserInfo;
