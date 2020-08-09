import React, { useState } from 'react';
import styled from 'styled-components';

import { PageLayout, Input, Button, Select } from '../common';

const Container = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   font-family: Rubik;

   > form {
      width: 400px;

      .form-title {
         font-weight: bold;
         letter-spacing: 1px;
      }
   }
`;

const AddPersonForm = () => {
   const [person, setPerson] = useState({
      firstName: '',
      lastName: '',
      city: '',
   });

   const addNewPerson = (event) => {
      event.preventDefault();
      console.log(person);
   };

   const onFieldChange = (event) => {
      event.persist();
      setPerson((oldValue) => {
         return { ...oldValue, [event.target.name]: event.target.value };
      });
   };

   return (
      <PageLayout>
         <Container dir='rtl'>
            <form>
               <p className='form-title'>תלמיד חדש</p>
               <Input
                  type='text'
                  name='firstName'
                  placeholder='שם פרטי'
                  value={person.firstName}
                  onChange={onFieldChange}
               />
               <Input
                  type='text'
                  name='lastName'
                  placeholder='שם משפחה'
                  value={person.lastName}
                  onChange={onFieldChange}
               />
               {/* <Input
                  type='text'
                  name='city'
                  placeholder='עיר'
                  value={person.city}
                  onChange={onFieldChange}
               /> */}
               <Select name='city' onChange={onFieldChange} />
               <Button primary large onClick={addNewPerson}>
                  הוספה
               </Button>
            </form>
         </Container>
      </PageLayout>
   );
};

export default AddPersonForm;
