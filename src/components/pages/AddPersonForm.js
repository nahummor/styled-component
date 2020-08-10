import React, { useState } from 'react';
import styled from 'styled-components';

import { PageLayout, Input, Button, Select, DropList, Card } from '../common';

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

const MainContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
`;

const cites = ['באר שבע', 'ירושלים', 'תל אביב', 'חיפה'];

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

   const onCityChange = (city) => {
      setPerson((oldValue) => {
         return { ...oldValue, city };
      });
   };

   return (
      <PageLayout>
         <MainContainer>
            <Card
               title={'חדש'}
               subTitle={'כותרת משנית'}
               width={'30rem'}
               elevation={5}>
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
                     <Select
                        name='city'
                        onChange={onFieldChange}
                        data={cites}
                     />
                     <DropList
                        name='city'
                        title={'עיר'}
                        data={cites}
                        defaultValue={''}
                        placeHolder={'בחר עיר'}
                        onValueChange={onCityChange}
                     />

                     <Button primary large onClick={addNewPerson}>
                        הוספה
                     </Button>
                  </form>
               </Container>
            </Card>
         </MainContainer>
      </PageLayout>
   );
};

export default AddPersonForm;
