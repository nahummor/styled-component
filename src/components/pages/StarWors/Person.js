import React from 'react';
import { Card } from '../../common/Card';

const Person = ({ person }) => {
   return (
      <Card
         align={'left'}
         title={person.name}
         subTitle={'Hair color - ' + person.hair_color}
         width={'30rem'}
         elevation={5}>
         <p>Gender - {person.gender}</p>
         <p>Birth year - {person.birth_year}</p>
      </Card>
   );
};
export default Person;
