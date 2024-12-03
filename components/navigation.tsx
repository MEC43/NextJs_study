'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navigation() {
  const path = usePathname();
  console.log('현재경로', path);

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path === '/' ? '✨' : ''}
        </li>
        <li>
          <Link href="about-us">About Us</Link>
          {path === '/about-us' ? '✨' : ''}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
