import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import LightTheme from './common/themes/light';
import DarkTheme from './common/themes/dark';

const GlobalStyle = createGlobalStyle`
    body{
        background: ${(props) => props.theme.bodyBackground};
        max-height: 100vh;
        margin: 0;
        color: ${(props) => props.theme.bodyFontColor};
        font-family: 'Kaushan Script';
    }
`;

function App() {
   const [theme, setTheme] = useState(LightTheme);

   return (
      // <ThemeProvider theme={theme}>
      <ThemeProvider
         theme={{
            ...theme,
            setTheme: () => {
               setTheme((prevState) =>
                  prevState.id === 'light' ? DarkTheme : LightTheme
               );
            },
         }}>
         <GlobalStyle />

         <BrowserRouter>
            <Switch>
               <Route path='/login'>
                  <Login />
               </Route>
               <Route path='/'>
                  <Home />
               </Route>
            </Switch>
         </BrowserRouter>
      </ThemeProvider>
   );
}

export default App;
