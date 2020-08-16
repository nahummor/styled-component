import React, { useState } from 'react';
import styled from 'styled-components';
import { usePaginatedQuery } from 'react-query';
import { PageLayout } from '../../common';
import Order from './Order';

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

const fetchOrders = async (key, page) => {
   const response = await fetch(
      `http://localhost:4000/api/orders?page=${page}`
   );
   return await response.json();
};

const Orders = () => {
   const [page, setPage] = useState(0);
   const {
      isLoading,
      isError,
      error,
      resolvedData,
      latestData,
      isFetching,
   } = usePaginatedQuery(['orders', page], fetchOrders, {
      refetchOnWindowFocus: false,
   });

   console.log('resolvedData: ', resolvedData);
   console.log('latestData: ', latestData);

   const onPrevPageHandler = () => {
      //   setPage((old) => Math.max(old - 1, 1));
      setPage((old) => Math.max(old - 1, 0));
   };

   const onNextPageHandler = () => {
      setPage((old) => (!latestData || !latestData.next ? old : old + 1));
   };

   const onFirstPageHandler = () => {
      //   setPage(1);
      setPage(0);
   };

   const onLastPageHandler = () => {
      setPage(Math.ceil(resolvedData.count / 10) - 1);
   };

   return (
      <PageLayout>
         <Container>
            <h1>הזמנות</h1>
            <ButtonsRow>
               <button onClick={onFirstPageHandler} disabled={page === 0}>
                  התחלה
               </button>
               <button onClick={onPrevPageHandler} disabled={page === 0}>
                  הקודם
               </button>
               <p>דף מספר {page + 1}</p>
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
                  {resolvedData.orders.map((order, index) => {
                     return <Order key={index} order={order} />;
                  })}
               </div>
            )}
         </Container>
      </PageLayout>
   );
};

export default Orders;
