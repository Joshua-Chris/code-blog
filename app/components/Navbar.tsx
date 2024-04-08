'use client';
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white dark:bg-[#020817] shadow-md z-10 px-4 py-5">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link href="/" className="font-bold text-xl md:text-2xl">
          JC-CodeBlog
        </Link>

        <div className="flex flex-row items-center space-x-4">
          <Link
            href="https://www.linkedin.com/in/joshua-chris-ofurunna/"
            className="text-sm"
            target="_blank"
          >
            The Author
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
