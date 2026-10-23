function Child({ books }) {
    if (!books || books.length === 0) {
      return <p>წიგნები არ მოიძებნა</p>;
    }
  
    return (
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.name}</strong> - {book.author}
          </li>
        ))}
      </ul>
    );
  }
  
  export default Child;