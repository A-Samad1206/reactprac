import React from 'react';
import { useQuery } from 'react-query';
import Person from './Person';

const fetchPeoples = async () => {
  const res = await fetch('https://swapi.dev/api/people/');
  return res.json();
};
const People = () => {
  const { data, status } = useQuery('peoples', fetchPeoples, {
    staleTime: 0,
    cacheTime: 2000,
    retry: 4,
  });
  return (
    <div>
      <h2>People</h2>
      {/* { status } */}

      {status === 'loading' && <div>Loading data</div>}

      {status === 'error' && <div>Error fetching data</div>}

      {status === 'success' && (
        <div>
          {data.results.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
