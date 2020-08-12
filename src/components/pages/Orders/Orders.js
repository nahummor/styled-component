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

const fetchOrders = async (page) => {
   const response = await fetch(
      `http://localhost:4000/api/orders?page=${page}`
   );
   return await response.json();
};

const Orders = () => {
   const [page, setPage] = useState(1);
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

   return (
      <PageLayout>
         <Container>
            <h1>הזמנות</h1>
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
