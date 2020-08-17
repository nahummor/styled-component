import React from 'react';
import styled from 'styled-components';

import { Card, EditPencilIcon, DeleteOutLineIcon } from '../../common';

const ButtonsContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.2rem;
   align-items: flex-end;
   /* position: relative;
   top: -4.3rem;
   right: -0.5rem; */
   position: absolute;
   top: 0.5rem;
   right: 90%;

   > button {
      background-color: transparent;
      border-style: none;
      outline: none;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 50%;
      transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
         background-color: white;
      }

      &:active {
         background-color: #e0f2f1;
      }
   }
`;

const Todo = ({ todo }) => {
   const editTodo = () => {
      console.log('Edit todo:', todo);
   };

   const deleteTodo = () => {
      console.log('Delete todo: ', todo);
   };

   return (
      <Card
         align={'right'}
         title={todo.todo}
         subTitle={todo.userName}
         width={'30rem'}
         elevation={5}>
         <ButtonsContainer>
            <button onClick={editTodo}>
               <EditPencilIcon />
            </button>
            <button onClick={deleteTodo}>
               <DeleteOutLineIcon />
            </button>
         </ButtonsContainer>
      </Card>
   );
};

export default Todo;
