import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
   width: 1.5rem;
   height: 1.5rem;
   fill: currentColor;
`;

export const CameraIcon = () => {
   return (
      <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
         <path d='M20 7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h2.38l1.73-3.45A1 1 0 0 1 9 3h6a1 1 0 0 1 .9.55L17.61 7H20zM9.62 5L7.89 8.45A1 1 0 0 1 7 9H4v10h16V9h-3a1 1 0 0 1-.9-.55L14.39 5H9.62zM12 17a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' />
      </Svg>
   );
};

export const CheckmarkIcon = () => {
   return (
      <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0  24 24'>
         <path d='M0 11l2-2 5 5L18 3l2 2L7 18z' />
      </Svg>
   );
};

const EditPencilIcon = () => {
   return (
      <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
         <path d='M0 0h24v24H0z' fill='none' />
         <path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' />
      </Svg>
   );
};

export const MenuIcon = () => {
   return (
      <Svg
         className='w-8 h-8 fill-current'
         xmlns='http://www.w3.org/2000/svg'
         viewBox='0 0 24 24'>
         <path d='M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z' />
      </Svg>
   );
};

const XIcon = () => {
   return (
      <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
         <path d='M16.24 14.83a1 1 0 01-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 01-1.41-1.41L10.59 12 7.76 9.17a1 1 0 011.41-1.41L12 10.59l2.83-2.83a1 1 0 011.41 1.41L13.41 12l2.83 2.83z' />
      </Svg>
   );
};

const DropDownIcon = () => {
   return (
      <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
         <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
      </Svg>
   );
};

export const LeftIcon = () => {
   return (
      <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
         <path d='M14.7 15.3a1 1 0 0 1-1.4 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.4 1.4L11.42 12l3.3 3.3z' />
      </Svg>
   );
};

export const RightIcon = () => {
   return (
      <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
         <path d='M9.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z' />
      </Svg>
   );
};

export const PlusIcon = () => {
   return (
      <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
         <path d='M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z' />
      </Svg>
   );
};

export const MinusIcon = () => {
   return (
      <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
         <path d='M17 11a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h10z' />
      </Svg>
   );
};

const DeleteOutLineIcon = () => {
   return (
      <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
         <path d='M0 0h24v24H0V0z' fill='none' />
         <path d='M6 19c0 1.1.9 2 2 2h8a2 2 0 002-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z' />
      </Svg>
   );
};

const SaveIcon = () => {
   return (
      <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
         <path d='M0 0h24v24H0z' fill='none' />
         <path d='M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z' />
      </Svg>
   );
};

export { DropDownIcon, EditPencilIcon, XIcon, DeleteOutLineIcon, SaveIcon };
