import UserInfo from "../UserInfo";

import React, { Component } from "react";

export class Comment extends Component {
  constructor(props) {
    super(props);
  }

  formatDate = (date) => {
    date.toLocaleDateString();
  };

  render() {
    return (
      <div className="comment">
        <UserInfo user={this.props.author} />
        <div>{this.props.text}</div>
        <div className="comment-date">{this.formatDate(this.props.date)}</div>
      </div>
    );
  }
}

export default Comment;
