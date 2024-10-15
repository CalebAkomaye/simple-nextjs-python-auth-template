import { ModeToggle } from '@/components/theme-toggle';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-3 border border-b'>
      <Link href={'/'} className='font-bold text-xl tracking-wide'>
        Task.
      </Link>
      <nav className='inline-flex items-center gap-4 py-3'>
        <ModeToggle />
      </nav>
    </div>
  );
};

export default Navbar;
