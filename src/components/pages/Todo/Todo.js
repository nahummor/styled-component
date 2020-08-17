import React from 'react';
import { Card } from '../../common';

const Todo = ({ todo }) => {
   return (
      <Card
         align={'right'}
         title={todo.todo}
         subTitle={todo.userName}
         width={'30rem'}
         elevation={5}>
         <button>Edit</button>
         <button>Delete</button>
      </Card>
   );
};

export default Todo;
