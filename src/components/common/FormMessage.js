import styled from 'styled-components';

const FormMessage = styled.div`
   height: 1.5rem;
   padding-right: 0.5rem;

   > p {
      color: ${(props) => (props.type === 'info' ? '#718096' : '#c53030')};
      margin: 0;
      font-weight: 600;
      font-size: 0.8rem;
   }
`;

export { FormMessage };
