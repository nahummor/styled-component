import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const cardShadow = ({ elevation }) => {
   let shadow;

   switch (elevation) {
      case 0:
         shadow = `box-shadow: 13px 13px 18px -31px rgba(0,0,0,0.75);`;
         break;
      case 1:
         shadow = `box-shadow: 13px 13px 18px -12px rgba(0,0,0,0.75);`;
         break;
      case 2:
         shadow = `box-shadow: 13px 13px 18px -2px rgba(0,0,0,0.75);`;
         break;
      case 3:
         shadow = `box-shadow: 13px 13px 14px 2px rgba(0,0,0,0.75);`;
         break;
      default:
         shadow = `box-shadow: 13px 13px 18px -31px rgba(0,0,0,0.75);`;
   }

   return css`
      ${shadow}
   `;
};

const Div = styled.div`
   text-align: right;
   width: ${(props) => props.width};
   background-color: #dff9fb;
   border-radius: 5px;
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

const Card = ({ children, title, subTitle, width, elevation }) => {
   return (
      <Div width={width} elevation={elevation}>
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
   elevation: PropTypes.oneOf([0, 1, 2, 3]),
};

export { Card };
