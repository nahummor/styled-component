import React, { useEffect } from 'react';
import { useMutation, queryCache } from 'react-query';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers';

import { Card, Input, Button, PlusIcon, FormMessage } from '../../common';

const formSchema = Yup.object().shape({
   todo: Yup.string().required('שדה חובה').min(4, 'תוכן המשימה לפחות 4 תווים'),
   userName: Yup.string().required('שדה חובה').min(2, 'שם לפחות 2 תווים'),
});

const addNewTodo = async (todo) => {
   const response = await fetch('http://localhost:4000/api/todo/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
   });
   return await response.json();
};

const AddNewTodo = () => {
   const [mutate, { status, data, error }] = useMutation(addNewTodo, {
      onSuccess: (ansFromBackend) => {
         // ansFromBackend === data
         reset();
         queryCache.setQueryData(['todoList'], (prev) => {
            return { todoList: [...prev.todoList, ansFromBackend.ans.todo] };
         });

         console.log('onSuccess Data: ', ansFromBackend);
      },
   });

   const { register, handleSubmit, errors, formState, reset } = useForm({
      mode: 'onChange',
      resolver: yupResolver(formSchema),
   });

   useEffect(() => {
      console.log('Status: ', status);
      console.log('Data: ', data);
      console.log('Error: ', error);
   }, [data, status, error]);

   const onAddTodoHandler = (newTodo) => {
      // console.log(newTodo);
      mutate(newTodo);
   };

   return (
      <Card
         align={'right'}
         title={'משימה חדשה'}
         subTitle={'פרטים'}
         width={'20rem'}
         elevation={5}>
         <form onSubmit={handleSubmit(onAddTodoHandler)}>
            <Input ref={register} type='text' name='todo' placeholder='משימה' />
            <FormMessage>
               <p>{errors.todo ? errors.todo.message : null}</p>
            </FormMessage>
            <Input
               ref={register}
               type='text'
               name='userName'
               placeholder='שם משתמש'
            />
            <FormMessage>
               <p>{errors.userName ? errors.userName.message : null}</p>
            </FormMessage>

            <Button primary large type='submit' disabled={!formState.isValid}>
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'row',
                     justifyContent: 'center',
                     alignItems: 'center',
                     gap: '0.5rem',
                  }}>
                  <span>הוספה</span>
                  <PlusIcon />
               </div>
            </Button>
         </form>
      </Card>
   );
};

export default AddNewTodo;
