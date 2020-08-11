import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const cardShadow = ({ elevation }) => {
   let shadow;

   switch (elevation) {
      case 0:
         shadow = `box-shadow: none`;
         break;
      case 1:
         shadow = `box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 
                    0px 1px 1px 0px rgba(0,0,0,0.14), 
                    0px 1px 3px 0px rgba(0,0,0,0.12);`;
         break;
      case 2:
         shadow = `box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 
                    0px 2px 2px 0px rgba(0,0,0,0.14), 
                    0px 1px 5px 0px rgba(0,0,0,0.12);`;
         break;
      case 3:
         shadow = `box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 
                    0px 3px 4px 0px rgba(0,0,0,0.14), 
                    0px 1px 8px 0px rgba(0,0,0,0.12);`;
         break;
      case 4:
         shadow = `box-shadow: 0px 4px 4px -1px rgba(0,0,0,0.2), 
                    0px 4px 5px 0px rgba(0,0,0,0.14), 
                    0px 1px 10px 0px rgba(0,0,0,0.12);`;
         break;
      case 5:
         shadow = `box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),
                     0px 5px 8px 0px rgba(0,0,0,0.14),
                     0px 1px 14px 0px rgba(0,0,0,0.12);`;
         break;
      case 6:
         shadow = `box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 
                    0px 6px 10px 0px rgba(0,0,0,0.14),
                    0px 1px 18px 0px rgba(0,0,0,0.12)`;
         break;
      default:
         shadow = `box-shadow: none;`;
   }

   return css`
      ${shadow}
   `;
};

const Div = styled.div`
   text-align: ${(props) => (props.align === 'left' ? 'left' : 'right')};
   width: ${(props) => props.width};
   background-color: #dff9fb;
   border-radius: 4px;
   padding: 0.5rem;
   color: #30336b;
   margin-bottom: 1rem;

   ${cardShadow};

   .title {
      color: #535c68;
   }

   .subtitle {
      color: #008080;
   }
`;

const Card = ({ children, title, subTitle, width, elevation, align }) => {
   return (
      <Div width={width} elevation={elevation} align={align}>
         <h3 className='title'>{title}</h3>
         <h4 className='subtitle'>{subTitle}</h4>
         {children}
      </Div>
   );
};

Card.propTypes = {
   title: PropTypes.string,
   subTitle: PropTypes.string,
   width: PropTypes.string,
   elevation: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
};

export { Card };
