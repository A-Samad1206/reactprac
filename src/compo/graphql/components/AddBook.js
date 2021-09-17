import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from '../queries/Queries';

const AddBook = (props) => {
  const authors = useQuery(getAuthorsQuery);
  const [addBook, { data }] = useMutation(addBookMutation);
  console.log('datadatadatadata', data);
  const [book, setBook] = useState({
    name: '',
    genre: '',
    authorId: '',
  });
  const inputHandle = ({ target: { name, value } }) => {
    setBook((p) => ({
      ...p,
      [name]: value,
    }));
  };
  const submitHandle = (e) => {
    e.preventDefault();
    addBook({
      variables: { ...book },
      refetchQueries: [{ query: getBooksQuery }],
    });
  };
  return (
    <form id="add-book" onSubmit={submitHandle}>
      <div className="form-group">
        <label>Book Name:-</label>
        <input type="text" name="name" onChange={inputHandle} />
      </div>
      <div className="form-group">
        <label>Genre:-</label>
        <input type="text" name="genre" onChange={inputHandle} />
      </div>
      <div className="form-group">
        <label>Author:-</label>
        <select name="authorId" onChange={inputHandle}>
          {authors.loading ? (
            <option disabled>Loading authors...</option>
          ) : (
            <>
              <option>Select authors...</option>
              {authors.data.authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))}
            </>
          )}
        </select>
      </div>
      <button>+</button>
    </form>
  );
};

export default AddBook;
