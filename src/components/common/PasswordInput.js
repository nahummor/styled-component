import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from './';

const PasswordInputWrapper = styled.div`
   display: flex;
   position: relative;

   /* select the first div after  PasswordInputWrapper */
   ~ div {
      margin-bottom: 8px;
   }
`;

const PasswordInputStyled = styled(Input).attrs(() => ({
   placeholder: 'Password',
}))`
   border-top-right-radius: 4px;
   border-bottom-right-radius: 4px;
`;

const ToggleButton = styled.div`
   position: absolute;
   right: 0rem;

   height: 40px;
   width: 4rem;
   box-sizing: border-box;
   font-size: 0.9rem;
   font-weight: bold;
   padding: 8px;
   border: 1px solid #ccc;
   border-left: 0;
   border-top-right-radius: 4px;
   border-bottom-right-radius: 4px;
   color: black;
   background: white;
   cursor: pointer;
   user-select: none;
`;

const PasswordInput = (props) => {
   const [showPassword, setShowPassword] = useState(false);

   return (
      <>
         <PasswordInputWrapper>
            <PasswordInputStyled
               {...props}
               type={showPassword ? 'text' : 'password'}
            />
            <ToggleButton onClick={() => setShowPassword((prev) => !prev)}>
               {showPassword ? 'Hide' : 'Show'}
            </ToggleButton>
         </PasswordInputWrapper>
         {/* <div>{showPassword ? props.value : ''}</div> */}
      </>
   );
};

export { PasswordInput };
