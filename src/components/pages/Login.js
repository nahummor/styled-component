import React, { useState } from 'react';
import { PageLayout, Input } from '../common';
import styled from 'styled-components';

const Form = styled.form`
   width: 100%;
   max-width: 400px;
   background: white;
   border: 1px solid #eee;
   padding: 16px;
   box-sizing: border-box;
   color: black;
   border-radius: 4px;
`;

const Login = () => {
   const [formFields, setFormFields] = useState({ userName: '', password: '' });

   const handelInputChange = (event) => {
      event.persist();

      setFormFields((oldState) => ({
         ...oldState,
         [event.target.name]: event.target.value,
      }));
   };

   return (
      <PageLayout>
         <h1>Login</h1>
         <Form>
            <Input
               value={formFields.userName}
               onChange={handelInputChange}
               type='text'
               name='userName'
               placeholder='User Name'
            />
            <Input
               value={formFields.password}
               onChange={handelInputChange}
               type='password'
               name='password'
               placeholder='Password'
            />
         </Form>
      </PageLayout>
   );
};

export default Login;
