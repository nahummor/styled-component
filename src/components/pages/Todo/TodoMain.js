import React from 'react';
import styled from 'styled-components';

import { PageLayout } from '../../common';
import TodoList from './TodoList';
import AddNewTodo from './AddNewTodo';

const TodoAppContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 2rem;

   > .todo-content {
      display: flex;
      flex-direction: row;
      gap: 2rem;
   }
`;

const TodoMain = () => {
   return (
      <PageLayout>
         <TodoAppContainer>
            Main ToDo
            <div className='todo-content' dir='rtl'>
               <AddNewTodo />
               <TodoList />
            </div>
         </TodoAppContainer>
      </PageLayout>
   );
};

export default TodoMain;
