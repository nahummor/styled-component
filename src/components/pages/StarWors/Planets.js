import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { PageLayout } from '../../common';
import Planet from './Planet';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

const fetchPlanets = async () => {
   const res = await fetch('https://swapi.dev/api/planets/');
   return res.json();
};

const Planets = () => {
   const { data, status } = useQuery('planets', fetchPlanets, {
      staleTime: 2000,
      refetchOnWindowFocus: false,
      onSuccess: () => console.log('Data fetch with no problem..'),
   });
   // console.log(data);

   return (
      <PageLayout>
         <Container>
            <h1>Star Wars Info</h1>
            <h2>Planets</h2>
            {status === 'loading' && <div>Loading Data....</div>}
            {status === 'error' && <div>Error fetch data</div>}
            {status === 'success' && (
               <div>
                  {data.results.map((planet, index) => {
                     return <Planet key={index} planet={planet} />;
                  })}
               </div>
            )}
         </Container>
      </PageLayout>
   );
};

export default Planets;
