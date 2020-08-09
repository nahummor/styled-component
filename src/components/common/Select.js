import React from 'react';
import styled from 'styled-components';

const SelectListBox = styled.select`
   padding: 4px 8px;
   border: 1px solid #ccc;
   border-radius: 4px;
   font-size: 1rem;
   font-family: 'Open Sans';
   margin-bottom: 8px;
   width: 100%;
   box-sizing: border-box;
   height: 40px;

   &:focus {
      box-shadow: 0 0 3px 2px blue;
      outline: none;
   }

   > option {
      font-size: 1rem;
      font-family: 'Open Sans';
   }
`;

const Select = ({ onChange, name }) => {
   return (
      <SelectListBox dir='rtl' name={name} onChange={onChange}>
         <option value='באר שבע'>באר שבע</option>
         <option value='תל אביב'>תל אביב</option>
         <option value='רחובות'>רחובות</option>
         <option value='חדרה'>חדרה</option>
      </SelectListBox>
   );
};

export { Select };
