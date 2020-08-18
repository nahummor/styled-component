import React, { useEffect, useState } from 'react';
import { useMutation, queryCache } from 'react-query';
import styled from 'styled-components';

import {
   Card,
   EditPencilIcon,
   DeleteOutLineIcon,
   YesNoModal,
   Input,
   SaveIcon,
} from '../../common';

const InputContainer = styled.div`
   width: 80%;
`;

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

const deleteTodo = async (id) => {
   const response = await fetch(`http://localhost:4000/api/todo?todoId=${id}`, {
      method: 'DELETE',
   });
   return await response.json();
};

const Todo = ({ todo }) => {
   const [editMode, setEditMode] = useState(false);
   const [openModal, setOpenModal] = useState(false);
   const [mutate, { status, data, error }] = useMutation(deleteTodo, {
      onSuccess: (ansFromBackend) => {
         //  console.log('onSuccess Data: ', ansFromBackend);
         queryCache.setQueryData(['todoList'], (prev) => {
            const index = prev.todoList.findIndex(
               (todo) => todo._id === ansFromBackend.todoId
            );

            return { todoList: [...prev.todoList.splice(1, index)] };
         });
      },
   });

   useEffect(() => {
      console.log('Status: ', status);
      console.log('Data: ', data);
      console.log('Error: ', error);
   }, [data, status, error]);

   const saveTodoHandler = () => {
      console.log('Save todo:', todo);
      setEditMode(false);
   };

   const editTodoHandler = () => {
      setEditMode(true);
   };

   const deleteTodoHandler = () => {
      setOpenModal(true);
   };

   const card = (
      <Card
         align={'right'}
         title={todo.todo}
         subTitle={todo.userName}
         width={'30rem'}
         elevation={5}>
         <ButtonsContainer>
            <button onClick={editTodoHandler}>
               <EditPencilIcon />
            </button>
            <button onClick={deleteTodoHandler}>
               <DeleteOutLineIcon />
            </button>
         </ButtonsContainer>
      </Card>
   );

   const editCard = (
      <Card
         align={'right'}
         title={''}
         subTitle={''}
         width={'30rem'}
         elevation={5}>
         <InputContainer>
            <Input type='text' name='todo' placeholder='תיאור משימה' />
            <Input type='text' name='userName' placeholder='שם משתמש' />
         </InputContainer>

         <ButtonsContainer>
            {editMode ? (
               <button onClick={saveTodoHandler}>
                  <SaveIcon />
               </button>
            ) : (
               <button onClick={editTodoHandler}>
                  <EditPencilIcon />
               </button>
            )}

            <button onClick={deleteTodoHandler}>
               <DeleteOutLineIcon />
            </button>
         </ButtonsContainer>
      </Card>
   );

   return (
      <>
         {editMode ? editCard : card}

         {/* add edit mode */}
         <YesNoModal
            show={openModal}
            onYes={() => {
               mutate(todo._id);
            }}
            onClose={() => setOpenModal(false)}
            message={'האם למחוק את המשימה ?'}
         />
      </>
   );
};

export default Todo;
