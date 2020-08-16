import React, { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Link as ReactRouterDomLink, useLocation } from 'react-router-dom';
import { Toggle } from './';

const HeaderWrapper = styled.header`
   height: 60px;
   width: 100%;
   box-sizing: border-box;
   display: flex;
   padding: 0 16px;
   position: fixed;
   top: 0;
   background-image: linear-gradient(
      to right,
      ${(props) => props.theme.primaryColor},
      ${(props) => props.theme.secondaryColor}
   );
   border-bottom: 3px solid ${(props) => props.theme.secondaryColor};
`;

const Menu = styled.nav`
   display: ${(props) => (props.open ? 'block' : 'none')};
   font-family: 'Open Sans';
   position: absolute;
   width: 100%;
   top: 60px;
   left: 0;
   padding: 8px;
   box-sizing: border-box;
   border-bottom: 3px solid ${(props) => props.theme.secondaryColor};
   background: ${(props) => props.theme.bodyBackground};

   @media (min-width: 768px) {
      display: flex;
      margin: auto 0 auto auto;
      background: none;
      left: initial;
      top: initial;
      position: relative;
      width: initial;
      border-bottom: none;
   }
`;

const Link = ({ isActive, children, ...props }) => {
   return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

const StyledLink = styled(Link)`
   padding: 4px 8px;
   display: block;
   text-align: center;
   box-sizing: border-box;
   margin: auto 0;
   color: ${(props) => props.theme.bodyFontColor};
   font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
`;

const MobileMenuIcon = styled.div`
   margin: auto 0 auto auto;
   width: 25px;
   min-width: 25px;
   padding: 5px;

   > div {
      height: 3px;
      background: ${(props) => props.theme.bodyFontColor};
      margin: 5px 0;
      width: 100%initial;
   }

   @media (min-width: 768px) {
      display: none;
   }
`;

export function Header() {
   const { pathname } = useLocation();
   const [menuOpen, setMenuOpen] = useState(false);
   const { id, setTheme } = useContext(ThemeContext);

   return (
      <div>
         <HeaderWrapper>
            <MobileMenuIcon
               onClick={() => setMenuOpen((oldValue) => !oldValue)}>
               <div />
               <div />
               <div />
            </MobileMenuIcon>
            <Menu open={menuOpen}>
               <StyledLink to='/' isActive={pathname === '/'}>
                  Home
               </StyledLink>
               <StyledLink to='/login' isActive={pathname === '/login'}>
                  Login
               </StyledLink>
               <StyledLink to='/addPerson' isActive={pathname === '/addPerson'}>
                  Add Person
               </StyledLink>
               <StyledLink to='/people' isActive={pathname === '/people'}>
                  People - Star Wars
               </StyledLink>
               <StyledLink to='/planets' isActive={pathname === '/planets'}>
                  Planets - Star Wars
               </StyledLink>
               <StyledLink to='/orders' isActive={pathname === '/orders'}>
                  Orders
               </StyledLink>
               <StyledLink to='/todoMain' isActive={pathname === '/todoMain'}>
                  ToDo
               </StyledLink>
               <Toggle isActive={id === 'dark'} onToggle={setTheme} />
            </Menu>
         </HeaderWrapper>
      </div>
   );
}
