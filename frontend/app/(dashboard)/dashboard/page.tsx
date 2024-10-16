'use client';
import React, { useEffect, useState } from 'react';
import TodoList from '../_components/todo-list';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:5000/api/tasks`);
        const result = await res.json();
        console.log(result);
        setData(result);
      } catch (error: unknown) {
        // Check if the error is an instance of the Error object.
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unexpected error occurred');
        }
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading tasks: {error}</div>;
  }

  return (
    <div className='place-content-center px-24'>
      <div className='mb-8 py-4'>
        <h1 className='font-bold text-3xl tracking-wider mt-2'>
          Good Morning, Caleb🥟
        </h1>
        <span>Today, Tue 15 October 2024</span>
      </div>
      <TodoList data={data} />
    </div>
  );
};

export default Dashboard;
