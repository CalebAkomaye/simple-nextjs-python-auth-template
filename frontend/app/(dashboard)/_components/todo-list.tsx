import React from 'react';
import Todo from './todo';

// Define the proper TypeScript interface for a Todo item
interface TodoItem {
  id: number;
  title: string;
  description: string;
  due_date: string;
  is_completed: boolean;
}

type TodoListProps = {
  data: TodoItem[]; // data is an array of TodoItem objects
};

const TodoList: React.FC<TodoListProps> = ({ data }) => {
  return (
    <div className='flex flex-col gap-2'>
      {data.map((item) => (
        <Todo key={item.id} title={item.title} description={item.description} />
      ))}
    </div>
  );
};

export default TodoList;
