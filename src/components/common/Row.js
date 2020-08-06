import styled from 'styled-components';

const Row = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

   @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-evenly;
   }
`;

export { Row };
