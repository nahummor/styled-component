import styled from 'styled-components';

const Input = styled.input`
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
`;

export { Input };
