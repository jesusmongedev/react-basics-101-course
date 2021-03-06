import Comment from "./components/Comment";
import { comment } from "./UserData";
import { newComment } from "./UserData";
import { lastComment } from "./UserData";
import "./css/index.css";

function App() {
  return (
    <div>
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

export default App;
