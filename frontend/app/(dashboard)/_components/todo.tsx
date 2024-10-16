import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';

// Define the props type for the Todo component
type TodoProps = {
  title: string;
  description: string;
};

const Todo: React.FC<TodoProps> = ({ title, description }) => {
  return (
    <div className='items-top flex space-x-2 px-3 py-2 bg-primary-foreground border rounded-sm'>
      <Checkbox id='terms1' />
      <div className='grid gap-1.5 leading-none'>
        <label
          htmlFor='terms1'
          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          {title}
        </label>
        {/* You can add description if you want to display it */}
        {description && (
          <p className='text-xs text-gray-500 leading-snug'>{description}</p>
        )}
      </div>
    </div>
  );
};

export default Todo;
