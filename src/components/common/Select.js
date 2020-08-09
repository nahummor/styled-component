import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
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

const Select = ({ onChange, name, data }) => {
   const [options, setOptions] = useState([]);

   const getOptions = useCallback(() => {
      return data.map((item, index) => {
         return (
            <option key={index} value={item}>
               {item}
            </option>
         );
      });
   }, [data]);

   useEffect(() => {
      setOptions(getOptions());
   }, [getOptions]);

   return (
      <SelectListBox dir='rtl' name={name} onChange={onChange}>
         {options}
      </SelectListBox>
   );
};

Select.propTypes = {
   onChange: PropTypes.func,
   name: PropTypes.string,
   data: PropTypes.array,
};

export { Select };
