import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background text-gray-300 text-sm py-4 border-t w-full mt-10">
      <div className="container mx-auto px-4 text-center">

        
        <p className="text-gray-300">Copyright &copy; 2025 Apple Inc. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="#" className="hover:underline">Privacy Policy</Link>
          <span>|</span>
          <Link href="#" className="hover:underline">Terms of Use</Link>
          <span>|</span>
          <Link href="#" className="hover:underline">Sales and Refunds</Link>
          <span>|</span>
          <Link href="#" className="hover:underline">Legal</Link>
          <span>|</span>
          <Link href="#" className="hover:underline">Site Map</Link>
        </div>
      </div>
    </footer>
  );
}
