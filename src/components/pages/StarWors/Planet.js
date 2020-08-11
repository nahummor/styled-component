import React from 'react';
import { Card } from '../../common/Card';

const Planet = ({ planet }) => {
   return (
      <Card
         align={'left'}
         title={planet.name}
         subTitle={'Climate - ' + planet.climate}
         width={'30rem'}
         elevation={5}>
         <p>Population - {planet.population}</p>
         <p>Terrain - {planet.terrain}</p>
      </Card>
   );
};
export default Planet;
