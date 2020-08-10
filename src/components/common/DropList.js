import React, { useState, useCallback, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Input, DropDownIcon } from './';

const TransparentButton = styled.button`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   height: 100%;
   width: 100%;
   cursor: default;
   opacity: 0;
`;

const InputRow = styled.div`
   position: relative;
   display: flex;
   flex-direction: row;
   justify-content: center;
   gap: 0.5rem;
`;

const DropButton = styled.button`
   background: #00a4e4;
   border-radius: 4px;
   width: 20%;
   height: 40px;
   cursor: pointer;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   outline: none;
   border: none;

   transition-property: background;
   transition-duration: 200ms;
   transition-timing-function: linear;

   &:hover {
      background: #63c7ee;
   }
`;

const Title = styled.span`
   font-size: 1rem;
   font-weight: 600;
`;

const ListItem = styled.li`
   margin-right: 0.5rem;
   margin-left: 0.5rem;
   padding-right: 0.5rem;
   font-weight: 600;
   border-radius: 0.5rem;
   cursor: pointer;
   list-style-type: none;

   &:hover {
      color: white;
      background-color: #a0aec0;
   }
`;

const openListContainer = ({ openList }) => {
   if (openList) {
      return css`
         position: absolute;
         right: 0;
         top: 2.5rem;
         background-color: #edf2f7;
         width: 10rem;
         border-radius: 0.5rem;
         padding: 0.25rem;
         box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
         z-index: 10;
      `;
   } else {
      return css`
         display: none;
      `;
   }
};

const ListContainer = styled.div`
   ${openListContainer}

   opacity: ${(props) => (props.showList ? 1 : 0)};
   transition-property: opacity;
   transition-duration: 200ms;
   transition-timing-function: linear;
`;

const DropList = ({
   title,
   data,
   defaultValue,
   placeHolder,
   onItemChange,
   inputRef,
   inputName,
}) => {
   const [openList, setOpenList] = useState(false);
   const [selectedValue, setSelectedValue] = useState(defaultValue);
   const [listItems, setListItems] = useState([]);
   const [openListWithOpacity, setOpenListWithOpacity] = useState(false);

   const getLinks = useCallback(() => {
      return data.map((item, index) => <ListItem key={index}>{item}</ListItem>);
   }, [data]);

   useEffect(() => {
      setListItems(getLinks());
   }, [getLinks]);

   const onCancelMenuHandler = () => {
      setOpenListWithOpacity(false);
      setTimeout(() => {
         setOpenList(false);
      }, 200);
      document.removeEventListener('keydown', onKeyDownHandler);
   };

   const onMenuClickHandler = () => {
      setOpenList(true);
      setTimeout(() => {
         setOpenListWithOpacity(true);
      }, 2);
      document.addEventListener('keydown', onKeyDownHandler);
   };

   const onKeyDownHandler = (event) => {
      //   console.log('key: ', event.key, event.which);
      // ESC = 27
      if (event.which === 27) {
         setOpenListWithOpacity(false);
         setTimeout(() => {
            setOpenList(false);
         }, 200);
         document.removeEventListener('keydown', onKeyDownHandler);
      }
   };

   const onItemClickHandler = (event) => {
      setSelectedValue(event.target.innerText);
      onItemChange(event.target.innerText);
      setOpenListWithOpacity(false);
      setTimeout(() => {
         setOpenList(false);
      }, 200);
      document.removeEventListener('keydown', onKeyDownHandler);
   };

   return (
      <InputRow>
         <DropButton
            type='button'
            onClick={onMenuClickHandler}
            onKeyUp={(e) => {
               // space = 32
               if (e.which === 32) {
                  // prevent space click the button
                  e.preventDefault();
               }
            }}>
            <Title>{title}</Title>
            <DropDownIcon />
         </DropButton>
         <Input
            ref={inputRef}
            name={inputName}
            type='text'
            value={selectedValue}
            readOnly
            placeholder={placeHolder}
         />

         {openList ? (
            <TransparentButton
               type='button'
               onClick={onCancelMenuHandler}
               tabIndex='-1'></TransparentButton>
         ) : null}

         <ListContainer openList={openList} showList={openListWithOpacity}>
            <ul
               onClick={onItemClickHandler}
               style={{
                  padding: 0,
                  marginTop: '0.5rem',
                  marginBottom: '0.5rem',
               }}>
               {listItems}
            </ul>
         </ListContainer>
      </InputRow>
   );
};

export { DropList };
