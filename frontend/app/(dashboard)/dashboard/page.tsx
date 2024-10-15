import React from 'react';
import TodoList from '../_components/todo-list';

const Dashboard = () => {
  return (
    <div className='place-content-center px-24'>
      <div className='mb-8 py-4'>
        <h1>Good Morning, Caleb🥟</h1>
        <span>Today, Tue 15 October 2023</span>
      </div>
      <TodoList />{' '}
    </div>
  );
};

export default Dashboard;
