import React, { useState } from 'react';
import { usePaginatedQuery } from 'react-query';
import styled from 'styled-components';
import { PageLayout } from '../../common';
import Person from './Person';

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
      font-size: 1rem;
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

   > button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
   }

   > p {
      margin: 0;
   }
`;

const fetchPeople = async (key, page = 1) => {
   const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
   return res.json();
};

const People = () => {
   const [page, setPage] = useState(1);
   //    const { data, status } = useQuery('people', fetchPeople);
   const {
      isLoading,
      isError,
      error,
      resolvedData,
      latestData,
      isFetching,
   } = usePaginatedQuery(['people', page], fetchPeople, {
      refetchOnWindowFocus: false,
   });

   console.log('resolvedData: ', resolvedData);
   console.log('latestData: ', latestData);

   const onPrevPageHandler = () => {
      setPage((old) => Math.max(old - 1, 1));
   };

   const onNextPageHandler = () => {
      setPage((old) => (!latestData || !latestData.next ? old : old + 1));
   };

   const onFirstPageHandler = () => {
      setPage(1);
   };

   const onLastPageHandler = () => {
      setPage(Math.ceil(resolvedData.count / 10));
   };

   return (
      <PageLayout>
         <Container>
            <h1>Star Wars Info</h1>
            <h2>People</h2>

            <ButtonsRow>
               <button onClick={onFirstPageHandler} disabled={page === 1}>
                  התחלה
               </button>
               <button onClick={onPrevPageHandler} disabled={page === 1}>
                  הקודם
               </button>
               <p>דף מספר {page}</p>
               <button
                  onClick={onNextPageHandler}
                  disabled={!latestData || !latestData.next}>
                  הבא
               </button>
               <button
                  onClick={onLastPageHandler}
                  disabled={!latestData || !latestData.next}>
                  סוף
               </button>
            </ButtonsRow>

            {isFetching ? <span> Loading...</span> : null}
            {isLoading ? (
               <div>Loading Data....</div>
            ) : isError ? (
               <div>Error fetch data: {error}</div>
            ) : (
               <div>
                  {resolvedData.results.map((person, index) => {
                     return <Person key={index} person={person} />;
                  })}
               </div>
            )}
         </Container>
      </PageLayout>
   );
};

export default People;
