import React from 'react';
import { Card } from '../../common/Card';

const Order = ({ order }) => {
   return (
      <Card
         align={'right'}
         title={order.job}
         subTitle={'חברה - ' + order.company}
         width={'25rem'}
         elevation={5}>
         <p>מספר הזמנה - {order.orderNumber}</p>
         <p>קבלן מבצע - {order.doneByConstructor}</p>
         <p>סכום - {order.sum}</p>
      </Card>
   );
};

export default Order;
