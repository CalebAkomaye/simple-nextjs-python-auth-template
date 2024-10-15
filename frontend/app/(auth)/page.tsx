import HomePage from '@/components/Home';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className='grid place-content-center py-24 '>
        <div className='border rounded-md px-8 py-4'>
          <div>
            <h1 className='font-bold text-3xl mb-1'>
              Task & Goals, <br />
              To make your every day.
            </h1>
            <p className='max-w-xl text-sm text-zinc-800 mb-4'>
              Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit.
              Cumque itaque maiores?
            </p>
          </div>
          <HomePage />
        </div>
      </main>
    </div>
  );
}
