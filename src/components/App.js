import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
   color: indigo;
   font-size: 1.5em;
   text-align: center;
   background-color: lightgray;
   padding: 1rem;
`;

function App() {
   return (
      <div>
         <H1>React styled component</H1>
      </div>
   );
}

export default App;
