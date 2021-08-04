import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/Queries';
import BookDetails from './BookDetails';

const BookLists = (props) => {
  const { data, loading, error } = useQuery(getBooksQuery);
  const [id, setId] = useState(false);
  return (
    <div>
      <ul className="book-list">
        {loading ? (
          <li>Data loading...</li>
        ) : (
          data?.books?.map((book) => (
            <li
              key={book.id}
              onClick={(e) => {
                setId(book.id);
              }}
            >
              {book.name}
            </li>
          ))
        )}
      </ul>
      {id && <BookDetails id={id} />}
    </div>
  );
};

export default BookLists;
