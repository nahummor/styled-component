import styled, { css } from 'styled-components';

const Button = styled.button`
   color: white;
   background: ${(props) =>
      props.primary ? props.theme.primaryColor : props.theme.secondaryColor};
   font-weight: bold;

   box-shadow: none;

   border: none;
   width: 100%;
   display: block;
   white-space: none;

   transition: background 200ms linear;

   ${(props) =>
      props.large
         ? css`
              padding: 10px;
              font-size: 1.5rem;
              border-radius: 5px;
           `
         : css`
              padding: 8px;
              font-size: 1rem;
              border-radius: 4px;
           `}

   &:disabled {
      background: #eee;
      color: #666;
   }

   &:hover {
      background: #eb75be;
   }
`;

export { Button };
