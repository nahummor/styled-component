import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers';

import {
   PageLayout,
   Input,
   Button,
   DropList,
   Card,
   FormMessage,
} from '../common';

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

const formSchema = Yup.object().shape({
   firstName: Yup.string().required('שדה חובה').min(2, 'שם פרטי לפחות 2 תווים'),
   lastName: Yup.string().required('שדה חובה').min(2, 'שם משפחה לפחות 2 תווים'),
   city: Yup.string().required('שדה חובה'),
});

const AddPersonForm = () => {
   const { register, handleSubmit, errors, formState, setValue } = useForm({
      mode: 'onChange',
      resolver: yupResolver(formSchema),
   });

   //    const onFieldChange = (event) => {
   //       event.persist();
   //       console.log(event.target.name, event.target.value);
   //    };
   const onItemChange = (item) => {
      setValue('city', item, { shouldValidate: true });
   };

   const onAddPersonHandler = (formData) => {
      console.log(formData);
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
                  <form onSubmit={handleSubmit(onAddPersonHandler)}>
                     <p className='form-title'>תלמיד חדש</p>
                     <Input
                        ref={register}
                        type='text'
                        name='firstName'
                        placeholder='שם פרטי'
                     />
                     <FormMessage>
                        <p>
                           {errors.firstName ? errors.firstName.message : null}
                        </p>
                     </FormMessage>
                     <Input
                        ref={register}
                        type='text'
                        name='lastName'
                        placeholder='שם משפחה'
                     />
                     <FormMessage>
                        <p>
                           {errors.lastName ? errors.lastName.message : null}
                        </p>
                     </FormMessage>
                     {/* <Select
                        name='city'
                        onChange={onFieldChange}
                        data={cites}
                     /> */}
                     <DropList
                        inputRef={register}
                        inputName={'city'}
                        title={'עיר'}
                        data={cites}
                        defaultValue={''}
                        placeHolder={'בחר עיר'}
                        onItemChange={onItemChange}
                     />
                     {/* <FormMessage type={'info'}>
                        <p>שדה חובה</p>
                     </FormMessage> */}
                     <Button
                        primary
                        large
                        type='submit'
                        disabled={!formState.isValid}>
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
