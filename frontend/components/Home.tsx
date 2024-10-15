import Link from 'next/link';
import { Button } from './ui/button';

const HomePage = () => {
  return (
    <div>
      <div className='flex flex-col gap-1 mb-2'>
        <label htmlFor='email' className='text-sm font-bold mb-1'>
          User Name:
        </label>
        <input
          type='text'
          name='user_name'
          placeholder='John Doe'
          className='px-2 py-1 items-center bg-secondary rounded-sm w-full pr-10'
        />
      </div>
      <div className='flex flex-col gap-1 mb-2'>
        <label htmlFor='email' className='text-sm font-bold mb-1 mt-2'>
          Email:
        </label>
        <input
          type='text'
          name='email'
          placeholder='youremail@mail.com'
          className='px-2 py-1 items-center bg-secondary rounded-sm w-full pr-10'
        />
      </div>
      <div className='flex flex-col gap-1 mb-4'>
        <label htmlFor='password' className='text-sm font-bold mb-1 mt-2'>
          Password:
        </label>
        <input
          type='text'
          name='password'
          placeholder='enter.....'
          className='px-2 py-1 items-center gap-3 bg-secondary rounded-sm pr-10'
        />
      </div>
      <div>
        {' '}
        <Button className='px-8 mt-2 mr-5'>
          <Link href={'/dashboard'}>Sign up</Link>
        </Button>
        <Button variant={'ghost'} className='px-8'>
          {' '}
          <Link href={'/dashboard'}>Login</Link>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
