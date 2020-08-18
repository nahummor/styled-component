import React, { useEffect, useState } from 'react';
import { useMutation, queryCache } from 'react-query';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers';

import {
   Card,
   EditPencilIcon,
   DeleteOutLineIcon,
   YesNoModal,
   Input,
   SaveIcon,
   FormMessage,
   XIcon,
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

const formSchema = Yup.object().shape({
   todo: Yup.string().required('שדה חובה').min(4, 'תוכן המשימה לפחות 4 תווים'),
   userName: Yup.string().required('שדה חובה').min(2, 'שם לפחות 2 תווים'),
});

const deleteTodo = async (id) => {
   const response = await fetch(`http://localhost:4000/api/todo?todoId=${id}`, {
      method: 'DELETE',
   });
   return await response.json();
};

const saveTodo = async (todo) => {
   const response = await fetch('http://localhost:4000/api/todo', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ todo: todo }),
   });
   return await response.json();
};

const Todo = ({ todo }) => {
   const { register, handleSubmit, errors, formState, reset } = useForm({
      mode: 'onChange',
      resolver: yupResolver(formSchema),
   });
   const [editMode, setEditMode] = useState(false);
   const [openModal, setOpenModal] = useState(false);

   const [mutate, { status, data, error }] = useMutation(deleteTodo, {
      onSuccess: (ansFromBackend) => {
         queryCache.setQueryData(['todoList'], (prev) => {
            const index = prev.todoList.findIndex(
               (todo) => todo._id === ansFromBackend.todoId
            );

            const tempData = [...prev.todoList];
            tempData.splice(index, 1);
            return { todoList: [...tempData] };
         });
      },
   });

   const [
      save,
      { status: saveStatus, data: saveData, error: saveError },
   ] = useMutation(saveTodo, {
      onSuccess: (ansFromBackend) => {
         // update cache
         console.log('onSuccess Data: ', ansFromBackend);
         queryCache.setQueryData(['todoList'], (prev) => {
            const index = prev.todoList.findIndex(
               (todo) => todo._id === ansFromBackend.todo._id
            );
            const tempData = [...prev.todoList];
            tempData[index] = ansFromBackend.todo;
            return { todoList: [...tempData] };
         });
      },
   });

   useEffect(() => {
      console.log('Status: ', status);
      console.log('Data: ', data);
      console.log('Error: ', error);
   }, [data, status, error]);

   useEffect(() => {
      console.log('Save status: ', saveStatus);
      console.log('Save Data: ', saveData);
      console.log('Save Error: ', saveError);
   }, [saveStatus, saveData, saveError]);

   const editTodoHandler = () => {
      setEditMode(true);
      reset({ todo: todo.todo, userName: todo.userName });
   };

   const deleteTodoHandler = () => {
      setOpenModal(true);
   };

   const onSaveTodoHandler = (updatedTodo) => {
      const newTodo = { _id: todo._id, ...updatedTodo };
      save(newTodo);
      setEditMode(false);
   };

   const cancelEditTodoHandler = () => {
      setEditMode(false);
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
            <Input
               name='todo'
               type='text'
               placeholder='תיאור משימה'
               ref={register}
            />
            <FormMessage>
               <p>{errors.todo ? errors.todo.message : null}</p>
            </FormMessage>
            <Input
               name='userName'
               type='text'
               placeholder='שם משתמש'
               ref={register}
            />
            <FormMessage>
               <p>{errors.userName ? errors.userName.message : null}</p>
            </FormMessage>
         </InputContainer>

         <ButtonsContainer>
            <button
               type='submit'
               disabled={!formState.isValid}
               style={!formState.isValid ? { cursor: 'not-allowed' } : null}>
               <SaveIcon />
            </button>
            <button onClick={cancelEditTodoHandler} title='סגירה'>
               <XIcon />
            </button>
         </ButtonsContainer>
      </Card>
   );

   return (
      <>
         <form onSubmit={handleSubmit(onSaveTodoHandler)}>
            {editMode ? editCard : card}
         </form>

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
