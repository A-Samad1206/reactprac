// import uuid from 'uuid/v1';

export const bookReducer = (state, action) => {
  console.log('From reducer');
  switch (action.type) {
    case 'ADD_BOOK':
      // const fet = async () => {
      //   const data = await fetch(
      //     'https://jsonplaceholder.typicode.com/comments'
      //   );
      //   const data2 = await data.json();
      //   console.log('Data', data2);

      //   const url = `https://nexombackend.herokuapp.com/products`;
      //   const data3 = await fetch(url);
      //   const data23 = await data3.json();
      //   console.log('Data', data23);
      //   console.log('state', state);
      // };
      // fet();
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: Math.random(),
        },
      ];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
