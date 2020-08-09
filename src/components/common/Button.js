import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const largeStyle = ({ large }) => {
   if (large) {
      return css`
         padding: 10px;
         font-size: 1.5rem;
         border-radius: 5px;
      `;
   } else {
      return css`
         padding: 8px;
         font-size: 1rem;
         border-radius: 4px;
      `;
   }
};

const Button = styled.button`
   color: white;
   background: ${(props) =>
      props.primary ? props.theme.primaryColor : props.theme.secondaryColor};
   font-weight: bold;
   outline: none;
   box-shadow: none;
   cursor: pointer;

   border: none;
   width: 100%;
   display: block;
   white-space: none;

   transition: background 200ms linear;

   ${largeStyle}

   &:disabled {
      background: #eee;
      color: #666;
   }

   &:hover {
      background: #eb75be;
   }
`;

Button.propTypes = {
   large: PropTypes.bool,
   secondary: PropTypes.bool,
};

export { Button };

// ${(props) =>
//     props.large
//        ? css`
//             padding: 10px;
//             font-size: 1.5rem;
//             border-radius: 5px;
//          `
//        : css`
//             padding: 8px;
//             font-size: 1rem;
//             border-radius: 4px;
//          `}
