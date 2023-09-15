import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const BookList = () => {
  return (
    <section className="bookList">
      <Book
        imgSource="https://m.media-amazon.com/images/I/71b4j+Y13-L._AC_CR0%2C0%2C0%2C0_SX480_SY360_.jpg"
        title="1947-1957, India: The Birth of a Republic"
        author="Chandrachur Ghose"
      />
      <Book
        imgSource="https://m.media-amazon.com/images/I/71yyYizBrmL._AC_CR0%2C0%2C0%2C0_SX480_SY360_.jpg"
        title="Bose: The Untold Story of an Inconvenien"
        author="Chandrachur Ghose"
      />
      <Book
        imgSource="https://m.media-amazon.com/images/I/91bYsX41DVL._SY385_.jpg"
        title="Atomic Habits: the life-changing million"
        author="James Clear"
      />
    </section>
  );
};

const Image = (params) => {
  return <img src={params.src} alt="" className="bookImage" />;
};

/* const Title = () => {
  return (
    <h3 className="bookTitle">1947-1957, India: The Birth of a Republic</h3>
  );
}; */

/* const Author = () => {
  return <h4 className="bookAuthor">Chandrachur Bose</h4>;
}; */

/* const Book = () => {
  return (
    <article className="book">
      <Image src="https://m.media-amazon.com/images/I/71b4j+Y13-L._AC_CR0%2C0%2C0%2C0_SX480_SY360_.jpg" />
      <Title />
      <Author />
    </article>
  );
}; */

root.render(<BookList />);

/* CSS */

/* inline */
const InlineStyle = () => {
  return (
    <h4
      className="bookAuthor"
      style={{ color: "blue", marginTop: "0.5rem", fontSize: "0.75rem" }}
    >
      Chandrachur Bose
    </h4>
  );
};
<InlineStyle />;

/* using JS Object */
const JSObjStyle = () => {
  const inlineObjStyle = {
    color: "blue",
    marginTop: "0.5rem",
    fontSize: "0.75rem",
  };
  return (
    <h4 className="bookAuthor" style={inlineObjStyle}>
      Chandrachur Bose
    </h4>
  );
};

<JSObjStyle />;

/* JSX */
/**
 * {} in JSX goes to JS Land
 * {} should only contain expression but not statements
 * statements eg let x = 6
 * {let x = 6} is invalid
 *
 * const title = "1947-1957, India: The Birth of a Republic"
 * {title} is valid
 * */

/* PROPS */

const Book = (props) => {
  return (
    <article className="book">
      <Image src={props.imgSource} />
      <Title title={props.title} />
      <Author author={props.author} />
    </article>
  );
};

const Title = (props) => {
  return <h3 className="bookTitle">{props.title}</h3>;
};

const Author = (props) => {
  return <h4 className="bookAuthor">{props.author}</h4>;
};

/* Using Arrays */
