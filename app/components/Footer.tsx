import Link from 'next/link';

export default function Footer() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-5xl mx-auto px-4 py-5">
      <Link href="/" className="font-bold text-lg">
        JC-CodeBlog
      </Link>

      <div className="flex flex-row items-center space-x-4">
        <Link
          href="https://www.linkedin.com/in/joshua-chris-ofurunna/"
          className="text-sm"
        >
          Connect
        </Link>
      </div>
    </nav>
  );
}
