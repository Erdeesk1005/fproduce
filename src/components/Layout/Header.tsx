import Link from 'next/link';
import Language from '../locale/language';
import Image from 'next/image';

export default function Header() {


  return (
    <header>
      <div className='bg-white text-black text-lg font-bold w-full px-4'>
        <nav className='flex items-center gap-10 justify-center h-20'>
          <Link href='/' className='hover:underline'><Image src="/logo.png" alt="Logo" width={60} height={22} /></Link>
          <Link href='/about' className='hover:underline'>About</Link>
          <Link href='/contact' className='hover:underline'>Contact</Link>
          <Link href='/blog' className='hover:underline'>Blog</Link>
          <Language />
        </nav>
      </div>

    </header>
  );
}
