import Link from 'next/link';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-3 border border-b'>
      <Link href={'/'} className='font-bold text-xl tracking-wide'>
        Task.
      </Link>
      <nav className='inline-flex items-center gap-4 py-3'>
        <Button variant={'secondary'}>Login</Button>
        <Button>Sign up</Button>
      </nav>
    </div>
  );
};

export default Navbar;
