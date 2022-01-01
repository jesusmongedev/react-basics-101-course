import UserInfo from "../UserInfo";
import React, { Component } from "react";
class Comment extends Component {
  // explicit return required inside block, but is missing.
  // formatDate = (date) => {date.toLocaleDateString();}
  // no block means implicit return
  formatDate = (date) => date.toLocaleDateString();

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
