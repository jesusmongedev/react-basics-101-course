import React, { Component } from "react";
import Comment from "./components/Comment";
import "./css/style.css";
import { comment } from "./UserData";
import { newComment } from "./UserData";
import { lastComment } from "./UserData";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author}
        />
        <Comment
          date={newComment.date}
          text={newComment.text}
          author={newComment.author}
        />
        <Comment
          date={lastComment.date}
          text={lastComment.text}
          author={lastComment.author}
        />
      </div>
    );
  }
}

export default App;
