import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { PageLayout } from '../../common';
import Person from './Person';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

const fetchPeople = async () => {
   const res = await fetch('https://swapi.dev/api/people/');
   return res.json();
};

const People = () => {
   const { data, status } = useQuery('planets', fetchPeople);
   console.log(data);

   return (
      <PageLayout>
         <Container>
            <h1>Star Wars Info</h1>
            <h2>People</h2>
            {status === 'loading' && <div>Loading Data....</div>}
            {status === 'error' && <div>Error fetch data</div>}
            {status === 'success' && (
               <div>
                  {data.results.map((person, index) => {
                     return <Person key={index} person={person} />;
                  })}
               </div>
            )}
         </Container>
      </PageLayout>
   );
};

export default People;
