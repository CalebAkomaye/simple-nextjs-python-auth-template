import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';

const Todo = () => {
  return (
    <div className='items-top flex space-x-2 px-3 py-2 bg-slate-100 border rounded-sm'>
      <Checkbox id='terms1' />
      <div className='grid gap-1.5 leading-none'>
        <label
          htmlFor='terms1'
          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          Accept terms and conditions
        </label>
      </div>
    </div>
  );
};

export default Todo;
