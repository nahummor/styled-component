import React from 'react';
import styled from 'styled-components';
import { Input } from './';

const InputRow = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   gap: 0.5rem;
`;

const DropButton = styled.button`
   position: relative;
   background-color: #00a4e4;
   border-radius: 4px;
   width: 20%;
   height: 40px;
   cursor: pointer;
`;

const Title = styled.span`
   font-size: 1rem;
   font-weight: 600;
`;

const DropList = ({ title }) => {
   return (
      <InputRow>
         <DropButton type='button'>
            <Title>{title}</Title>
         </DropButton>
         <Input />
      </InputRow>
   );
};

export { DropList };
