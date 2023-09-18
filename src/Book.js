const Book = (props) => {
  const { imgSource, title, author, id, getBookId } = props;
  return (
    <article className="book">
      <Image src={imgSource} />
      <Title title={title} />
      <Author author={author} />
      <button
        className="book-button-getid"
        onClick={() => getBookId(id)}
        style={{ margin: "2rem 0 0 0" }}
      >
        Buy Now
      </button>
      <span>{`#${id + 1}`}</span>
    </article>
  );
};

const Title = (props) => {
  return <h3 className="bookTitle">{props.title}</h3>;
};

const Author = (props) => {
  return <h4 className="bookAuthor">{props.author}</h4>;
};

const Image = (params) => {
  return <img src={params.src} alt="" className="bookImage" />;
};

export default Book;
