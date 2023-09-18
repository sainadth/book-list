import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BooksArray } from "./books";
import Book from "./Book";

const root = ReactDOM.createRoot(document.getElementById("root"));

/* const BookList = () => {
  return (
    <section className="bookList">
      <Book
        imgSource={book.imgSource} title={book.title} author={book.author}="Chandrachur Ghose"
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
}; */

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

/* Using Arrays */
/*
const names = ["Vito Corleone", "Santino Corleone", "Micheal Corleone"];

root.render(names);

const nameComponents = names.map((name) => {
  return <h1>{name}</h1>;
});

console.log(nameComponents);
root.render(nameComponents); */

/* 
error in console 
react-dom.development.js:86 
 Warning: Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.
printWarning	@	react-dom.development.js:86
error	@	react-dom.development.js:60
warnForMissingKey	@	react-dom.development.js:14796
warnOnInvalidKey	@	react-dom.development.js:15275
reconcileChildrenArray	@	react-dom.development.js:15330
reconcileChildFibers	@	react-dom.development.js:15821
reconcileChildren	@	react-dom.development.js:19174
updateHostRoot	@	react-dom.development.js:19883
beginWork	@	react-dom.development.js:21615
beginWork$1	@	react-dom.development.js:27426
performUnitOfWork	@	react-dom.development.js:26557
workLoopSync	@	react-dom.development.js:26466
renderRootSync	@	react-dom.development.js:26434
performConcurrentWorkOnRoot	@	react-dom.development.js:25738
workLoop	@	scheduler.development.js:266
flushWork	@	scheduler.development.js:239
performWorkUntilDeadline	@	scheduler.development.js:533
*/

// const FormComponents = (props) => {
//   let heading = "Form";
//   let formInput = "";
//   const handleFormInput = (event) => {
//     console.log("handling form input");
//     formInput = event.target.value;
//     console.log(formInput);
//   };

//   /* const handleButtonClick = (e) => {
//     console.log(e);
//     alert("handling button click");
//   };

//   const handleFormSubmit = (formSubmitEvent) => {
//     console.log(formSubmitEvent);
//     formSubmitEvent.preventDefault();
//     console.log("handle form submit");
//   }; */
//   return (
//     <section style={{ margin: "4rem" }}>
//       <form action="">
//         <h2>{heading}</h2>
//         <input
//           type="text"
//           id="formInput"
//           style={{ margin: "1rem 0" }}
//           onChange={handleFormInput}
//         />
//       </form>
//       <button onClick={handleFormInput}>Find</button>
//     </section>
//   );
// };

const BooksComponents = () => {
  const getBookId = (id) => {
    const book = BooksArray.find((book) => {
      return id === book.id;
    });
    console.log(book.title);
  };
  return (
    <>
      {/* <FormComponents /> */}
      <h1 className="title">Amazon Best Sellers</h1>
      <section className="bookList">
        {BooksArray.map((book) => {
          const { imgSource, title, author, id } = book;
          return (
            <Book
              imgSource={imgSource}
              title={title}
              author={author}
              id={id}
              key={id}
              getBookId={getBookId}
            />
          );
        })}
      </section>
    </>
  );
};

/* 
  CALLING PARENTS METHODS IN CHILD
  pass method reference in props
  1. use ambiguous function
    () => method_name(params)
  2. create a method in child
    const child_method = () => {
      parent_method(params)
    }
*/

/* EXPORT
    1. Default Export   
        default export <NAME>
        import {<ANY NAME>} from FILE
    2. Normal Export
        export <NAME>
        import {<NAME>} from FILE
*/

root.render(<BooksComponents />);
