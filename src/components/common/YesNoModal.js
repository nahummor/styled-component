import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BackDropContainer = styled.div`
   position: fixed;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   height: 100%;
   width: 100%;
   z-index: 50;
   display: ${(props) => (props.show ? 'block' : 'none')};
`;

const BackDrop = styled.div`
   position: fixed;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   height: 100%;
   width: 100%;
   background-color: #000;

   opacity: ${(props) => (props.openModal ? 0.75 : 0)};
   transition-property: opacity;
   transition-duration: 300ms;
   transition-timing-function: linear;
`;

const MessageBox = styled.div`
   position: fixed;
   top: 50%;
   left: 50%;
   margin-top: -7rem;
   margin-left: -43%;

   background-color: white;
   padding: 0.5rem;
   width: 83.333333%;
   height: 12rem;
   border-radius: 4px;

   opacity: ${(props) => (props.openModal ? 1 : 0)};
   transition-property: opacity;
   transition-duration: 300ms;
   transition-timing-function: linear;

   @media (min-width: 768px) {
      /* width: 33%;
      margin-left: -17%; */
      width: 25%;
      margin-left: -13%;
   }

   .buttons-row {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 2rem;
      margin-top: 3rem;
   }
`;

const MessageTitle = styled.p`
   text-align: center;
   font-size: 1.5rem;
   font-weight: 600;
   font-family: Rubik;
   color: black;
`;

const MsgButton = styled.button`
   box-shadow: 0px 0px 0px 2px #9fb4f2;
   background: linear-gradient(to bottom, #7892c2 5%, #476e9e 100%);
   background-color: #7892c2;
   border-radius: 10px;
   border: 1px solid #4e6096;
   display: inline-block;
   cursor: pointer;
   color: #ffffff;
   font-family: Arial;
   font-size: 19px;
   padding: 10px 37px;
   text-decoration: none;
   text-shadow: 0px 1px 0px #283966;
   outline: none;

   &:hover {
      background: linear-gradient(to bottom, #476e9e 5%, #7892c2 100%);
      background-color: #476e9e;
   }

   &:active {
      position: relative;
      top: 1px;
   }
`;

const YesNoModal = ({ show, onClose, onYes, message }) => {
   const [openModal, setOpenModal] = useState(false);

   useEffect(() => {
      setTimeout(() => {
         setOpenModal(show);
      }, 10);
   }, [show]);

   const onKeyDownHandler = (event) => {
      //   console.log('key: ', event.key, event.which);
      // ESC = 27
      if (event.which === 27) {
         setOpenModal(false);

         setTimeout(() => {
            onClose();
            document.removeEventListener('keydown', onKeyDownHandler);
         }, 300);
      }
   };

   document.addEventListener('keydown', onKeyDownHandler);

   useEffect(() => {
      return () => {
         document.removeEventListener('keydown', onKeyDownHandler);
         console.log('remove keydown event');
      };
      // eslint-disable-next-line
   }, []);

   const onYesHandler = () => {
      setOpenModal(false);

      setTimeout(() => {
         onYes();
         onClose();
      }, 300);
   };

   const onCloseModal = () => {
      setOpenModal(false);

      setTimeout(() => {
         onClose();
         document.removeEventListener('keydown', onKeyDownHandler);
      }, 300);
   };

   return (
      <BackDropContainer show={show}>
         <BackDrop openModal={openModal} onClick={onCloseModal}></BackDrop>
         <MessageBox openModal={openModal}>
            <MessageTitle>{'? ' + message}</MessageTitle>
            <div className='buttons-row'>
               <MsgButton onClick={onYesHandler}>כן</MsgButton>
               <MsgButton onClick={onCloseModal}>לא</MsgButton>
            </div>
         </MessageBox>
      </BackDropContainer>
   );
};

export { YesNoModal };
