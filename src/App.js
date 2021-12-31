import Comment from "./components/Comment";
import "./css/style.css";

function App() {
  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      avatarUrl: "https://i.imgur.com/Y2ni0Bg.jpg",
      name: "Jesus Monge",
    },
  };
  const newComment = {
    date: new Date(),
    text: "I hope you enjoy learning Next.Js!",
    author: {
      avatarUrl: "https://www.w3schools.com/howto/img_avatar2.png",
      name: "Fatima Elizabeth",
    },
  };
  const lastComment = {
    date: new Date(),
    text: "I hope you enjoy learning Express.Js!",
    author: {
      avatarUrl: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Matias Bowen",
    },
  };

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

export default App;
