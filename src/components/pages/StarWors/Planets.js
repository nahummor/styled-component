import React from 'react';
import { useState } from 'react';
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

const ButtonsRow = styled.div`
   display: flex;
   flex-direction: row;
   gap: 2rem;
   padding: 1rem;
   margin-bottom: 1rem;
   background-color: #b7b7b7;
   border-radius: 5px;
   > button {
      box-shadow: 0px 1px 0px 0px #f0f7fa;
      background: linear-gradient(to bottom, #33bdef 5%, #019ad2 100%);
      background-color: #33bdef;
      border-radius: 6px;
      border: 1px solid #057fd0;
      display: inline-block;
      cursor: pointer;
      color: #ffffff;
      font-family: Arial;
      font-size: 15px;
      font-weight: bold;
      padding: 6px 24px;
      text-decoration: none;
      text-shadow: 0px -1px 0px #5b6178;
      outline: none;
   }

   > button:hover {
      background: linear-gradient(to bottom, #019ad2 5%, #33bdef 100%);
      background-color: #019ad2;
   }

   > button:active {
      position: relative;
      top: 1px;
   }
`;

const fetchPlanets = async (key, page) => {
   const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
   return res.json();
};

const Planets = () => {
   const [page, setPage] = useState(1);
   const { data, status } = useQuery(['planets', page], fetchPlanets, {
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
            <ButtonsRow>
               <button onClick={() => setPage(1)}>Page 1</button>
               <button onClick={() => setPage(2)}>Page 2</button>
               <button onClick={() => setPage(3)}>Page 3</button>
            </ButtonsRow>
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
