import React, { useState, useEffect } from 'react';
import { PageLayout, Input, PasswordInput, Button, Spinner } from '../common';
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

   .alt-text {
      text-align: center;
      margin: 10px 0;
   }
`;

let timeout;

const Login = () => {
   const [formFields, setFormFields] = useState({ userName: '', password: '' });
   const [loading, setLoading] = useState(false);

   const handelInputChange = (event) => {
      event.persist();

      setFormFields((oldState) => ({
         ...oldState,
         [event.target.name]: event.target.value,
      }));
   };

   const handelSubmit = (event) => {
      event.preventDefault();
      setLoading(true);

      timeout = setTimeout(() => {
         setLoading(false);
         console.log(formFields);
      }, 2000);
   };

   useEffect(() => {
      // run when component mount
      return () => {
         // run when component unmounted
         if (timeout) {
            clearTimeout(timeout);
         }
      };
   }, []);

   return (
      <PageLayout>
         <h1>Login</h1>
         <Form onSubmit={handelSubmit}>
            {loading ? (
               <Spinner />
            ) : (
               <>
                  <Input
                     value={formFields.userName}
                     onChange={handelInputChange}
                     type='text'
                     name='userName'
                     placeholder='User Name'
                  />

                  <PasswordInput
                     value={formFields.password}
                     onChange={handelInputChange}
                     name='password'
                  />
               </>
            )}
            <Button primary large type='submit' disabled={loading}>
               {loading ? 'Loading...' : 'Login'}
            </Button>

            {!loading && (
               <>
                  <div className='alt-text'>Or</div>
                  <Button secondary type='button'>
                     Registry
                  </Button>
               </>
            )}
         </Form>
      </PageLayout>
   );
};

export default Login;
