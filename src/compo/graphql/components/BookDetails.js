import React from 'react';
import { useQuery } from '@apollo/client';
import { getBookQuery } from '../queries/Queries';

const BookDetails = ({ id }) => {
  const { data, loading } = useQuery(getBookQuery, {
    variables: { id: id },
  });
  return (
    <div id="book-details">
      <p>Output book details here</p>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>{data.book.name}</h2>
          <p>{data.book.genre}</p>
          <p>{data.book.author.name}</p>
          <p>All books by this author:-</p>
          <ul className="other-books">
            {data.book.author.books.map((ab) => (
              <li key={ab.id}>
                {ab.name},<small>{ab.genre}</small>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default BookDetails;
