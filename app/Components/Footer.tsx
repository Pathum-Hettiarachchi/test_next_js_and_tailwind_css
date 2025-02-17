import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm py-4 border-t">
      <div className="container mx-auto px-4 text-center">
        <p>
          More ways to shop: <Link href="#" className="text-blue-600 hover:underline">Find an Apple Store</Link> or <Link href="#" className="text-blue-600 hover:underline">other retailer</Link> near you. Or call <Link href="#" className="text-blue-600 hover:underline">1-800-MY-APPLE</Link>.
        </p>
        <hr className="my-2 border-gray-300" />
        <p className="text-gray-500">Copyright &copy; 2025 Apple Inc. All rights reserved.</p>
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
        <p className="mt-2">United States</p>
      </div>
    </footer>
  );
}
