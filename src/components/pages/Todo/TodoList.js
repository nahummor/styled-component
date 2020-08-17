import React from 'react';
import { useQuery } from 'react-query';

import Todo from './Todo';

const getTodoList = async () => {
   const response = await fetch('http://localhost:4000/api/todo', {
      method: 'GET',
   });
   return response.json();
};

const TodoList = () => {
   const { data, status } = useQuery('todoList', getTodoList);

   return (
      <div>
         {status === 'loading' && <div>Loading Data....</div>}
         {status === 'error' && <div>Error fetch data</div>}
         {status === 'success' && (
            <div>
               {data.todoList.map((todo, index) => {
                  return <Todo key={index} todo={todo} />;
               })}
            </div>
         )}
      </div>
   );
};

export default TodoList;
