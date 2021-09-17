import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-query';
// import {   useIsFetching,   } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async (q) => {
  console.log('ket', q);
  const res = await fetch(
    `https://swapi.dev/api/planets?page=${q.queryKey[1]}`
  );
  return res.json();
};
// const fetchPlanetsTwo = async (q) => {
//   console.log('Twoket', q);
//   const res = await fetch(
//     `https://swapi.dev/api/planets?page=${q.queryKey[1]}`
//   );
//   return res.json();
// };

const addUser = async (user) => {
  const res = await fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify({
      name: user.name,
      job: user.job,
    }),
    header: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (!res.ok) {
    throw new Error('Some thing went Wrong');
  } else return res.json();
};

const Planets = () => {
  // const { data: user } = useQuery(['user', email], getUserByEmail)
  const [page, setPage] = useState(1);
  // const userId = user?.id;

  const { data, status, isLoading, isError, error } = useQuery(
    ['planets', page],
    fetchPlanets,
    {
      // keepPreviousData: true,
      // staleTime: 0,
      // cacheTime: 5000,
      // retry: 3,
      // retryDelay: 5000,
      // onSuccess: () => console.log('Data fetched'),
      // enabled: !!userId,// The query will not execute until the userId exists
      //refetchOnWindowFocus:false
      // refetchInterval: 2000,
    }
  );
  const {
    mutate,
    mutateAsync,
    isLoading: isAddingUser,
    error: addError,
  } = useMutation(addUser, {
    onMutate: (variables) => {
      // A mutation is about to happen!
      console.log('===onMutate');
      console.table({ variables });
      console.log('---onMutate');

      // Optionally return a context containing data to use when for example rolling back
      return { id: 1 };
    },
    onError: (error, variables, context) => {
      console.log('===onError');
      console.table({ error, variables, context });
      console.log('---onError');
      // An error happened!
      // console.log(`rolling back optimistic update with id ${context.id}`);
    },
    onSuccess: (data, variables, context) => {
      console.log('===onsuccess');
      console.table({ data, variables, context });
      console.log('---onsuccess');
    },
    onSettled: (data, error, variables, context) => {
      console.log('===onSettled');
      console.table({ data, variables, context, error });
      console.log('---onSettled');
    },
  });
  // console.table({ mutate, mutateAsync });
  // console.log('mutate', mutate);
  console.log('isAddingUser', isAddingUser);
  // console.log('mutateAsync', mutateAsync);
  console.log('addError', addError);

  // const {
  //   resolvedData,
  //   latestData,
  //   status: statUSPage,
  // } = usePaginatedQuery(['plants', page], fetchPlanetsTwo);
  // console.log('resolvedData', resolvedData);
  // console.log('latestData', latestData);
  // console.log('statUSPage', statUSPage);
  // console.table({ data, status, isLoading, isError, error });
  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch('https://swapi.dev/api/planets');
  //     const data2 = await res.json();
  //     // console.log('object', data2);
  //   })();
  // }, []);
  // const isFetching = useIsFetching();

  return (
    <div>
      {/* {isFetching ? <div>Queries are fetching in the background...</div> : null} */}
      <button onClick={() => mutate({ name: 'Abdus Samad', job: 'Scientist' })}>
        Add User
      </button>
      <h2>Planets</h2>
      <button onClick={() => setPage(1)}>Page 1</button>
      <button onClick={() => setPage(2)}>Page 2</button>
      <button onClick={() => setPage(3)}>Page 3</button>
      {isError && <div>{error}</div>}
      {isLoading && <div>Loading... </div>}
      {status === 'success' && (
        <div>
          {data.results.map((planet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
